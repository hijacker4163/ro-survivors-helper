# ⚔️ RO Survivors Helper (RO 生存者智能輔助助手)

<div align="center">

<img src="logo.webp" alt="Martian Rabbit Logo" width="160" style="border-radius: 20px; box-shadow: 0 8px 24px rgba(0,0,0,0.3); margin-bottom: 14px;" />

[![Version](https://img.shields.io/badge/Version-2.0.4--3-blue.svg?style=for-the-badge)](https://github.com/hijacker4163/ro-survivors-helper)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Buy%20Me%20a%20Coffee-ff5f5f.svg?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/martianrabbit)

**🐰 An advanced Quality-of-Life (QoL) and automation helper for *RO Survivors*!**  
**專為《RO Survivors (仙境傳說生存者)》打造的全功能生活品質改善 (QoL) 與自動化輔助腳本！**

[English](#english) | [繁體中文](#繁體中文) | [更新日誌 / Changelog](CHANGELOG.md) | [免責聲明 / Disclaimer](#-免責聲明--disclaimer)

</div>

---

<a name="english"></a>
## 🌐 English

### 📖 Overview
**RO Survivors Helper** is a lightweight, high-performance browser userscript / console tool designed to provide Quality-of-Life (QoL) automations for the fan-made AI game *RO Survivors*. It handles repetitive lobby navigation, party coordination, intelligent card/skill selection, item/deity configuration, and auto-settlement.

### ✨ Key Features
- 🌐 **Bilingual (ZH/EN) Language Switching**: Seamless one-click toggling between Traditional Chinese and English directly from the floating header (Default: Traditional Chinese), with full UI and modal localization.
- 🏮 **Automated Festival Loop (Louyang)**: Built-in safe waypoint navigation (South ➔ East ➔ North) avoiding central fountain collision, enabling 24/7 seamless festival dungeon grinding.
- 👥 **Smart Party System & Auto Re-Party**:
  - Automatically leaves party after each match to prevent game state desync.
  - **Party Leader**: Select friends from friend list with one-click automatic invites.
  - **Party Member**: Auto-accept party invites and follow party leader.
  - Strict lobby readiness watchdog (checks channel, plaza presence, and 5s safe sync period).
- 🏃 **Battle Auto-Movement & Smart Looting Engine**: Three specialized movement modes: "Smart Looting" (pathfinds to magnets, meat, gems, equipment), "Orbital Kiting" (dynamic perimeter kiting around anchor), and "Stationary Defense" (stands ground, loots immediate vicinity). Built-in chest affordability check and anti-stuck safe distance.
- 🎲 **Smart Reroll (Single Card then Reroll All)**: When no focused skills appear on level-up, prioritizes single-card reroll on non-focused cards first. If single-card rerolls are exhausted, automatically activates "Reroll All" (Reroll Deck).
- 🛡️ **Anti-Cheat Defang & Stealth Shield**: Prototypes-level neutralization of in-game `springTrap()` cheat monsters, permanent lock of `trapAt = -1` preventing instant-kill checks, network-level drop of `POST /env` reports, and silent native event execution.
- 🎒 **In-Run Items & Deity Strategy (Smart Anti-Slot Occupation)**:
  - Comprehensive database of **51 in-run items** (Potions, Elixirs, Blessings, Dishes, Deities) crawled directly from the game wiki.
  - **1-Click Presets**: "⭐ Recommended Core" and "💰 Loot Farming (Zeny / Discovery / Luck / Plenty)".
  - **Smart Anti-Slot Protection**: Prioritizes dishes (e.g. AGI Dish) and Deities when no focused items appear, preventing unwanted potions/blessings from locking item slots; automatically rerolls when only slot-locking items appear.
- 🎯 **Intelligent Card Picking & Skill Affix Strategy**:
  - Prioritizes core class skills, high rarity, and preferred affixes (+Targets, Cooldown Reduction, Damage Bonus, etc.).
  - Pure archetype support (e.g., Mage 3-Conduit strategy: reserves banishes until essential skills are collected).
- 🎁 **Automated Loot Rolling**: Auto rolls Need for Legendary loot, Greed for regular loot, or custom rules.
- 🛡️ **Watchdog Protection**: Auto-recovers from picker timeouts, lobby freezes, and mid-run disconnects.

### 🚀 Installation & Usage

#### Option 1: Tampermonkey Userscript (Recommended)
1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension in your browser (Chrome / Edge / Firefox / Brave / Safari).
2. Open [`ro-survivors-helper.user.js`](ro-survivors-helper.user.js) and click **Raw** to install.
3. Refresh the game page; the floating control panel will appear automatically.

#### Option 2: Browser Console (One-Time Run)
1. Copy the full content of [`console-script.js`](console-script.js).
2. Press `F12` on the game webpage to open Developer Tools, switch to the **Console** tab.
3. Paste the code and hit `Enter`.

---

<a name="繁體中文"></a>
## 🇹🇼 繁體中文

### 📖 專案簡介
**RO Survivors Helper (RO 生存者智能輔助助手)** 是一套輕量、高效且功能齊全的瀏覽器油猴腳本 / 主控台輔助工具，專為同人二創遊戲《RO Survivors》打造。大幅減少重複操作負擔，提供智能選卡、大廳自動組隊、燈籠節活動循環、關卡道具神祇策略等全方位功能。

### ✨ 核心功能特色
- 🌐 **中英雙語系即時切換**：懸浮面板頂部一鍵即時切換繁體中文與英文介面（預設繁體中文），所有控制項、設定彈窗與提示訊息均完整本地化。
- 🏮 **洛陽燈籠節活動全自動循環**：內建普隆德拉廣場絕對避水池航點導航（南1 ➔ 東11 ➔ 北7），徹底告別卡水池問題，全自動無縫刷扭蛋！
- 👥 **智慧組隊與自動退隊重組 (Auto Re-Party)**：
  - 場次結束自動全員退隊，杜絕遊戲底層隊伍狀態卡死。
  - **隊長模式**：直接於浮動面板勾選好友名單，自動發送邀請。
  - **隊員模式**：全自動同意入隊、自動跟隨隊長分流與出發。
  - 嚴格大廳同步安全期，隊長端嚴格檢查全員在同頻道廣場就緒，防止單人誤進。
- 🏃 **戰鬥自動走位與智慧拾荒/風箏系統 (Battle Auto-Movement & Smart Looting Engine)**：
  - **三大走位模式**：「智慧拾荒撿寶 (Smart Loot)」、「圓周風箏走位 (Orbital Kiting)」、「定點防守求生 (Stationary Defense)」。
  - **物資智能吸附**：依權重自動尋路走向全圖磁鐵、補血肉塊、神秘卡片、節慶掉落、神裝、金幣、經驗水晶。
  - **寶箱防卡死安全機制**：即時計算當前金幣與開箱費用，錢不夠時與未開啟寶箱保持 85px 安全距離，避免原地卡死。
  - **真人手動避讓**：玩家手動操作方向鍵 (WASD/方向鍵) 即刻平滑交出控制權 2 秒。
- 🎲 **選技能無專注時智慧重刷 (Smart Reroll: Single then All)**：
  - 升級選卡畫面上無任何專注技能時，第一順位優先使用「單張重刷」，逐張刷新非專注技能。
  - 若單張重刷次數用盡仍無專注技能，第二順位自動使用『重刷全部』(Reroll All / Reroll deck)。
  - 面板內建獨立開關，選卡歷史紀錄完整標記每一步重刷軌跡。
- 🛡️ **全方位反作弊陷阱瓦解與金鐘罩防護 (Anti-Cheat Defang & Stealth Shield)**：
  - 原型鏈全面拔除 `springTrap()` 惡魔怪物陷阱，惡意 BOSS 召喚與「偵測到使用外掛」警報徹底無效化。
  - 透過 `Object.defineProperty` 將 `trapAt` 與 `trapShotAt` 死鎖為 `-1`，杜絕即死判定與截圖舉報。
  - 選卡事件優先以原生 JS `onclick` 執行，杜絕向 window 派發非原生 DOM 合成事件，反作弊計數器永遠歸零。
  - 網路層封鎖 `POST /env` 作弊封包，偽裝 `POST /op` 結算遙測數據為真實人類常態分佈。
- 🎒 **關卡內 51 種道具與神祇配置彈窗（智慧避佔位引擎）**：
  - 完整收錄藥水 (12種)、秘藥 (10種)、祝福 (10種)、料理 (6種)、神祇 (13種) 權威資料庫。
  - **快捷預設**：一鍵配置「⭐ 推薦核心專注」與「💰 打寶專注（金幣/尋寶/驚奇/豐饒/幸運/採集）」。
  - **智慧避佔位機制**：三張皆非打寶專注時，優先選取料理（如 AGI 料理）或神祇直接強化能力，絕不誤佔有限的藥水/祝福槽位；三張皆為非專注之藥水/祝福時自動觸發重抽，保護打寶槽位不被鎖死！
- 🎯 **智能選卡與技能詞綴偏好**：
  - 優先確保職業核心技能，支援詞綴偏好加權（+目標數、冷卻縮減、傷害提升等）。
  - 法師三導管等純粹流派支援：核心技能集齊前暫緩放逐，節省點數。
- 🎁 **組隊結算自動分寶擲骰**：支援傳奇 Need / 其餘 Greed、全貪婪、全放棄等多種策略。
- 🛡️ **超時看門狗自救**：選卡逾時自救、大廳防呆防卡死、上一局未完成進度智慧續玩。

### 🚀 安裝與使用指南

#### 方法一：Tampermonkey 油猴插件 (推薦)
1. 於瀏覽器安裝 [Tampermonkey (油猴)](https://www.tampermonkey.net/) 擴充套件。
2. 點開本專案之 [`ro-survivors-helper.user.js`](ro-survivors-helper.user.js)，點擊 **Raw** 按鈕進行安裝。
3. 進入或重新整理遊戲網頁即可自動載入懸浮控制面板。

#### 方法二：瀏覽器控制台 (免安裝單次執行)
1. 複製 [`console-script.js`](console-script.js) 之完整程式碼。
2. 在遊戲網頁按下 `F12` 開啟開發者工具，切換至 **Console (主控台)**。
3. 貼上程式碼並按下 `Enter` 即可啟動。

---

## 👨‍💻 開發者資訊 (Developer)

- **Author**: 位於南半球從火星下來的兔子程式員 (Martian Rabbit) 🐰
- 如果這個小工具幫您節省了大量刷關卡與手動操作的時間，歡迎請兔子喝杯熱咖啡支持持續更新！  
- **Buy Me a Coffee**: 👉 [https://ko-fi.com/martianrabbit](https://ko-fi.com/martianrabbit)

---

## ⚠️ 免責聲明 / Disclaimer

### English
1. **Intellectual Property Rights**: All trademarks, character designs, game world lore, and audio related to *Ragnarok Online* are the exclusive intellectual property of Lee Myung-jin and Gravity Co., Ltd. This project is NOT affiliated with, sponsored by, or endorsed by Gravity Co., Ltd.
2. **Fan-Made Project Context**: *RO Survivors* is an unofficial, non-commercial fan-made / AI-assisted community project. This helper script is created solely to provide Quality-of-Life (QoL) improvements and accessibility options for community players, with no intention of harming the game environment.
3. **Educational Purpose**: This repository is open-sourced purely for educational, web automation, and accessibility research purposes.
4. **Limitation of Liability**: This software is provided "as is", without warranty of any kind. Users assume full responsibility for any risks, including data or account changes, associated with using this script.

### 繁體中文
1. **智慧財產權與商標宣告**：《仙境傳說 (Ragnarok Online)》之相關商標、角色造型、世界觀背景及音效音樂等版權均屬原作者李命進 (Lee Myung-jin) 及 Gravity Co., Ltd. 所有。本專案與 Gravity 官方無任何從屬、授權或商業合作關係。
2. **二創遊戲輔助性質**：《RO Survivors》屬於非營利的同人愛好者二創 / AI 輔助生成專案。本輔助腳本僅為社群玩家提供無障礙操作輔助 (Accessibility) 與生活品質改善 (QoL)，非惡意破壞遊戲生態。
3. **技術研究與學習交流**：本專案為開源學習用途，旨在探討瀏覽器前端自動化技術 (DOM/Canvas Automation)。
4. **責任限制與使用風險**：本專案依「現狀 (AS-IS)」提供，不提供任何形式之保證。使用者須自行評估並承擔使用本腳本衍生之任何帳號紀錄或遊戲數據風險。
