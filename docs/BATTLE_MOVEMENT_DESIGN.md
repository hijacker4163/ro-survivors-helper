# ⚔️ RO Survivors 戰鬥自動走位與拾荒尋寶系統技術調研與設計規格書
> **RO Survivors In-Battle Autonomous Movement & Smart Auto-Looting Architecture**  
> 建立日期：2026-11-18  
> 專案路徑：`/Users/marslin/Documents/GitHub/ro-survivors-helper`  
> 狀態：技術調研完成 / 待後續排程實作

---

## 📑 目錄 (Table of Contents)
1. [系統概述與需求背景](#1-系統概述與需求背景)
2. [遊戲核心引擎逆向調研 (Reverse-Engineering Findings)](#2-遊戲核心引擎逆向調研)
   - [2.1 戰鬥核心實例與生命週期](#21-戰鬥核心實例與生命週期)
   - [2.2 原生三大移動控制通道](#22-原生三大移動控制通道)
   - [2.3 地面物品與掉落物清單 (this.pickups)](#23-地面物品與掉落物清單)
   - [2.4 碰撞偵測、網格與邊界防卡死 (this.walk & this.bounds)](#24-碰撞偵測網格與邊界防卡死)
   - [2.5 原地靜止與移動回血機制 (this.stillTime)](#25-原地靜止與移動回血機制)
3. [自動走位策略演算法設計 (Movement Strategies)](#3-自動走位策略演算法設計)
   - [策略 A：智慧拾荒磁鐵模式 (Smart Loot & Magnet Collector)](#策略-a智慧拾荒磁鐵模式-smart-loot--magnet-collector)
   - [策略 B：戰鬥圓周風箏走位 (Orbital Kiting & Circle Strafing)](#策略-b戰鬥圓周風箏走位-orbital-kiting--circle-strafing)
   - [策略 C：緊急吃肉求生機制 (Emergency Meat Seeking)](#策略-c緊急吃肉求生機制-emergency-meat-seeking)
   - [策略 D：動靜結合最佳化機制 (Hybrid Still/Move Optimization)](#策略-d動靜結合最佳化機制-hybrid-stillmove-optimization)
4. [免侵入式技術掛鉤架構 (Zero-Invasive Hooking Architecture)](#4-免侵入式技術掛鉤架構)
5. [介面設定與使用者控制規劃 (UI & Configuration)](#5-介面設定與使用者控制規劃)
6. [後續開發排程與檢核表 (Roadmap & Checklist)](#6-後續開發排程與檢核表)

---

## 1. 系統概述與需求背景

目前輔助助手（RO Survivors Helper）已實現關卡道具配置、卡片特權自動化、房間重組與背景 60 FPS 推進等全自動功能。然而，在戰鬥進行中，玩家角色目前處於「原地靜止站立」狀態，存在以下痛點：
1. **地面寶物遺漏**：首領或菁英怪擊殺後掉落的「金色寶箱 (Chest)」、「怪物卡片 (Card)」、「未鑑定裝備 (Loot)」與「寵物蛋 (Egg)」，若未走過去接觸碰撞，無法觸發結算與拾取。
2. **經驗水晶浪費**：外圍死掉的怪物掉落大量藍/黃/紅經驗水晶，角色站立不動無法吸收，導致升級節奏變慢。
3. **生存機動性低**：部分高難度關卡若有定點轟炸或怪物近身圍攻，適當的「圓周風箏走位 (Kiting)」能顯著提升存活率。

本調研旨在探索如何在戰鬥中注入自動走位邏輯，達到**「自動走位撿寶、自主繞圈閃避、絕不撞牆卡死」**的高效掛機體驗。

---

## 2. 遊戲核心引擎逆向調研

經對遊戲核心打包腳本 [`main.js`](../main.js) 深入分析，遊戲底層完全由 PixiJS 與客製化 2.5D/3D 戰鬥引擎組成，核心發現如下：

### 2.1 戰鬥核心實例與生命週期
- 戰鬥場景類別為 `class wn`（建構子簽名：`constructor(app, look, equip, stats, script, stageId)`）。
- 戰鬥全局變數為 `D`（即 `D = new rs(...)`，其中 `rs = wn`）。
- 戰鬥狀態：`this.state`（`"playing"` 戰鬥中、`"paused"` 暫停、`"levelup"` 選卡中、`"over"` 結束）。
- 玩家實體：`this.player`（具備 `x`, `y`, `moving`, `sprite`, `view`）。

### 2.2 原生三大移動控制通道
在 `wn.prototype.update`（每幀物理更新迴圈中，約 line 459943 處），遊戲依序檢查以下三種位移輸入：

```javascript
// 遊戲原生位移更新邏輯摘錄：
let c = 0, u = 0;
// 1. 鍵盤輸入
(this.keys.has("a") || this.keys.has("arrowleft")) && (c -= 1);
(this.keys.has("d") || this.keys.has("arrowright")) && (c += 1);
(this.keys.has("w") || this.keys.has("arrowup")) && (u -= 1);
(this.keys.has("s") || this.keys.has("arrowdown")) && (u += 1);

const h = we(c, u); // we 為 Math.hypot(c, u)
// 2. 虛擬搖桿與觸控向量
const p = this.touchMove.x || this.touchMove.y ? this.touchMove : ct.move;
const f = we(p.x, p.y);

if (h > 0) [c, u] = ch(c / h, u / h);
else if (f > 0) {
    const W = Math.min(1, f * 1.3) / f;
    [c, u] = ch(p.x * W, p.y * W);
}

// 3. 原生尋路路徑點佇列 (Waypoints Queue)
if (n) c = 0, u = 0, this.movePath = null;
else if (h > 0 || f > 0) this.movePath = null;
else if (this.movePath) {
    const W = this.player;
    let V = this.movePath[0];
    for (; V && we(V.x - W.x, V.y - W.y) < 6; ) {
        this.movePath.shift();
        V = this.movePath[0];
    }
    if (!V) this.movePath = null;
    else {
        const G = we(V.x - W.x, V.y - W.y);
        c = (V.x - W.x) / G;
        u = (V.y - W.y) / G;
    }
}
```

> **關鍵結論**：
> 1. **`this.touchMove = { x, y }`**：支援 **-1.0 ~ +1.0 的連續向量**，可直接控制角色進行任意角度的平滑圓周運動或轉向。
> 2. **`this.movePath = [ {x, y}, ... ]`**：只要將目標點陣列寫入 `this.movePath`，遊戲主迴圈**自帶平滑巡航功能**，到達路徑點距離 `< 6px` 時自動前進下一點，抵達終點後自動清空！

### 2.3 地面物品與掉落物清單 (`this.pickups`)
戰鬥中所有掉落地面的物件均儲存於 `this.pickups`（陣列），且每個物件具備明確屬性：
- 座標：`item.x`, `item.y`
- 狀態：`!item.dead`
- 種類識別碼 (`item.kind`)：
  - 🎁 `chest`：寶箱（開啟全隊選卡與分寶）
  - 🃏 `card` / `loot` / `egg`：神裝、卡片、寵物蛋
  - 🧲 `magnet`：全圖磁鐵（**碰觸後全地圖所有經驗寶石直接吸附飛來，收益最高**）
  - 🥩 `meat`：補血肉塊（恢復玩家生命值）
  - 💎 `gem_blue` / `gem_yellow` / `gem_red`：藍/黃/紅三色經驗水晶
  - ❓ `mystery`：神秘掉落事件

### 2.4 碰撞偵測、網格與邊界防卡死 (`this.walk` & `this.bounds`)
1. **自動沿牆滑動 (`this.walk.resolve`)**：
   - 遊戲在更新角色新座標時，會執行：
     `[y.x, y.y] = this.walk ? this.walk.resolve(y.x, y.y, m, b) : [m, b];`
   - **`resolve(oldX, oldY, newX, newY)` 的特點是切線滑行**：若前進方向有牆壁，它會自動將向量分解為沿著牆面滑動（`walkable(newX, oldY)` 或 `walkable(oldX, newY)`），**因此正常走位不會卡死在牆壁直角中**！
2. **內建 A* 尋路演算法 (`this.walk.route`)**：
   - 地圖內建完備的 A* 導航網格（`class tS`），可調用 `this.walk.route(startX, startY, endX, endY)`，自動避開障礙物輸出平滑的路徑點陣列。
3. **世界絕對邊界 (`this.bounds`)**：
   - 含有 `x0`, `x1`, `y0`, `y1`。可作為防護罩邊界，當角色距離邊緣小於設定閥值（例如 120px）時，強制疊加「向心引力向量」。

### 2.5 原地靜止與移動回血機制 (`this.stillTime`)
遊戲具有靜止累積計時器：
`this.stillTime = y.moving ? 0 : this.stillTime + e;`
`M = (this.stats.regen + this.buffValue("regen") + (this.stillTime > .5 ? this.stats.regenStill : this.stats.regenMoving));`
- 當角色站立不動超過 0.5 秒時，會享有額外的**原地靜止生命恢復加成 (`regenStill`)**。
- 若持續狂奔，則只套用 `regenMoving`。
- **設計啟發**：戰鬥走位不宜「盲目無休止狂奔」，而應採取「**智慧撿寶、撿完歸位、適度定點蓄力**」的動靜平衡策略。

---

## 3. 自動走位策略演算法設計

基於以上調研，規劃出四大模組化走位策略：

```
                    ┌──────────────────────────┐
                    │    戰鬥自動走位決策大腦    │
                    └─────────────┬────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  血量緊急求生評估  │    │  地面高價寶物掃描  │    │  無寶狀態巡航風箏  │
│  (HP < 35% 吃肉) │    │(Chest/Card/Magnet)│    │(Orbital Strafe)  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

### 策略 A：智慧拾荒磁鐵模式 (Smart Loot & Magnet Collector)
1. **優先級評分排序**：
   - 優先級 1（最高）：`magnet`（磁鐵，一撿等同全圖清空）
   - 優先級 2：`chest`（寶箱）
   - 優先級 3：`card` / `loot` / `egg`（卡片、神裝）
   - 優先級 4：低血量時的 `meat`（肉塊）
   - 優先級 5：距離玩家半徑 350px 內、密集度高的經驗水晶群
2. **路徑生成**：
   - 當發現目標物品時，調用 `this.walk.route(player.x, player.y, item.x, item.y)` 或直接指派 `this.movePath = [ { x: item.x, y: item.y } ]`。
3. **完成後回航**：
   - 撿完場上所有重要寶物後，自動導航回安全中心點（如開局出生點或隊友身邊），重新享受 `regenStill` 原地回血。

### 策略 B：戰鬥圓周風箏走位 (Orbital Kiting & Circle Strafing)
當地上沒有特殊寶物時，角色可執行圓周風箏走位避免被怪群定點包圍：
1. **圓周運動公式**：
   - 設定走位中心點 $(C_x, C_y)$ 與半徑 $R \approx 180 \sim 240\text{ px}$。
   - 每幀累加角度 $\theta = \theta + \omega \cdot \Delta t$。
   - 計算目標點：$P_{\text{target}} = (C_x + R \cos\theta, C_y + R \sin\theta)$。
   - 產生推力向量：$\vec{V} = \text{normalize}(P_{\text{target}} - P_{\text{player}})$，寫入 `this.touchMove`。
2. **防撞牆與反轉演算法**：
   - 前瞻檢測：利用 `this.walk.walkable(P_{\text{player}} + \vec{V} \times 40)` 預測前方 40px 是否為障礙。
   - 若前方為障礙物或抵達 `this.bounds` 邊緣，將角速度 $\omega$ 取負值（$\omega = -\omega$），角色立即流暢反向旋轉，絕不卡牆！

### 策略 C：緊急吃肉求生機制 (Emergency Meat Seeking)
- 當 `this.hp / this.stats.maxHp < 0.35` 時，中斷常規巡航。
- 搜尋 `this.pickups` 中距離最近的 `kind === "meat"`，強制插單至最高優先級，導航前往拾取回血。

### 策略 D：動靜結合最佳化機制 (Hybrid Still/Move Optimization)
- **閒置冷卻期**：若連續移動超過 8 秒且周遭安全，主動減速或停頓 1.5 秒以觸發 `regenStill` 原地生命恢復。
- 保證在保持高機動性的同時，維持最穩健的續航力。

---

## 4. 免侵入式技術掛鉤架構

為嚴格遵守使用者的「程式碼完整性原則」，絕不改動遊戲原生 `main.js`，全部邏輯透過輔助腳本於 `document-start` 階段實施物件代理攔截：

```javascript
// 免侵入戰鬥實例捕獲架構示意：
let activeBattleGame = null;

const originalDefProp = Object.defineProperty;
Object.defineProperty = function (obj, prop, descriptor) {
  // 捕捉 wn 實例初始化時所定義之核心屬性
  if (prop === 'pickups' && obj && 'enemies' in obj && 'touchMove' in obj) {
    activeBattleGame = obj;
    window.__roBattleGame = obj;
    console.log('[RO Helper] 戰鬥引擎實例成功掛載！', obj);
  }
  return originalDefProp.apply(this, arguments);
};
```

---

## 5. 介面設定與使用者控制規劃

在懸浮控制面板的「戰鬥輔助」分組內，新增深藍微透卡片選項：
- **🏃 戰鬥自動走位**：主開關（預設關閉或開啟）。
  - **模式選擇**：
    - 💰 智慧拾荒撿寶（有寶物才走過去撿，沒寶物定點防守）
    - 🌀 圓周風箏巡航（持續繞圈走位，路上自動吸寶）
    - 🛡️ 定點防守求生（僅在血量過低時去撿肉塊）
  - **巡航半徑調整**：滑桿（120px ~ 300px）。

---

## 6. 後續開發排程與檢核表

- [ ] **階段一 (Phase 1)**：在測試版本中掛載 `window.__roBattleGame` 實例監聽器，驗證戰鬥啟動與銷毀之穩定性。
- [ ] **階段二 (Phase 2)**：實作 `pickups` 掃描器，針對寶箱 (`chest`) 與磁鐵 (`magnet`) 進行目標追蹤與拾取驗證。
- [ ] **階段三 (Phase 3)**：實作圓周向量計算器與 `this.walk.resolve` / `this.bounds` 邊界防撞保護。
- [ ] **階段四 (Phase 4)**：懸浮面板 UI 整合，支援繁中與英文雙語切換。
- [ ] **階段五 (Phase 5)**：使用者實機測試、調校走位手感與版本號演進（`2.0.2-1` -> 正式定版）。

---
*(本文件已儲存於版本庫專案中，供隨時查閱與實作參考)*
