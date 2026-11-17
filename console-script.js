// RO Survivors 主控台即貼即用腳本 v2.0.1
// @author       Martian Rabbit
// @homepage     https://github.com/hijacker4163/ro-survivors-helper
(function () {
  'use strict';

  const SCRIPT_VERSION = '2.0.1';

  const MARTIAN_RABBIT_LOGO = 'data:image/png;base64,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';

  // ==========================================
  // 0. 背景分頁防休眠與 Worker rAF 時脈接管 (Background Mode v0.4)
  // 支援視窗縮小與切換分頁持續以 60 FPS 推進遊戲與戰鬥，由 config.backgroundMode 動態控制開關
  // ==========================================
  let isBackgroundModeActive = (function () {
    try {
      const saved = localStorage.getItem('ro_survivors_helper_v17') || localStorage.getItem('ro_survivors_helper_v16');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.backgroundMode === 'boolean') {
          return parsed.backgroundMode;
        }
      }
    } catch (e) {}
    return true; // 預設開啟 (Default: true)
  })();

  const hiddenGetter = Object.getOwnPropertyDescriptor(Document.prototype, 'hidden')?.get;
  const isReallyHidden = () => {
    try {
      return hiddenGetter ? hiddenGetter.call(document) : false;
    } catch (e) {
      return false;
    }
  };

  const visibilityGetter = Object.getOwnPropertyDescriptor(Document.prototype, 'visibilityState')?.get;
  const realVisibilityState = () => {
    try {
      return visibilityGetter ? visibilityGetter.call(document) : 'visible';
    } catch (e) {
      return 'visible';
    }
  };

  const defProp = (obj, prop, getVal) => {
    try {
      Object.defineProperty(obj, prop, { configurable: true, get: getVal });
    } catch (e) {}
  };

  defProp(Document.prototype, 'hidden', () => (isBackgroundModeActive ? false : isReallyHidden()));
  defProp(Document.prototype, 'webkitHidden', () => (isBackgroundModeActive ? false : isReallyHidden()));
  defProp(Document.prototype, 'visibilityState', () => (isBackgroundModeActive ? 'visible' : realVisibilityState()));
  defProp(Document.prototype, 'webkitVisibilityState', () => (isBackgroundModeActive ? 'visible' : realVisibilityState()));

  const origHasFocus = Document.prototype.hasFocus;
  Document.prototype.hasFocus = function () {
    return isBackgroundModeActive ? true : (origHasFocus ? origHasFocus.call(this) : true);
  };

  const blockEvent = (e) => {
    if (isBackgroundModeActive) e.stopImmediatePropagation();
  };
  ['visibilitychange', 'webkitvisibilitychange', 'pagehide', 'freeze'].forEach((n) => {
    document.addEventListener(n, blockEvent, true);
    window.addEventListener(n, blockEvent, true);
  });
  ['blur', 'focusout'].forEach((n) => {
    window.addEventListener(n, (e) => {
      if (isBackgroundModeActive && (e.target === window || e.target === document)) {
        e.stopImmediatePropagation();
      }
    }, true);
  });

  // ---------- Worker 計時器與 rAF 接管 ----------
  let bgWorker = null;
  try {
    bgWorker = new Worker(URL.createObjectURL(new Blob([`
      const timers = new Map();
      let tick = null;
      onmessage = (e) => {
        const d = e.data;
        if (d.cmd === 'tick-start' && !tick) {
          tick = setInterval(() => postMessage({ t: 'tick' }), d.ms);
        } else if (d.cmd === 'set') {
          const h = d.repeat
            ? setInterval(() => postMessage({ t: 'timer', id: d.id }), d.delay)
            : setTimeout(() => { timers.delete(d.id); postMessage({ t: 'timer', id: d.id }); }, d.delay);
          timers.set(d.id, { h, repeat: d.repeat });
        } else if (d.cmd === 'clear') {
          const x = timers.get(d.id);
          if (x) {
            x.repeat ? clearInterval(x.h) : clearTimeout(x.h);
            timers.delete(d.id);
          }
        }
      };
    `], { type: 'application/javascript' })));
  } catch (e) {
    console.warn('[RO Helper] 初始化 Background Worker 失敗:', e);
  }

  const realRAF = window.requestAnimationFrame.bind(window);
  const pendingRAF = new Map();
  let rafIdCounter = 0;
  let nativeFrames = 0;
  let workerFrames = 0;
  let lastFrameTime = performance.now();

  const runRAF = (id, ts, fromWorker) => {
    const cb = pendingRAF.get(id);
    if (!cb) return; // 已執行或已取消，避免重複觸發
    pendingRAF.delete(id);
    if (fromWorker) {
      workerFrames++;
    } else {
      nativeFrames++;
    }
    lastFrameTime = performance.now();
    try {
      cb(ts);
    } catch (err) {
      console.error('[RO Helper rAF error]:', err);
    }
  };

  window.requestAnimationFrame = function (cb) {
    const id = ++rafIdCounter;
    pendingRAF.set(id, cb);
    realRAF((ts) => runRAF(id, ts, false));
    return id;
  };

  window.cancelAnimationFrame = function (id) {
    pendingRAF.delete(id);
  };

  if (bgWorker) {
    bgWorker.onmessage = (e) => {
      const d = e.data;
      if (d.t === 'tick') {
        if (!isBackgroundModeActive) return;
        if (!isReallyHidden()) return; // 前景交給原生 rAF，完全不干涉
        const ts = performance.now();
        [...pendingRAF.keys()].forEach((id) => runRAF(id, ts, true));
      }
    };
    bgWorker.postMessage({ cmd: 'tick-start', ms: 16 }); // ~60 FPS
  }


  // ==========================================
  // 1. 職業與技能百科資料庫 (Job & Skills Database)
  // ==========================================
    // 各職業預設技能策略 (Focus / Banish)
  const DEFAULT_JOB_SETTINGS = {
    swordsman: {
      focus: ['狂擊', '怒爆'],
      banish: ['挑釁']
    },
    mage: {
      focus: ['火箭術', '冰箭術', '雷擊術'],
      banish: ['普通攻擊', '心靈爆破', '聖靈召喚', '火焰之壁', '火球術', '雷爆術', '冰凍術', '火狩']
    },
    archer: {
      focus: ['二連矢', '箭雨'],
      banish: ['後退迴避']
    },
    acolyte: {
      focus: ['治癒術', '聖光重擊'],
      banish: ['製造聖水', '十字架神罰']
    },
    thief: {
      focus: ['施毒', '飛刀陣'],
      banish: ['噴沙', '撒菱']
    },
    merchant: {
      focus: ['金錢攻擊', '手推車衝撞'],
      banish: ['手推車折價']
    },
    taekwon: {
      focus: ['旋風踢', '還擊踢'],
      banish: ['跑步']
    },
    ninja: {
      focus: ['投擲手裡劍', '火炎花'],
      banish: ['投擲苦無']
    },
    gunslinger: {
      focus: ['三連射', '亡命之徒'],
      banish: ['地面飄移']
    }
  };

  // 各職業預設推薦專注技能
  const JOB_DEFAULT_FOCUS = {
    swordsman: '狂擊, 怒爆, Bash, Magnum Break',
    mage: '火箭術, 冰箭術, 雷擊術, Fire Bolt, Cold Bolt, Lightning Bolt',
    archer: '二連矢, 箭雨, Double Strafe, Arrow Shower',
    acolyte: '治癒術, 聖光重擊, Heal, Holy Smite',
    thief: '施毒, 飛刀陣, Envenom, Fan of Knives',
    merchant: '金錢攻擊, 手推車衝撞, Mammonite, Cart Rush',
    taekwon: '旋風踢, 還擊踢, Tornado Kick, Counter Kick',
    ninja: '投擲手裡劍, 火炎花, Throw Shuriken, Flaming Petals',
    gunslinger: '三連射, 亡命之徒, Triple Action, Desperado'
  };

  const BASIC_ATTACK_SKILL = {
    id: 'basic_attack',
    name: '普通攻擊',
    en: 'Basic Attack',
    desc: '基礎普攻傷害、攻擊速度或連擊數提升 (普攻 / Attack / 攻擊:屬性附加)'
  };

  // ==========================================
  // 1.1 關卡道具與神祇百科資料庫 (In-Run Items Database)
  // 嚴格依據遊戲內圖書館 Wiki 與程式原始碼自動爬取提取 (51 種道具裝備)
  // 涵蓋：藥水 (Potion)、秘藥 (Elixir)、祝福 (Blessing)、料理 (Dish)、神祇 (Deity)
  // ==========================================
  const RUN_ITEMS_DATABASE = [
  {
    "id": "p_regen",
    "slot": "potion",
    "name_zh": "回復藥水",
    "name_en": "Regeneration Potion",
    "name_es": "Poción de regeneración",
    "icon": "501",
    "desc": "每 5 秒回復指定 HP"
  },
  {
    "id": "p_cd",
    "slot": "potion",
    "name_zh": "冷卻藥水",
    "name_en": "Cooldown Potion",
    "name_es": "Poción de enfriamiento",
    "icon": "656",
    "desc": "技能冷卻縮減 (Haste)"
  },
  {
    "id": "p_hp",
    "slot": "potion",
    "name_zh": "生命藥水",
    "name_en": "Life Potion",
    "name_es": "Poción de vida",
    "icon": "504",
    "desc": "最大生命百分比提升 (+% Max HP)"
  },
  {
    "id": "p_armor",
    "slot": "potion",
    "name_zh": "護甲藥水",
    "name_en": "Armor Potion",
    "name_es": "Poción de armadura",
    "icon": "502",
    "desc": "獲得固定護甲防禦值"
  },
  {
    "id": "p_area",
    "slot": "potion",
    "name_zh": "範圍藥水",
    "name_en": "Area Potion",
    "name_es": "Poción de área",
    "icon": "505",
    "desc": "技能作用範圍提升 (+% Area)"
  },
  {
    "id": "p_pickup",
    "slot": "potion",
    "name_zh": "採集藥水",
    "name_en": "Gathering Potion",
    "name_es": "Poción de recolección",
    "icon": "545",
    "desc": "物品拾取半徑增加 (+ m Pickup)"
  },
  {
    "id": "p_greed",
    "slot": "potion",
    "name_zh": "貪婪藥水",
    "name_en": "Potion of Greed",
    "name_es": "Poción de la avaricia",
    "icon": "546",
    "desc": "金幣獲得量提升 (+% Zeny)"
  },
  {
    "id": "p_discovery",
    "slot": "potion",
    "name_zh": "尋寶藥水",
    "name_en": "Potion of Discovery",
    "name_es": "Poción de descubrimiento",
    "icon": "501",
    "desc": "尋寶率 / 稀有掉落提升 (+% Discovery)"
  },
  {
    "id": "p_speed",
    "slot": "potion",
    "name_zh": "速度藥水",
    "name_en": "Speed Potion",
    "name_es": "Poción de velocidad",
    "icon": "12016",
    "desc": "角色移動速度提升 (+% Move Speed)"
  },
  {
    "id": "p_cast",
    "slot": "potion",
    "name_zh": "詠唱藥水",
    "name_en": "Casting Potion",
    "name_es": "Poción de casteo",
    "icon": "547",
    "desc": "技能詠唱速度縮減 (+% Cast Haste)"
  },
  {
    "id": "p_reach",
    "slot": "potion",
    "name_zh": "範圍藥水",
    "name_en": "Reach Potion",
    "name_es": "Poción de alcance",
    "icon": "503",
    "desc": "技能投射與攻擊距離提升 (+% Reach)"
  },
  {
    "id": "p_dmg",
    "slot": "potion",
    "name_zh": "傷害藥水",
    "name_en": "Damage Potion",
    "name_es": "Poción de daño",
    "icon": "657",
    "desc": "所有技能與普通傷害提升 (+% Damage)"
  },
  {
    "id": "e_crit",
    "slot": "elixir",
    "name_zh": "爆擊秘藥",
    "name_en": "Critical Elixir",
    "name_es": "Elixir de crítico",
    "icon": "645",
    "desc": "爆擊機率提升 (+% Critical Chance)"
  },
  {
    "id": "e_dmg",
    "slot": "elixir",
    "name_zh": "傷害秘藥",
    "name_en": "Damage Elixir",
    "name_es": "Elixir de daño",
    "icon": "7308",
    "desc": "所有傷害提升 (+% Damage)"
  },
  {
    "id": "e_hp",
    "slot": "elixir",
    "name_zh": "生命秘藥",
    "name_en": "Life Elixir",
    "name_es": "Elixir de vida",
    "icon": "607",
    "desc": "直接增加最大生命值 (+ HP)"
  },
  {
    "id": "e_critdmg",
    "slot": "elixir",
    "name_zh": "爆擊傷害秘藥",
    "name_en": "Critical Damage Elixir",
    "name_es": "Elixir de daño crítico",
    "icon": "522",
    "desc": "爆擊傷害倍率提升 (+% Crit Damage)"
  },
  {
    "id": "e_surprise",
    "slot": "elixir",
    "name_zh": "驚奇秘藥",
    "name_en": "Elixir of Surprise",
    "name_es": "Elixir de sorpresa",
    "icon": "12259",
    "desc": "尋寶率 / 發現率提升 (+% Discovery)"
  },
  {
    "id": "e_dot",
    "slot": "elixir",
    "name_zh": "持續傷害秘藥",
    "name_en": "Damage over Time Elixir",
    "name_es": "Elixir de daño en el tiempo",
    "icon": "506",
    "desc": "中毒、燃燒與流血傷害提升 (+% DoT)"
  },
  {
    "id": "e_dodge",
    "slot": "elixir",
    "name_zh": "迴避秘藥",
    "name_en": "Flee Elixir",
    "name_es": "Elixir de Flee",
    "icon": "525",
    "desc": "迴避率提升 (+% Flee)"
  },
  {
    "id": "e_cast",
    "slot": "elixir",
    "name_zh": "詠唱秘藥",
    "name_en": "Casting Elixir",
    "name_es": "Elixir de casteo",
    "icon": "12299",
    "desc": "技能詠唱速度縮減 (+% Cast Haste)"
  },
  {
    "id": "e_area",
    "slot": "elixir",
    "name_zh": "範圍秘藥",
    "name_en": "Area Elixir",
    "name_es": "Elixir de área",
    "icon": "12114",
    "desc": "技能範圍提升 (+% Area)"
  },
  {
    "id": "e_armor",
    "slot": "elixir",
    "name_zh": "護甲秘藥",
    "name_en": "Armor Elixir",
    "name_es": "Elixir de armadura",
    "icon": "526",
    "desc": "受到的所有傷害減免 (-% Damage Taken)"
  },
  {
    "id": "b_dmg",
    "slot": "blessing",
    "name_zh": "傷害祝福",
    "name_en": "Blessing of Damage",
    "name_es": "Bendición de daño",
    "icon": "12215",
    "desc": "全傷害大幅提升 (+% Damage)"
  },
  {
    "id": "b_regen",
    "slot": "blessing",
    "name_zh": "回復祝福",
    "name_en": "Blessing of Regeneration",
    "name_es": "Bendición de regeneración",
    "icon": "12303",
    "desc": "每 5 秒依最大生命百分比回血 (+% Max HP / 5s)"
  },
  {
    "id": "b_cd",
    "slot": "blessing",
    "name_zh": "冷卻祝福",
    "name_en": "Blessing of Cooldown",
    "name_es": "Bendición de enfriamiento",
    "icon": "12220",
    "desc": "技能冷卻大幅縮減 (+% Cooldown Haste)"
  },
  {
    "id": "b_lifesteal",
    "slot": "blessing",
    "name_zh": "吸血祝福",
    "name_en": "Vampiric Blessing",
    "name_es": "Bendición vampírica",
    "icon": "12279",
    "desc": "攻擊吸血機率與回復 (+% Lifesteal)"
  },
  {
    "id": "b_double",
    "slot": "blessing",
    "name_zh": "雙重詠唱祝福",
    "name_en": "Blessing of Double Cast",
    "name_es": "Bendición de doble casteo",
    "icon": "12219",
    "desc": "技能雙重詠唱機率 (+% Double Cast)"
  },
  {
    "id": "b_plenty",
    "slot": "blessing",
    "name_zh": "豐饒祝福",
    "name_en": "Blessing of Plenty",
    "name_es": "Bendición de la abundancia",
    "icon": "12315",
    "desc": "金幣獲得量與尋寶率雙重提升 (+% Zeny & Discovery)"
  },
  {
    "id": "b_cast",
    "slot": "blessing",
    "name_zh": "詠唱祝福",
    "name_en": "Blessing of Casting",
    "name_es": "Bendición de casteo",
    "icon": "717",
    "desc": "詠唱速度大幅加快 (+% Cast Haste)"
  },
  {
    "id": "b_area",
    "slot": "blessing",
    "name_zh": "範圍祝福",
    "name_en": "Blessing of Area",
    "name_es": "Bendición de área",
    "icon": "715",
    "desc": "技能範圍大幅擴大 (+% Area)"
  },
  {
    "id": "b_reach",
    "slot": "blessing",
    "name_zh": "範圍祝福",
    "name_en": "Blessing of Reach",
    "name_es": "Bendición de alcance",
    "icon": "686",
    "desc": "攻擊射程大幅增加 (+% Reach)"
  },
  {
    "id": "b_wisdom",
    "slot": "blessing",
    "name_zh": "智慧祝福",
    "name_en": "Blessing of Wisdom",
    "name_es": "Bendición de la sabiduría",
    "icon": "7433",
    "desc": "擊殺怪物獲得經驗值提升 (+% EXP)"
  },
  {
    "id": "g_avarice",
    "slot": "deity",
    "name_zh": "貪婪之神",
    "name_en": "Deity of Avarice",
    "name_es": "Deity de la avaricia",
    "icon": "2630",
    "desc": "獲得巨額金幣提升 (+% Zeny)"
  },
  {
    "id": "g_war",
    "slot": "deity",
    "name_zh": "戰爭之神",
    "name_en": "Deity of War",
    "name_es": "Deity de la guerra",
    "icon": "1530",
    "desc": "大幅提升全傷害與爆擊率 (+% Dmg & Crit)"
  },
  {
    "id": "g_executioner",
    "slot": "deity",
    "name_zh": "處刑之神",
    "name_en": "Deity of the Executioner",
    "name_es": "Deity del verdugo",
    "icon": "1413",
    "desc": "爆擊率與爆擊傷害雙重強化 (+% Crit & Crit Dmg)"
  },
  {
    "id": "g_might",
    "slot": "deity",
    "name_zh": "力量之神",
    "name_en": "Deity of Might",
    "name_es": "Deity de la fuerza",
    "icon": "2629",
    "desc": "增加力量 (STR) 與物理傷害 (+ STR & Dmg)"
  },
  {
    "id": "g_thought",
    "slot": "deity",
    "name_zh": "思想之神",
    "name_en": "Deity of Thought",
    "name_es": "Deity del pensamiento",
    "icon": "6599",
    "desc": "增加智力 (INT) 與魔法/治療傷害 (+ INT & Dmg)"
  },
  {
    "id": "g_memory",
    "slot": "deity",
    "name_zh": "記憶之神",
    "name_en": "Deity of Memory",
    "name_es": "Deity de la memoria",
    "icon": "6600",
    "desc": "增加靈巧 (DEX) 與加速詠唱 (+ DEX & Cast)"
  },
  {
    "id": "g_bulwark",
    "slot": "deity",
    "name_zh": "堡壘之神",
    "name_en": "Deity of the Bulwark",
    "name_es": "Deity del baluarte",
    "icon": "2357",
    "desc": "大幅提升護甲與最大生命 (+ Armor & HP%)"
  },
  {
    "id": "g_wind",
    "slot": "deity",
    "name_zh": "疾風之神",
    "name_en": "Deity of the Wind",
    "name_es": "Deity del viento",
    "icon": "2410",
    "desc": "提升移動速度與迴避率 (+ Speed & Flee)"
  },
  {
    "id": "g_life",
    "slot": "deity",
    "name_zh": "生命之神",
    "name_en": "Deity of Life",
    "name_es": "Deity de la vida",
    "icon": "2353",
    "desc": "生命持續回復與最大生命提升 (+ Regen & HP%)"
  },
  {
    "id": "g_wisdom",
    "slot": "deity",
    "name_zh": "智慧之神",
    "name_en": "Deity of Wisdom",
    "name_es": "Deity de la sabiduría",
    "icon": "7019",
    "desc": "全域經驗值大幅加成 (+% EXP)"
  },
  {
    "id": "g_binding",
    "slot": "deity",
    "name_zh": "束縛之神",
    "name_en": "Deity of Binding",
    "name_es": "Deity de la atadura",
    "icon": "7058",
    "desc": "大幅擴大技能範圍與全傷害 (+ Area & Dmg)"
  },
  {
    "id": "g_trickery",
    "slot": "deity",
    "name_zh": "詭計之神",
    "name_en": "Deity of Trickery",
    "name_es": "Deity del engaño",
    "icon": "1262",
    "desc": "大幅增加迴避率與爆擊率 (+ Flee & Crit)"
  },
  {
    "id": "g_torment",
    "slot": "deity",
    "name_zh": "折磨之神",
    "name_en": "Deity of Torment",
    "name_es": "Deity del tormento",
    "icon": "2678",
    "desc": "中毒/燃燒/流血持續傷害與全傷害提升 (+ DoT & Dmg)"
  },
  {
    "id": "d_str",
    "slot": "dish",
    "name_zh": "STR 料理",
    "name_en": "STR Dish",
    "name_es": "Plato de STR",
    "icon": "12202",
    "desc": "料理：+ 力量 (STR)"
  },
  {
    "id": "d_agi",
    "slot": "dish",
    "name_zh": "AGI 料理",
    "name_en": "AGI Dish",
    "name_es": "Plato de AGI",
    "icon": "12203",
    "desc": "料理：+ 敏捷 (AGI)"
  },
  {
    "id": "d_vit",
    "slot": "dish",
    "name_zh": "VIT 料理",
    "name_en": "VIT Dish",
    "name_es": "Plato de VIT",
    "icon": "12207",
    "desc": "料理：+ 體質 (VIT)"
  },
  {
    "id": "d_int",
    "slot": "dish",
    "name_zh": "INT 料理",
    "name_en": "INT Dish",
    "name_es": "Plato de INT",
    "icon": "12204",
    "desc": "料理：+ 智力 (INT)"
  },
  {
    "id": "d_dex",
    "slot": "dish",
    "name_zh": "DEX 料理",
    "name_en": "DEX Dish",
    "name_es": "Plato de DEX",
    "icon": "12205",
    "desc": "料理：+ 靈巧 (DEX)"
  },
  {
    "id": "d_luk",
    "slot": "dish",
    "name_zh": "LUK 料理",
    "name_en": "LUK Dish",
    "name_es": "Plato de LUK",
    "icon": "12206",
    "desc": "料理：+ 幸運 (LUK)"
  }
];

  /**
   * 圖書館 Wiki 動態爬蟲 (當遊戲內開啟 #wiki 介面時自動同步更新道具效果)
   */
  function crawlWikiItems() {
    try {
      const wikiItems = document.querySelectorAll('#wiki .wk-item, #wiki .wk-slot-box .wk-item');
      if (wikiItems.length === 0) return;
      wikiItems.forEach(el => {
        const bEl = el.querySelector('b');
        const smallEl = el.querySelector('small');
        const imgEl = el.querySelector('img');
        const name = bEl?.textContent?.trim() || '';
        const desc = smallEl?.textContent?.trim() || '';
        const imgSrc = imgEl?.src || '';
        if (!name) return;

        const found = RUN_ITEMS_DATABASE.find(it => it.name_zh === name || it.name_en === name || it.name_es === name);
        if (found) {
          if (desc && (!found.desc || found.desc.length < desc.length)) {
            found.desc = desc;
          }
        } else {
          RUN_ITEMS_DATABASE.push({
            id: name.toLowerCase().replace(/[^a-z0-9_]/g, '_'),
            slot: 'item',
            name_zh: name,
            name_en: name,
            name_es: name,
            icon: '',
            desc: desc
          });
        }
      });
    } catch (e) {
      console.warn('[RO Helper] 圖書館 Wiki 道具爬取例外:', e);
    }
  }

  // ==========================================
  // 1.2 多國語言支援字典 (i18n Localization Database)
  // 支援繁體中文 (zh, 預設) 與 英文 (en)
  // ==========================================
  const I18N = {
    zh: {
      title: 'RO Survivors 輔助',
      status_title: '狀態:',
      status_running: '助手運行中...',
      status_standby: '助手待命中 (未啟動)',
      btn_start: '▶️ 啟動助手',
      btn_stop: '🛑 停止助手',
      current_job: '🎭 當前職業',
      target_stage: '🗺️ 目標挑戰關卡',
      levelup_mode: '⚡ 升級方式 (出發設定)',
      levelup_instant: '⚡ 立即升級 (每級暫停)',
      levelup_accumulate: '📦 累積升級 (整批選卡)',
      auto_open_bank: '自動開啟累積批次選卡 (按 B)',
      open_diff_modal: '⚙️ 升級方式與難度配置彈窗...',
      auto_festival: '🏮 優先循環燈籠節活動 (洛陽)',
      auto_lobby: '🌐 自動隨機選大廳 (避開滿員)',
      auto_resume: '⏸️ 自動解除暫停 (切分頁/ESC)',
      background_mode: '🔄 允許縮小與切頁 (背景運行)',
      background_mode_tip: '使用 Web Worker 與 rAF 接管機制，在最小化視窗或切換到其他分頁時依然保持 60 FPS 持續推進遊戲與戰鬥',
      auto_enter_map: '⚔️ 自動進入地圖',
      auto_reparty: '👥 場次結束自動退隊重組 (Auto Re-Party)',
      party_role: '組隊定位：',
      role_leader: '👑 隊長 (自動組勾選隊友)',
      role_member: '🤝 隊員 (待命自動入隊出發)',
      target_teammates: '目標隊友 (勾選自動邀請):',
      refresh_friends: '🔄 刷新好友',
      add_friend_placeholder: '手動新增好友ID...',
      add_friend_btn: '新增',
      auto_party_check: '🤝 自動同意邀請/出發 (跟車/隊員必備)',
      auto_pick_card: '🃏 自動升級選卡',
      pick_delay: '⏱️ 選卡延遲 (ms)',
      auto_loot_roll: '🎁 自動組隊分寶 (Loot Roll)',
      loot_mode: '分寶策略',
      loot_greed_need: '💎 傳奇Need / 其餘Greed',
      loot_all_greed: '🟡 全部 Greed (貪婪)',
      loot_all_pass: '🟢 全部 Pass (放棄讓裝)',
      auto_restart: '🔄 結算自動重啟',
      test_btn: '🧪 立即測試選卡、級別與特權分析',
      history_btn: '📜 技能與道具選擇紀錄',
      stats_runs: '進圖',
      stats_cards: '選卡',
      stats_deaths: '失敗',
      stats_festivals: '燈籠',
      stats_focus: '專注',
      stats_banish: '放逐',
      stats_lobby: '大廳',
      stats_resumes: '續玩',
      stats_tooltip: '雙擊可重設所有統計數據（進圖、選卡、失敗次數等）',
      confirm_reset_stats: '是否確定重設所有統計數據（包含進圖、選卡、死亡失敗次數）？',
      stats_reset_toast: '統計數據已重設為 0',
      developer: '開發者',
      dev_info: '南半球火星兔子工程師 🚀',
      buy_coffee: '請兔子喝杯咖啡 (Ko-fi)',
      open_skills_config: '🎯 點此彈出【各職業專屬技能】專注與放逐設定視窗',
      open_items_config: '🎒 點此彈出【關卡道具/神祇】專注與放逐設定視窗',
      modal_rarity_first: '⭐ 級別優先',
      modal_rarity_first_tip: '專注技能出現時，以品質（傳說>史詩>稀有>優良>普通）為第一順位；若關閉則以詞綴偏好為第一順位',
      modal_fill_slots_first: '🔒 優先填滿技能',
      modal_fill_slots_first_tip: '開啟時：等 4 格技能槽填滿後才開始執行放逐；關閉時：只要出現放逐名單的技能立即執行放逐！',
      switch_lang_btn: '🌐 語言 / Language: 中文',
      switched_toast: '🌐 介面語言已切換為：繁體中文',
      // 彈窗通用
      modal_close: '完成並關閉',
      modal_focus: '🎯 專注 (Focus)',
      modal_normal: '⚪ 正常',
      modal_banish: '🚫 放逐 (Banish)',
      modal_reset: '重置',
      modal_search_placeholder: '搜尋名稱或效果...',
      // 道具彈窗
      items_modal_title: '🎒 關卡道具與神祇百科配置',
      items_slot_all: '全部 (51)',
      items_slot_potion: '藥水 (12)',
      items_slot_elixir: '秘藥 (10)',
      items_slot_blessing: '祝福 (10)',
      items_slot_dish: '料理 (6)',
      items_slot_deity: '神祇 (13)',
      items_recommended: '⭐ 推薦專注核心 (冷卻/傷害/爆擊)',
      items_farm_preset: '💰 打寶專注 (尋寶/秘藥/豐饒/貪婪之神)',
      items_reset_all: '⚪ 全部正常',
      // 技能彈窗
      skills_modal_title: '🎯 職業技能專注與放逐配置',
      skills_affix_pref: '✨ 技能升級詞綴偏好優先順位 (點擊切換/選取):',
      skills_tip: '💡 提示：點擊按鈕可即時切換「專注 (×3 出現率)」、「放逐 (移出抽卡池)」或「正常」狀態。'
    },
    en: {
      title: 'RO Survivors Helper',
      status_title: 'Status:',
      status_running: 'Helper Running...',
      status_standby: 'Helper Standby (Idle)',
      btn_start: '▶️ Start Helper',
      btn_stop: '🛑 Stop Helper',
      current_job: '🎭 Current Class',
      target_stage: '🗺️ Target Stage',
      levelup_mode: '⚡ Level-up Mode',
      levelup_instant: '⚡ Instant (Pause per level)',
      levelup_accumulate: '📦 Accumulate (Batch open)',
      auto_open_bank: 'Auto open banked upgrades (Key B)',
      open_diff_modal: '⚙️ Mode & Difficulty Settings...',
      auto_festival: '🏮 Loop Lantern Festival (Louyang)',
      auto_lobby: '🌐 Auto Select Lobby (Avoid full)',
      auto_resume: '⏸️ Auto Resume (Tab/ESC)',
      background_mode: '🔄 Background Mode (Minimize/Tab)',
      background_mode_tip: 'Uses Web Worker & rAF interception to keep the game running at 60 FPS when minimized or switched to another tab',
      auto_enter_map: '⚔️ Auto Enter Map',
      auto_reparty: '👥 Auto Re-Party After Match',
      party_role: 'Party Role:',
      role_leader: '👑 Leader (Auto-invite checked friends)',
      role_member: '🤝 Member (Auto-accept & follow leader)',
      target_teammates: 'Target Friends (Auto-invite):',
      refresh_friends: '🔄 Refresh Friends',
      add_friend_placeholder: 'Add friend by ID...',
      add_friend_btn: 'Add',
      auto_party_check: '🤝 Auto Ready Check (Auto accept & go)',
      auto_pick_card: '🃏 Auto Pick Cards',
      pick_delay: '⏱️ Pick Delay (ms)',
      auto_loot_roll: '🎁 Auto Loot Roll',
      loot_mode: 'Roll Strategy',
      loot_greed_need: '💎 Need Legendary / Greed Rest',
      loot_all_greed: '🟡 All Greed',
      loot_all_pass: '🟢 All Pass',
      auto_restart: '🔄 Auto Restart on Game Over',
      test_btn: '🧪 Test Card Pick & Privileges Diagnostic',
      history_btn: '📜 Skill & Item Pick History',
      stats_runs: 'Runs',
      stats_cards: 'Picks',
      stats_deaths: 'Defeats',
      stats_festivals: 'Fest',
      stats_focus: 'Focus',
      stats_banish: 'Banish',
      stats_lobby: 'Lobbies',
      stats_resumes: 'Resumes',
      stats_tooltip: 'Double click to reset all statistics (runs, picks, defeats, etc.)',
      confirm_reset_stats: 'Are you sure you want to reset all statistics (runs, picks, defeats, etc.)?',
      stats_reset_toast: 'Statistics have been reset to 0',
      developer: 'Developer',
      dev_info: 'Martian Rabbit in S. Hemisphere 🚀',
      buy_coffee: 'Buy me a coffee on Ko-fi',
      open_skills_config: '🎯 Click to Configure Class Skills (Focus & Banish)',
      open_items_config: '🎒 Click to Configure In-Run Items & Deities',
      modal_rarity_first: '⭐ Rarity First',
      modal_rarity_first_tip: 'When focus skills appear, rank by rarity first (Legendary > Epic > Rare > Good > Normal); if disabled, rank by affix preferences first',
      modal_fill_slots_first: '🔒 Fill Slots First',
      modal_fill_slots_first_tip: 'When enabled: waits until all 4 skill slots are full before banishing; when disabled: banishes target skills immediately!',
      switch_lang_btn: '🌐 Language / 語言: English',
      switched_toast: '🌐 Interface language switched to: English',
      // Modals
      modal_close: 'Done & Close',
      modal_focus: '🎯 Focus',
      modal_normal: '⚪ Normal',
      modal_banish: '🚫 Banish',
      modal_reset: 'Reset',
      modal_search_placeholder: 'Search name or effect...',
      // Items Modal
      items_modal_title: '🎒 In-Run Items & Deities Configuration',
      items_slot_all: 'All (51)',
      items_slot_potion: 'Potions (12)',
      items_slot_elixir: 'Elixirs (10)',
      items_slot_blessing: 'Blessings (10)',
      items_slot_dish: 'Dishes (6)',
      items_slot_deity: 'Deities (13)',
      items_recommended: '⭐ Recommended (CD/Damage/Crit)',
      items_farm_preset: '💰 Loot Farming (Discovery/Surprise/Plenty/Avarice)',
      items_reset_all: '⚪ Set All Normal',
      // Skills Modal
      skills_modal_title: '🎯 Class Skills Focus & Banish Settings',
      skills_affix_pref: '✨ Skill Upgrade Affix Preferences (Click to toggle):',
      skills_tip: '💡 Tip: Click buttons to toggle Focus (×3 appearance rate), Banish (remove from pool), or Normal.'
    }
  };

  function t(key) {
    const lang = config.lang || 'zh';
    return (I18N[lang] && I18N[lang][key]) || (I18N['zh'] && I18N['zh'][key]) || key;
  }

    // ==========================================
  // 1.2 技能升級詞綴偏好資料庫 (Skill Affix Preferences)
  // ==========================================
  const AFFIX_DEFINITIONS = [
    {
      id: 'targets',
      name: '🎯 額外目標 (+Targets)',
      badge: '+目標',
      desc: '優先選擇增加目標數、穿透或貫穿之詞綴 (+Targets, 穿透, 貫穿, a la vez)',
      keywords: ['目標', '穿透', '貫穿', 'targets', 'target', 'objetivos', 'objetivo', 'alvo', 'a la vez']
    },
    {
      id: 'cooldown',
      name: '⏱️ 冷卻縮減 (Cooldown / Haste)',
      badge: '冷卻縮減',
      desc: '優先選擇減少技能冷卻時間、提升施放頻率之詞綴 (冷卻縮減, Haste, 技能冷卻)',
      keywords: ['冷卻', '冷卻縮減', '技能冷卻', '急速', '加速', 'cooldown', 'cd', 'haste', 'celeridad', 'recarga', 'enfriamiento']
    },
    {
      id: 'damage',
      name: '💥 傷害提升 (Damage Bonus)',
      badge: '傷害提升',
      desc: '優先選擇增加傷害百分比、基礎攻擊力之詞綴 (傷害 +%, 基礎傷害, Damage)',
      keywords: ['傷害', '基礎傷害', '攻擊力', 'damage', 'dmg', 'daño', 'dano']
    },
    {
      id: 'count',
      name: '🏹 投射物/次數 (+Count / Projectiles)',
      badge: '+投射物/次數',
      desc: '優先選擇增加投射物數量、彈射或連擊次數之詞綴 (+1 投射物, 次數 +1)',
      keywords: ['投射物', '次數', '數量', '彈射', '連擊', 'count', 'projectiles', 'projectile', 'proyectil', 'proyectiles', 'disparos']
    },
    {
      id: 'area',
      name: '🌐 技能範圍 (Area / Range)',
      badge: '範圍擴大',
      desc: '優先選擇擴大技能影響面積、爆炸半徑或距離之詞綴 (範圍 +%, Area)',
      keywords: ['範圍', '面積', '距離', '爆炸半徑', 'area', 'área', 'range', 'alcance', 'radio']
    },
    {
      id: 'crit',
      name: '⚡ 暴擊加成 (Crit / Critical)',
      badge: '暴擊加成',
      desc: '優先選擇提升暴擊機率或暴擊傷害倍率之詞綴 (暴擊傷害, 暴擊率, Crit)',
      keywords: ['暴擊', '暴擊率', '暴擊傷害', 'crit', 'crítico', 'critical']
    },
    {
      id: 'cast',
      name: '🌪️ 詠唱速度 (Cast Speed)',
      badge: '詠唱速度',
      desc: '優先選擇加快詠唱速度、減少詠唱時間之詞綴 (詠唱速度, Cast Speed)',
      keywords: ['詠唱', '施法速度', '吟唱', 'cast', 'casteo', 'conjuração']
    }
  ];

  const JOB_DATABASE = {
    swordsman: {
      name: '劍士 (Swordsman)',
      icon: '⚔️',
      skills: [
        BASIC_ATTACK_SKILL,
        { id: 'bash', name: '狂擊', en: 'Bash', desc: '近戰強力單體打擊，可暈眩' },
        { id: 'magnum', name: '怒爆', en: 'Magnum Break', desc: '火屬性範圍爆破擊退' },
        { id: 'sword_dance', name: '劍舞', en: 'Sword Dance', desc: '迴旋斬擊周圍所有敵人' },
        { id: 'shield_bash', name: '盾牌衝擊', en: 'Shield Bash', desc: '以盾牌猛擊目標' },
        { id: 'endure', name: '霸體', en: 'Endure', desc: '提升魔防與受擊不中斷' },
        { id: 'hp_recovery', name: '快速恢復', en: 'Increase HP Recovery', desc: '提升 HP 自然恢復' },
        { id: 'provoke', name: '挑釁', en: 'Provoke', desc: '降低怪物防禦提高受傷' },
        { id: 'demoralizing_shout', name: '降低士氣的吶喊', en: 'Demoralizing Shout', desc: '削弱周圍怪物攻擊' }
      ]
    },
    mage: {
      name: '魔法師 (Mage)',
      icon: '🔮',
      skills: [
        BASIC_ATTACK_SKILL,
        { id: 'firebolt', name: '火箭術', en: 'Fire Bolt', desc: '發射連續火箭轟炸' },
        { id: 'coldbolt', name: '冰箭術', en: 'Cold Bolt', desc: '發射冰箭並緩速敵人' },
        { id: 'lightning', name: '雷擊術', en: 'Lightning Bolt', desc: '召喚雷電貫穿單體' },
        { id: 'thunderstorm', name: '雷爆術', en: 'Thunderstorm', desc: '大範圍雷雲持續轟頂' },
        { id: 'soul_strike', name: '聖靈召喚', en: 'Soul Strike', desc: '發射多枚念屬性靈魂彈' },
        { id: 'napalm', name: '心靈爆破', en: 'Napalm Beat', desc: '念動力波範圍打擊' },
        { id: 'fire_wall', name: '火焰之壁', en: 'Fire Wall', desc: '在地面設置火柱阻擋怪物' },
        { id: 'frost_diver', name: '冰凍術', en: 'Frost Diver', desc: '寒氣冰凍周圍敵人' },
        { id: 'sight', name: '火狩', en: 'Sight', desc: '召喚火球環繞守護' }
      ]
    },
    archer: {
      name: '弓箭手 (Archer)',
      icon: '🏹',
      skills: [
        BASIC_ATTACK_SKILL,
        { id: 'double_strafe', name: '二連矢', en: 'Double Strafe', desc: '射出兩支強勁箭矢' },
        { id: 'arrow_shower', name: '箭雨', en: 'Arrow Shower', desc: '對目標區域發射箭雨' },
        { id: 'arrow_rain', name: '連環箭雨', en: 'Arrow Rain', desc: '大範圍持續落箭' },
        { id: 'arrow_repel', name: '衝鋒箭', en: 'Arrow Repel', desc: '擊退敵人的強效射擊' },
        { id: 'fire_arrow', name: '火箭', en: 'Fire Arrow', desc: '附加火屬性穿刺傷害' },
        { id: 'arcane_shot', name: '秘法射擊', en: 'Arcane Shot', desc: '蘊含魔法威力的箭矢' },
        { id: 'concentration', name: '心神凝聚', en: 'Improve Concentration', desc: '提升命中、敏捷與攻擊' },
        { id: 'retreat', name: '後退迴避', en: 'Retirada', desc: '戰略後退拉開距離' }
      ]
    },
    acolyte: {
      name: '服事 (Acolyte)',
      icon: '✝️',
      skills: [
        BASIC_ATTACK_SKILL,
        { id: 'heal', name: '治癒術', en: 'Heal', desc: '為自身或隊友回復生命值' },
        { id: 'holy_light', name: '神聖之光', en: 'Holy Light', desc: '聖屬性單體光芒打擊' },
        { id: 'blessing', name: '天使之賜福', en: 'Blessing', desc: '全面提升力量、敏捷與智力' },
        { id: 'holy_smite', name: '聖光重擊', en: 'Holy Smite', desc: '聖屬性範圍神罰' },
        { id: 'ruwach', name: '光獵', en: 'Ruwach', desc: '召喚聖光顯形並傷害周圍隱匿敵人' },
        { id: 'decrease_agi', name: '緩速術', en: 'Decrease AGI', desc: '大幅降低怪物移動速度' },
        { id: 'signum_crucis', name: '十字架神罰', en: 'Signum Crucis', desc: '削弱不死與惡魔系防禦' },
        { id: 'aqua_benedicta', name: '製造聖水', en: 'Aqua Benedicta', desc: '提升神聖抵抗與淨化' }
      ]
    },
    thief: {
      name: '盜賊 (Thief)',
      icon: '🗡️',
      skills: [
        BASIC_ATTACK_SKILL,
        { id: 'envenom', name: '施毒', en: 'Envenom', desc: '攻擊附加致命毒素' },
        { id: 'sand_attack', name: '噴沙', en: 'Sand Attack', desc: '使面前敵人失明與受創' },
        { id: 'fan_of_knives', name: '飛刀陣', en: 'Fan of Knives', desc: '向四周投擲大量短刀' },
        { id: 'poison_bomb', name: '毒霧爆彈', en: 'Poison Bomb', desc: '引爆大範圍劇毒煙霧' },
        { id: 'shadowstep', name: '影步', en: 'Shadowstep', desc: '迅速穿梭於陰影中 (暗影步)' },
        { id: 'caltrops', name: '撒菱', en: 'Caltrops', desc: '地面散佈刺菱刺傷踏過敵人' },
        { id: 'stone_fling', name: '投擲石頭', en: 'Throw Stone', desc: '擊暈目標' },
        { id: 'hiding', name: '隱匿', en: 'Hiding', desc: '藏身地下躲避攻擊' }
      ]
    },
    merchant: {
      name: '商人 (Merchant)',
      icon: '💰',
      skills: [
        BASIC_ATTACK_SKILL,
        { id: 'mammonite', name: '金錢攻擊', en: 'Mammonite', desc: '消耗金幣造成極高傷害' },
        { id: 'cart_revolution', name: '手推車攻擊', en: 'Cart Revolution', desc: '揮舞手推車擊飛周圍魔物' },
        { id: 'cart_rush', name: '手推車衝撞', en: 'Cart Rush', desc: '推車急速向前衝撞突圍' },
        { id: 'zeny_rain', name: '金幣雨', en: 'Zeny Rain', desc: '天上灑落金幣轟炸全場' },
        { id: 'crazy_uproar', name: '大聲吶喊', en: 'Crazy Uproar', desc: '咆哮提升自身力量' },
        { id: 'vending', name: '手推車折價', en: 'Discount', desc: '開啟寶箱金幣花費打折' },
        { id: 'enlarge_weight', name: '增加重量限制', en: 'Enlarge Weight Limit', desc: '提升道具攜帶與效益' }
      ]
    },
    taekwon: {
      name: '跆拳少年 (Taekwon)',
      icon: '🥋',
      skills: [
        BASIC_ATTACK_SKILL,
        { id: 'tornado_kick', name: '旋風踢', en: 'Tornado Kick', desc: '旋轉踢擊周圍所有敵人' },
        { id: 'heel_drop', name: '下踢', en: 'Heel Drop', desc: '強力下踩擊碎地面' },
        { id: 'roundhouse', name: '轉身踢', en: 'Roundhouse', desc: '大迴旋擊退面前魔物' },
        { id: 'counter_kick', name: '還擊踢', en: 'Counter Kick', desc: '受擊後必定爆擊反擊' },
        { id: 'sprint', name: '跑步', en: 'Sprint', desc: '直線急速衝刺突進' }
      ]
    },
    ninja: {
      name: '忍者 (Ninja)',
      icon: '🥷',
      skills: [
        BASIC_ATTACK_SKILL,
        { id: 'shuriken', name: '投擲手裡劍', en: 'Throw Shuriken', desc: '高速飛鏢連續投擲' },
        { id: 'kunai', name: '投擲苦無', en: 'Throw Kunai', desc: '投擲帶有屬性的苦無' },
        { id: 'huuma', name: '投擲風魔手裡劍', en: 'Throw Huuma Shuriken', desc: '巨大十字手裡劍貫穿直線' },
        { id: 'flaming_petals', name: '火炎花', en: 'Flaming Petals', desc: '召喚火蓮花爆發灼燒' },
        { id: 'lightning_strike', name: '雷擊', en: 'Lightning Strike', desc: '引導閃電落雷劈殺' }
      ]
    },
    gunslinger: {
      name: '神槍手 (Gunslinger)',
      icon: '🔫',
      skills: [
        BASIC_ATTACK_SKILL,
        { id: 'triple_action', name: '三連射', en: 'Triple Action', desc: '極速連開三槍' },
        { id: 'rapid_shower', name: '急速射擊', en: 'Rapid Shower', desc: '雙槍暴風雨般密集掃射' },
        { id: 'spread_attack', name: '散彈射擊', en: 'Spread Attack', desc: '扇形範圍大面積散彈' },
        { id: 'desperado', name: '亡命之徒', en: 'Desperado', desc: '瘋狂向周圍無死角盲射' },
        { id: 'ground_drift', name: '地面飄移', en: 'Ground Drift', desc: '在地面設置連環地雷' },
        { id: 'tracking', name: '追蹤射擊', en: 'Tracking', desc: '精準鎖定狙擊致命弱點' }
      ]
    }
  };

  // ==========================================
  // 2. 關卡與活動配置清單 (Stages & Events Config)
  // ==========================================
  const STAGES_CONFIG = [
    { id: 'auto', name: '🔄 自動 (預設最新關卡)', index: -1 },
    { id: 'prontera', name: '1. 普隆德拉原野 (Lv 1–8)', index: 0 },
    { id: 'sewer', name: '2. 普隆德拉下水道 (Lv 9–12)', index: 1 },
    { id: 'sunken', name: '3. 沉船 (Lv 13–15)', index: 2 },
    { id: 'byalan', name: '4. 柏亞蘭島 (Lv 16–20)', index: 3 },
    { id: 'payon', name: '5. 斐揚森林 (Lv 21–25)', index: 4 },
    { id: 'payon_cave', name: '6. 斐揚洞穴 (Lv 26–30)', index: 5 },
    { id: 'louyang', name: '🏮 洛陽 燈籠節活動 (Lv 26–30)', index: -1 }
  ];

  const RARITY_NAMES = ['普通', '優良', '稀有', '史詩', '傳說'];
  const RARITY_SCORES = [0, 100, 300, 600, 1200];

  // ==========================================
  // 3. 設定與儲存庫 (Configuration & Storage)
  // ==========================================
  const STORAGE_KEY = 'ro_survivors_helper_v17';

  const defaultConfig = {
    lang: 'zh',               // 介面語言: 'zh' (繁體中文, 預設), 'en' (English)
    enabled: false,           // 總開關 (預設關閉，由玩家手動點擊啟動)
    autoEnterMap: true,       // 自動進入怪獸地圖
    autoAcceptPartyCheck: false, // 🤝 組隊自動同意出發 (跟車模式: 隊長開始時自動點擊就緒；開啟時自動取消「自動進入地圖」)
    autoReParty: false,          // 👥 場次結束自動退隊並重新組隊 (防遊戲原生隊伍狀態卡死)
    partyRole: 'leader',         // 組隊定位: 'leader' (隊長: 自動邀請勾選好友), 'member' (隊員: 待命自動同意入隊與出發)
    partyInviteFriends: [],      // 👥 隊長模式下目標自動組隊的好友名單 (字串陣列)
    autoSelectLobby: true,    // 自動隨機選擇大廳 (避開額滿大廳)
    autoFestival: false,      // 🏮 優先循環燈籠節活動 (洛陽刷扭蛋)
    targetStage: 'auto',      // 目標關卡 ID ('auto', 'prontera', 'payon_cave', 'louyang', 等)
    autoFocus: true,          // 自動專注 (Focus ×3 出現率) 核心優先技能
    focusKeywords: '狂擊, 怒爆, Bash, Magnum Break', // 🎯 指定專注技能名單
    autoBanish: true,         // 自動放逐 (Banish) 非優先/不需要技能
    banishOnlyWhenSlotsFull: true, // 🔒 技能槽滿 (4格) 後才放逐 (三導管/純粹流派必備：未滿槽前暫緩放逐節省點數)
    autoRerollDeck: false,    // 🎲 畫面上無專注技能時優先整副重抽 (Reroll deck，已依使用者需求停用)
    banishProtectedKeywords: '治癒, 快速恢復, 霸體, 心神凝聚, 隱匿, 幸運, 體質, 力量, 敏捷, 智力, HP, ATK, ASPD', // 🛡️ 放逐保護名單 (選擇絕對不放逐誰)
    banishKeywords: '挑釁, 噴沙, 撒菱, 投擲石頭, 製造聖水, 跑步', // 🚫 優先放逐黑名單 (見到必放逐)
    jobSettings: JSON.parse(JSON.stringify(DEFAULT_JOB_SETTINGS)), // 各職業專屬技能配置
    skillsConfigured: false,  // 是否已手動開啟並確認過技能配置彈窗
    itemSettings: {
      focus: ['p_discovery', 'e_surprise', 'b_plenty', 'g_avarice'], // 🎒 打寶專注核心名單 (尋寶藥水、驚奇秘藥、豐饒祝福、貪婪之神)
      banish: [] // 🚫 關卡道具放逐名單
    },
    itemsConfigured: false,   // 是否已手動開啟並確認過道具配置彈窗
    preferredAffixes: ['targets', 'cooldown', 'damage'], // ✨ 技能升級詞綴偏好優先名單 (+目標, 冷卻縮減, 傷害提升 等)
    autoPickCard: true,       // 自動升級選卡
    autoResume: true,         // 自動解除暫停 (切分頁/ESC 自動繼續)
    backgroundMode: true,     // 🔄 允許縮小視窗與切換分頁 (背景持續運行 60 FPS)
    autoRestart: true,        // 結算畫面自動重開
    autoLootRoll: true,       // 🎁 自動組隊結算分寶 (Auto Loot Roll)
    lootRollMode: 'greed_need_legendary', // 分寶策略: 'greed_need_legendary'(傳奇Need其餘Greed), 'all_greed'(全部Greed), 'all_pass'(全部放棄)
    prioritizeDeity: true,    // 優先選擇神祇 (Deity)
    prioritizeRarity: true,   // 級別最高優先 (傳說>史詩>稀有>優良>普通)
    selectedJob: 'swordsman', // 當前選擇職業
    cardStrategy: 'rarity_first', // 選卡策略: 'rarity_first', 'keyword', 'priority', 'first'
    cardKeywords: '狂擊, 怒爆, 治癒, 火球, 火箭, 暴擊, 攻擊, 攻速, 力量, 敏捷, 體質, 幸運, 智力, Heal, Fire, Magnum, Bash, HP, ATK, ASPD, Critical',
    pickDelayMs: 800,         // 選卡延遲（毫秒）
    targetStageIndex: -1,     // 相容舊版
    levelUpMode: 'instant',   // 升級方式: 'instant'(立即升級), 'accumulate'(累積升級)
    autoOpenBank: true,       // 累積模式下是否自動點擊開啟批次選卡 (按 B)
    customDiffEnabled: false, // 是否自訂關卡難度 (出發確認時自動同步)
    difficulty: {
      count: 1.0,             // 敵人數量 1.0 ~ 3.5 (100% ~ 350%)
      damage: 1.0,            // 敵人傷害 1.0 ~ 1.75 (100% ~ 175%)
      hp: 1.0,                // 敵人生命 1.0 ~ 2.5 (100% ~ 250%)
      speed: 1.0,             // 敵人速度 1.0 ~ 1.75 (100% ~ 175%)
      events: 1.0             // 事件數量 1.0 ~ 2.5 (100% ~ 250%)
    },
    minimized: false,         // 控制台最小化
    stats: {
      runsStarted: 0,
      cardsPicked: 0,
      restarts: 0,
      resumes: 0,
      lobbiesPicked: 0,
      festivalsEntered: 0,
      focusedSkills: 0,
      banishedSkills: 0,
      deaths: 0
    }
  };

  function loadConfig() {
    try {
      let saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) saved = localStorage.getItem('ro_survivors_helper_v16');
      if (!saved) saved = localStorage.getItem('ro_survivors_helper_v14');
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = Object.assign({}, defaultConfig, parsed);

        // 重整網頁時清空即時統計數據 (Reset session stats on page reload)
        merged.stats = Object.assign({}, defaultConfig.stats);

        // 預設不自動啟動：載入或重新整理時保持待命狀態，需由玩家手動點擊「▶️ 啟動助手」
        merged.enabled = false;

        // 若舊版儲存了已移除的 keyword 策略，自動轉移至 rarity_first
        if (merged.cardStrategy === 'keyword') {
          merged.cardStrategy = 'rarity_first';
        }

        // 若舊版儲存了已移除的關卡 (7 關、8 關或 9 關)，自動轉移至 auto
        if (merged.targetStage === 'prt_castle' || merged.targetStage === 'orcs' || merged.targetStage === 'pyramid') {
          merged.targetStage = 'auto';
        }

        // 難度設定防呆補全
        if (!merged.difficulty || typeof merged.difficulty !== 'object') {
          merged.difficulty = Object.assign({}, defaultConfig.difficulty);
        } else {
          merged.difficulty = Object.assign({}, defaultConfig.difficulty, merged.difficulty);
        }

        if (typeof merged.autoAcceptPartyCheck !== 'boolean') {
          merged.autoAcceptPartyCheck = false;
        }
        if (typeof merged.backgroundMode !== 'boolean') {
          merged.backgroundMode = true;
        }
        isBackgroundModeActive = merged.backgroundMode;
        if (typeof merged.autoReParty !== 'boolean') {
          merged.autoReParty = false;
        }
        if (!['leader', 'member'].includes(merged.partyRole)) {
          merged.partyRole = 'leader';
        }
        if (!Array.isArray(merged.partyInviteFriends)) {
          merged.partyInviteFriends = [];
        }
        // 互斥防呆：若開啟組隊同意且非隊長，自動進入地圖保持關閉
        if (merged.autoAcceptPartyCheck && merged.partyRole === 'member') {
          merged.autoEnterMap = false;
        }

        if (typeof merged.banishOnlyWhenSlotsFull !== 'boolean') {
          merged.banishOnlyWhenSlotsFull = true;
        }
        merged.autoRerollDeck = false;
        if (typeof merged.autoLootRoll !== 'boolean') {
          merged.autoLootRoll = true;
        }
        if (!['greed_need_legendary', 'all_greed', 'all_pass'].includes(merged.lootRollMode)) {
          merged.lootRollMode = 'greed_need_legendary';
        }

        // 統計數據防呆規格化
        if (!merged.stats || typeof merged.stats !== 'object') {
          merged.stats = Object.assign({}, defaultConfig.stats);
        } else {
          merged.stats.deaths = Number(merged.stats.deaths) || 0;
        }

        // 深度規格化整合 jobSettings，確保所有職業的 focus 與 banish 皆存在且為有效陣列 (防呆避免 TypeError)
        const cleanJobSettings = JSON.parse(JSON.stringify(DEFAULT_JOB_SETTINGS));
        if (parsed.jobSettings && typeof parsed.jobSettings === 'object') {
          for (const [jobKey, jobCfg] of Object.entries(parsed.jobSettings)) {
            if (cleanJobSettings[jobKey] && jobCfg && typeof jobCfg === 'object') {
              cleanJobSettings[jobKey] = {
                focus: Array.isArray(jobCfg.focus) ? jobCfg.focus : [...(cleanJobSettings[jobKey].focus || [])],
                banish: Array.isArray(jobCfg.banish) ? jobCfg.banish : [...(cleanJobSettings[jobKey].banish || [])]
              };
            }
          }
        }
        // 若使用舊版法師預設值，無縫升級為三導管標準箭術配置 (並確保所有非導管技能皆在放逐清單)
        if (cleanJobSettings.mage) {
          const oldMageFocus = JSON.stringify(cleanJobSettings.mage.focus);
          if (oldMageFocus === JSON.stringify(['火箭術', '雷爆術']) || oldMageFocus === JSON.stringify(['火箭術'])) {
            cleanJobSettings.mage.focus = [...DEFAULT_JOB_SETTINGS.mage.focus];
          }
          if (!Array.isArray(cleanJobSettings.mage.banish)) {
            cleanJobSettings.mage.banish = [...DEFAULT_JOB_SETTINGS.mage.banish];
          } else {
            DEFAULT_JOB_SETTINGS.mage.banish.forEach(bSkill => {
              if (!cleanJobSettings.mage.focus.includes(bSkill) && !cleanJobSettings.mage.banish.includes(bSkill)) {
                cleanJobSettings.mage.banish.push(bSkill);
              }
            });
          }
        }
        merged.jobSettings = cleanJobSettings;
        return merged;
      }
    } catch (e) {
      console.warn('[RO Helper] 讀取設定失敗，使用預設值', e);
    }
    const def = Object.assign({}, defaultConfig);
    def.jobSettings = JSON.parse(JSON.stringify(DEFAULT_JOB_SETTINGS));
    return def;
  }

  function saveConfig() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (e) {
      console.warn('[RO Helper] 儲存設定失敗', e);
    }
  }

  // ==========================================
  // 3.1 選卡與道具選擇歷史紀錄庫 (Pick History Storage)
  // ==========================================
  const STORAGE_KEY_HISTORY = 'ro_survivors_pick_history_v1';

  function loadPickHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed.slice(0, 50);
      }
    } catch (e) {
      console.warn('[RO Helper] 讀取選卡歷史紀錄失敗', e);
    }
    return [];
  }

  function savePickHistory() {
    try {
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(pickHistory.slice(0, 50)));
    } catch (e) {
      console.warn('[RO Helper] 儲存選卡歷史紀錄失敗', e);
    }
  }

  let pickHistory = loadPickHistory();
  let currentPickActions = [];

  function recordPickHistory(type, cards, chosenIndex, chosenCard, actionsTaken = []) {
    try {
      if (!chosenCard || !cards || cards.length === 0) return;
      const idInfo = getCardSkillIdentity(chosenCard);
      const candidates = cards.map((c, i) => {
        const cName = c.querySelector('.pk-name')?.textContent?.trim() || `#${i + 1}`;
        const cSub = c.querySelector('.pk-sub')?.textContent?.trim() || '';
        const lines = Array.from(c.querySelectorAll('.pk-lines li'))
          .map(li => li.textContent.trim())
          .filter(Boolean);
        const cDesc = lines.join(' · ') || '';
        const cRarity = getCardRarity(c);
        const cId = getCardSkillIdentity(c);
        const isChosen = (i === chosenIndex);
        return {
          index: i,
          name: cName,
          sub: cSub,
          desc: cDesc,
          lines: lines,
          rarity: cRarity,
          rarityName: RARITY_NAMES[cRarity] || '普通',
          isColdClone: cId ? cId.isColdClone : false,
          originalSkill: cId ? cId.originalSkill : '',
          isChosen: isChosen
        };
      });

      const chosenLines = Array.from(chosenCard.querySelectorAll('.pk-lines li'))
        .map(li => li.textContent.trim())
        .filter(Boolean);
      const chosenDesc = chosenLines.join(' · ') || '';
      const chosenRarity = getCardRarity(chosenCard);
      const record = {
        id: Date.now() + '_' + Math.floor(Math.random() * 1000),
        timestamp: Date.now(),
        timeStr: new Date().toLocaleTimeString('zh-TW', { hour12: false }),
        type: type,
        typeName: type === 'chest' ? '📦 寶箱道具' : (type === 'story' ? '📖 劇情獎勵' : '⭐ 升級技能'),
        totalCandidates: cards.length,
        chosenIndex: chosenIndex,
        chosenName: chosenCard.querySelector('.pk-name')?.textContent?.trim() || `#${chosenIndex + 1}`,
        chosenSub: chosenCard.querySelector('.pk-sub')?.textContent?.trim() || '',
        chosenDesc: chosenDesc,
        chosenLines: chosenLines,
        chosenRarity: chosenRarity,
        chosenRarityName: RARITY_NAMES[chosenRarity] || '普通',
        chosenIsClone: idInfo ? idInfo.isColdClone : false,
        chosenOriginalSkill: idInfo ? idInfo.originalSkill : '',
        candidates: candidates,
        actionsTaken: Array.isArray(actionsTaken) ? [...actionsTaken] : []
      };

      pickHistory.unshift(record);
      if (pickHistory.length > 50) {
        pickHistory = pickHistory.slice(0, 50);
      }
      savePickHistory();
      const histModal = document.getElementById('ro-helper-history-modal');
      if (histModal && histModal.style.display !== 'none') {
        renderHistoryModalContent();
      }
    } catch (e) {
      console.warn('[RO Helper] 記錄選卡歷史例外:', e);
    }
  }

  const config = loadConfig();

  // 安全取得並規格化指定職業的技能配置 (確保 focus 與 banish 恆為 Array，防呆防爆)
  function getJobConfig(jobKey) {
    if (!config.jobSettings || typeof config.jobSettings !== 'object') {
      config.jobSettings = JSON.parse(JSON.stringify(DEFAULT_JOB_SETTINGS));
    }
    const def = DEFAULT_JOB_SETTINGS[jobKey] || { focus: [], banish: [] };
    if (!config.jobSettings[jobKey] || typeof config.jobSettings[jobKey] !== 'object') {
      config.jobSettings[jobKey] = JSON.parse(JSON.stringify(def));
    }
    const cur = config.jobSettings[jobKey];
    if (!Array.isArray(cur.focus)) {
      cur.focus = Array.isArray(def.focus) ? [...def.focus] : [];
    }
    if (!Array.isArray(cur.banish)) {
      cur.banish = Array.isArray(def.banish) ? [...def.banish] : [];
    }
    return cur;
  }

  // ==========================================
  // 4. 狀態機與計時器 (State & Timers)
  // ==========================================
  let isPickingCard = false;
  let isWalkingToNpc = false;
  let isSelectingLobby = false;
  let hasBanishedInThisPick = false;
  let pickerRetryTimer = null;
  let pickedActionAttempts = new Set();
  let cardPickerOpenedAt = 0; // 選卡介面開啟時間戳記 (看門狗防呆防卡死)
  let currentGameState = 'UNKNOWN';
  let lastKnownGameState = 'UNKNOWN';
  let lobbyEnteredAt = 0;              // 返回大廳的時間戳記 (用於結算後冷卻等待)
  let wasInParty = false;              // 記錄上局是否處於組隊狀態 (防剛回大廳瞬間單人搶進)
  const LOBBY_POST_RUN_COOLDOWN_MS = 7000; // 結算回大廳後之隊友同步安全緩衝期 (拉長至 7 秒)
  let partyLeaveTriggered = false;     // 本次返回大廳後是否已觸發過退隊重組
  let partyLeftAt = 0;                 // 退出隊伍的時間戳記 (退隊後伺服器狀態重置緩衝)
  let partyAllReadyAt = 0;             // 全員入隊且就緒的時間戳記 (出發前連線穩定緩衝)
  let lastInviteSentAt = 0;            // 上次向好友發送組隊邀請的時間戳記 (防狂點)
  let isLeavingParty = false;          // 是否正在執行退隊中
  let festivalNavPhase = 0; // 0: 待命, 1: 走向遠征隊長座標, 2: 從隊長走向節慶主持人
  let navStepCount = 0;
  let statusTextEl = null;
  let statsEl = null;
  let stateBadgeEl = null;
  let jobSkillsContainer = null;
  let activeToastEl = null;
  let toastTimer = null;

  /**
   * 遊戲內懸浮半透明通知 Toast
   */
  function showToast(msg, durationMs = 2500) {
    try {
      if (!document.body) return;
      if (!activeToastEl) {
        activeToastEl = document.createElement('div');
        activeToastEl.id = 'ro-helper-toast';
        activeToastEl.style.cssText = `
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 23, 42, 0.94);
          color: #f8fafc;
          border: 1px solid #38bdf8;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 12px rgba(56, 189, 248, 0.4);
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          z-index: 999999;
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
          text-align: center;
          letter-spacing: 0.5px;
        `;
        document.body.appendChild(activeToastEl);
      }
      activeToastEl.textContent = msg;
      activeToastEl.style.opacity = '1';
      activeToastEl.style.transform = 'translateX(-50%) translateY(0)';

      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        if (activeToastEl) {
          activeToastEl.style.opacity = '0';
          activeToastEl.style.transform = 'translateX(-50%) translateY(-10px)';
        }
      }, durationMs);
    } catch (e) {
      console.warn('[RO Helper] showToast 例外:', e);
    }
  }

  function updateStatus(text) {
    if (statusTextEl && statusTextEl.textContent !== text) {
      statusTextEl.textContent = text;
    }
  }

  function updateStateBadge(state) {
    if (!stateBadgeEl) return;
    const stateMap = {
      SPLASH: '標題畫面',
      CHAR_SELECT: '角色選擇',
      LOBBY: '普隆德拉大廳',
      LOBBY_PICKER: '🌐 選擇分流',
      STAGES_WINDOW: '關卡清單',
      FESTIVAL_WINDOW: '🏮 燈籠節活動',
      NPC_DIALOG: '出發確認',
      WIKI_WINDOW: '圖書館 (Wiki)',
      IN_COMBAT: '戰鬥中',
      CARD_PICKER: '⭐ 升級選卡中',
      PAUSED: '⏸️ 遊戲暫停中',
      STORY: '劇情對話',
      GAME_OVER: '戰鬥結算',
      UNKNOWN: '未知狀態'
    };
    stateBadgeEl.textContent = stateMap[state] || state;
  }

  function updateUIStats() {
    if (statsEl) {
      const deathColor = (config.stats.deaths || 0) > 0 ? '#f87171' : '#cbd5e1';
      statsEl.innerHTML = `${t('stats_runs')}: <b>${config.stats.runsStarted}</b> | ${t('stats_cards')}: <b>${config.stats.cardsPicked}</b> | ${t('stats_deaths')}: <b style="color: ${deathColor};">${config.stats.deaths || 0}</b> | ${t('stats_festivals')}: <b>${config.stats.festivalsEntered || 0}</b> | ${t('stats_focus')}: <b>${config.stats.focusedSkills || 0}</b> | ${t('stats_banish')}: <b>${config.stats.banishedSkills || 0}</b> | ${t('stats_lobby')}: <b>${config.stats.lobbiesPicked || 0}</b> | ${t('stats_resumes')}: <b>${config.stats.resumes || 0}</b>`;
    }
  }

  function isVisible(idOrEl) {
    const el = typeof idOrEl === 'string' ? document.getElementById(idOrEl) : idOrEl;
    if (!el) return false;
    return !el.classList.contains('hidden');
  }

  // 鍵盤移動與 NPC 識別輔助函式
  function releaseAllMovementKeys() {
    const moveKeys = [
      { key: 'w', code: 'KeyW' },
      { key: 'a', code: 'KeyA' },
      { key: 's', code: 'KeyS' },
      { key: 'd', code: 'KeyD' }
    ];
    for (const k of moveKeys) {
      window.dispatchEvent(new KeyboardEvent('keyup', { key: k.key, code: k.code, bubbles: true }));
    }
    isWalkingToNpc = false;
  }

  function pressMoveKeys(keys, durationMs, callback) {
    for (const k of keys) {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: k.key, code: k.code, bubbles: true }));
    }
    setTimeout(() => {
      for (const k of keys) {
        window.dispatchEvent(new KeyboardEvent('keyup', { key: k.key, code: k.code, bubbles: true }));
      }
      if (callback) callback();
    }, durationMs);
  }

  function isCaptainPrompt(text) {
    if (!text) return false;
    const t = text.toLowerCase();
    const match = t.includes('隊長') || t.includes('captain') || t.includes('capitán') || t.includes('capitan') || t.includes('capitão') || t.includes('capitao') || t.includes('遠征') || t.includes('出征') || t.includes('expedition');
    const exclude = t.includes('圖書館') || t.includes('書庫') || t.includes('bibliotec') || t.includes('librar') || t.includes('主持人') || t.includes('使者') || t.includes('燈籠') || t.includes('anfitriona') || t.includes('festival') || t.includes('造型') || t.includes('stylist') || t.includes('鐵匠') || t.includes('herrero') || t.includes('smith') || t.includes('郵') || t.includes('correo') || t.includes('postman');
    return match && !exclude;
  }

  function isFestivalPrompt(text) {
    if (!text) return false;
    const t = text.toLowerCase();
    const match = t.includes('主持人') || t.includes('節慶') || t.includes('使者') || t.includes('燈籠') || t.includes('anfitriona') || t.includes('festival') || t.includes('hostess') || t.includes('anfitriã') || t.includes('anfitria');
    const exclude = t.includes('隊長') || t.includes('captain') || t.includes('capitán') || t.includes('capitan') || t.includes('圖書館') || t.includes('書庫') || t.includes('bibliotec') || t.includes('librar') || t.includes('造型') || t.includes('stylist') || t.includes('鐵匠') || t.includes('herrero') || t.includes('smith') || t.includes('郵') || t.includes('correo') || t.includes('postman');
    return match && !exclude;
  }

  function isLibrarianPrompt(text) {
    if (!text) return false;
    const t = text.toLowerCase();
    return t.includes('圖書館') || t.includes('書庫') || t.includes('bibliotec') || t.includes('librar');
  }

  /**
   * 智慧 NPC 視覺標籤搜尋器 (自遊戲 DOM #lobby-labels 讀取投影座標)
   */
  function findNpcLabel(type) {
    const labels = Array.from(document.querySelectorAll('#lobby-labels .lobby-name.npc'));
    if (labels.length === 0) return null;

    if (type === 'festival') {
      return labels.find(el => isFestivalPrompt(el.textContent)) || null;
    }
    if (type === 'captain') {
      return labels.find(el => isCaptainPrompt(el.textContent)) || null;
    }
    return null;
  }

  /**
   * 觸發遊戲原生 3D 空間點擊與 A* 避障尋路
   */
  function clickOnNpc(npcLabel) {
    if (!npcLabel) return false;
    const rect = npcLabel.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return false;

    // NPC 身體與腳底位於頭頂名字標籤下方約 30~45 像素
    const clientX = rect.left + rect.width / 2;
    const clientY = Math.min(window.innerHeight - 10, rect.bottom + 35);

    // 1. 桌面端 mouse 事件 (向最上層渲染畫布 canvas:last-child 派發 pointerdown 喚醒 ZM.go -> moveTo)
    const canvases = Array.from(document.querySelectorAll('#stage canvas, canvas'));
    const targetCanvas = canvases[canvases.length - 1] || document.getElementById('stage');
    if (targetCanvas) {
      targetCanvas.dispatchEvent(new PointerEvent('pointerdown', {
        clientX,
        clientY,
        button: 0,
        buttons: 1,
        pointerType: 'mouse',
        bubbles: true,
        cancelable: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        clientX,
        clientY,
        button: 0,
        buttons: 0,
        pointerType: 'mouse',
        bubbles: true,
        cancelable: true
      }));
    }

    // 2. 觸控端 touch 事件 (向 #stage 派發 pointerdown 並向 window 派發 pointerup 喚醒原生 world3d.pickGround -> moveTo)
    const stage = document.getElementById('stage');
    if (stage) {
      stage.dispatchEvent(new PointerEvent('pointerdown', {
        clientX,
        clientY,
        button: 0,
        buttons: 1,
        pointerType: 'touch',
        bubbles: true,
        cancelable: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        clientX,
        clientY,
        button: 0,
        buttons: 0,
        pointerType: 'touch',
        bubbles: true,
        cancelable: true
      }));
    }

    return true;
  }

  function detectGameState() {
    // 1. 選卡畫面 (最高優先權)
    if (isVisible('picker')) return 'CARD_PICKER';

    // 2. 暫停畫面
    if (isVisible('pause')) return 'PAUSED';

    // 3. 結算畫面
    if (isVisible('gameover')) return 'GAME_OVER';

    // 4. 劇情對話
    if (isVisible('story')) return 'STORY';

    // 5. 燈籠節活動視窗
    if (isVisible('festival')) return 'FESTIVAL_WINDOW';

    // 5.1 圖書館 (Wiki) 視窗
    if (isVisible('wiki')) return 'WIKI_WINDOW';

    // 6. 大廳選擇對話框 (Lobby Picker)
    if (isVisible('npc-dialog')) {
      if (document.querySelector('#npc-dialog .lb-pick') || document.querySelector('#npc-dialog [data-lb]')) {
        return 'LOBBY_PICKER';
      }
      return 'NPC_DIALOG';
    }

    // 7. 關卡選擇
    if (isVisible('stages')) return 'STAGES_WINDOW';

    // 8. 大廳
    if (document.body.classList.contains('in-lobby')) return 'LOBBY';

    // 9. 戰鬥中
    if (isVisible('hud') && !document.body.classList.contains('in-lobby')) return 'IN_COMBAT';

    // 10. 選角與標題
    if (isVisible('charselect')) return 'CHAR_SELECT';
    const spPlay = document.getElementById('sp-play');
    if (document.getElementById('splash') && spPlay && spPlay.offsetWidth > 0) return 'SPLASH';

    return 'UNKNOWN';
  }

  // ==========================================
  // 5. 智慧分析技能與道具的「級別/品質」
  // ==========================================
  function getCardRarity(cardEl) {
    if (!cardEl) return 0;

    const badge = (cardEl.querySelector('.pk-badge')?.textContent || '').trim().toLowerCase();
    if (badge.includes('傳說') || badge.includes('legend')) return 4;
    if (badge.includes('史詩') || badge.includes('epic') || badge.includes('épic')) return 3;
    if (badge.includes('稀有') || badge.includes('rare') || badge.includes('raro') || badge.includes('rara')) return 2;
    if (badge.includes('優良') || badge.includes('uncommon') || badge.includes('poco común')) return 1;
    if (badge.includes('普通') || badge.includes('common') || badge.includes('común')) return 0;

    const fullText = (cardEl.textContent || '').toLowerCase();
    if (fullText.includes('傳說') || fullText.includes('legend')) return 4;
    if (fullText.includes('史詩') || fullText.includes('epic') || fullText.includes('épic')) return 3;
    if (fullText.includes('稀有') || fullText.includes('rare') || fullText.includes('raro') || fullText.includes('rara')) return 2;
    if (fullText.includes('優良') || fullText.includes('uncommon') || fullText.includes('poco común')) return 1;

    const slot = cardEl.closest('.pk-slot');
    if (slot) {
      const qColor = (slot.style.getPropertyValue('--q') || '').trim().toLowerCase();
      if (qColor.includes('ffa500') || qColor.includes('orange')) return 4;
      if (qColor.includes('9f44f5') || qColor.includes('purple')) return 3;
      if (qColor.includes('2f7bff') || qColor.includes('blue')) return 2;
      if (qColor.includes('3ddc5a') || qColor.includes('green')) return 1;
      if (qColor.includes('f2f2f2') || qColor.includes('9aa6c4')) return 0;
    }

    return 0;
  }

  // ==========================================
  // 6. 特殊特權 (Perks: Focus, Banish, Reroll) 按鈕尋找器
  // ==========================================
  function getCardActionButtons(card) {
    if (!card) return [];
    const cardIdx = card.getAttribute('data-i');
    if (cardIdx !== null && cardIdx !== undefined) {
      const actBtns = Array.from(document.querySelectorAll(`.pk-act[data-act^="${cardIdx}:"]`));
      if (actBtns.length > 0) return actBtns;
    }
    const pop = card.closest('.pk-pop') || card.parentElement;
    if (pop) {
      const actBtns = Array.from(pop.querySelectorAll('.pk-act'));
      if (actBtns.length > 0) return actBtns;
    }
    const slot = card.closest('.pk-slot');
    if (slot) {
      const actBtns = Array.from(slot.querySelectorAll('.pk-act'));
      if (actBtns.length > 0) return actBtns;
    }
    return [];
  }

  function isFocusActButton(btn) {
    if (!btn) return false;
    const text = (btn.textContent || '').toLowerCase();
    const title = (btn.title || '').toLowerCase();
    
    // 排除放逐與重抽
    if (text.includes('banish') || text.includes('放逐') || text.includes('desterrar') || text.includes('banir') ||
        title.includes('banish') || title.includes('放逐') || title.includes('desterrar') || title.includes('banir') ||
        title.includes('不再出現') || title.includes('no volverá')) {
      return false;
    }
    if (text.includes('reroll') || text.includes('重抽') || text.includes('重洗') ||
        title.includes('reroll') || title.includes('重抽')) {
      return false;
    }

    // 命中專注
    if (text.includes('focus') || text.includes('專注') || text.includes('concentrar') || text.includes('enfocar') || text.includes('focar') ||
        title.includes('focus') || title.includes('專注') || title.includes('prioridad') || title.includes('優先') || title.includes('priority') || title.includes('prioridade')) {
      return true;
    }

    return false;
  }

  function isBanishActButton(btn) {
    if (!btn) return false;
    const text = (btn.textContent || '').toLowerCase();
    const title = (btn.title || '').toLowerCase();

    // 排除專注與重抽
    if (text.includes('focus') || text.includes('專注') || text.includes('concentrar') || text.includes('enfocar') || text.includes('focar') ||
        title.includes('focus') || title.includes('專注') || title.includes('prioridad') || title.includes('優先') || title.includes('priority')) {
      return false;
    }
    if (text.includes('reroll') || text.includes('重抽') || text.includes('重洗') ||
        title.includes('reroll') || title.includes('重抽')) {
      return false;
    }

    // 命中放逐
    if (text.includes('banish') || text.includes('放逐') || text.includes('desterrar') || text.includes('banir') ||
        title.includes('banish') || title.includes('放逐') || title.includes('desterrar') || title.includes('banir') ||
        title.includes('no volverá') || title.includes('不再出現') || title.includes('não voltará')) {
      return true;
    }

    return false;
  }

  function findFocusButton(card, attemptedSet = null) {
    const cardName = card ? (card.querySelector('.pk-name')?.textContent?.trim() || '') : '';
    const btns = getCardActionButtons(card);
    for (const btn of btns) {
      const actId = btn.getAttribute('data-act');
      const actKey = actId ? `${actId}_${cardName}` : null;
      if (attemptedSet && actKey && attemptedSet.has(actKey)) continue;
      if (isFocusActButton(btn) && !btn.disabled && !btn.classList.contains('disabled')) {
        const small = btn.querySelector('small');
        if (small && small.textContent.trim() === '0') continue;
        return btn;
      }
    }
    // 備用語意回退：若該卡有 2 個特權按鈕，在非 reroll 情況下，第一個通常為 Focus
    if (btns.length === 2 && !btns[0].disabled && !btns[0].classList.contains('disabled')) {
      const actId = btns[0].getAttribute('data-act');
      const actKey = actId ? `${actId}_${cardName}` : null;
      if (!attemptedSet || !actKey || !attemptedSet.has(actKey)) {
        if (!isBanishActButton(btns[0])) {
          const small = btns[0].querySelector('small');
          if (!small || small.textContent.trim() !== '0') return btns[0];
        }
      }
    }
    return null;
  }

  function findBanishButton(card, attemptedSet = null) {
    const cardName = card ? (card.querySelector('.pk-name')?.textContent?.trim() || '') : '';
    const btns = getCardActionButtons(card);
    for (const btn of btns) {
      const actId = btn.getAttribute('data-act');
      const actKey = actId ? `${actId}_${cardName}` : null;
      if (attemptedSet && actKey && attemptedSet.has(actKey)) continue;
      if (isBanishActButton(btn) && !btn.disabled && !btn.classList.contains('disabled')) {
        const small = btn.querySelector('small');
        if (small && small.textContent.trim() === '0') continue;
        return btn;
      }
    }
    // 備用語意回退：若該卡有多個特權按鈕，最後一個通常為 Banish
    if (btns.length >= 2) {
      const last = btns[btns.length - 1];
      const actId = last.getAttribute('data-act');
      const actKey = actId ? `${actId}_${cardName}` : null;
      if (!attemptedSet || !actKey || !attemptedSet.has(actKey)) {
        if (!last.disabled && !last.classList.contains('disabled') && !isFocusActButton(last)) {
          const small = last.querySelector('small');
          if (!small || small.textContent.trim() !== '0') return last;
        }
      }
    }
    return null;
  }

  function findRerollDeckButton(attemptedSet = null) {
    const bar = document.getElementById('pk-bar');
    if (!bar || bar.classList.contains('hidden')) return null;
    const btns = bar.querySelectorAll('.pk-act');
    for (const btn of btns) {
      const actId = btn.getAttribute('data-act') || 'reroll_deck';
      if (attemptedSet && attemptedSet.has(actId)) continue;
      const text = (btn.textContent || '').toLowerCase();
      const title = (btn.title || '').toLowerCase();
      if ((text.includes('reroll') || text.includes('重抽') || text.includes('重洗') ||
           title.includes('reroll') || title.includes('重抽') || title.includes('cambia todas')) &&
          !btn.disabled && !btn.classList.contains('disabled')) {
        const small = btn.querySelector('small');
        if (small && small.textContent.trim() === '0') continue;
        return btn;
      }
    }
    return null;
  }

  function findRerollCardButton(card, attemptedSet = null) {
    const cardName = card ? (card.querySelector('.pk-name')?.textContent?.trim() || '') : '';
    const btns = getCardActionButtons(card);
    for (const btn of btns) {
      const actId = btn.getAttribute('data-act');
      const actKey = actId ? `${actId}_${cardName}` : null;
      if (attemptedSet && actKey && attemptedSet.has(actKey)) continue;
      const text = (btn.textContent || '').toLowerCase();
      const title = (btn.title || '').toLowerCase();
      if ((text.includes('reroll') || text.includes('重抽') ||
           title.includes('reroll') || title.includes('volver a tirar')) &&
          !btn.disabled && !btn.classList.contains('disabled')) {
        const small = btn.querySelector('small');
        if (small && small.textContent.trim() === '0') continue;
        return btn;
      }
    }
    return null;
  }

  /**
   * 確實派發特權按鈕點擊事件 (Focus + PointerDown/Up + MouseDown/Up + Click + Direct onclick)
   * 確保穿透遊戲內部事件處理並百分之百執行特權動作
   */
  function triggerActionButton(btn) {
    if (!btn) return;
    try { btn.focus(); } catch (e) {}
    try {
      btn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
      btn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
      btn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
      btn.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true }));
      btn.click();
    } catch (e) {
      console.warn('[RO Helper] 派發按鈕點擊事件失敗:', e);
    }
    // 直接調用原生綁定的 onclick 事件函式作為最終保底
    if (typeof btn.onclick === 'function') {
      try {
        btn.onclick(new MouseEvent('click', { bubbles: true, cancelable: true }));
      } catch (e) {}
    }
  }

  // ==========================================
  // 7. 核心自動化邏輯 (Automation Handlers)
  // ==========================================

  /**
   * 自動隨機選擇大廳 (避開滿員大廳，防止卡住)
   */
  function handleLobbyPicker() {
    if (!config.autoSelectLobby || isSelectingLobby) return;

    const dialog = document.getElementById('npc-dialog');
    if (!dialog || dialog.classList.contains('hidden')) return;

    const lobbyBtns = Array.from(dialog.querySelectorAll('[data-lb]'));
    if (lobbyBtns.length === 0) return;

    isSelectingLobby = true;
    updateStatus('🌐 偵測到大廳選擇！正在挑選可用分流...');

    setTimeout(() => {
      try {
        const availableBtns = lobbyBtns.filter(btn => {
          return !btn.classList.contains('full') &&
                 !btn.disabled &&
                 !btn.classList.contains('disabled');
        });

        let targetBtn = null;
        if (availableBtns.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableBtns.length);
          targetBtn = availableBtns[randomIndex];
          const name = targetBtn.querySelector('b')?.textContent || `Lobby #${targetBtn.dataset.lb}`;
          updateStatus(`🌐 隨機進入大廳: [${name}] (共 ${availableBtns.length} 個可用)`);
          console.log(`[RO Helper] 隨機選擇非滿員大廳: [${name}] (data-lb: ${targetBtn.dataset.lb})`);
        } else {
          console.warn('[RO Helper] 所有大廳皆顯示已滿，嘗試點擊單人大廳或備用按鈕');
          const soloBtn = Array.from(dialog.querySelectorAll('#npc-options button')).find(b =>
            (b.textContent || '').toLowerCase().includes('solo') ||
            (b.textContent || '').toLowerCase().includes('單人')
          );
          targetBtn = soloBtn || lobbyBtns[0];
          updateStatus('🌐 大廳皆滿員，進入單人/備用大廳...');
        }

        if (targetBtn) {
          targetBtn.click();
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
          config.stats.lobbiesPicked = (config.stats.lobbiesPicked || 0) + 1;
          saveConfig();
          updateUIStats();
        }
      } catch (err) {
        console.error('[RO Helper] 選擇大廳發生例外:', err);
      } finally {
        setTimeout(() => {
          isSelectingLobby = false;
        }, 1200);
      }
    }, 450);
  }

  /**
   * 遊戲暫停自動恢復
   */
  function handlePause() {
    if (!config.autoResume) return;
    const pauseEl = document.getElementById('pause');
    if (pauseEl && !pauseEl.classList.contains('hidden')) {
      const resumeBtn = document.getElementById('btn-resume');
      if (resumeBtn && !resumeBtn.classList.contains('hidden')) {
        updateStatus('⏸️ 偵測到遊戲暫停，自動點擊繼續...');
        resumeBtn.click();
        config.stats.resumes++;
        saveConfig();
        updateUIStats();
      }
    }
  }

  /**
   * 標題與選角畫面登入
   */
  function handleSplashAndLogin() {
    const spPlay = document.getElementById('sp-play');
    if (spPlay && !spPlay.disabled && spPlay.offsetWidth > 0) {
      updateStatus('🎮 標題畫面：點擊開始遊戲...');
      spPlay.click();
      return true;
    }

    const btnPlay = document.getElementById('chr-play');
    if (btnPlay && !btnPlay.disabled && !btnPlay.classList.contains('hidden')) {
      updateStatus('👤 角色選擇：進入普隆德拉...');
      btnPlay.click();
      return true;
    }
    return false;
  }

  // ==========================================
  // 🤝 組隊自動出發確認處理 (Party Ready Check / 跟車模式)
  // 當隊長在隊伍中點選「出發」時，隊員端會彈出 #npc-dialog，
  // 標題通常為「Grupo」或「隊伍」，內文包含「quiere salir con el grupo」或「想與隊伍出發」，
  // 選項包含「No」(拒絕) 與「¡Listo!」(就緒/同意，包含 class .primary)。
  // 開啟 autoAcceptPartyCheck 時，自動偵測並點擊同意出發。
  // ==========================================
  function handlePartyCheck() {
    if (!config.autoAcceptPartyCheck) return false;
    const dialog = document.getElementById('npc-dialog');
    if (!dialog || dialog.classList.contains('hidden')) return false;

    const npcName = (document.getElementById('npc-name')?.textContent || '').toLowerCase().trim();
    const npcText = (document.getElementById('npc-text')?.textContent || '').toLowerCase().trim();
    const dialogFullText = (dialog.textContent || '').toLowerCase();
    const optionsBtns = Array.from(dialog.querySelectorAll('#npc-options button'));

    // 1. 優先檢查：隊長在不同分流頻道，跟隨隊長切換分流 (Ir al canal / 跟隨隊長)
    // 遊戲原生邏輯：v && Ce(d("Grupo"), d("El líder del grupo está en el canal {c}. ¿Vas con él?", {c: v}), [{label: d("Quedarme")}, {label: d("Ir al canal {c}"), primary: !0, run: () => this.hop(v)}])
    const isHopWithLeader = dialogFullText.includes('líder del grupo está en el canal') ||
                            dialogFullText.includes('vas con él') ||
                            (dialogFullText.includes('canal') && dialogFullText.includes('líder')) ||
                            (dialogFullText.includes('分流') && dialogFullText.includes('隊長'));
    if (isHopWithLeader) {
      const hopBtn = dialog.querySelector('#npc-options button.primary') ||
                     optionsBtns.find(b => {
                       const t = (b.textContent || '').toLowerCase();
                       return t.includes('ir al canal') || t.includes('canal') || t.includes('前往') || t.includes('跟隨');
                     });
      if (hopBtn) {
        wasInParty = true;
        updateStatus('🤝 偵測到隊長在不同分流，自動跟隨切換至隊長頻道...');
        console.log('[RO Helper] 🤝 跟隨隊長切換大廳分流 (Party Hop Channel)');
        hopBtn.click();
        hopBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
        hopBtn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
        return true;
      }
    }

    const isPartyTitle = npcName.includes('隊伍') || npcName.includes('組隊') || npcName.includes('grupo') || npcName.includes('party');

    // 2. 隊伍邀請 / 跨分流組隊邀請確認 (Aceptar / 接受入隊)
    // 支援多語言：中文 (邀請你加入隊伍/邀請加入/組隊邀請)、英文 (invites you to their party/invite)、西文 (te invita a su grupo)
    const isPartyInvite = dialogFullText.includes('invit') ||
                          dialogFullText.includes('邀請') ||
                          dialogFullText.includes('convid') ||
                          dialogFullText.includes('te invita') ||
                          dialogFullText.includes('a su grupo') ||
                          (isPartyTitle && (dialogFullText.includes('加入') || dialogFullText.includes('join')));

    if (isPartyInvite) {
      const acceptBtn = dialog.querySelector('#npc-options button.primary') ||
                        optionsBtns.find(b => {
                          const t = (b.textContent || '').toLowerCase();
                          return t.includes('aceptar') || t.includes('接受') || t.includes('同意') ||
                                 t.includes('accept') || t.includes('agree') || t.includes('join') ||
                                 t.includes('sim') || t.includes('yes');
                        }) ||
                        (optionsBtns.length === 2 ? optionsBtns[1] : null);

      if (acceptBtn) {
        wasInParty = true;
        partyLeaveTriggered = true; // 關鍵！標記已處於新隊伍，避免剛入隊又被自身退隊重組腳本退掉
        if (gameOverRestartTimer) {
          clearTimeout(gameOverRestartTimer);
          gameOverRestartTimer = null;
        }
        updateStatus('🤝 偵測到隊長隊伍邀請，自動點擊同意加入...');
        console.log('[RO Helper] 🤝 自動同意隊伍邀請 (Accept Party Invite)');
        acceptBtn.click();
        acceptBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
        acceptBtn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));

        // 若此時在結算畫面，立即加速重開進入大廳與隊長會合
        if (isVisible('gameover')) {
          const curBtn = document.getElementById('btn-restart');
          if (curBtn && !curBtn.disabled) {
            curBtn.click();
            curBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
            curBtn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
          }
        }
        return true;
      }
    }

    // 3. 隊伍出發準備確認 (Party Ready Check -> ¡Listo! / 就緒 / 出發)
    const isPartyReadyText = dialogFullText.includes('quiere salir con el grupo') || dialogFullText.includes('salir con el grupo') ||
                             dialogFullText.includes('quiere salir') || dialogFullText.includes('head out') || dialogFullText.includes('ready to go') ||
                             dialogFullText.includes('想與隊伍出發') || dialogFullText.includes('隊伍出發') ||
                             dialogFullText.includes('準備出發') || dialogFullText.includes('出發') ||
                             dialogFullText.includes('partir con el grupo') ||
                             (isPartyTitle && (dialogFullText.includes('listo') || dialogFullText.includes('就緒') || dialogFullText.includes('ready')));

    if (isPartyTitle && isPartyReadyText) {
      wasInParty = true;
      // 尋找確認/同意按鈕 (通常具有 .primary 樣式，標籤為 ¡Listo!, 就緒, 準備, 出發, Yes, Ready 等)
      const primaryBtn = dialog.querySelector('#npc-options button.primary') ||
                         optionsBtns.find(btn => {
                           const t = (btn.textContent || '').toLowerCase();
                           return t.includes('listo') || t.includes('就緒') || t.includes('準備') ||
                                  t.includes('出發') || t.includes('ready') || t.includes('si') ||
                                  t.includes('sí') || t.includes('yes') || t.includes('ok');
                         }) ||
                         (optionsBtns.length === 2 ? optionsBtns[1] : null);

      if (primaryBtn) {
        updateStatus('🤝 偵測到隊長發起出發確認，自動點擊同意 (¡Listo!/就緒)...');
        console.log('[RO Helper] 🤝 觸發組隊自動同意出發 (Party Ready Check)');
        primaryBtn.click();
        primaryBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
        primaryBtn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
        return true;
      }
    }
    return false;
  }

  // ==========================================
  // 🤝 組隊隊員狀態與廣場就緒嚴格檢查 (Party Readiness Guard)
  // 分析 #party-frame，確認當前是否在組隊中、是否為隊長、以及所有隊友是否皆在同一分流廣場就緒
  // 若隊友處於 .off (離線/載入中)、.pf-hop (在其他分流頻道)、或不在廣場/在隊伍遊戲中，
  // 隊長端絕對禁止開啟關卡或出發，等待隊友全數返回大廳當前頻道！
  // ==========================================
  function checkPartyReadiness() {
    const partyFrame = document.getElementById('party-frame');
    const isFrameVisible = partyFrame && !partyFrame.classList.contains('hidden') && partyFrame.style.display !== 'none';
    const rows = partyFrame ? Array.from(partyFrame.querySelectorAll('.pf-row')) : [];

    // 若畫面上有隊伍面板且成員大於 1 人，記錄處於組隊狀態
    if (isFrameVisible && rows.length > 1) {
      wasInParty = true;
    } else if (isFrameVisible && rows.length <= 1) {
      // 只有自己一人在隊伍框中，若已過大廳冷卻期，重置為單人模式
      if (performance.now() - lobbyEnteredAt > LOBBY_POST_RUN_COOLDOWN_MS) {
        wasInParty = false;
      }
    }

    // 若剛回大廳且上一局為組隊狀態，但隊伍面板尚未渲染或成員尚未同步，視為等待同步中
    if (wasInParty && (!isFrameVisible || rows.length <= 1)) {
      return {
        inParty: true,
        isLeader: true, // 保守假設為隊長，防止未同步時誤以單人模式搶進
        ready: false,
        memberCount: rows.length,
        reason: '隊伍資料同步中...'
      };
    }

    if (!isFrameVisible || rows.length <= 1) {
      return {
        inParty: false,
        isLeader: false,
        ready: true,
        memberCount: rows.length,
        reason: '單人模式'
      };
    }

    // 檢查是否為隊長
    const myRow = partyFrame.querySelector('.pf-row.me');
    const isLeader = partyFrame.classList.contains('leader') ||
                     (myRow && Boolean(myRow.querySelector('.pf-lead')));

    // 取得所有隊友 (排除自己)
    const teammateRows = Array.from(partyFrame.querySelectorAll('.pf-row:not(.me)'));
    if (teammateRows.length === 0) {
      return {
        inParty: true,
        isLeader,
        ready: true,
        memberCount: rows.length,
        reason: '無其他隊友'
      };
    }

    const notReadyList = [];
    for (const row of teammateRows) {
      const name = row.querySelector('.pf-name b')?.textContent?.trim() ||
                   row.querySelector('.pf-name')?.childNodes[0]?.textContent?.trim() ||
                   '隊友';
      const isOff = row.classList.contains('off');
      const hasHopBtn = Boolean(row.querySelector('.pf-hop'));
      const whereEl = row.querySelector('.pf-where');
      const whereText = (whereEl?.textContent || '').trim();
      const whereLower = whereText.toLowerCase();

      // 檢查是否不在同頻道廣場 (離線、載入中、在其他頻道、Fuera de la plaza、En la partida del grupo)
      const isNotInPlaza = isOff ||
                           hasHopBtn ||
                           whereLower.includes('fuera') ||
                           whereLower.includes('partida') ||
                           whereLower.includes('不在廣場') ||
                           whereLower.includes('遊戲中') ||
                           whereLower.includes('載入');

      if (isNotInPlaza) {
        let statusDesc = whereText;
        if (hasHopBtn) {
          statusDesc = `在其他頻道 (${whereText.replace(/Ir/i, '').trim()})`;
        } else if (whereLower.includes('fuera') || whereLower.includes('不在廣場')) {
          statusDesc = '不在廣場';
        } else if (whereLower.includes('partida') || whereLower.includes('遊戲中')) {
          statusDesc = '在隊伍遊戲中';
        } else if (isOff) {
          statusDesc = '離線/載入中';
        }
        notReadyList.push(`${name} [${statusDesc}]`);
      }
    }

    if (notReadyList.length > 0) {
      return {
        inParty: true,
        isLeader,
        ready: false,
        memberCount: rows.length,
        reason: notReadyList.join(', ')
      };
    }

    return {
      inParty: true,
      isLeader,
      ready: true,
      memberCount: rows.length,
      reason: '全員在廣場就緒'
    };
  }

  // ==========================================
  // 👥 好友管理與自動退隊重組 (Friends & Auto Re-Party)
  // ==========================================

  /**
   * 讀取遊戲內當前好友清單 (自 #fr-body 取得所有好友資料)
   */
  function getGameFriendsList() {
    const frBody = document.getElementById('fr-body');
    if (!frBody) return [];
    const rows = Array.from(frBody.querySelectorAll('.fr-row:not(.ask)'));
    return rows.map(row => {
      const name = (row.querySelector('[data-name]')?.dataset.name ||
                    row.querySelector('.fr-name')?.textContent?.replace('▾', '').trim() ||
                    row.querySelector('b')?.textContent?.trim() || '').trim();
      const isOn = row.classList.contains('on');
      const whereEl = row.querySelector('.fr-where');
      const where = (whereEl?.textContent || '').trim() || (isOn ? '在線' : '離線');
      const hasInviteBtn = Boolean(row.querySelector('button[data-act="invite"]'));
      const inParty = where.includes('En grupo') || where.includes('隊伍中') || where.includes('grupo');
      return { name, isOn, where, hasInviteBtn, inParty, rowEl: row };
    }).filter(f => Boolean(f.name));
  }

  /**
   * 觸發遊戲原生好友介面更新快取
   */
  function refreshFriendsList() {
    const btn = document.getElementById('lobby-friends');
    if (btn) {
      btn.click();
      setTimeout(() => {
        const closeBtn = document.getElementById('fr-close');
        if (closeBtn && isVisible('friends')) {
          closeBtn.click();
        }
      }, 150);
    }
  }

  /**
   * 向指定好友發送組隊邀請 (DOM 行內按鈕或選單邀請)
   */
  function inviteFriend(friendName) {
    if (!friendName) return false;
    const cleanTarget = friendName.trim().toLowerCase();

    // 1. 優先檢查 #fr-body 內的好友列表
    const frBody = document.getElementById('fr-body');
    if (frBody) {
      const rows = Array.from(frBody.querySelectorAll('.fr-row:not(.ask)'));
      for (const row of rows) {
        const name = (row.querySelector('[data-name]')?.dataset.name ||
                      row.querySelector('.fr-name')?.textContent?.replace('▾', '').trim() ||
                      row.querySelector('b')?.textContent?.trim() || '').trim().toLowerCase();
        if (name === cleanTarget) {
          // 情況 A：存在行內直接邀請按鈕 [data-act="invite"] (跨分流/跨大廳遠程邀請)
          const inviteBtn = row.querySelector('button[data-act="invite"]');
          if (inviteBtn && !inviteBtn.disabled) {
            console.log(`[RO Helper] 💌 點擊好友行內邀請按鈕: ${friendName}`);
            inviteBtn.click();
            inviteBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
            inviteBtn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
            return true;
          }

          // 情況 B：點擊好友名字按鈕展開 player-menu 選單進行邀請
          const nameBtn = row.querySelector('.fr-name[data-act="menu"]');
          if (nameBtn) {
            nameBtn.click();
            setTimeout(() => {
              const playerMenu = document.getElementById('player-menu');
              if (playerMenu) {
                const menuInviteBtn = Array.from(playerMenu.querySelectorAll('button')).find(b => {
                  const t = (b.textContent || '').toLowerCase();
                  return t.includes('invitar') || t.includes('邀請') || t.includes('invite');
                });
                if (menuInviteBtn && !menuInviteBtn.disabled) {
                  console.log(`[RO Helper] 💌 點擊選單邀請按鈕: ${friendName}`);
                  menuInviteBtn.click();
                  menuInviteBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
                  menuInviteBtn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
                } else {
                  // 若無邀請按鈕（如對方已入隊或忙碌），點擊關閉選單
                  document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
                }
              }
            }, 120);
            return true;
          }
        }
      }
    }

    // 2. 若好友視窗尚未渲染，點擊打開好友視窗後重試
    const friendsBtn = document.getElementById('lobby-friends');
    if (friendsBtn && !isVisible('friends')) {
      friendsBtn.click();
      setTimeout(() => {
        inviteFriend(friendName);
        setTimeout(() => {
          const closeBtn = document.getElementById('fr-close');
          if (closeBtn && isVisible('friends')) closeBtn.click();
        }, 400);
      }, 200);
      return true;
    }

    return false;
  }

  /**
   * 自動退出當前隊伍 (Leave Party)
   */
  function leaveParty() {
    if (isLeavingParty) return false;
    const partyFrame = document.getElementById('party-frame');
    if (!partyFrame || partyFrame.classList.contains('hidden') || partyFrame.style.display === 'none') {
      return false;
    }
    const leaveBtn = partyFrame.querySelector('button.pf-leave[data-leave="1"]') ||
                     partyFrame.querySelector('button[data-leave]') ||
                     partyFrame.querySelector('.pf-leave');
    if (leaveBtn) {
      isLeavingParty = true;
      console.log('[RO Helper] 🚪 點擊退出隊伍按鈕 (Leave Party)');
      leaveBtn.click();
      leaveBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
      leaveBtn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));

      // 檢查並確認彈窗 (Salir)
      setTimeout(() => {
        try {
          const dialog = document.getElementById('npc-dialog');
          if (dialog && !dialog.classList.contains('hidden')) {
            const dialogText = (dialog.textContent || '').toLowerCase();
            if (dialogText.includes('salir') || dialogText.includes('grupo') || dialogText.includes('隊伍')) {
              const confirmBtn = dialog.querySelector('#npc-options button.primary') ||
                                 Array.from(dialog.querySelectorAll('#npc-options button')).find(b => {
                                   const t = (b.textContent || '').toLowerCase();
                                   return t.includes('salir') || t.includes('離開') || t.includes('退出') || t.includes('si') || t.includes('sí') || t.includes('yes');
                                 });
              if (confirmBtn) {
                console.log('[RO Helper] 🚪 確認退出隊伍對話框 (Confirm Leave Party)');
                confirmBtn.click();
                confirmBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
                confirmBtn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
              }
            }
          }
        } finally {
          setTimeout(() => {
            isLeavingParty = false;
          }, 800);
        }
      }, 180);
      return true;
    }
    return false;
  }

  /**
   * 👥 場次結束自動退隊與重新組隊流程管理器 (Auto Re-Party Manager)
   * 返回 true 代表目前正處於退隊或組隊等待階段，暫緩後續進圖動作
   */
  function handleAutoReParty() {
    if (!config.autoReParty) return false;
    const state = detectGameState();
    if (state !== 'LOBBY') return false;

    // 1. 場次結束返回大廳後，只有隊長端才自動執行退出隊伍重建 (隊員端保持待命跟隨，避免將剛接受的新組隊退掉產生時間差競態)
    if (config.partyRole === 'leader' && wasInParty && !partyLeaveTriggered) {
      const timeSinceLobby = performance.now() - lobbyEnteredAt;
      // 剛回大廳前 3.0 秒預留給遊戲建立連線並渲染隊伍面板，確保全體隊員都已順利傳送回大廳
      if (lobbyEnteredAt > 0 && timeSinceLobby < 3000) {
        const sec = Math.max(1, Math.ceil((3000 - timeSinceLobby) / 1000));
        updateStatus(`🏰 剛返回大廳，等待隊伍狀態就緒以執行退隊重組 (剩餘 ${sec} 秒)...`);
        return true;
      }

      const partyFrame = document.getElementById('party-frame');
      const isPartyVisible = partyFrame && !partyFrame.classList.contains('hidden') && partyFrame.style.display !== 'none';
      const rows = partyFrame ? Array.from(partyFrame.querySelectorAll('.pf-row')) : [];

      if (isPartyVisible && rows.length > 0) {
        partyLeaveTriggered = true;
        partyLeftAt = performance.now();
        updateStatus('🚪 [隊長重組] 場次結束，隊長自動退出舊隊伍以重建...');
        showToast('🚪 [隊長重組] 退出舊隊伍，準備重組...', 2500);
        leaveParty();
        return true;
      } else {
        // 若隊伍面板已消失或不在隊伍中，標記為已退隊完成
        partyLeaveTriggered = true;
        partyLeftAt = performance.now();
      }
    } else if (config.partyRole === 'member') {
      partyLeaveTriggered = true; // 隊員端始終保持待命，不主動退出隊伍
    }

    // 2. 隊員模式 (Member / Follower)
    if (config.partyRole === 'member') {
      releaseAllMovementKeys();
      const partyStatus = checkPartyReadiness();
      if (!partyStatus.inParty) {
        updateStatus('🤝 [隊員待命] 等待隊長發起組隊邀請...');
      } else {
        updateStatus('🤝 [隊員就緒] 已進入隊伍，等待隊長發起出發...');
      }
      // 隊員端在隊長發起出發前，絕對禁止主動走向 NPC 或開啟關卡
      return true;
    }

    // 3. 隊長模式 (Leader)
    if (config.partyRole === 'leader') {
      const targetFriends = config.partyInviteFriends || [];
      if (targetFriends.length === 0) {
        // 若隊長未勾選任何目標隊友，視為單人模式或自由出發
        return false;
      }

      // 退隊後緩衝期：退隊後等待 2.5 秒，確保伺服器與自身好友列表、在線狀態完成更新，避免立刻發邀請造成好友處於 busy / in party
      if (partyLeftAt > 0 && performance.now() - partyLeftAt < 2500) {
        const sec = Math.max(1, Math.ceil((2500 - (performance.now() - partyLeftAt)) / 1000));
        updateStatus(`⏳ [隊長待命] 退隊完成，等待伺服器隊伍狀態重置 (${sec} 秒)...`);
        return true;
      }

      const partyFrame = document.getElementById('party-frame');
      const isPartyVisible = partyFrame && !partyFrame.classList.contains('hidden') && partyFrame.style.display !== 'none';
      const memberRows = isPartyVisible ? Array.from(partyFrame.querySelectorAll('.pf-row')) : [];
      const currentMemberNames = memberRows.map(r => {
        return (r.querySelector('.pf-name b')?.textContent ||
                r.querySelector('.pf-name')?.childNodes[0]?.textContent || '').trim().toLowerCase();
      }).filter(Boolean);

      // 檢查勾選的目標好友是否皆已在隊伍中
      const pendingFriends = targetFriends.filter(name => {
        const clean = name.trim().toLowerCase();
        return !currentMemberNames.includes(clean);
      });

      if (pendingFriends.length > 0) {
        partyAllReadyAt = 0; // 尚有人未入隊，重置就緒計時器
        releaseAllMovementKeys();
        // 每隔 4.5 秒向尚未入隊的下一位好友發送邀請 (防狂點與拉長等待隊友彈窗同意的緩衝)
        if (performance.now() - lastInviteSentAt > 4500) {
          const nextFriend = pendingFriends[0];
          updateStatus(`💌 [隊長發起組隊] 正在邀請隊友 [${nextFriend}] 入隊...`);
          showToast(`💌 正在邀請隊友 ${nextFriend}...`, 2500);
          lastInviteSentAt = performance.now();
          inviteFriend(nextFriend);
        } else {
          updateStatus(`⏳ [隊長待命] 等待隊友入隊中... (未入隊: ${pendingFriends.join(', ')})`);
        }
        return true; // 暫緩進圖，等待隊友入隊
      }

      // 目標隊友已全員入隊！檢查全員在同頻道廣場就緒狀態
      const partyStatus = checkPartyReadiness();
      if (!partyStatus.ready) {
        partyAllReadyAt = 0; // 尚未全員在廣場就緒，重置計時器
        releaseAllMovementKeys();
        updateStatus(`⏳ [隊長待命] 隊員已入隊，等待隊友回到廣場... ${partyStatus.reason}`);
        showToast(`⏳ 等待隊友回到廣場: ${partyStatus.reason}`, 2500);
        return true; // 隊友尚未在同頻道廣場就緒，隊長待命
      }

      // 目標隊友全員在隊且就緒！給予 2.5 秒的同步穩定期，確保全體隊員的分流與數據連線完全穩定
      if (!partyAllReadyAt) {
        partyAllReadyAt = performance.now();
      }
      const readyElapsed = performance.now() - partyAllReadyAt;
      if (readyElapsed < 2500) {
        releaseAllMovementKeys();
        const sec = Math.max(1, Math.ceil((2500 - readyElapsed) / 1000));
        updateStatus(`✨ [隊長就緒] 全員已在廣場就緒！同步緩衝中 (${sec} 秒)...`);
        return true;
      }

      // 全員入隊且同頻道廣場就緒、緩衝期結束！返回 false 允許 handleEnterMap() 前往開啟關卡
      return false;
    }

    return false;
  }

  /**
   * 大廳出發前往怪獸地圖或燈籠節活動
   */
  function handleEnterMap() {
    if (!config.autoEnterMap) return;
    const state = detectGameState();
    const isFestivalTarget = config.autoFestival || config.targetStage === 'louyang';

    // 0. 大廳安全冷卻與隊友狀態同步檢查 (Lobby Safety Cooldown & Party Readiness)
    if (state === 'LOBBY') {
      const timeSinceLobby = performance.now() - lobbyEnteredAt;
      const cooldownMs = wasInParty ? LOBBY_POST_RUN_COOLDOWN_MS : 2000;
      if (lobbyEnteredAt > 0 && timeSinceLobby < cooldownMs) {
        const waitSec = Math.max(1, Math.ceil((cooldownMs - timeSinceLobby) / 1000));
        updateStatus(wasInParty ? `🏰 剛返回大廳，等待隊友狀態同步 (剩餘 ${waitSec} 秒)...` : `🏰 剛返回大廳，等待就緒 (${waitSec} 秒)...`);
        showToast(wasInParty ? `🏰 剛返回大廳，等待隊友同步中 (${waitSec}s)...` : `🏰 剛返回大廳，準備中 (${waitSec}s)...`, 1200);
        return;
      }

      const partyStatus = checkPartyReadiness();
      // 若在隊伍中且為隊長，但隊友未全數就緒：絕對禁止點擊啟程或走向 NPC 出發！
      if (partyStatus.inParty && partyStatus.isLeader && !partyStatus.ready) {
        releaseAllMovementKeys();
        updateStatus(`⏳ [隊長待命] 等待隊友回到廣場... ${partyStatus.reason}`);
        showToast(`⏳ 等待隊友: ${partyStatus.reason}`, 2500);
        return;
      }

      // 若在隊伍中但不是隊長，隊員不應主動走向 NPC 開啟地圖，應等待隊長發起
      if (partyStatus.inParty && !partyStatus.isLeader) {
        releaseAllMovementKeys();
        updateStatus('🤝 處於組隊中 (隊員)，等待隊長發起出發...');
        return;
      }
    }

    // 1. 燈籠節專屬活動視窗 (Festival Window)
    if (state === 'FESTIVAL_WINDOW') {
      const partyStatus = checkPartyReadiness();
      if (partyStatus.inParty && partyStatus.isLeader && !partyStatus.ready) {
        updateStatus(`⏳ [隊長待命] 等待隊友回到廣場... ${partyStatus.reason}`);
        showToast(`⏳ 等待隊友: ${partyStatus.reason}`, 2500);
        return;
      }
      if (partyStatus.inParty && !partyStatus.isLeader) {
        updateStatus('🤝 處於組隊中 (隊員)，等待隊長啟程...');
        return;
      }

      const btnPlay = document.getElementById('festival-play');
      if (btnPlay && !btnPlay.disabled && !btnPlay.classList.contains('hidden')) {
        updateStatus('🏮 燈籠節：點擊啟程前往洛陽大廣場...');
        btnPlay.click();
        config.stats.festivalsEntered = (config.stats.festivalsEntered || 0) + 1;
        config.stats.runsStarted++;
        saveConfig();
        updateUIStats();
        return;
      }
    }

    // 2. 關卡清單視窗 (Stages Window)
    if (state === 'STAGES_WINDOW') {
      const partyStatus = checkPartyReadiness();
      if (partyStatus.inParty && partyStatus.isLeader && !partyStatus.ready) {
        updateStatus(`⏳ [隊長待命] 等待隊友回到廣場... ${partyStatus.reason}`);
        showToast(`⏳ 等待隊友: ${partyStatus.reason}`, 2500);
        return;
      }
      if (partyStatus.inParty && !partyStatus.isLeader) {
        updateStatus('🤝 處於組隊中 (隊員)，等待隊長啟程...');
        return;
      }

      const stgGo = document.getElementById('stg-go');
      const stagesList = document.getElementById('stg-list');

      // 檢查是否需要指定特定關卡 (非燈籠節且非 auto)
      if (!isFestivalTarget && config.targetStage && config.targetStage !== 'auto') {
        const targetCfg = STAGES_CONFIG.find(s => s.id === config.targetStage);
        if (targetCfg && targetCfg.index >= 0) {
          // 精準獲取卡片：優先利用原生 data-i 屬性
          let targetCard = stagesList ? stagesList.querySelector(`.stg-card[data-i="${targetCfg.index}"]`) : null;

          // 備用匹配：若原生屬性未命中，透過關卡關鍵字比對
          if (!targetCard && stagesList) {
            const allCards = Array.from(stagesList.querySelectorAll('.stg-card'));
            const stageKeywords = {
              prontera: ['prontera', 'campos'],
              sewer: ['sewer', 'alcantarillas', '下水道'],
              sunken: ['sunken', 'barco', '沉船'],
              byalan: ['byalan', 'izlude', '柏亞蘭'],
              payon: ['bosque de payon', 'payon forest', '斐揚森林'],
              payon_cave: ['cueva de payon', 'payon cave', '斐揚洞穴', 'payon'],
              prt_castle: ['castillo', 'castle', '城堡'],
              orcs: ['orcs', 'orca', '獸人'],
              pyramid: ['pyramid', 'pirámides', 'morroc', '金字塔']
            };
            const kws = stageKeywords[targetCfg.id] || [];
            targetCard = allCards.find(c => {
              const text = (c.textContent || '').toLowerCase();
              return kws.some(k => text.includes(k));
            }) || allCards[targetCfg.index];
          }

          if (targetCard) {
            const isLocked = targetCard.classList.contains('locked') || targetCard.classList.contains('soon');
            if (isLocked) {
              updateStatus(`⚠️ 指定關卡 [${targetCfg.name}] 尚未解鎖，將使用當前可用關卡...`);
            } else {
              const isSelected = targetCard.classList.contains('sel');
              if (!isSelected) {
                updateStatus(`🗺️ 正在切換選取指定關卡: [${targetCfg.name}]...`);
                console.log(`[RO Helper] 點選目標關卡卡片: ${targetCfg.name} (index: ${targetCfg.index})`);
                try {
                  targetCard.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                } catch (e) {}
                targetCard.click();
                targetCard.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

                // 關鍵：等待遊戲切換並渲染 sel 樣式，避免在同一幀立即點擊啟程
                return;
              }
            }
          }
        }
      }

      if (stgGo && !stgGo.disabled && !stgGo.classList.contains('hidden')) {
        updateStatus('🗺️ 關卡已確認，點擊啟程 (Partir)...');
        stgGo.click();
        return;
      }
    }

    // 2.1 圖書館 (Wiki) 視窗誤開防呆關閉
    if (state === 'WIKI_WINDOW') {
      const closeBtn = document.getElementById('wk-close') || document.querySelector('#wiki .close');
      if (closeBtn) {
        updateStatus('⚠️ 關閉圖書館視窗，準備導航...');
        closeBtn.click();
      } else {
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
      }
      return;
    }

    // 3. 難度 / 升級方式 / 出發確認視窗 (NPC Dialog)
    if (state === 'NPC_DIALOG') {
      const dialog = document.getElementById('npc-dialog');
      if (!dialog || dialog.classList.contains('hidden')) return;

      const dialogFullText = (dialog.textContent || '').toLowerCase();
      const optionsBtns = Array.from(dialog.querySelectorAll('#npc-options button'));

      // 3.1 優先檢查是否為上一局殘留的「未完成進度 (Partida a medias)」
      const isMidRunDialog = dialogFullText.includes('partida a medias') ||
                             dialogFullText.includes('dejaste una partida') ||
                             dialogFullText.includes('未完成') ||
                             dialogFullText.includes('繼續遊戲');
      if (isMidRunDialog) {
        if (config.autoResume) {
          const resumeBtn = dialog.querySelector('#npc-options button.primary') ||
                            optionsBtns.find(b => {
                              const t = (b.textContent || '').toLowerCase();
                              return t.includes('seguir') || t.includes('繼續') || t.includes('resume');
                            });
          if (resumeBtn) {
            updateStatus('🔄 偵測到上一局未完成進度，自動點擊續玩 (Seguir)...');
            resumeBtn.click();
            config.stats.resumes++;
            saveConfig();
            updateUIStats();
            return;
          }
        } else {
          // 若不續玩，點擊 Descartar (放棄殘留舊局)，點擊後遊戲會立刻正常接續開啟新副本
          const discardBtn = optionsBtns.find(b => {
            const t = (b.textContent || '').toLowerCase();
            return t.includes('descartar') || t.includes('放棄') || t.includes('結算');
          });
          if (discardBtn) {
            updateStatus('🗑️ 放棄上一局殘留進度 (Descartar)，準備進入新副本...');
            discardBtn.click();
            return;
          }
        }
      }

      // 3.1.5 檢查是否為退出隊伍確認視窗 (¿Salir del grupo?)
      const isLeaveConfirmDialog = (dialogFullText.includes('salir del grupo') || dialogFullText.includes('¿salir') || (dialogFullText.includes('grupo') && dialogFullText.includes('salir'))) &&
                                   !dialogFullText.includes('quiere salir con el grupo');
      if (isLeaveConfirmDialog && config.autoReParty) {
        const confirmBtn = dialog.querySelector('#npc-options button.primary') ||
                           optionsBtns.find(b => (b.textContent || '').toLowerCase().includes('salir'));
        if (confirmBtn) {
          updateStatus('🚪 自動確認退出隊伍 (退隊重組)...');
          confirmBtn.click();
          return;
        }
      }

      // 3.2 檢查是否為組隊出發提示對話框 (例如隊員尚未就緒或條件不符: "No todo el grupo..." / "Vale")
      const isPartyAlert = dialogFullText.includes('grupo') &&
                           (dialogFullText.includes('no todo el grupo') ||
                            dialogFullText.includes('elige el líder') ||
                            dialogFullText.includes('no puedes ir') ||
                            dialogFullText.includes('plaza') ||
                            dialogFullText.includes('廣場') ||
                            dialogFullText.includes('todos tienen que estar') ||
                            dialogFullText.includes('todos deben estar') ||
                            dialogFullText.includes('fuera de la plaza'));
      if (isPartyAlert) {
        const okBtn = dialog.querySelector('#npc-options button.primary') ||
                      optionsBtns.find(b => {
                        const t = (b.textContent || '').toLowerCase();
                        return t.includes('vale') || t.includes('ok') || t.includes('確定') || t.includes('明白');
                      });
        if (okBtn) {
          updateStatus('⏳ 組隊隊員尚未全數在廣場就緒，等待隊友中...');
          showToast('⏳ 隊員尚未全數在廣場就緒，等待隊友回到廣場...', 3000);
          okBtn.click();
          return;
        }
      }

      // 3.3 判斷是否為關卡/活動出發對話框 (包含 .diff、[data-bank]、.diff-bank 或洛陽升級方式 Subidas、出發關鍵字)
      const isDepartureDialog = Boolean(
        dialog.querySelector('.diff') ||
        dialog.querySelector('[data-bank]') ||
        dialog.querySelector('.diff-bank') ||
        dialogFullText.includes('subidas') ||
        dialogFullText.includes('dificultad') ||
        dialogFullText.includes('louyang') ||
        dialogFullText.includes('festival') ||
        dialogFullText.includes('ir al campo') ||
        dialogFullText.includes('proponer al grupo') ||
        dialogFullText.includes('partir')
      );

      if (!isDepartureDialog) {
        // 非出發視窗（如誤點其他 NPC），點擊取消或關閉
        const cancelBtn = dialog.querySelector('#npc-options button:not(.primary)') ||
          optionsBtns.find(b => {
            const txt = (b.textContent || '').toLowerCase();
            return txt.includes('取消') || txt.includes('cancel') || txt.includes('vale') || txt.includes('關閉');
          });
        if (cancelBtn) {
          updateStatus('⚠️ 關閉非目標 NPC 對話框...');
          cancelBtn.click();
        } else {
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
        }
        return;
      }

      // 1. 升級方式切換: data-bank="0" (立即升級) vs data-bank="1" (累積升級)
      const targetBankVal = config.levelUpMode === 'accumulate' ? '1' : '0';
      const bankBtn = document.querySelector(`#npc-dialog [data-bank="${targetBankVal}"]`) ||
                      document.querySelector(`[data-bank="${targetBankVal}"]`);
      if (bankBtn && !bankBtn.classList.contains('active')) {
        bankBtn.click();
      }

      // 2. 自訂難度拖曳同步 (若開啟自訂難度)
      if (config.customDiffEnabled && config.difficulty) {
        for (const key of ['count', 'damage', 'hp', 'speed', 'events']) {
          const inputEl = document.querySelector(`#npc-text .diff input[data-key="${key}"]`);
          if (inputEl && config.difficulty[key] !== undefined) {
            const targetVal = String(config.difficulty[key]);
            if (inputEl.value !== targetVal) {
              inputEl.value = targetVal;
              inputEl.dispatchEvent(new Event('input', { bubbles: true }));
            }
          }
        }
      }

      // 3. 出發確認 (包含單人 Ir al campo / 組隊 Proponer al grupo)
      const primaryBtn = document.querySelector('#npc-options button.primary');
      if (primaryBtn && !primaryBtn.classList.contains('hidden')) {
        const btnText = (primaryBtn.textContent || '').toLowerCase();
        const partyStatus = checkPartyReadiness();

        // 防呆保護：若當前在隊伍中或上局為組隊狀態，但按鈕文字為單人出發 (Ir al campo)，
        // 說明隊伍 WebSocket 尚未向此視窗同步，嚴禁點擊，防止隊長一人進入拋棄隊友！
        if ((partyStatus.inParty || wasInParty) && (btnText.includes('campo') || btnText.includes('單人'))) {
          updateStatus('⚠️ 偵測到組隊中，但出發按鈕仍顯示單人 (Ir al campo)，等待隊伍刷新提議...');
          showToast('⚠️ 等待隊伍狀態同步 (防止誤進單人)...', 2000);
          return;
        }
        if (partyStatus.inParty && partyStatus.isLeader && !partyStatus.ready) {
          updateStatus(`⏳ [隊長待命] 等待隊友回到廣場... ${partyStatus.reason}`);
          showToast(`⏳ 等待隊友就緒: ${partyStatus.reason}`, 2500);
          return;
        }

        updateStatus('⚙️ 出發確認：點擊確認進入地圖...');
        primaryBtn.click();
        primaryBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
        primaryBtn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
        config.stats.runsStarted++;
        saveConfig();
        updateUIStats();
        return;
      }
    }

    // 4. 普隆德拉大廳 (Lobby)
    if (state === 'LOBBY') {
      const prompt = document.getElementById('lobby-prompt');
      const promptText = (prompt?.textContent || '').toLowerCase();

      if (isFestivalTarget) {
        // 目標：燈籠節活動 (活動角色『節慶主持人』)
        // 1. 若已經在節慶主持人身邊 (Prompt 出現)，立即對話進入活動視窗
        if (prompt && !prompt.classList.contains('hidden') && isFestivalPrompt(promptText)) {
          updateStatus('🏮 大廳：抵達節慶主持人，開啟活動視窗...');
          prompt.click();
          window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true }));
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
          releaseAllMovementKeys();
          festivalNavPhase = 0;
          navStepCount = 0;
          return;
        }

        // 2. 若誤碰遠征隊長座標 (141, 378)，說明已在東南方，略過前半段橫移，轉入最後橫移
        if (prompt && !prompt.classList.contains('hidden') && isCaptainPrompt(promptText)) {
          if (festivalNavPhase < 2) {
            festivalNavPhase = 2;
            navStepCount = 6; // 已經過半，再橫走幾步即北上
          }
        }

        // 3. 若靠圖書館太近，主動往東南 (D+S) 走脫離左下角圖書館
        if (prompt && !prompt.classList.contains('hidden') && isLibrarianPrompt(promptText)) {
          if (!isWalkingToNpc) {
            isWalkingToNpc = true;
            festivalNavPhase = 1;
            navStepCount = 0;
            updateStatus('📚 大廳：遠離圖書館，前往節慶主持人...');
            pressMoveKeys([{ key: 'd', code: 'KeyD' }, { key: 's', code: 'KeyS' }], 450, () => {
              isWalkingToNpc = false;
            });
          }
          return;
        }

        // 4. 普隆德拉廣場絕對避水池航點導航 (玩家實測黃金安全路徑：下1 -> 右11 -> 上7)
        if (festivalNavPhase === 0) {
          festivalNavPhase = 1;
          navStepCount = 0;
        }

        // 階段 1【下 1】：從重生點向下退 1 步 (純按 S，280ms)
        // 目的：徹底拉開與水池南緣之垂直距離，杜絕任何往上碰撞
        if (festivalNavPhase === 1) {
          if (!isWalkingToNpc) {
            isWalkingToNpc = true;
            navStepCount++;
            updateStatus('🏮 大廳：[避水池 1/3] 向下退開水池南緣 (下1)...');
            pressMoveKeys([{ key: 's', code: 'KeyS' }], 280, () => {
              isWalkingToNpc = false;
              festivalNavPhase = 2;
              navStepCount = 0;
            });
          }
          return;
        }

        // 階段 2【右 11】：純向右大步橫移 (純按 D，11 步，每步 320ms)
        // 目的：沿著水池南側平原筆直向東滑翔，徹底將水池甩在左側身後，到達東側開闊大道！
        // ⚠️ 嚴禁按任何 W 鍵，保持水平向東
        if (festivalNavPhase === 2) {
          if (!isWalkingToNpc) {
            isWalkingToNpc = true;
            navStepCount++;
            updateStatus(`🏮 大廳：[避水池 2/3] 水平向右大步橫移繞過水池... (${navStepCount}/11)`);
            pressMoveKeys([{ key: 'd', code: 'KeyD' }], 320, () => {
              isWalkingToNpc = false;
              if (navStepCount >= 11) {
                festivalNavPhase = 3;
                navStepCount = 0;
              }
            });
          }
          return;
        }

        // 階段 3【上 7】：水池已完全在左側身後，前方全為開闊大道，向正北直奔節慶主持人 (純按 W，7~8 步)！
        if (festivalNavPhase === 3) {
          // 進入開闊直道後，同時啟動 NPC 視覺輔助吸附
          const festLabel = findNpcLabel('festival');
          if (festLabel) {
            clickOnNpc(festLabel);
          }

          if (!isWalkingToNpc) {
            isWalkingToNpc = true;
            navStepCount++;
            updateStatus(`🏮 大廳：[避水池 3/3] 正北開闊大道直奔節慶主持人... (${navStepCount}/8)`);
            pressMoveKeys([{ key: 'w', code: 'KeyW' }], 340, () => {
              isWalkingToNpc = false;
              if (navStepCount >= 8) {
                // 超過 8 步若仍未抵達，重設階段重新繞行校準
                festivalNavPhase = 1;
                navStepCount = 0;
              }
            });
          }
          return;
        }
      } else {
        // 目標：一般關卡 (尋找遠征隊長)
        // 1. 若確實是在遠征隊長身邊，點擊對話
        if (prompt && !prompt.classList.contains('hidden') && isCaptainPrompt(promptText)) {
          updateStatus('🏰 大廳：與遠征隊長對話...');
          prompt.click();
          window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true }));
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
          releaseAllMovementKeys();
          return;
        }

        // 2. 智慧 NPC 視覺偵測與遊戲原生 A* 點擊尋路
        const captLabel = findNpcLabel('captain');
        if (captLabel) {
          clickOnNpc(captLabel);
        }

        // 3. 若靠圖書館太近，主動往右上 (D+W) 走脫離圖書館區域
        if (prompt && !prompt.classList.contains('hidden') && isLibrarianPrompt(promptText)) {
          if (!isWalkingToNpc) {
            isWalkingToNpc = true;
            updateStatus('📚 大廳：遠離圖書館，前往遠征隊長...');
            pressMoveKeys([{ key: 'd', code: 'KeyD' }, { key: 'w', code: 'KeyW' }], 500, () => {
              isWalkingToNpc = false;
            });
          }
          return;
        }

        // 4. 正常走向遠征隊長 (D+S 向右下)
        if (!isWalkingToNpc) {
          isWalkingToNpc = true;
          updateStatus('🏰 大廳：走向遠征隊長...');
          pressMoveKeys([{ key: 'd', code: 'KeyD' }, { key: 's', code: 'KeyS' }], 350, () => {
            isWalkingToNpc = false;
          });
        }
      }
    }
  }

  // 自動偵測遊戲內當前職業
  function detectPlayerJob() {
    const hudSmall = document.querySelector('#hud-name small')?.textContent?.toLowerCase() || '';
    if (!hudSmall) return;
    const jobKeyMap = {
      '劍士': 'swordsman', 'espadachín': 'swordsman', 'swordsman': 'swordsman', 'knight': 'swordsman', 'caballero': 'swordsman', 'crusader': 'swordsman', 'cruzado': 'swordsman', '騎士': 'swordsman', '十字軍': 'swordsman',
      '法師': 'mage', '魔法師': 'mage', 'mago': 'mage', 'mage': 'mage', 'wizard': 'mage', 'sage': 'mage', 'sabio': 'mage', '超魔導': 'mage', '智者': 'mage',
      '弓箭手': 'archer', 'arquero': 'archer', 'archer': 'archer', 'hunter': 'archer', 'cazador': 'archer', 'bard': 'archer', 'dancer': 'archer', '獵人': 'archer', '吟遊': 'archer', '舞者': 'archer',
      '服事': 'acolyte', 'acólito': 'acolyte', 'acolyte': 'acolyte', 'priest': 'acolyte', 'sacerdote': 'acolyte', 'monk': 'acolyte', 'monje': 'acolyte', '祭司': 'acolyte', '武僧': 'acolyte',
      '盜賊': 'thief', 'ladrón': 'thief', 'thief': 'thief', 'assassin': 'thief', 'asesino': 'thief', 'rogue': 'thief', 'pícaro': 'thief', '刺客': 'thief', '流氓': 'thief',
      '商人': 'merchant', 'mercader': 'merchant', 'merchant': 'merchant', 'blacksmith': 'merchant', 'herrero': 'merchant', 'alchemist': 'merchant', 'alquimista': 'merchant', '鐵匠': 'merchant', '鍊金': 'merchant',
      '跆拳': 'taekwon', 'taekwon': 'taekwon', 'star_gladiator': 'taekwon', 'soul_linker': 'taekwon',
      '忍者': 'ninja', 'ninja': 'ninja',
      '槍手': 'gunslinger', '神槍手': 'gunslinger', 'gunslinger': 'gunslinger'
    };
    for (const [k, v] of Object.entries(jobKeyMap)) {
      if (hudSmall.includes(k)) {
        if (config.selectedJob !== v) {
          config.selectedJob = v;
          const jobSel = document.getElementById('ro-h-job');
          if (jobSel) jobSel.value = v;
          saveConfig();
          renderJobSkills();
        }
        break;
      }
    }
  }

  // 普通攻擊 (含普攻、Basic Attack、攻擊:屬性附加 等各類衍生詞) 精確識別器
  function isBasicAttackCard(cardText, cardName) {
    const rawName = (cardName || '').trim();
    const rawText = (cardText || '').trim();
    const lowerName = rawName.toLowerCase();
    const lowerText = rawText.toLowerCase();
    const fullCombined = (lowerName + ' ' + lowerText);

    // 排除特定非普攻獨立技能 (例如商人的「金錢攻擊」)
    if (lowerName.includes('金錢攻擊') || lowerText.includes('金錢攻擊') ||
        lowerName.includes('mammonite') || lowerText.includes('mammonite')) {
      return false;
    }

    // 1. 名稱或內文明確包含普通攻擊 / 普攻關鍵詞 (中/英/西)
    if (fullCombined.includes('普通攻擊') || fullCombined.includes('普攻') ||
        fullCombined.includes('basic attack') || fullCombined.includes('normal attack') ||
        fullCombined.includes('ataque básico') || fullCombined.includes('ataque basico') ||
        fullCombined.includes('ataque normal') || fullCombined.includes('ataques básicos') ||
        fullCombined.includes('ataques basicos')) {
      return true;
    }

    // 2. 匹配任何包含「攻擊：」、「攻擊:」、「攻擊 -」、「攻擊 ·」、「攻擊/」、「[攻擊]」或英文 Attack:/Ataque: 等格式 (全文任意位置跨符號匹配)
    if (/攻擊[\s:：·\-\/\[\]]+/.test(fullCombined) ||
        /attack[\s:：·\-\/\[\]]+/i.test(fullCombined) ||
        /ataque[\s:：·\-\/\[\]]+/i.test(fullCombined)) {
      return true;
    }

    // 3. 卡片名稱純為「攻擊」或「Attack」或「Ataque」
    if (lowerName === '攻擊' || lowerName === 'attack' || lowerName === 'ataque') {
      return true;
    }

    // 4. 特徵普攻專有詞綴：屬性附加 (Infusion)
    if (fullCombined.includes('屬性附加') || fullCombined.includes('infusión') || fullCombined.includes('infusion')) {
      return true;
    }

    return false;
  }

  // 技能卡片升級詞綴計分輔助函式 (比對 targets, cooldown, damage, count, area 等)
  function getCardAffixScore(cardText, cardName) {
    if (!config.preferredAffixes || config.preferredAffixes.length === 0) return 0;
    const text = ((cardName || '') + ' ' + (cardText || '')).toLowerCase();
    let score = 0;

    config.preferredAffixes.forEach((affixId, idx) => {
      const def = AFFIX_DEFINITIONS.find(a => a.id === affixId);
      if (!def) return;
      if (def.keywords.some(kw => text.includes(kw.toLowerCase()))) {
        // 第一順位詞綴加 800 分，第二加 500 分，第三加 300 分，其餘加 200 分
        const weight = idx === 0 ? 800 : idx === 1 ? 500 : idx === 2 ? 300 : 200;
        score += weight;
      }
    });

    return score;
  }

  /**
   * 卡片身分精確解析器 (解析技能本體、副標題、詞綴，並精準識別法師「永恆之霜/冰霜持續」克隆卡)
   */
  function getCardSkillIdentity(card) {
    if (!card) {
      return {
        name: '',
        sub: '',
        linesText: '',
        fullText: '',
        isColdClone: false,
        originalSkill: '',
        isTalent: false
      };
    }

    const nameEl = card.querySelector('.pk-name');
    const subEl = card.querySelector('.pk-sub');
    const linesEl = card.querySelector('.pk-lines');
    const talentEl = card.querySelector('.pk-talent');
    const badgeEl = card.querySelector('.pk-badge');

    const name = (nameEl?.textContent || '').trim();
    const sub = (subEl?.textContent || '').trim();
    const linesText = (linesEl?.textContent || '').trim();
    const fullText = (card.textContent || '').trim();
    const badgeText = (badgeEl?.textContent || '').trim().toLowerCase();

    const lowerName = name.toLowerCase();
    const lowerSub = sub.toLowerCase();
    const lowerLines = linesText.toLowerCase();
    const lowerFull = fullText.toLowerCase();

    // 檢查是否為法師特性「永恆之霜 / 冰霜持續 (Escarcha persistente / allColdBolt)」之克隆卡片：
    // 在遊戲中，此特性會將 firebolt (火箭術) 與 lightning (雷擊術) 的外觀名改為「冰箭術」
    // 但其副標題 sub 或說明 lines 會保留原始技能名稱 (例如「火箭術 · Nv 2」或「❄ 這是你的 火箭術」)
    let isColdClone = false;
    let originalSkill = name;

    const hasColdCloneIndicator = lowerFull.includes('escarcha persistente') ||
                                 lowerFull.includes('es tu') ||
                                 lowerFull.includes('這是你的') ||
                                 lowerLines.includes('❄') ||
                                 (talentEl && talentEl.textContent.includes('❄'));

    const isShowingColdBolt = lowerName.includes('冰箭') || lowerName.includes('cold bolt') || lowerName.includes('coldbolt') || lowerName.includes('hielo');

    // 檢查副標題或說明中是否包含原始箭術
    const containsFireBolt = lowerSub.includes('火箭') || lowerSub.includes('fire bolt') || lowerSub.includes('firebolt') || lowerSub.includes('fuego') ||
                             lowerLines.includes('火箭') || lowerLines.includes('fire bolt') || lowerLines.includes('firebolt') || lowerLines.includes('fuego');
    const containsLightning = lowerSub.includes('雷擊') || lowerSub.includes('lightning') || lowerSub.includes('relámpago') || lowerSub.includes('relampago') ||
                              lowerLines.includes('雷擊') || lowerLines.includes('lightning') || lowerLines.includes('relámpago') || lowerLines.includes('relampago');

    if (isShowingColdBolt && (hasColdCloneIndicator || containsFireBolt || containsLightning)) {
      if (containsFireBolt) {
        isColdClone = true;
        originalSkill = '火箭術';
      } else if (containsLightning) {
        isColdClone = true;
        originalSkill = '雷擊術';
      }
    }

    const isTalent = lowerFull.includes('escarcha persistente') || lowerFull.includes('永恆之霜') ||
                    lowerFull.includes('冰霜持續') || badgeText.includes('talento') ||
                    badgeText.includes('天賦') || badgeText.includes('特性');

    return {
      name,
      sub,
      linesText,
      fullText,
      isColdClone,
      originalSkill,
      isTalent
    };
  }

  // 技能名稱比對輔助函式 (支援中英西雙語、普攻多別名、術字容錯比對、冰箭克隆精密防禦)
  function isSkillMatched(skillList, cardText, cardName, cardEl = null) {
    if (!skillList || skillList.length === 0) return false;
    const lowerText = (cardText || '').toLowerCase();
    const lowerName = (cardName || '').toLowerCase();

    // 若傳入了 cardEl 則解析精準身分
    const idInfo = cardEl ? getCardSkillIdentity(cardEl) : null;

    for (const rawSkill of skillList) {
      const s = (rawSkill || '').toLowerCase().trim();
      if (!s) continue;
      
      // 特殊處理：普通攻擊 / 普攻別名比對 (精準識別「攻擊：屬性附加」等衍生升級)
      if (s === '普通攻擊' || s === '普攻' || s === 'basic attack' || s === 'normal attack' || s === '攻擊') {
        if (isBasicAttackCard(cardText, cardName)) {
          return true;
        }
        continue;
      }

      // 關鍵防呆：若此張卡片已被判定為「普通攻擊衍生卡」(例如「攻擊：屬性附加」)，
      // 則它絕不是常規獨立技能 (如火箭術、冰箭術、雷擊術等)！
      // 嚴禁因為其說明文字中包含「火箭術」、「冰箭」等字眼而誤判為該技能！
      if (isBasicAttackCard(cardText, cardName)) {
        continue;
      }

      // 常見技能別名對照表 (中/英/西)
      const aliasMap = {
        '火箭': ['火箭', '火箭術', 'fire bolt', 'firebolt', 'lanza de fuego'],
        '火箭術': ['火箭', '火箭術', 'fire bolt', 'firebolt', 'lanza de fuego'],
        '冰箭': ['冰箭', '冰箭術', 'cold bolt', 'coldbolt', 'lanza de hielo', '水箭', '水箭術'],
        '冰箭術': ['冰箭', '冰箭術', 'cold bolt', 'coldbolt', 'lanza de hielo', '水箭', '水箭術'],
        '水箭': ['冰箭', '冰箭術', 'cold bolt', 'coldbolt', 'lanza de hielo', '水箭', '水箭術'],
        '水箭術': ['冰箭', '冰箭術', 'cold bolt', 'coldbolt', 'lanza de hielo', '水箭', '水箭術'],
        '雷擊': ['雷擊', '雷擊術', 'lightning bolt', 'lightning', 'relámpago', 'relampago'],
        '雷擊術': ['雷擊', '雷擊術', 'lightning bolt', 'lightning', 'relámpago', 'relampago'],
        '雷爆': ['雷爆', '雷爆術', 'thunderstorm', 'tormenta'],
        '雷爆術': ['雷爆', '雷爆術', 'thunderstorm', 'tormenta'],
        '火牆': ['火牆', '火焰之壁', 'fire wall', 'firewall', 'muro de fuego'],
        '火焰之壁': ['火牆', '火焰之壁', 'fire wall', 'firewall', 'muro de fuego'],
        '火球': ['火球', '火球術', 'fire ball', 'fireball', 'bola de fuego'],
        '火球術': ['火球', '火球術', 'fire ball', 'fireball', 'bola de fuego'],
        '狂擊': ['狂擊', 'bash', 'golpe fulminante'],
        '怒爆': ['怒爆', 'magnum break', 'magnum'],
        '治癒': ['治癒', '治癒術', 'heal', 'curación', 'curacion'],
        '治癒術': ['治癒', '治癒術', 'heal', 'curación', 'curacion'],
        '霸體': ['霸體', 'endure'],
        '心靈爆破': ['心靈爆破', 'napalm beat', 'napalm'],
        '聖靈召喚': ['聖靈召喚', 'soul strike', 'soulstrike'],
        '冰凍術': ['冰凍術', 'frost diver', 'frost'],
        '火狩': ['火狩', 'sight'],
        // 盜賊技能相容支援
        '影步': ['影步', '暗影步', '影子步', 'shadowstep', 'shadow step', 'paso sombrío', 'paso sombrio'],
        '暗影步': ['影步', '暗影步', '影子步', 'shadowstep', 'shadow step', 'paso sombrío', 'paso sombrio'],
        'shadowstep': ['影步', '暗影步', '影子步', 'shadowstep', 'shadow step', 'paso sombrío', 'paso sombrio'],
        // 特性 / 狀態技能擴充支援
        '永恆之霜': ['永恆之霜', '冰霜持續', '永續冰霜', 'escarcha persistente', 'escarcha', 'persistent frost'],
        '冰霜持續': ['永恆之霜', '冰霜持續', '永續冰霜', 'escarcha persistente', 'escarcha', 'persistent frost'],
        '雙重施法': ['雙重施法', 'doble casteo', 'double cast']
      };

      const aliases = aliasMap[s] || [s];

      // 若這是一張克隆卡，比對其原生技能
      if (idInfo && idInfo.isColdClone) {
        const orig = idInfo.originalSkill.toLowerCase();
        if (aliases.some(a => orig.includes(a) || a.includes(orig))) {
          return true;
        }
      }

      if (aliases.some(alias => lowerText.includes(alias) || lowerName.includes(alias))) {
        return true;
      }

      // 標準包含檢查
      if (lowerText.includes(s) || lowerName.includes(s)) {
        return true;
      }

      // 若技能結尾為「術」，去掉「術」再比對（例如：火箭術 -> 火箭）
      if (s.endsWith('術') && s.length > 1) {
        const base = s.slice(0, -1);
        if (lowerText.includes(base) || lowerName.includes(base)) {
          return true;
        }
      }

      // 若技能沒有「術」，加上「術」比對（例如：火箭 -> 火箭術）
      if (!s.endsWith('術')) {
        const withShu = s + '術';
        if (lowerText.includes(withShu) || lowerName.includes(withShu)) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * 檢測當前角色技能槽位是否已滿 (如三導管法師已選滿 4/4 個技能)
   * 當滿槽時，遊戲內部 freshChoices 關閉，不再產生新技能，只出已學技能的升級！
   */
  function areSkillSlotsFull() {
    try {
      // 1. 若畫面上發現任何空技能槽 (+ 號格)，絕對代表槽位未滿
      const emptySlot = document.querySelector('#lu-sockets .skill-slot.empty, #skillbar .skill-slot.empty, #lu-sockets .empty, #skillbar .empty');
      if (emptySlot) {
        return false;
      }

      // 2. 檢測 #lu-sockets 升級彈窗中的滿槽文字與槽位比例
      const luSockets = document.getElementById('lu-sockets');
      if (luSockets && !luSockets.classList.contains('hidden') && luSockets.style.display !== 'none') {
        const text = luSockets.textContent || '';
        // 出現 "Huecos llenos: ya solo puedes mejorar estas." 或中文「滿」字樣
        if (/llenos|lleno|滿|ya solo puedes mejorar/i.test(text)) {
          return true;
        }
        // 解析比例，如 Habilidades 3/4 或 4/4
        const match = text.match(/(?:Habilidades|Skills|技能)?\s*(\d+)\s*\/\s*(\d+)/i);
        if (match) {
          const cur = parseInt(match[1], 10);
          const max = parseInt(match[2], 10);
          if (!isNaN(cur) && !isNaN(max) && max > 0) {
            return cur >= max;
          }
        }
      }

      // 3. 備援檢測：主畫面底部 HUD #skillbar 中已擁有的主動技能數
      const skillbar = document.getElementById('skillbar');
      if (skillbar) {
        const skills = skillbar.querySelectorAll('.skill-slot:not(.empty):not(.basic), [data-skill]');
        if (skills.length >= 4) {
          return true;
        }
        if (skills.length > 0 && skills.length < 4) {
          return false;
        }
      }
    } catch (e) {
      console.warn('[RO Helper] areSkillSlotsFull 檢測異常:', e);
    }
    return true;
  }

  /**
   * 檢測玩家設定的專注技能是否已全數學習就緒 (例如法師「三導管成形」)
   * 只要專注技能全員在身，即視為流派大成 (Build Formed)，立即解鎖放逐功能！
   */
  function isFocusBuildFormed(focusList) {
    if (!focusList || focusList.length === 0) return false;
    try {
      // 1. 取得當前已學習的技能數量
      let learnedCount = 0;
      const luSockets = document.getElementById('lu-sockets');
      if (luSockets && !luSockets.classList.contains('hidden') && luSockets.style.display !== 'none') {
        const text = luSockets.textContent || '';
        const match = text.match(/(?:Habilidades|Skills|技能)?\s*(\d+)\s*\/\s*(\d+)/i);
        if (match) {
          learnedCount = parseInt(match[1], 10) || 0;
        } else {
          const filled = luSockets.querySelectorAll('.skill-slot:not(.empty), .socket:not(.empty)');
          if (filled.length > 0) learnedCount = filled.length;
        }
      }

      if (!learnedCount) {
        const skillbar = document.getElementById('skillbar');
        if (skillbar) {
          const filled = skillbar.querySelectorAll('.skill-slot:not(.empty):not(.basic), [data-skill]');
          learnedCount = filled.length;
        }
      }

      // 情況 A：已學技能數量已達到或超越專注技能總數 (例如三導管 3 招，且目前已學 3 個技能)
      if (learnedCount >= focusList.length && focusList.length > 0) {
        return true;
      }

      // 情況 B：比對槽位文字與圖標
      const allSockets = document.querySelectorAll('#lu-sockets .skill-slot:not(.empty), #lu-sockets .socket:not(.empty), #skillbar .skill-slot:not(.empty):not(.basic), #skillbar [data-skill]');
      if (allSockets.length >= focusList.length && focusList.length > 0) {
        return true;
      }
    } catch (e) {
      console.warn('[RO Helper] isFocusBuildFormed 檢測異常:', e);
    }
    return false;
  }

  /**
   * 判定一張卡片是否為專注目標 (Focus Target)
   * 具備克隆身分防護：克隆自雷擊術/火箭術的冰箭卡，若原始技能命中專注，100% 視為專注目標！
   */
  function isCardFocusTarget(card, focusList, banishList) {
    if (!focusList || focusList.length === 0) return false;
    const cardText = (card.textContent || '').toLowerCase();
    const cardName = card.querySelector('.pk-name')?.textContent?.trim() || '';

    // 若為普通攻擊衍生卡 (如「攻擊：屬性附加」)，只有在玩家明確專注普攻時才算專注
    if (isBasicAttackCard(cardText, cardName)) {
      return focusList.some(f => {
        const lf = (f || '').toLowerCase().trim();
        return lf === '普通攻擊' || lf === '普攻' || lf === 'basic attack' || lf === 'normal attack' || lf === '攻擊';
      });
    }

    const idInfo = getCardSkillIdentity(card);

    if (idInfo.isColdClone) {
      // 1. 克隆卡原生技能命中專注 (例如原生為雷擊術，且玩家專注了雷擊術) -> 命中專注！
      if (isSkillMatched(focusList, '', idInfo.originalSkill, null)) {
        return true;
      }
      // 2. 原生技能未專注，但玩家專注了「冰箭術/水箭術」，且原生技能未被放逐 -> 亦視為專注
      const isTargetingCold = focusList.some(f => {
        const lf = f.toLowerCase();
        return lf.includes('冰箭') || lf.includes('水箭') || lf.includes('cold') || lf.includes('hielo');
      });
      if (isTargetingCold) {
        const isOrigBanished = banishList && banishList.length > 0 && isSkillMatched(banishList, '', idInfo.originalSkill, null);
        if (!isOrigBanished) return true;
      }
      return false;
    }

    return isSkillMatched(focusList, cardText, cardName, card);
  }

  /**
   * 判定一張卡片是否為放逐目標 (Banish Target)
   * 具備絕對防護：
   * 1. 神祇 (Deity) 絕對不放逐
   * 2. 任何命中專注名單的卡片 (包含其克隆身分) 絕對不放逐！(Focus 永遠優先保護)
   * 3. 克隆卡片僅比對其「原生技能」(例如原生為雷爆術)，絕不可因其借用了「冰箭術」外觀而誤放逐！
   * 4. 未專注的普通攻擊升級卡視為放逐對象
   * 5. 若專注流派已成形 (三導管在身)，非專注的新技能 (第四招搶槽技能) 均列為放逐對象！
   */
  function isCardBanishTarget(card, focusList, banishList) {
    const cardText = (card.textContent || '').toLowerCase();
    const cardName = card.querySelector('.pk-name')?.textContent?.trim() || '';

    // 神祇絕對不放逐
    if (cardText.includes('deity') || cardText.includes('神祇')) return false;

    // 專注目標絕對不放逐！(徹底杜絕「我明明專注雷擊卻放逐雷擊克隆」的判定衝突)
    if (isCardFocusTarget(card, focusList, banishList)) {
      return false;
    }

    const idInfo = getCardSkillIdentity(card);
    let isBanish = false;
    if (idInfo.isColdClone) {
      // 克隆卡：僅比對其原生技能是否在放逐清單中，絕不依據外觀卡名比對！
      isBanish = isSkillMatched(banishList, '', idInfo.originalSkill, null);
    } else {
      isBanish = isSkillMatched(banishList, cardText, cardName, card);
    }

    // 未專注的普通攻擊升級卡視為放逐對象
    const isBasicAttack = isBasicAttackCard(cardText, cardName);
    if (isBasicAttack) {
      return true;
    }

    if (isBanish) return true;

    // 4. 【三導管/純粹流派必備】：若玩家設定了專注技能，且未開啟「優先填滿技能」(例如三導管法師不想選第 4 招)：
    // 任何帶有 .pk-ribbon (Nuevo / 新技能) 的卡片都是意圖佔據第 4 格的非目標技能，100% 視為放逐對象！
    const fillSlotsFirst = !!config.banishOnlyWhenSlotsFull;
    const hasFocus = focusList && focusList.length > 0;
    const hasRibbon = !!card.querySelector('.pk-ribbon');
    if (hasRibbon && hasFocus && (!fillSlotsFirst || isFocusBuildFormed(focusList) || areSkillSlotsFull())) {
      return true;
    }

    // 若 slots 已滿 4 格，新技能不應該再出現，若出現亦為放逐對象
    if (hasRibbon && areSkillSlotsFull()) {
      return true;
    }

    return false;
  }

  // ==========================================
  // 5.1 關卡道具與神祇卡專用識別與目標判定
  // ==========================================

  /**
   * 判定一張卡片是否為關卡內道具/神祇卡 (In-Run Item Card)
   * 採用多重防偽判定，精確區隔技能卡與寶箱道具卡：
   * 1. 標題含有 Cofre / Chest / 寶箱 / Objetos 則必為道具
   * 2. 槽位 #lu-sockets 內文字含有 Objetos / Items / 道具 則為道具
   * 3. 槽位 #lu-sockets 內文字含有 Habilidades / Skills / 技能 則必為技能（絕非道具）
   * 4. 卡片徽章 .pk-badge 含有 Habilidad / 技能 則必為技能
   * 5. 卡片子標題 .pk-sub 含有藥水/秘藥/祝福/料理/神祇/poc/elixir/bendic/plato/deity 則為道具
   * 6. 卡片子標題 .pk-sub 含有 Nv / Lv / Pasiva / Activa 則必為技能
   * 7. 圖示路徑含有 runitems/ 或 items/ 則為道具
   */
  function isItemCard(card) {
    if (!card) return false;
    const pickerTitle = (document.getElementById('pk-title')?.textContent || '').toLowerCase();
    if (pickerTitle.includes('cofre') || pickerTitle.includes('chest') || pickerTitle.includes('寶箱') || pickerTitle.includes('objetos')) {
      return true;
    }
    const luSockets = (document.getElementById('lu-sockets')?.textContent || '').toLowerCase();
    if (luSockets.includes('objetos') || luSockets.includes('items') || luSockets.includes('道具')) {
      return true;
    }
    if (luSockets.includes('habilidades') || luSockets.includes('skills') || luSockets.includes('技能')) {
      return false;
    }
    const badge = (card.querySelector('.pk-badge')?.textContent || '').toLowerCase();
    if (badge.includes('habilidad') || badge.includes('技能')) {
      return false;
    }
    const sub = (card.querySelector('.pk-sub')?.textContent || '').toLowerCase();
    if (sub.includes('poc') || sub.includes('elixir') || sub.includes('bendic') ||
        sub.includes('plato') || sub.includes('deity') || sub.includes('藥水') ||
        sub.includes('秘藥') || sub.includes('祝福') || sub.includes('料理') ||
        sub.includes('神祇') || sub.includes('dish') || sub.includes('potion') ||
        sub.includes('blessing')) {
      return true;
    }
    if (sub.includes('pasiva') || sub.includes('activa') || sub.includes('passive') || sub.includes('active') || /nv\s*\d+|lv\s*\d+/i.test(sub)) {
      return false;
    }
    const imgSrc = (card.querySelector('.pk-art img')?.src || '').toLowerCase();
    if (imgSrc.includes('runitems/') || imgSrc.includes('assets/items/') || imgSrc.includes('items/')) {
      return true;
    }
    return false;
  }

  /**
   * 精準提取關卡道具身分 (ID, Slot, 名稱)
   */
  function getItemIdentity(card) {
    if (!card) return { id: '', slot: 'item', name_zh: '', name_en: '', name_es: '', desc: '' };
    const name = card.querySelector('.pk-name')?.textContent?.trim() || '';
    const sub = card.querySelector('.pk-sub')?.textContent?.trim() || '';
    const imgSrc = (card.querySelector('.pk-art img')?.src || '').toLowerCase();
    const fullText = (card.textContent || '').toLowerCase();

    if (Array.isArray(RUN_ITEMS_DATABASE)) {
      for (const it of RUN_ITEMS_DATABASE) {
        if (it.id && (imgSrc.includes(it.id.toLowerCase()) || fullText.includes(it.id.toLowerCase()))) {
          return it;
        }
        if (name && (name.includes(it.name_zh) || name.includes(it.name_en) || name.includes(it.name_es))) {
          return it;
        }
        if (sub && (sub.includes(it.name_zh) || sub.includes(it.name_en) || sub.includes(it.name_es))) {
          return it;
        }
      }
    }
    let derivedSlot = 'item';
    if (sub.includes('plato') || sub.includes('料理') || sub.includes('dish') || name.includes('料理') || name.includes('Dish')) {
      derivedSlot = 'dish';
    } else if (sub.includes('deity') || sub.includes('神祇') || name.includes('Deity') || name.includes('神祇')) {
      derivedSlot = 'deity';
    } else if (sub.includes('poc') || sub.includes('藥水') || sub.includes('potion')) {
      derivedSlot = 'potion';
    } else if (sub.includes('elixir') || sub.includes('秘藥')) {
      derivedSlot = 'elixir';
    } else if (sub.includes('bendic') || sub.includes('祝福') || sub.includes('blessing')) {
      derivedSlot = 'blessing';
    }
    return { id: '', slot: derivedSlot, name_zh: name, name_en: name, name_es: name, desc: sub };
  }

  function isItemFocusTarget(card, focusList) {
    if (!focusList || focusList.length === 0 || !card) return false;
    const item = getItemIdentity(card);
    const name = (card.querySelector('.pk-name')?.textContent || '').toLowerCase();
    const text = (card.textContent || '').toLowerCase();

    return focusList.some(f => {
      const term = String(f).toLowerCase().trim();
      if (!term) return false;
      return (item.id && item.id.toLowerCase() === term) ||
             (item.name_zh && item.name_zh.toLowerCase().includes(term)) ||
             (item.name_en && item.name_en.toLowerCase().includes(term)) ||
             (item.name_es && item.name_es.toLowerCase().includes(term)) ||
             name.includes(term) ||
             text.includes(term);
    });
  }

  function isItemBanishTarget(card, banishList) {
    if (!banishList || banishList.length === 0 || !card) return false;
    const item = getItemIdentity(card);
    const name = (card.querySelector('.pk-name')?.textContent || '').toLowerCase();
    const text = (card.textContent || '').toLowerCase();

    return banishList.some(b => {
      const term = String(b).toLowerCase().trim();
      if (!term) return false;
      return (item.id && item.id.toLowerCase() === term) ||
             (item.name_zh && item.name_zh.toLowerCase().includes(term)) ||
             (item.name_en && item.name_en.toLowerCase().includes(term)) ||
             (item.name_es && item.name_es.toLowerCase().includes(term)) ||
             name.includes(term) ||
             text.includes(term);
    });
  }

  /**
   * 核心卡片權重計分系統
   * 嚴格遵循使用者意志：
   * 1. 勾選了專注技能，不管怎樣都優先選這幾招 (專注基礎分 10,000,000 分，超越任何非專注傳奇卡)
   * 2. 當【級別優先】開啟時：專注技能內部以品質 (傳奇>史詩>稀有>優良>普通) 為第一順位，詞綴為第二順位
   * 3. 當【級別優先】關閉時：專注技能內部以詞綴偏好為第一順位，品質為第二順位
   * 4. 若出現非專注的傳奇技能與普通技能，嚴禁選擇非專注傳奇卡！
   */
  function selectBestCardIndex(cards, slotsFull = true) {
    if (cards.length === 0) return 0;
    if (config.cardStrategy === 'first') return 0;

    // 0. 關卡寶箱道具專屬評分判定 (In-Run Items Strategy - 智慧避佔位引擎)
    if (isItemCard(cards[0])) {
      let maxScore = -99999999;
      let bestIdx = 0;
      const curFocusItems = config.itemSettings?.focus || [];
      const curBanishItems = config.itemSettings?.banish || [];

      cards.forEach((card, idx) => {
        const item = getItemIdentity(card);
        const rarity = getCardRarity(card);
        const isFocus = isItemFocusTarget(card, curFocusItems);
        const isBanish = isItemBanishTarget(card, curBanishItems);

        const isDish = item.slot === 'dish' || (item.name_zh && item.name_zh.includes('料理')) || (item.desc && item.desc.includes('料理'));
        const isDeity = item.slot === 'deity' || (item.name_zh && item.name_zh.includes('神祇')) || (card.textContent || '').toLowerCase().includes('deity');

        let baseTier = 0;
        if (isFocus) {
          baseTier = 10000000;
        } else if (isBanish) {
          baseTier = -10000000;
        } else if (isDeity) {
          baseTier = 700000;
        } else if (isDish) {
          baseTier = 600000;
        } else {
          baseTier = 5000;
        }

        const score = baseTier + rarity * 1000;
        if (score > maxScore) {
          maxScore = score;
          bestIdx = idx;
        }
      });
      return bestIdx;
    }

    const curJobCfg = getJobConfig(config.selectedJob);
    const curFocusList = curJobCfg.focus || [];
    const curBanishList = curJobCfg.banish || [];
    const hasFocus = curFocusList.length > 0;
    const rarityFirst = !!config.prioritizeRarity;
    const fillSlotsFirst = !!config.banishOnlyWhenSlotsFull;

    let maxScore = -Infinity;
    let bestIdx = 0;

    cards.forEach((card, idx) => {
      const text = (card.textContent || '').toLowerCase();
      const name = card.querySelector('.pk-name')?.textContent?.trim() || '';
      const rarity = getCardRarity(card);
      const isFocus = isCardFocusTarget(card, curFocusList, curBanishList);
      const isBanish = isCardBanishTarget(card, curFocusList, curBanishList);
      const isBasicAttack = isBasicAttackCard(text, name);
      const hasRibbon = !!card.querySelector('.pk-ribbon');
      const affixScore = getCardAffixScore(text, name);

      let score = 0;

      if (isFocus) {
        // 🎯 專注目標：壓倒性最高階層 (10,000,000 分)，不管出現什麼都優先選這幾招！
        const baseFocus = 10000000;
        if (rarityFirst) {
          // 當級別優先開啟時：品質 (傳奇>史詩>稀有>優良>普通) 為第一順位，詞綴偏好為第二順位
          score = baseFocus + rarity * 100000 + affixScore;
        } else {
          // 當級別優先關閉時：詞綴偏好為第一順位，品質為第二順位
          score = baseFocus + affixScore * 1000 + rarity * 100;
        }
      } else if (isBanish) {
        // 🚫 放逐名單中的技能：最底層負分 (-10,000,000 分)
        score = -10000000 + rarity * 10;
      } else if (hasRibbon && !fillSlotsFirst) {
        // 🚫 未開啟優先填滿技能時的新技能 (如法師三導管外的第 4 招)：絕對不選！(-5,000,000 分)
        score = -5000000 + rarity * 10;
      } else if (isBasicAttack && !isFocus) {
        // ⚪ 未專注的普通攻擊：負分 (-2,000,000 分)
        score = -2000000 + rarity * 10;
      } else if (hasFocus) {
        // ⚠️ 玩家有設定專注技能，但這張卡「不是專注技能」！
        // 使用者要求：「如果是兩個普通技能搭配一個傳奇技能（不是火箭、冰箭、雷擊）也不准選擇」
        if (hasRibbon) {
          score = fillSlotsFirst ? (-50000 + rarity * 100) : (-5000000 + rarity * 10);
        } else {
          score = -10000 + rarity * 100 + affixScore;
        }
      } else {
        // 玩家完全未勾選任何專注技能時的正常選卡：
        if (rarityFirst) {
          score = 10000 + rarity * 10000 + affixScore;
        } else {
          score = 10000 + affixScore * 100 + rarity * 10;
        }
        if (hasRibbon && !fillSlotsFirst && slotsFull) {
          score = -5000000;
        }
      }

      if (score > maxScore) {
        maxScore = score;
        bestIdx = idx;
      }
    });

    return bestIdx;
  }

  function clearPickerRetry() {
    if (pickerRetryTimer) {
      clearInterval(pickerRetryTimer);
      pickerRetryTimer = null;
    }
  }

  /**
   * 多軌並行發送選卡事件 (Focus + PointerDown/Up + Click + Keydown/Up + Back Yes)
   * 確保穿透遊戲內部的動畫保護鎖與自定義按鍵事件
   */
  function dispatchCardSelection(targetCard, cardIndex, totalCards) {
    if (!targetCard) return;

    try {
      targetCard.focus();
      targetCard.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
      targetCard.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
      targetCard.click();
    } catch (e) {
      console.warn('[RO Helper] 點擊卡片例外:', e);
    }

    const keyStr = String(cardIndex + 1);
    window.dispatchEvent(new KeyboardEvent('keydown', {
      key: keyStr,
      code: `Digit${keyStr}`,
      bubbles: true
    }));
    window.dispatchEvent(new KeyboardEvent('keyup', {
      key: keyStr,
      code: `Digit${keyStr}`,
      bubbles: true
    }));

    // 若有翻面確認按鈕，一併點擊確認
    const yesBtn = targetCard.closest('.pk-slot')?.querySelector('[data-yes]') || document.querySelector('#pk-cards [data-yes]');
    if (yesBtn) {
      try { yesBtn.click(); } catch (e) {}
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
    }
  }

  function executeCardPick(isFirstAttempt = false) {
    try {
      const picker = document.getElementById('picker');
      if (!picker || picker.classList.contains('hidden')) {
        clearPickerRetry();
        isPickingCard = false;
        pickedActionAttempts.clear();
        cardPickerOpenedAt = 0;
        return;
      }

      const confirmYes = document.querySelector('#pk-cards [data-yes]') || document.querySelector('#picker [data-yes]');
      if (confirmYes && !confirmYes.classList.contains('hidden')) {
        updateStatus('🃏 偵測到替換詢問，點擊確認...');
        confirmYes.click();
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
        return;
      }

      const cards = Array.from(document.querySelectorAll('#pk-cards .pk-card'));
      if (cards.length === 0) {
        window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true }));
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
        return;
      }

      // 當前職業技能策略 (使用安全函式防呆)
      const curJobCfg = getJobConfig(config.selectedJob);
      const curFocusList = curJobCfg.focus || [];
      const curBanishList = curJobCfg.banish || [];
      const hasFocusConfigured = curFocusList.length > 0;
      const slotsFull = areSkillSlotsFull() || isFocusBuildFormed(curFocusList);
      const fillSlotsFirst = !config.banishOnlyWhenSlotsFull;

      const isItemTypePicker = isItemCard(cards[0]);

      // ==========================================
      // 【步驟 1】：專注行為 (Focus Action)
      // 使用者規則：如果有專注的技能跟放逐同時出現，則「先做專注行為」！
      // 支援關卡道具與職業技能專注
      // ==========================================
      if (isItemTypePicker) {
        const curFocusItems = config.itemSettings?.focus || [];
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const cardName = card.querySelector('.pk-name')?.textContent?.trim() || `#${i + 1}`;
          if (isItemFocusTarget(card, curFocusItems)) {
            const focusBtn = findFocusButton(card, pickedActionAttempts);
            if (focusBtn && !focusBtn.disabled && !focusBtn.classList.contains('disabled')) {
              const actId = focusBtn.getAttribute('data-act') || `f_item_${i}`;
              const actKey = `${actId}_${cardName}`;
              pickedActionAttempts.add(actKey);
              config.stats.focusedItems = (config.stats.focusedItems || 0) + 1;
              saveConfig();
              updateUIStats();
              updateStatus(`🎯 執行道具專注: [${cardName}] (Focus ×3 出現率)`);
              console.log(`[RO Helper] 觸發道具專注特權 (Focus): [${cardName}]`);
              currentPickActions.push(`🎯 專注道具: [${cardName}]`);
              cardPickerOpenedAt = performance.now();
              triggerActionButton(focusBtn);
              setTimeout(() => {
                executeCardPick(false);
              }, 820);
              return;
            }
          }
        }
      } else if (hasFocusConfigured) {
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const cardName = card.querySelector('.pk-name')?.textContent?.trim() || `#${i + 1}`;
          const idInfo = getCardSkillIdentity(card);

          if (isCardFocusTarget(card, curFocusList, curBanishList)) {
            const focusBtn = findFocusButton(card, pickedActionAttempts);
            if (focusBtn && !focusBtn.disabled && !focusBtn.classList.contains('disabled')) {
              const actId = focusBtn.getAttribute('data-act') || `f_${i}`;
              const actKey = `${actId}_${cardName}`;
              pickedActionAttempts.add(actKey);
              config.stats.focusedSkills = (config.stats.focusedSkills || 0) + 1;
              saveConfig();
              updateUIStats();
              const cloneTag = idInfo.isColdClone ? ` (克隆自 ${idInfo.originalSkill})` : '';
              updateStatus(`🎯 執行技能專注: [${cardName}]${cloneTag} (Focus ×3 出現率)`);
              console.log(`[RO Helper] 觸發技能專注特權 (Focus): [${cardName}]${cloneTag}`);
              currentPickActions.push(`🎯 專注: [${cardName}]${cloneTag}`);
              cardPickerOpenedAt = performance.now();
              triggerActionButton(focusBtn);
              setTimeout(() => {
                executeCardPick(false);
              }, 820);
              return;
            }
          }
        }
      }

      // ==========================================
      // 【步驟 2】：放逐行為 (Banish Action)
      // 使用者規則：
      // 1. 若無勾選任何專注技能，放逐優先，只要出現放逐技能就直接放逐
      // 2. 若有勾選專注技能，且專注行為已完成（或已專注過），接續檢查放逐
      // 3. 若勾選「優先填滿技能」(fillSlotsFirst)，放逐行為要等 4 個技能槽都選完（或專注流派成形）後才開始進行
      // 4. 若未勾選「優先填滿技能」，只要出現放逐技能不管怎樣都立即放逐
      // ==========================================
      const canBanishNow = !hasFocusConfigured || !fillSlotsFirst || slotsFull;

      if (isItemTypePicker) {
        const curBanishItems = config.itemSettings?.banish || [];
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const cardName = card.querySelector('.pk-name')?.textContent?.trim() || `#${i + 1}`;
          if (isItemBanishTarget(card, curBanishItems)) {
            const banishBtn = findBanishButton(card, pickedActionAttempts);
            if (banishBtn && !banishBtn.disabled && !banishBtn.classList.contains('disabled')) {
              const actId = banishBtn.getAttribute('data-act') || `b_item_${i}`;
              const actKey = `${actId}_${cardName}`;
              pickedActionAttempts.add(actKey);
              config.stats.banishedItems = (config.stats.banishedItems || 0) + 1;
              saveConfig();
              updateUIStats();
              updateStatus(`🚫 自動放逐關卡道具: [${cardName}]，等待換抽新卡...`);
              console.log(`[RO Helper] 觸發道具放逐特權: [${cardName}]`);
              currentPickActions.push(`🚫 放逐道具: [${cardName}]`);
              cardPickerOpenedAt = performance.now();
              triggerActionButton(banishBtn);
              setTimeout(() => {
                executeCardPick(false);
              }, 820);
              return;
            }
          }
        }
      } else if (canBanishNow) {
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const cardName = card.querySelector('.pk-name')?.textContent?.trim() || `#${i + 1}`;
          const idInfo = getCardSkillIdentity(card);
          const hasRibbon = !!card.querySelector('.pk-ribbon');

          if (isCardBanishTarget(card, curFocusList, curBanishList)) {
            const banishBtn = findBanishButton(card, pickedActionAttempts);
            if (banishBtn && !banishBtn.disabled && !banishBtn.classList.contains('disabled')) {
              const actId = banishBtn.getAttribute('data-act') || `b_${i}`;
              const actKey = `${actId}_${cardName}`;
              pickedActionAttempts.add(actKey);
              config.stats.banishedSkills = (config.stats.banishedSkills || 0) + 1;
              saveConfig();
              updateUIStats();
              const reason = idInfo.isColdClone ? `克隆技能 [${idInfo.originalSkill}]` : (isBasicAttackCard(card.textContent, cardName) ? '未專注普攻' : (hasRibbon ? '非專注新技能' : '指定技能'));
              updateStatus(`🚫 自動放逐${reason}: [${cardName}]，等待換抽新卡...`);
              console.log(`[RO Helper] 觸發放逐特權 (Banish) [${reason}]: [${cardName}]`);
              currentPickActions.push(`🚫 放逐: [${cardName}] (${reason})`);
              cardPickerOpenedAt = performance.now();
              triggerActionButton(banishBtn);
              setTimeout(() => {
                executeCardPick(false);
              }, 820);
              return;
            }
          }
        }
      } else if (fillSlotsFirst && !slotsFull) {
        console.log('[RO Helper] ⏳ 玩家開啟「優先填滿技能」，4 個技能槽未填滿前暫緩放逐');
      }

      // ==========================================
      // 【步驟 3】：無專注技能時優先重抽 (Auto Reroll Deck / Single Card Reroll)
      // 若畫面上完全沒有專注技能，且玩家有設定專注名單，優先使用整副重抽
      // ==========================================
      const hasAnyFocusCard = isItemTypePicker ?
        cards.some(c => isItemFocusTarget(c, config.itemSettings?.focus || [])) :
        cards.some(c => isCardFocusTarget(c, curFocusList, curBanishList));

      if (hasFocusConfigured && !hasAnyFocusCard && config.autoRerollDeck) {
        // 3.1 優先整副重抽 (Reroll deck)
        const rerollDeckBtn = findRerollDeckButton(pickedActionAttempts);
        if (rerollDeckBtn && !rerollDeckBtn.disabled && !rerollDeckBtn.classList.contains('disabled')) {
          const actId = rerollDeckBtn.getAttribute('data-act') || 'reroll_deck';
          pickedActionAttempts.add(actId);
          updateStatus('🎲 畫面上無專注技能，執行整副重抽 (Reroll deck)...');
          console.log('[RO Helper] 觸發整副重抽 (Reroll deck)');
          currentPickActions.push('🎲 整副重抽全部');
          cardPickerOpenedAt = performance.now();
          triggerActionButton(rerollDeckBtn);
          setTimeout(() => {
            executeCardPick(false);
          }, 820);
          return;
        }

        // 3.2 備援單張卡片重抽 (Single Card Reroll)：若整副重抽已無次數，逐一重抽非專注卡片
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const isDeity = (card.textContent || '').toLowerCase().includes('deity') || (card.textContent || '').includes('神祇');
          if (!isDeity) {
            const cardRerollBtn = findRerollCardButton(card, pickedActionAttempts);
            if (cardRerollBtn && !cardRerollBtn.disabled && !cardRerollBtn.classList.contains('disabled')) {
              const actId = cardRerollBtn.getAttribute('data-act') || `reroll_${i}`;
              pickedActionAttempts.add(actId);
              const cardName = card.querySelector('.pk-name')?.textContent?.trim() || `#${i + 1}`;
              updateStatus(`🎲 畫面上無專注技能，單張重抽卡片 [${cardName}]...`);
              console.log(`[RO Helper] 觸發單張卡片重抽: [${cardName}]`);
              currentPickActions.push(`🎲 單張重抽: [${cardName}]`);
              cardPickerOpenedAt = performance.now();
              triggerActionButton(cardRerollBtn);
              setTimeout(() => {
                executeCardPick(false);
              }, 820);
              return;
            }
          }
        }
      }

      // ==========================================
      // 【步驟 4】：挑選最佳卡片並點擊選取
      // 使用者規則：
      // 1. 勾選了專注，不管怎樣都是選這幾招！
      // 2. 當級別優先開啟時，專注內部品質優先；當級別優先關閉時，專注內部詞綴偏好優先
      // 3. 非專注的傳奇技能絕對不選！
      // ==========================================
      const chosenIndex = selectBestCardIndex(cards, slotsFull);
      const targetCard = cards[chosenIndex] || cards[0];
      const cardName = targetCard.querySelector('.pk-name')?.textContent?.trim() || `#${chosenIndex + 1}`;
      const rarity = getCardRarity(targetCard);
      const rarityText = RARITY_NAMES[rarity] || '普通';
      const idInfo = getCardSkillIdentity(targetCard);
      const cloneNote = idInfo.isColdClone ? ` (克隆: ${idInfo.originalSkill})` : '';

      updateStatus(`🃏 正在選卡: [${cardName}]${cloneNote} (${rarityText}) (第 ${chosenIndex + 1}/${cards.length} 張)`);
      console.log(`[RO Helper] 最終選卡: [${cardName}]${cloneNote} (級別: ${rarityText}, 索引: ${chosenIndex})`);

      // 判斷選卡類型 (技能 / 寶箱道具 / 劇情裝備) 並寫入歷史紀錄庫
      const pickerTitle = document.getElementById('pk-title')?.textContent?.trim() || '';
      let pickType = 'skill';
      if (pickerTitle.includes('Cofre') || pickerTitle.includes('Chest') || pickerTitle.includes('寶箱') || pickerTitle.includes('Objetos')) {
        pickType = 'chest';
      } else if (pickerTitle.includes('historia') || pickerTitle.includes('劇情') || pickerTitle.includes('story')) {
        pickType = 'story';
      }
      recordPickHistory(pickType, cards, chosenIndex, targetCard, currentPickActions);
      currentPickActions = [];

      // 多軌並行觸發選卡事件 (Click + Pointer + Keydown Digit + Enter)
      dispatchCardSelection(targetCard, chosenIndex, cards.length);

      // 選卡後的確認機制（防止網路延遲造成選卡未關閉）
      clearPickerRetry();
      let attempts = 0;
      pickerRetryTimer = setInterval(() => {
        attempts++;
        const p = document.getElementById('picker');
        if (!p || p.classList.contains('hidden') || attempts > 10) {
          clearPickerRetry();
          isPickingCard = false;
          pickedActionAttempts.clear();
          cardPickerOpenedAt = 0;
          if (p && p.classList.contains('hidden')) {
            config.stats.cardsPicked++;
            saveConfig();
            updateUIStats();
            updateStatus(`✅ 選卡成功: [${cardName}]${cloneNote} (${rarityText})`);
          }
          return;
        }

        // 若 300ms 後卡片視窗還未關閉，嘗試再次多軌點選卡片或按鍵
        const curCards = Array.from(document.querySelectorAll('#pk-cards .pk-card'));
        const c = curCards[chosenIndex] || curCards[0];
        if (c) {
          dispatchCardSelection(c, chosenIndex, curCards.length);
        }

        // 若嘗試 4 次以上仍未關閉（超過 1.2 秒），啟動強選保底
        if (attempts >= 4) {
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
          window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true }));
          const anyYes = document.querySelector('[data-yes]');
          if (anyYes) try { anyYes.click(); } catch (e) {}
        }
      }, 300);
    } catch (err) {
      console.error('[RO Helper] executeCardPick 發生例外錯誤:', err);
      // 例外自救：重設狀態防止永久死鎖
      isPickingCard = false;
      clearPickerRetry();
      const anyCard = document.querySelector('#pk-cards .pk-card');
      if (anyCard) {
        const curCards = Array.from(document.querySelectorAll('#pk-cards .pk-card'));
        recordPickHistory('skill', curCards, 0, anyCard, ['🚨 例外救援保底']);
        dispatchCardSelection(anyCard, 0, 1);
      }
    }
  }

  function handleCardPicker() {
    if (!config.autoPickCard || isPickingCard) return;
    const picker = document.getElementById('picker');
    if (!picker || picker.classList.contains('hidden')) return;

    isPickingCard = true;
    hasBanishedInThisPick = false;
    currentPickActions = [];
    pickedActionAttempts.clear();
    clearPickerRetry();
    detectPlayerJob();
    updateStatus('🃏 偵測到選卡畫面！等待動畫展開...');

    setTimeout(() => {
      executeCardPick(true);
    }, config.pickDelayMs);
  }

  // ==========================================
  // 7.1 組隊掉落物自動擲骰分寶 (Auto Loot Roll)
  // ==========================================
  let isLootSettling = false;
  let gameOverRestartTimer = null;
  let gameOverEnteredAt = 0;
  let gameOverResultRecorded = false;

  function isLegendaryOrRareDrop(row) {
    if (!row) return false;
    // 1. 檢查圖示上的品質 class (q4 為傳奇品質) 或卡片 (gl-card)
    const icon = row.querySelector('.gl-icon, .gl-card, img');
    if (icon) {
      if (icon.classList.contains('q4') || icon.classList.contains('gl-card')) {
        return true;
      }
    }

    // 2. 檢查小標籤文字 (.gl-name small)
    const smallText = (row.querySelector('.gl-name small')?.textContent || '').toLowerCase();
    if (smallText.includes('legend') || smallText.includes('傳奇') || smallText.includes('傳說') ||
        smallText.includes('card') || smallText.includes('carta') || smallText.includes('卡片') ||
        smallText.includes('egg') || smallText.includes('huevo') || smallText.includes('寵物蛋')) {
      return true;
    }

    // 3. 檢查名稱文字顏色或關鍵字
    const nameEl = row.querySelector('.gl-name b');
    if (nameEl) {
      const color = (nameEl.style.color || '').toLowerCase();
      if (color.includes('245, 158, 11') || color.includes('f59e0b') || color.includes('eab308') || color.includes('ffa000')) {
        return true;
      }
    }

    return false;
  }

  function handleLootSettlement() {
    if (!config.autoLootRoll || isLootSettling) return;

    // 檢查組隊結算分配區域
    const serverLoot = document.getElementById('go-server-loot');
    if (!serverLoot || serverLoot.classList.contains('hidden') || serverLoot.style.display === 'none') return;

    const glRows = Array.from(serverLoot.querySelectorAll('.gl-row'));
    if (glRows.length === 0) return;

    wasInParty = true;

    // 檢查是否還有尚未選擇的項目 (存在可點擊的 .gl-btns button)
    const hasUnpicked = serverLoot.querySelector('.gl-btns button');
    if (!hasUnpicked) return;

    isLootSettling = true;

    try {
      let needsClicked = 0;

      // 步驟 1：若開啟「傳奇裝備 Need」，檢查每項掉落物是否為傳奇/稀有珍寶
      if (config.lootRollMode === 'greed_need_legendary') {
        glRows.forEach((row, idx) => {
          const isNeedable = isLegendaryOrRareDrop(row);
          if (isNeedable) {
            const needBtn = row.querySelector('button[data-c="need"]');
            if (needBtn && !needBtn.disabled && !needBtn.classList.contains('disabled')) {
              const itemName = row.querySelector('.gl-name b')?.textContent?.trim() || `#${idx + 1}`;
              updateStatus(`💎 發現傳奇珍寶 [${itemName}]，執行 Need 需求！`);
              console.log(`[RO Helper] 組隊結算分寶：針對傳奇珍寶 [${itemName}] 執行 Need`);
              needBtn.click();
              needsClicked++;
            }
          }
        });
      }

      // 步驟 2：針對剩餘所有項目執行批次選擇 (全部 Greed 或 全部放棄)
      setTimeout(() => {
        try {
          if (config.lootRollMode === 'all_pass') {
            const passAllBtn = serverLoot.querySelector('button[data-all="pass"]');
            if (passAllBtn && !passAllBtn.disabled) {
              updateStatus('🤝 組隊結算分寶：執行全部放棄 (Pass/Listo)，讓裝給隊友...');
              console.log('[RO Helper] 組隊結算分寶：執行全部放棄 (Pass/Listo)');
              passAllBtn.click();
            }
          } else {
            // 預設與 'greed_need_legendary' / 'all_greed'：執行全部 Greed
            const greedAllBtn = serverLoot.querySelector('button[data-all="greed"]');
            if (greedAllBtn && !greedAllBtn.disabled) {
              updateStatus('🎲 組隊結算分寶：其餘項目執行全部 Greed (貪婪)...');
              console.log('[RO Helper] 組隊結算分寶：執行全部 Greed');
              greedAllBtn.click();
            } else {
              // 若無批次按鈕，逐一為剩餘項目點擊 Greed
              const remainingGreeds = serverLoot.querySelectorAll('.gl-btns button[data-c="greed"]:not(:disabled)');
              remainingGreeds.forEach(btn => btn.click());
            }
          }
        } finally {
          setTimeout(() => {
            isLootSettling = false;
          }, 800);
        }
      }, needsClicked > 0 ? 300 : 100);
    } catch (err) {
      console.warn('[RO Helper] 結算分寶例外:', err);
      isLootSettling = false;
    }
  }

  function handleInRunDropReveal() {
    if (!config.autoLootRoll) return;
    const dropReveal = document.getElementById('drop-reveal');
    if (!dropReveal || dropReveal.classList.contains('hidden') || dropReveal.style.display === 'none') return;

    // 1. 若為單人拾取確認按鈕 (.dr-get)
    const drGet = dropReveal.querySelector('.dr-get');
    if (drGet && !drGet.disabled && !drGet.classList.contains('hidden')) {
      drGet.click();
      return;
    }

    // 2. 若為組隊實時擲骰按鈕群 (.dr-roll-btns)
    const rollBtns = dropReveal.querySelector('.dr-roll-btns');
    if (rollBtns) {
      wasInParty = true;
      const isLegendary = dropReveal.querySelector('.q4, .card, [style*="color"]') !== null ||
                          /legend|傳奇|傳說|card|carta|卡片|egg|huevo/i.test(dropReveal.textContent || '');
      if (config.lootRollMode === 'greed_need_legendary' && isLegendary) {
        const needBtn = rollBtns.querySelector('button[data-c="need"]:not(:disabled)');
        if (needBtn) {
          needBtn.click();
          return;
        }
      }
      if (config.lootRollMode === 'all_pass') {
        const passBtn = rollBtns.querySelector('button[data-c="pass"]:not(:disabled)');
        if (passBtn) passBtn.click();
      } else {
        const greedBtn = rollBtns.querySelector('button[data-c="greed"]:not(:disabled)');
        if (greedBtn) greedBtn.click();
      }
    }
  }

  /**
   * 判定副本結算是否為死亡/失敗 (Death / Defeat)
   * 依據遊戲內 #go-title 文字內容進行多國語言智慧判定 (西班牙語 / 英語 / 繁中)
   */
  function isGameOverDefeat() {
    const goTitle = (document.getElementById('go-title')?.textContent || '').trim().toLowerCase();

    // 1. 明確存活 / 通關關鍵字 (非死亡失敗)
    const isVictory = goTitle.includes('sobrevivido') || 
                      goTitle.includes('survived') || 
                      goTitle.includes('superada') || 
                      goTitle.includes('conquered') || 
                      goTitle.includes('cleared') || 
                      goTitle.includes('存活') || 
                      goTitle.includes('生還') || 
                      goTitle.includes('通關') || 
                      goTitle.includes('勝利') || 
                      goTitle.includes('成功');
    if (isVictory) return false;

    // 2. 明確死亡 / 失敗關鍵字 (死亡失敗)
    const isDefeatKeyword = goTitle.includes('muerto') || 
                           goTitle.includes('died') || 
                           goTitle.includes('dead') || 
                           goTitle.includes('defeat') || 
                           goTitle.includes('failed') || 
                           goTitle.includes('caído') || 
                           goTitle.includes('fallen') || 
                           goTitle.includes('puntos') || 
                           goTitle.includes('jefes') || 
                           goTitle.includes('死') || 
                           goTitle.includes('亡') || 
                           goTitle.includes('敗') || 
                           goTitle.includes('倒下');
    if (isDefeatKeyword) return true;

    // 3. 排除手動放棄或隊長離線終止 (Partida abandonada / Partida terminada)
    const isAbandoned = goTitle.includes('abandon') || goTitle.includes('terminada') || goTitle.includes('finished');
    if (isAbandoned) return false;

    // 4. 預設防呆：一般結算畫面若非明確存活即判定為死亡失敗
    return true;
  }

  function handleGameOver() {
    const gameover = document.getElementById('gameover');
    if (!gameover || gameover.classList.contains('hidden')) {
      gameOverEnteredAt = 0;
      gameOverResultRecorded = false;
      if (gameOverRestartTimer) {
        clearTimeout(gameOverRestartTimer);
        gameOverRestartTimer = null;
      }
      return;
    }

    if (!gameOverEnteredAt) {
      gameOverEnteredAt = performance.now();
    }

    // 0. 記錄勝負結算 (記錄死亡失敗次數，每局結算畫面僅記錄一次)
    if (!gameOverResultRecorded) {
      gameOverResultRecorded = true;
      const isDefeat = isGameOverDefeat();
      if (isDefeat) {
        config.stats.deaths = (config.stats.deaths || 0) + 1;
        saveConfig();
        updateUIStats();
        console.log(`[RO Helper] 💀 偵測到副本死亡/失敗 (標題: [${document.getElementById('go-title')?.textContent?.trim() || ''}])，累計失敗次數: ${config.stats.deaths}`);
      } else {
        console.log(`[RO Helper] 🎉 偵測到副本存活通關 (標題: [${document.getElementById('go-title')?.textContent?.trim() || ''}])！`);
      }
    }

    // 1. 若處於組隊掉落物分配階段，先自動執行掉落物擲骰 (Auto Loot Roll)
    handleLootSettlement();

    if (!config.autoRestart) return;

    const btnRestart = document.getElementById('btn-restart');
    // 若重新開始按鈕依然被鎖定 (disabled，例如伺服器正在計算分寶或等待隊友中)，等待其解鎖
    if (btnRestart && !btnRestart.classList.contains('hidden')) {
      if (btnRestart.disabled) {
        updateStatus('🎁 組隊掉落物分配中，等待結算完成...');
        return;
      }

      // 看門狗自救：若按鈕已解鎖且停留超過 3.5 秒仍未重啟，強制連點與按鍵重開跳轉大廳
      if (performance.now() - gameOverEnteredAt > 3500) {
        console.warn('[RO Helper] 🚨 偵測到結算畫面重開逾時，看門狗強制派發重開！');
        updateStatus('🚨 結算重開自救：強制點擊重新開始...');
        btnRestart.click();
        btnRestart.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
        btnRestart.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
        window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true }));
        gameOverEnteredAt = performance.now();
        return;
      }

      if (!gameOverRestartTimer) {
        // 在組隊跟車模式下，縮短結算等待至 400ms，消除與隊長回大廳的時間差；單人模式維持 1.2 秒
        const restartDelay = (config.autoAcceptPartyCheck || wasInParty || config.partyRole === 'member') ? 400 : 1200;
        updateStatus(`💀 戰鬥結束：${(restartDelay / 1000).toFixed(1)} 秒後自動重開...`);
        gameOverRestartTimer = setTimeout(() => {
          gameOverRestartTimer = null;
          const curBtn = document.getElementById('btn-restart');
          const curGo = document.getElementById('gameover');
          if (curBtn && !curBtn.disabled && curGo && !curGo.classList.contains('hidden')) {
            curBtn.click();
            curBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
            curBtn.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
            config.stats.restarts++;
            saveConfig();
            updateUIStats();
          }
        }, restartDelay);
      }
    }
  }

  function handleStory() {
    const story = document.getElementById('story');
    if (story && !story.classList.contains('hidden')) {
      const btn = story.querySelector('button');
      if (btn) {
        updateStatus('📖 劇情對話：自動前進...');
        btn.click();
      }
    }
  }

  /**
   * 手動選卡與特權分析測試
   */
  function manualTestPick() {
    const picker = document.getElementById('picker');
    if (!picker || picker.classList.contains('hidden')) {
      alert('[RO Helper] 目前畫面上沒有開展的選卡介面 (#picker)！請先進入遊戲升級或開寶箱。');
      return;
    }
    const cards = Array.from(document.querySelectorAll('#pk-cards .pk-card'));
    if (cards.length === 0) {
      alert('[RO Helper] 找到 picker 但未讀取到 .pk-card！');
      return;
    }

    const curCfg = getJobConfig(config.selectedJob);
    const slotsFull = areSkillSlotsFull();
    const focusFormed = isFocusBuildFormed(curCfg.focus);
    const isBuildComplete = slotsFull || focusFormed;
    const chosen = selectBestCardIndex(cards, isBuildComplete);
    let debugInfo = `選卡分析診斷 (共 ${cards.length} 張卡)：\n`;
    debugInfo += `技能槽狀態: ${isBuildComplete ? (focusFormed ? '✨ 專注流派已成形 (三導管已解鎖放逐)' : '✅ 已滿槽 (4/4，已解鎖放逐)') : '⏳ 未滿槽 (暫緩放逐，優先成形核心技能)'}\n----------------------\n`;

    cards.forEach((c, i) => {
      const name = c.querySelector('.pk-name')?.textContent?.trim() || '未知';
      const badge = c.querySelector('.pk-badge')?.textContent?.trim() || '無徽章';
      const rarity = getCardRarity(c);
      const focusBtn = findFocusButton(c);
      const banishBtn = findBanishButton(c);
      const idInfo = getCardSkillIdentity(c);

      const isFocusHit = isCardFocusTarget(c, curCfg.focus, curCfg.banish);
      const isBanishHit = isCardBanishTarget(c, curCfg.focus, curCfg.banish);

      let tags = [];
      if (idInfo.isColdClone) tags.push(`❄克隆自:${idInfo.originalSkill}`);
      if (isFocusHit) tags.push('🎯專注目標');
      if (isBanishHit) tags.push('🚫放逐指定');

      const isTarget = (i === chosen);
      const displayName = idInfo.isColdClone ? `${name} (克隆:${idInfo.originalSkill})` : name;
      debugInfo += `${isTarget ? '👉 ' : '   '}[#${i + 1}] ${displayName} | ${RARITY_NAMES[rarity]} (${badge}) ${tags.length ? '[' + tags.join(',') + ']' : ''} | Focus: ${focusBtn ? '可按' : '無'} | Banish: ${banishBtn ? '可按' : '無'}\n`;
    });
    const rerollDeck = findRerollDeckButton();
    debugInfo += `----------------------\n整副重抽 (Reroll deck): ${rerollDeck ? '可用' : '無'}\n`;
    debugInfo += `🎯 目標推薦：第 ${chosen + 1} 張卡片\n是否立即執行自動選擇？`;

    if (confirm(debugInfo)) {
      executeCardPick(true);
    }
  }

  /**
   * 主循環 (Main Loop)
   */
  function mainLoop() {
    // 守護進程：若面板意外遭頁面清空或未加入 DOM，自動重新掛載
    if (document.body && !document.getElementById('ro-helper-panel')) {
      createFloatingPanel();
    }

    const state = detectGameState();
    currentGameState = state;
    updateStateBadge(state);

    if (!config.enabled) {
      if (isWalkingToNpc) {
        releaseAllMovementKeys();
      }
      festivalNavPhase = 0;
      navStepCount = 0;
      updateStatus('助手待命中 (點擊上方按鈕啟動)');
      return;
    }

    // 優先檢查組隊出發確認 (無論在什麼狀態，只要彈出組隊確認對話框就優先處理)
    if (config.autoAcceptPartyCheck && handlePartyCheck()) {
      return;
    }

    if (state !== 'LOBBY') {
      if (isWalkingToNpc) {
        releaseAllMovementKeys();
      }
      festivalNavPhase = 0;
      navStepCount = 0;
    } else if (lastKnownGameState !== 'LOBBY') {
      // 剛從戰鬥結算、載入中或選角返回大廳：徹底重置所有導航計時與移動鍵
      releaseAllMovementKeys();
      festivalNavPhase = 0;
      navStepCount = 0;
      isWalkingToNpc = false;
      lobbyEnteredAt = performance.now();
      partyLeaveTriggered = false;
      partyLeftAt = 0;
      partyAllReadyAt = 0;
      lastInviteSentAt = 0;
      showToast(wasInParty ? '🏰 返回普隆德拉，等待隊友同步中...' : '🏰 返回普隆德拉大廳...', 3000);
      console.log('[RO Helper] 🏰 返回大廳，啟動安全緩衝期 (wasInParty:', wasInParty, ')');
    }
    lastKnownGameState = state;

    if (state === 'UNKNOWN') {
      if (document.getElementById('loading') && !document.getElementById('loading').classList.contains('hidden')) {
        updateStatus('⏳ 遊戲資源載入中...');
      }
      return;
    }

    if (state !== 'CARD_PICKER') {
      cardPickerOpenedAt = 0;
    }

    switch (state) {
      case 'LOBBY_PICKER':
        handleLobbyPicker();
        break;
      case 'PAUSED':
        handlePause();
        break;
      case 'SPLASH':
      case 'CHAR_SELECT':
        handleSplashAndLogin();
        break;
      case 'LOBBY':
      case 'FESTIVAL_WINDOW':
      case 'STAGES_WINDOW':
      case 'NPC_DIALOG':
      case 'WIKI_WINDOW':
        crawlWikiItems();
        if (config.autoAcceptPartyCheck && handlePartyCheck()) {
          break;
        }
        if (handleAutoReParty()) {
          break;
        }
        if (config.autoAcceptPartyCheck && !config.autoEnterMap && state === 'LOBBY') {
          updateStatus('🤝 組隊跟車模式中，等待隊長發起出發...');
          break;
        }
        handleEnterMap();
        break;
      case 'CARD_PICKER':
        if (!cardPickerOpenedAt) {
          cardPickerOpenedAt = performance.now();
        }
        // 看門狗：若選卡視窗停留超過 2800ms 且尚未關閉，強制解鎖並執行救援選卡
        if (performance.now() - cardPickerOpenedAt > 2800) {
          console.warn('[RO Helper] 🚨 偵測到選卡畫面卡死超過 2.8 秒！看門狗強制介入自救選卡！');
          updateStatus('🚨 選卡逾時自救：強制按鍵與點擊卡片...');
          isPickingCard = false;
          pickedActionAttempts.clear();
          clearPickerRetry();
          const fallbackCard = document.querySelector('#pk-cards .pk-card');
          if (fallbackCard) {
            const curCards = Array.from(document.querySelectorAll('#pk-cards .pk-card'));
            recordPickHistory('skill', curCards, 0, fallbackCard, ['🚨 看門狗逾時自救']);
            dispatchCardSelection(fallbackCard, 0, 1);
          }
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
          window.dispatchEvent(new KeyboardEvent('keydown', { key: '1', code: 'Digit1', bubbles: true }));
          window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true }));
          cardPickerOpenedAt = performance.now();
          break;
        }
        handleCardPicker();
        break;
      case 'IN_COMBAT':
        handleInRunDropReveal();
        if (!isPickingCard) {
          // 若為累積升級模式且開啟自動批次開啟，檢查是否有累積的升級待開
          if (config.levelUpMode === 'accumulate' && config.autoOpenBank) {
            const bankBtn = document.getElementById('bank-btn');
            if (bankBtn && !bankBtn.disabled && !bankBtn.classList.contains('hidden') && bankBtn.classList.contains('has')) {
              const count = document.getElementById('bank-n')?.textContent || '1';
              updateStatus(`📦 偵測到累積升級 (${count} 個)，開啟批次選卡...`);
              bankBtn.click();
              window.dispatchEvent(new KeyboardEvent('keydown', { key: 'b', code: 'KeyB', bubbles: true }));
              return;
            }
          }
          const mapLabel = config.autoFestival || config.targetStage === 'louyang' ? '🏮 洛陽燈籠節' : '⚔️ 地圖';
          updateStatus(`${mapLabel}戰鬥中 (原地輸出，不移動)`);
        }
        break;
      case 'STORY':
        handleStory();
        break;
      case 'GAME_OVER':
        handleGameOver();
        break;
    }
  }


  // ==========================================
  // 8.2 關卡道具配置彈窗 (In-Run Items Config Modal)
  // 提供 51 種關卡道具 (藥水、秘藥、祝福、料理、神祇) 之專注 (Focus) 與放逐 (Banish) 設定
  // ==========================================
  let currentItemSlotFilter = 'all';
  let currentItemSearchQuery = '';

  function openItemsModal() {
    let modal = document.getElementById('ro-helper-items-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'ro-helper-items-modal';
      document.body.appendChild(modal);
    }
    renderItemsModalContent();
    modal.style.display = 'flex';
  }

  function closeItemsModal() {
    const modal = document.getElementById('ro-helper-items-modal');
    if (modal) {
      modal.style.display = 'none';
    }
    config.itemsConfigured = true;
    saveConfig();
    renderJobSkills();
  }

  function renderItemsModalContent(keepScroll = true) {
    const modal = document.getElementById('ro-helper-items-modal');
    if (!modal) return;

    // 記錄當前列表與主體滾動位置，避免重新渲染後跳至頂部
    const prevListScroll = document.getElementById('ro-items-list-container')?.scrollTop || 0;
    const prevBodyScroll = modal.querySelector('.ro-modal-body')?.scrollTop || 0;

    if (!config.itemSettings || typeof config.itemSettings !== 'object') {
      config.itemSettings = {
        focus: ['p_discovery', 'e_surprise', 'b_plenty', 'g_avarice'],
        banish: []
      };
    }
    const curFocus = config.itemSettings.focus || [];
    const curBanish = config.itemSettings.banish || [];
    const isEn = config.lang === 'en';

    const slots = [
      { id: 'all', name: isEn ? 'All (51)' : '全部 (51)' },
      { id: 'potion', name: isEn ? 'Potion (12)' : '藥水 (12)' },
      { id: 'elixir', name: isEn ? 'Elixir (10)' : '秘藥 (10)' },
      { id: 'blessing', name: isEn ? 'Blessing (10)' : '祝福 (10)' },
      { id: 'dish', name: isEn ? 'Dish (6)' : '料理 (6)' },
      { id: 'deity', name: isEn ? 'Deity (13)' : '神祇 (13)' }
    ];

    let tabsHtml = slots.map(s => {
      const isAct = currentItemSlotFilter === s.id;
      return `<button class="ro-modal-tab ${isAct ? 'active' : ''}" data-slot="${s.id}">${s.name}</button>`;
    }).join('');

    // 過濾道具
    let filteredItems = RUN_ITEMS_DATABASE.filter(it => {
      if (currentItemSlotFilter !== 'all' && it.slot !== currentItemSlotFilter) {
        return false;
      }
      if (currentItemSearchQuery) {
        const q = currentItemSearchQuery.toLowerCase();
        return it.name_zh.toLowerCase().includes(q) ||
               it.name_en.toLowerCase().includes(q) ||
               it.name_es.toLowerCase().includes(q) ||
               it.desc.toLowerCase().includes(q) ||
               it.id.toLowerCase().includes(q);
      }
      return true;
    });

    let itemsHtml = '';
    if (filteredItems.length === 0) {
      itemsHtml = `<div style="text-align: center; padding: 30px; color: #94a3b8; font-size: 13px;">${isEn ? 'No matching items found' : '無相符之關卡道具'}</div>`;
    } else {
      filteredItems.forEach(it => {
        const isFocus = curFocus.includes(it.id) || curFocus.includes(it.name_zh) || curFocus.includes(it.name_en);
        const isBanish = curBanish.includes(it.id) || curBanish.includes(it.name_zh) || curBanish.includes(it.name_en);
        const isNormal = !isFocus && !isBanish;

        const slotBadgeMap = {
          potion: { text: isEn ? 'Potion' : '藥水', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' },
          elixir: { text: isEn ? 'Elixir' : '秘藥', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)' },
          blessing: { text: isEn ? 'Blessing' : '祝福', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
          dish: { text: isEn ? 'Dish' : '料理', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
          deity: { text: isEn ? 'Deity' : '神祇', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)' }
        };
        const sBadge = slotBadgeMap[it.slot] || { text: it.slot, color: '#94a3b8', bg: 'rgba(255,255,255,0.1)' };

        itemsHtml += `
          <div class="ro-modal-skill-row" data-item-id="${it.id}">
            <div class="ro-modal-skill-info">
              <div class="ro-modal-skill-name" style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 11px; padding: 2px 6px; border-radius: 4px; background: ${sBadge.bg}; color: ${sBadge.color}; border: 1px solid ${sBadge.color}40; font-weight: 600;">
                  ${sBadge.text}
                </span>
                <b>${isEn ? (it.name_en || it.name_zh) : it.name_zh}</b>
                <small style="color: #94a3b8;">${isEn ? it.name_zh : it.name_en}</small>
              </div>
              <div class="ro-modal-skill-desc" style="color: #cbd5e1; font-size: 12px; margin-top: 3px;">${it.desc}</div>
            </div>
            <div class="ro-modal-skill-actions">
              <button class="ro-modal-btn-act ${isFocus ? 'act-focus' : ''}" data-item-act="focus">
                🎯 ${isEn ? 'Focus' : '專注'}
              </button>
              <button class="ro-modal-btn-act ${isNormal ? 'act-normal' : ''}" data-item-act="normal">
                ⚪ ${isEn ? 'Normal' : '正常'}
              </button>
              <button class="ro-modal-btn-act ${isBanish ? 'act-banish' : ''}" data-item-act="banish">
                🚫 ${isEn ? 'Banish' : '放逐'}
              </button>
            </div>
          </div>
        `;
      });
    }

    modal.innerHTML = `
      <style>
        #ro-helper-items-modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 999999999;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft JhengHei", sans-serif;
          user-select: none;
        }
        .ro-modal-box {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          width: 580px;
          max-width: 95vw;
          max-height: 88vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(168, 85, 247, 0.3);
          overflow: hidden;
          color: #f8fafc;
        }
        .ro-modal-header {
          padding: 12px 18px;
          background: linear-gradient(135deg, #1e1b4b, #0f172a);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ro-modal-header h3 {
          margin: 0;
          font-size: 15px;
          color: #c084fc;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ro-modal-close-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 18px;
          cursor: pointer;
          line-height: 1;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .ro-modal-close-btn:hover {
          color: white;
          background: rgba(255,255,255,0.1);
        }
        .ro-modal-body {
          padding: 14px 18px;
          overflow-y: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ro-modal-tabs {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding-bottom: 2px;
        }
        .ro-modal-tab {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 6px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .ro-modal-tab.active {
          background: rgba(168, 85, 247, 0.25);
          border-color: #a855f7;
          color: #e9d5ff;
          font-weight: 600;
        }
        .ro-modal-search {
          display: flex;
          gap: 8px;
        }
        .ro-modal-search-input {
          flex: 1;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 6px;
          padding: 7px 12px;
          color: #f8fafc;
          font-size: 12px;
          outline: none;
        }
        .ro-modal-search-input:focus {
          border-color: #a855f7;
        }
        .ro-modal-presets {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }
        .ro-modal-btn-preset {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .ro-modal-btn-preset:hover {
          background: rgba(168, 85, 247, 0.2);
          border-color: #a855f7;
          color: white;
        }
        .ro-modal-skill-row {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .ro-modal-skill-info {
          flex: 1;
        }
        .ro-modal-skill-name {
          font-size: 13px;
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .ro-modal-skill-name b {
          color: #f1f5f9;
        }
        .ro-modal-skill-name small {
          color: #64748b;
          font-size: 11px;
        }
        .ro-modal-skill-desc {
          font-size: 11px;
          color: #94a3b8;
          margin-top: 2px;
        }
        .ro-modal-skill-actions {
          display: flex;
          gap: 4px;
          background: rgba(0, 0, 0, 0.3);
          padding: 3px;
          border-radius: 6px;
        }
        .ro-modal-btn-act {
          background: transparent;
          border: 1px solid transparent;
          color: #94a3b8;
          padding: 4px 8px;
          font-size: 11px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.15s ease;
        }
        .ro-modal-btn-act:hover {
          color: #f8fafc;
        }
        .ro-modal-btn-act.act-focus {
          background: rgba(16, 185, 129, 0.25);
          border-color: #10b981;
          color: #34d399;
          font-weight: 700;
        }
        .ro-modal-btn-act.act-normal {
          background: rgba(100, 116, 139, 0.3);
          border-color: #64748b;
          color: #cbd5e1;
          font-weight: 600;
        }
        .ro-modal-btn-act.act-banish {
          background: rgba(239, 68, 68, 0.25);
          border-color: #ef4444;
          color: #f87171;
          font-weight: 700;
        }
        .ro-modal-footer {
          padding: 12px 18px;
          background: #1e1b4b;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ro-modal-btn-primary {
          background: #a855f7;
          color: white;
          border: none;
          padding: 6px 16px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
        }
        .ro-modal-btn-primary:hover {
          background: #9333ea;
        }
      </style>

      <div class="ro-modal-box">
        <div class="ro-modal-header">
          <h3>🎒 ${isEn ? 'In-Run Items & Deity Blessings Config' : '關卡道具與神祇百科配置'}</h3>
          <button class="ro-modal-close-btn" id="ro-items-modal-close-btn">✕</button>
        </div>
        <div class="ro-modal-body">
          <div class="ro-modal-tabs" id="ro-items-tabs">
            ${tabsHtml}
          </div>
          <div class="ro-modal-search">
            <input type="text" class="ro-modal-search-input" id="ro-items-search-input" placeholder="${isEn ? 'Search item name, effect...' : '搜尋道具名稱、詞綴、效果關鍵字...'}" value="${currentItemSearchQuery}">
          </div>
          <div class="ro-modal-presets">
            <button class="ro-modal-btn-preset" id="ro-items-preset-farm" style="background: rgba(245, 158, 11, 0.25); border: 1px solid #f59e0b; color: #fde047; font-weight: 700; box-shadow: 0 0 10px rgba(245, 158, 11, 0.3);">${isEn ? '💰 Loot Farming (Discovery/Surprise/Plenty/Avarice)' : '💰 打寶專注 (尋寶/秘藥/豐饒/貪婪之神)'}</button>
            <button class="ro-modal-btn-preset" id="ro-items-preset-rec">${isEn ? '⭐ Recommended Focus' : '⭐ 推薦核心專注 (冷卻/傷害/爆擊)'}</button>
            <button class="ro-modal-btn-preset" id="ro-items-preset-reset">${isEn ? '⚪ Reset All to Normal' : '⚪ 全部恢復正常'}</button>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; max-height: 48vh; overflow-y: auto; padding-right: 4px;" id="ro-items-list-container">
            ${itemsHtml}
          </div>
        </div>
        <div class="ro-modal-footer">
          <div style="font-size: 12px; color: #cbd5e1;">
            🎯 ${isEn ? 'Focus' : '專注'}: <b>${curFocus.length}</b> ${isEn ? '' : '個'} ｜ 🚫 ${isEn ? 'Banish' : '放逐'}: <b>${curBanish.length}</b> ${isEn ? '' : '個'}
          </div>
          <button class="ro-modal-btn-primary" id="ro-items-modal-save-btn">${isEn ? '✔ Save & Close' : '✔ 儲存並關閉'}</button>
        </div>
      </div>
    `;

    // 恢復滾動條位置
    if (keepScroll) {
      const listContainer = document.getElementById('ro-items-list-container');
      if (listContainer && prevListScroll > 0) {
        listContainer.scrollTop = prevListScroll;
      }
      const bodyContainer = modal.querySelector('.ro-modal-body');
      if (bodyContainer && prevBodyScroll > 0) {
        bodyContainer.scrollTop = prevBodyScroll;
      }
    }

    // 標籤頁切換
    modal.querySelectorAll('.ro-modal-tab').forEach(tab => {
      tab.onclick = () => {
        currentItemSlotFilter = tab.dataset.slot;
        renderItemsModalContent(false);
      };
    });

    // 搜尋輸入
    const searchInput = document.getElementById('ro-items-search-input');
    if (searchInput) {
      searchInput.oninput = () => {
        currentItemSearchQuery = searchInput.value.trim();
        renderItemsModalContent(false);
        const inputNow = document.getElementById('ro-items-search-input');
        if (inputNow) {
          inputNow.focus();
          inputNow.selectionStart = inputNow.selectionEnd = inputNow.value.length;
        }
      };
    }

    // 預設核心推薦
    const recBtn = document.getElementById('ro-items-preset-rec');
    if (recBtn) {
      recBtn.onclick = () => {
        config.itemSettings.focus = ['p_cd', 'p_dmg', 'e_crit', 'b_cd', 'b_dmg'];
        config.itemSettings.banish = [];
        saveConfig();
        renderItemsModalContent(true);
      };
    }

    // 打寶核心推薦 (Loot Farming Focus)
    const farmBtn = document.getElementById('ro-items-preset-farm');
    if (farmBtn) {
      farmBtn.onclick = () => {
        config.itemSettings.focus = ['p_discovery', 'e_surprise', 'b_plenty', 'g_avarice'];
        config.itemSettings.banish = [];
        saveConfig();
        renderItemsModalContent(true);
      };
    }

    // 全部正常
    const resetBtn = document.getElementById('ro-items-preset-reset');
    if (resetBtn) {
      resetBtn.onclick = () => {
        config.itemSettings.focus = [];
        config.itemSettings.banish = [];
        saveConfig();
        renderItemsModalContent(true);
      };
    }

    // 道具狀態按鈕：就地更新樣式與統計，完全不觸發畫面重新渲染，保持滾動位置與操作極度流暢
    modal.querySelectorAll('.ro-modal-skill-row').forEach(row => {
      const itemId = row.dataset.itemId;
      const btns = row.querySelectorAll('.ro-modal-btn-act');
      btns.forEach(btn => {
        btn.onclick = () => {
          const act = btn.dataset.itemAct;

          const itDef = RUN_ITEMS_DATABASE.find(x => x.id === itemId);
          const nameZh = itDef ? itDef.name_zh : '';

          config.itemSettings.focus = (config.itemSettings.focus || []).filter(x => x !== itemId && x !== nameZh);
          config.itemSettings.banish = (config.itemSettings.banish || []).filter(x => x !== itemId && x !== nameZh);

          if (act === 'focus') {
            config.itemSettings.focus.push(itemId);
          } else if (act === 'banish') {
            config.itemSettings.banish.push(itemId);
          }

          saveConfig();

          // 就地切換按鈕狀態樣式
          btns.forEach(b => {
            b.className = 'ro-modal-btn-act';
            if (b.dataset.itemAct === act) {
              b.classList.add(act === 'focus' ? 'act-focus' : act === 'banish' ? 'act-banish' : 'act-normal');
            }
          });

          // 同步底部統計數據
          const curFocus = config.itemSettings.focus || [];
          const curBanish = config.itemSettings.banish || [];
          const footerSummary = modal.querySelector('.ro-modal-footer div');
          if (footerSummary) {
            footerSummary.innerHTML = `🎯 ${isEn ? 'Focus' : '專注'}: <b>${curFocus.length}</b> ${isEn ? '' : '個'} ｜ 🚫 ${isEn ? 'Banish' : '放逐'}: <b>${curBanish.length}</b> ${isEn ? '' : '個'}`;
          }
        };
      });
    });

    // 關閉與儲存按鈕
    const closeBtn = document.getElementById('ro-items-modal-close-btn');
    if (closeBtn) closeBtn.onclick = closeItemsModal;

    const saveBtn = document.getElementById('ro-items-modal-save-btn');
    if (saveBtn) saveBtn.onclick = closeItemsModal;

    modal.onclick = (e) => {
      if (e.target === modal) closeItemsModal();
    };
  }

  // ==========================================
  // 8. 浮動控制面板 (Floating Control Panel)
  // ==========================================

  // ==========================================
  // 8.1 職業技能配置彈窗 (Skills Config Modal)
  // ==========================================
  function openSkillsModal() {
    let modal = document.getElementById('ro-helper-skills-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'ro-helper-skills-modal';
      document.body.appendChild(modal);
    }
    renderSkillsModalContent();
    modal.style.display = 'flex';
  }

  function closeSkillsModal() {
    const modal = document.getElementById('ro-helper-skills-modal');
    if (modal) {
      modal.style.display = 'none';
    }
    config.skillsConfigured = true;
    saveConfig();
    renderJobSkills();
  }

  function renderSkillsModalContent(keepScroll = true) {
    const modal = document.getElementById('ro-helper-skills-modal');
    if (!modal) return;
    const prevBodyScroll = modal.querySelector('.ro-modal-body')?.scrollTop || 0;

    const job = JOB_DATABASE[config.selectedJob];
    if (!job) return;

    const isEn = config.lang === 'en';
    const curCfg = getJobConfig(config.selectedJob);
    const curAffixes = config.preferredAffixes || ['targets', 'cooldown', 'damage'];

    let affixesHtml = AFFIX_DEFINITIONS.map(affix => {
      const isSel = curAffixes.includes(affix.id);
      return `
        <button type="button" class="ro-modal-affix-chip ${isSel ? 'active' : ''}" data-affix="${affix.id}" title="${affix.desc}">
          ${isSel ? '✔ ' : ''}${affix.name}
        </button>
      `;
    }).join('');

    let skillsHtml = '';
    job.skills.forEach(skill => {
      const isFocus = (curCfg.focus || []).includes(skill.name);
      const isBanish = (curCfg.banish || []).includes(skill.name);
      const isNormal = !isFocus && !isBanish;

      skillsHtml += `
        <div class="ro-modal-skill-row" data-skill="${skill.name}">
          <div class="ro-modal-skill-info">
            <div class="ro-modal-skill-name">
              <b>${isEn ? (skill.en || skill.name) : skill.name}</b>
              <small>${isEn ? skill.name : skill.en}</small>
            </div>
            <div class="ro-modal-skill-desc">${skill.desc}</div>
          </div>
          <div class="ro-modal-skill-actions">
            <button class="ro-modal-btn-act ${isFocus ? 'act-focus' : ''}" data-act="focus">
              🎯 ${isEn ? 'Focus' : '專注'}
            </button>
            <button class="ro-modal-btn-act ${isNormal ? 'act-normal' : ''}" data-act="normal">
              ⚪ ${isEn ? 'Normal' : '正常'}
            </button>
            <button class="ro-modal-btn-act ${isBanish ? 'act-banish' : ''}" data-act="banish">
              🚫 ${isEn ? 'Banish' : '放逐'}
            </button>
          </div>
        </div>
      `;
    });

    const headerTitle = isEn ? `<h3>${job.icon} ${job.name} Skill Strategy</h3>` : `<h3>${job.icon} ${job.name} 技能策略配置</h3>`;
    const hintHtml = isEn ?
      `💡 <b>Game Mechanics</b>: Only class skills will appear for upgrades in this run. Select strategy for each skill:<br>
      <span style="color: #34d399;">【🎯 Focus】</span> Priority Focus when rolled (×3 rate) ｜ <span style="color: #f87171;">【🚫 Banish】</span> Auto-banish to purge from card pool ｜ <span style="color: #cbd5e1;">【⚪ Normal】</span> Standard upgrade pool` :
      `💡 <b>遊戲機制</b>：本局升級只會出現當前職業技能。請點選各技能策略：<br>
      <span style="color: #34d399;">【🎯 專注】</span> 抽到時優先按 Focus (×3 出現率) ｜ <span style="color: #f87171;">【🚫 放逐】</span> 抽到時自動 Banish 淨化卡池換新卡 ｜ <span style="color: #cbd5e1;">【⚪ 正常】</span> 保留正常升級`;

    const secSkillTitle = isEn ? '⚔️ Class Skill Strategy (Focus / Banish)' : '⚔️ 職業專屬技能策略 (Focus / Banish)';
    const secAffixTitle = isEn ? '✨ Upgrade Affix Preferences (Order by Priority)' : '✨ 升級詞綴偏好優先順序 (Affix Preferences)';
    const affixSubHint = isEn ? 'Click to toggle, preferred affixes will be selected first' : '點擊切換，抽到偏好詞綴優先選取';
    const resetBtnText = isEn ? '⚡ Reset Defaults' : '⚡ 恢復預設';
    const saveBtnText = isEn ? '💾 Save & Close' : '💾 儲存並關閉';

    modal.innerHTML = `
      <style>
        #ro-helper-skills-modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 999999999;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft JhengHei", sans-serif;
          user-select: none;
        }
        .ro-modal-box {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          width: 520px;
          max-width: 95vw;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(14, 165, 233, 0.3);
          overflow: hidden;
          color: #f8fafc;
        }
        .ro-modal-header {
          padding: 12px 18px;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ro-modal-header h3 {
          margin: 0;
          font-size: 15px;
          color: #38bdf8;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ro-modal-close-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 18px;
          cursor: pointer;
          line-height: 1;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .ro-modal-close-btn:hover {
          color: white;
          background: rgba(255,255,255,0.1);
        }
        .ro-modal-sub {
          padding: 8px 18px;
          background: rgba(0, 0, 0, 0.35);
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.5;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .ro-modal-body {
          padding: 12px 18px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ro-modal-skill-row {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .ro-modal-skill-info {
          flex: 1;
        }
        .ro-modal-skill-name {
          font-size: 13px;
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .ro-modal-skill-name b {
          color: #f1f5f9;
        }
        .ro-modal-skill-name small {
          color: #64748b;
          font-size: 11px;
        }
        .ro-modal-skill-desc {
          font-size: 11px;
          color: #94a3b8;
          margin-top: 2px;
        }
        .ro-modal-skill-actions {
          display: flex;
          gap: 4px;
          background: rgba(0, 0, 0, 0.3);
          padding: 3px;
          border-radius: 6px;
        }
        .ro-modal-btn-act {
          background: transparent;
          border: 1px solid transparent;
          color: #94a3b8;
          padding: 4px 8px;
          font-size: 11px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.15s ease;
        }
        .ro-modal-btn-act:hover {
          color: #f8fafc;
        }
        .ro-modal-btn-act.act-focus {
          background: rgba(16, 185, 129, 0.25);
          border-color: #10b981;
          color: #34d399;
          font-weight: 700;
        }
        .ro-modal-btn-act.act-normal {
          background: rgba(100, 116, 139, 0.3);
          border-color: #64748b;
          color: #cbd5e1;
          font-weight: 600;
        }
        .ro-modal-btn-act.act-banish {
          background: rgba(239, 68, 68, 0.25);
          border-color: #ef4444;
          color: #f87171;
          font-weight: 700;
        }
        .ro-modal-affixes-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 6px;
        }
        .ro-modal-affix-chip {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #94a3b8;
          padding: 5px 10px;
          font-size: 11px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .ro-modal-affix-chip:hover {
          border-color: rgba(56, 189, 248, 0.5);
          color: #f1f5f9;
        }
        .ro-modal-affix-chip.active {
          background: rgba(14, 165, 233, 0.25);
          border-color: #38bdf8;
          color: #38bdf8;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.25);
        }
        .ro-modal-footer {
          padding: 10px 18px;
          background: #1e293b;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ro-modal-footer-summary {
          font-size: 12px;
          color: #cbd5e1;
        }
        .ro-modal-btn-primary {
          background: #0ea5e9;
          color: white;
          border: none;
          padding: 6px 16px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
        }
        .ro-modal-btn-primary:hover {
          background: #0284c7;
        }
        .ro-modal-btn-reset {
          background: transparent;
          color: #94a3b8;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 11px;
          cursor: pointer;
        }
        .ro-modal-btn-reset:hover {
          color: white;
          border-color: white;
        }
      </style>

      <div class="ro-modal-box">
        <div class="ro-modal-header">
          ${headerTitle}
          <button class="ro-modal-close-btn" id="ro-modal-x-btn">✕</button>
        </div>
        <div class="ro-modal-sub">
          ${hintHtml}
        </div>
        <div class="ro-modal-body">
          <!-- 全域選卡與特權行為開關 (級別優先 / 優先填滿技能) -->
          <div class="ro-modal-toolbar" style="display: flex; gap: 12px; margin-bottom: 12px; background: rgba(30, 41, 59, 0.7); padding: 8px 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 12px; font-weight: 600; color: #fde047;" title="${t('modal_rarity_first_tip')}">${t('modal_rarity_first')}</span>
              <label class="ro-h-switch" style="transform: scale(0.85); transform-origin: left center;">
                <input type="checkbox" id="ro-modal-rarity-first" ${config.prioritizeRarity ? 'checked' : ''}>
                <span class="ro-h-slider"></span>
              </label>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 12px; font-weight: 600; color: #38bdf8;" title="${t('modal_fill_slots_first_tip')}">${t('modal_fill_slots_first')}</span>
              <label class="ro-h-switch" style="transform: scale(0.85); transform-origin: left center;">
                <input type="checkbox" id="ro-modal-fill-slots-first" ${config.banishOnlyWhenSlotsFull ? 'checked' : ''}>
                <span class="ro-h-slider"></span>
              </label>
            </div>
          </div>

          <div style="font-size: 12px; font-weight: 700; color: #38bdf8; margin-bottom: 2px;">
            ${secSkillTitle}
          </div>
          ${skillsHtml}

          <div style="font-size: 12px; font-weight: 700; color: #38bdf8; margin-top: 10px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px; display: flex; justify-content: space-between; align-items: baseline;">
            <span>${secAffixTitle}</span>
            <small style="color: #94a3b8; font-size: 11px; font-weight: 400;">${affixSubHint}</small>
          </div>
          <div class="ro-modal-affixes-wrap">
            ${affixesHtml}
          </div>
        </div>
        <div class="ro-modal-footer">
          <div class="ro-modal-footer-summary" id="ro-modal-foot-sum">
            🎯 ${isEn ? 'Focus' : '專注'}: <b>${curCfg.focus.length}</b> ${isEn ? '' : '個'} ｜ 🚫 ${isEn ? 'Banish' : '放逐'}: <b>${curCfg.banish.length}</b> ${isEn ? '' : '個'} ｜ ✨ ${isEn ? 'Affixes' : '詞綴'}: <b>${curAffixes.length}</b> ${isEn ? '' : '項'}
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="ro-modal-btn-reset" id="ro-modal-reset-btn">${resetBtnText}</button>
            <button class="ro-modal-btn-primary" id="ro-modal-done-btn">${saveBtnText}</button>
          </div>
        </div>
      </div>
    `;

    if (keepScroll && prevBodyScroll > 0) {
      const bodyContainer = modal.querySelector('.ro-modal-body');
      if (bodyContainer) {
        bodyContainer.scrollTop = prevBodyScroll;
      }
    }

    document.getElementById('ro-modal-x-btn').onclick = closeSkillsModal;
    document.getElementById('ro-modal-done-btn').onclick = closeSkillsModal;

    const rarityFirstCb = document.getElementById('ro-modal-rarity-first');
    if (rarityFirstCb) {
      rarityFirstCb.onchange = () => {
        config.prioritizeRarity = rarityFirstCb.checked;
        saveConfig();
      };
    }

    const fillSlotsFirstCb = document.getElementById('ro-modal-fill-slots-first');
    if (fillSlotsFirstCb) {
      fillSlotsFirstCb.onchange = () => {
        config.banishOnlyWhenSlotsFull = fillSlotsFirstCb.checked;
        saveConfig();
      };
    }

    document.getElementById('ro-modal-reset-btn').onclick = () => {
      const def = DEFAULT_JOB_SETTINGS[config.selectedJob] || { focus: [], banish: [] };
      config.jobSettings[config.selectedJob] = JSON.parse(JSON.stringify(def));
      config.preferredAffixes = ['targets', 'cooldown', 'damage'];
      config.prioritizeRarity = true;
      config.banishOnlyWhenSlotsFull = true;
      saveConfig();
      renderSkillsModalContent(true);
    };

    // 詞綴晶片點選切換
    modal.querySelectorAll('.ro-modal-affix-chip').forEach(chip => {
      chip.onclick = () => {
        const affixId = chip.dataset.affix;
        if (!config.preferredAffixes) config.preferredAffixes = [];
        if (config.preferredAffixes.includes(affixId)) {
          config.preferredAffixes = config.preferredAffixes.filter(id => id !== affixId);
        } else {
          config.preferredAffixes.push(affixId);
        }
        saveConfig();
        renderSkillsModalContent(true);
      };
    });

    modal.querySelectorAll('.ro-modal-skill-row').forEach(row => {
      const skillName = row.dataset.skill;
      const btns = row.querySelectorAll('.ro-modal-btn-act');
      btns.forEach(btn => {
        btn.onclick = () => {
          const act = btn.dataset.act;
          const cfg = getJobConfig(config.selectedJob);

          // 移除舊狀態
          cfg.focus = (cfg.focus || []).filter(s => s !== skillName);
          cfg.banish = (cfg.banish || []).filter(s => s !== skillName);

          if (act === 'focus') {
            cfg.focus.push(skillName);
          } else if (act === 'banish') {
            cfg.banish.push(skillName);
          }

          // 同步關鍵字
          config.focusKeywords = cfg.focus.join(', ');
          config.banishKeywords = cfg.banish.join(', ');

          saveConfig();

          btns.forEach(b => {
            b.className = 'ro-modal-btn-act';
            if (b.dataset.act === act) {
              b.classList.add(act === 'focus' ? 'act-focus' : act === 'banish' ? 'act-banish' : 'act-normal');
            }
          });

          const footSum = document.getElementById('ro-modal-foot-sum');
          if (footSum) {
            footSum.innerHTML = `🎯 ${isEn ? 'Focus' : '專注'}: <b>${cfg.focus.length}</b> ${isEn ? '' : '個'} ｜ 🚫 ${isEn ? 'Banish' : '放逐'}: <b>${cfg.banish.length}</b> ${isEn ? '' : '個'}`;
          }
        };
      });
    });
  }

  // ==========================================
  // 8.2 出發升級與難度配置彈窗 (Difficulty & Level-up Modal)
  // ==========================================
  function openDifficultyModal() {
    let modal = document.getElementById('ro-helper-difficulty-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'ro-helper-difficulty-modal';
      document.body.appendChild(modal);
    }
    renderDifficultyModalContent();
    modal.style.display = 'flex';
  }

  function closeDifficultyModal() {
    const modal = document.getElementById('ro-helper-difficulty-modal');
    if (modal) {
      modal.style.display = 'none';
    }
    saveConfig();
    updateUIElementsFromConfig();
  }

  function updateUIElementsFromConfig() {
    const levelModeSelect = document.getElementById('ro-h-levelup-mode');
    if (levelModeSelect) levelModeSelect.value = config.levelUpMode;

    const bankAutoRow = document.getElementById('ro-h-bank-auto-row');
    if (bankAutoRow) bankAutoRow.style.display = config.levelUpMode === 'accumulate' ? 'flex' : 'none';

    const bankAutoCb = document.getElementById('ro-h-bank-auto');
    if (bankAutoCb) bankAutoCb.checked = config.autoOpenBank;
  }

  function renderDifficultyModalContent() {
    const modal = document.getElementById('ro-helper-difficulty-modal');
    if (!modal) return;

    if (!config.difficulty) {
      config.difficulty = { count: 1.0, damage: 1.0, hp: 1.0, speed: 1.0, events: 1.0 };
    }

    const isEn = config.lang === 'en';
    const diff = config.difficulty;
    const isInstant = config.levelUpMode === 'instant';
    const isAccumulate = config.levelUpMode === 'accumulate';
    const isCustom = !!config.customDiffEnabled;

    modal.innerHTML = `
      <style>
        #ro-helper-difficulty-modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 999999999;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft JhengHei", sans-serif;
          user-select: none;
        }
        .ro-diff-box {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          width: 500px;
          max-width: 95vw;
          max-height: 88vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(14, 165, 233, 0.3);
          overflow: hidden;
          color: #f8fafc;
        }
        .ro-diff-header {
          padding: 12px 18px;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ro-diff-title {
          font-weight: 700;
          font-size: 15px;
          color: #38bdf8;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ro-diff-close-x {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 20px;
          cursor: pointer;
          line-height: 1;
          padding: 4px;
        }
        .ro-diff-close-x:hover {
          color: #f8fafc;
        }
        .ro-diff-body {
          padding: 16px 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ro-diff-section-title {
          font-size: 13px;
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ro-diff-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .ro-diff-card {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 10px 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ro-diff-card:hover {
          background: rgba(30, 41, 59, 0.9);
          border-color: rgba(56, 189, 248, 0.4);
        }
        .ro-diff-card.active {
          background: rgba(14, 165, 233, 0.15);
          border-color: #38bdf8;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
        }
        .ro-diff-card-title {
          font-weight: 700;
          font-size: 13px;
          color: #f8fafc;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .ro-diff-card.active .ro-diff-card-title {
          color: #38bdf8;
        }
        .ro-diff-card-desc {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.35;
        }
        .ro-diff-slider-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 0;
          font-size: 12px;
          gap: 12px;
        }
        .ro-diff-slider-label {
          width: 140px;
          color: #cbd5e1;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .ro-diff-slider-input {
          flex: 1;
          height: 6px;
          accent-color: #38bdf8;
          cursor: pointer;
        }
        .ro-diff-slider-val {
          width: 50px;
          text-align: right;
          font-weight: 700;
          color: #38bdf8;
          font-size: 12px;
        }
        .ro-diff-presets {
          display: flex;
          gap: 8px;
          margin-top: 6px;
        }
        .ro-diff-preset-btn {
          flex: 1;
          background: rgba(51, 65, 85, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          border-radius: 6px;
          padding: 6px;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .ro-diff-preset-btn:hover {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
          color: #fff;
        }
        .ro-diff-footer {
          padding: 12px 20px;
          background: #1e293b;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .ro-diff-btn-save {
          background: #0284c7;
          border: none;
          color: white;
          border-radius: 6px;
          padding: 8px 18px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ro-diff-btn-save:hover {
          background: #0369a1;
        }
      </style>

      <div class="ro-diff-box">
        <div class="ro-diff-header">
          <div class="ro-diff-title">
            <span>⚙️ ${isEn ? 'Level-up & Difficulty Settings' : '出發升級與難度配置'}</span>
          </div>
          <button class="ro-diff-close-x" id="ro-diff-close-x">✕</button>
        </div>

        <div class="ro-diff-body">
          <!-- 升級方式區塊 -->
          <div>
            <div class="ro-diff-section-title">
              <span>⚡ ${isEn ? 'Level-up Strategy' : '升級方式 (Level-up Strategy)'}</span>
            </div>
            <div class="ro-diff-cards-grid">
              <div class="ro-diff-card ${isInstant ? 'active' : ''}" id="ro-diff-card-instant">
                <div class="ro-diff-card-title">⚡ ${isEn ? 'Instant Level-up' : '立即升級 (Instant)'}</div>
                <div class="ro-diff-card-desc">${isEn ? 'Standard: pauses game immediately on each level-up / chest, select cards one by one.' : '傳統模式：每次升級與寶箱即時暫停遊戲，單張即時挑選卡片。'}</div>
              </div>
              <div class="ro-diff-card ${isAccumulate ? 'active' : ''}" id="ro-diff-card-accumulate">
                <div class="ro-diff-card-title">📦 ${isEn ? 'Accumulate Level-up' : '累積升級 (Accumulate)'}</div>
                <div class="ro-diff-card-desc">${isEn ? 'No pause: points bank up, press B or click to bulk-select cards in one go.' : '戰鬥不暫停：升級點數儲存，按 B 或點擊一次連續批量選卡。'}</div>
              </div>
            </div>
            <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px; font-size: 12px; color: #94a3b8;">
              <input type="checkbox" id="ro-diff-auto-bank" ${config.autoOpenBank ? 'checked' : ''} style="cursor: pointer; accent-color: #38bdf8;">
              <label for="ro-diff-auto-bank" style="cursor: pointer;">${isEn ? 'Auto open card selection when upgrades are banked during combat (Press B)' : '戰鬥中偵測到累積升級時自動開啟選卡 (按 B)'}</label>
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 0;">

          <!-- 關卡難度拖曳區塊 -->
          <div>
            <div class="ro-diff-section-title">
              <span>🎮 ${isEn ? 'Stage Difficulty Sliders' : '出發關卡難度設定 (Difficulty Sliders)'}</span>
              <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: normal; cursor: pointer;">
                <input type="checkbox" id="ro-diff-enable-custom" ${isCustom ? 'checked' : ''} style="accent-color: #38bdf8; cursor: pointer;">
                <span>${isEn ? 'Enable Custom Difficulty' : '啟用自訂難度'}</span>
              </label>
            </div>

            <div id="ro-diff-sliders-container" style="opacity: ${isCustom ? '1' : '0.5'}; pointer-events: ${isCustom ? 'auto' : 'none'}; transition: opacity 0.2s;">
              <div class="ro-diff-slider-row">
                <span class="ro-diff-slider-label">👾 ${isEn ? 'Enemy Count' : '敵人數量 (Count)'}</span>
                <input type="range" class="ro-diff-slider-input" data-key="count" min="1.0" max="3.5" step="0.05" value="${diff.count}">
                <span class="ro-diff-slider-val" id="val-count">${Math.round(diff.count * 100)}%</span>
              </div>

              <div class="ro-diff-slider-row">
                <span class="ro-diff-slider-label">💥 ${isEn ? 'Enemy Damage' : '敵人傷害 (Damage)'}</span>
                <input type="range" class="ro-diff-slider-input" data-key="damage" min="1.0" max="1.75" step="0.05" value="${diff.damage}">
                <span class="ro-diff-slider-val" id="val-damage">${Math.round(diff.damage * 100)}%</span>
              </div>

              <div class="ro-diff-slider-row">
                <span class="ro-diff-slider-label">🩸 ${isEn ? 'Enemy HP' : '敵人生命 (HP)'}</span>
                <input type="range" class="ro-diff-slider-input" data-key="hp" min="1.0" max="2.5" step="0.05" value="${diff.hp}">
                <span class="ro-diff-slider-val" id="val-hp">${Math.round(diff.hp * 100)}%</span>
              </div>

              <div class="ro-diff-slider-row">
                <span class="ro-diff-slider-label">⚡ ${isEn ? 'Enemy Speed' : '敵人速度 (Speed)'}</span>
                <input type="range" class="ro-diff-slider-input" data-key="speed" min="1.0" max="1.75" step="0.05" value="${diff.speed}">
                <span class="ro-diff-slider-val" id="val-speed">${Math.round(diff.speed * 100)}%</span>
              </div>

              <div class="ro-diff-slider-row">
                <span class="ro-diff-slider-label">🎪 ${isEn ? 'Event Count' : '事件數量 (Events)'}</span>
                <input type="range" class="ro-diff-slider-input" data-key="events" min="1.0" max="2.5" step="0.05" value="${diff.events}">
                <span class="ro-diff-slider-val" id="val-events">${Math.round(diff.events * 100)}%</span>
              </div>

              <!-- 快捷難度預設按鈕 -->
              <div class="ro-diff-presets">
                <button type="button" class="ro-diff-preset-btn" data-preset="standard">🛡️ ${isEn ? 'Standard (100% all)' : '預設標準 (全100%)'}</button>
                <button type="button" class="ro-diff-preset-btn" data-preset="farm">🌾 ${isEn ? 'Farming (Count 250% Events 200%)' : '農怪專用 (量250%事200%)'}</button>
                <button type="button" class="ro-diff-preset-btn" data-preset="max">🔥 ${isEn ? 'Extreme (Max all)' : '極限挑戰 (全滿)'}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="ro-diff-footer">
          <button class="ro-diff-btn-save" id="ro-diff-save-btn">💾 ${isEn ? 'Save & Close' : '儲存並關閉'}</button>
        </div>
      </div>
    `;

    // 綁定事件
    const cardInstant = document.getElementById('ro-diff-card-instant');
    const cardAccumulate = document.getElementById('ro-diff-card-accumulate');
    const autoBankCb = document.getElementById('ro-diff-auto-bank');
    const customCb = document.getElementById('ro-diff-enable-custom');
    const slidersContainer = document.getElementById('ro-diff-sliders-container');

    cardInstant.onclick = () => {
      config.levelUpMode = 'instant';
      cardInstant.classList.add('active');
      cardAccumulate.classList.remove('active');
    };

    cardAccumulate.onclick = () => {
      config.levelUpMode = 'accumulate';
      cardAccumulate.classList.add('active');
      cardInstant.classList.remove('active');
    };

    if (autoBankCb) {
      autoBankCb.onchange = () => {
        config.autoOpenBank = autoBankCb.checked;
      };
    }

    if (customCb) {
      customCb.onchange = () => {
        config.customDiffEnabled = customCb.checked;
        slidersContainer.style.opacity = customCb.checked ? '1' : '0.5';
        slidersContainer.style.pointerEvents = customCb.checked ? 'auto' : 'none';
      };
    }

    // 滑桿事件監聽
    modal.querySelectorAll('.ro-diff-slider-input').forEach(slider => {
      const key = slider.dataset.key;
      const valEl = document.getElementById(`val-${key}`);
      slider.oninput = () => {
        const numVal = parseFloat(slider.value);
        config.difficulty[key] = numVal;
        if (valEl) valEl.textContent = `${Math.round(numVal * 100)}%`;
      };
    });

    // 預設按鈕事件
    modal.querySelectorAll('.ro-diff-preset-btn').forEach(btn => {
      btn.onclick = () => {
        const preset = btn.dataset.preset;
        if (preset === 'standard') {
          config.difficulty = { count: 1.0, damage: 1.0, hp: 1.0, speed: 1.0, events: 1.0 };
        } else if (preset === 'farm') {
          config.difficulty = { count: 2.5, damage: 1.0, hp: 1.0, speed: 1.0, events: 2.0 };
        } else if (preset === 'max') {
          config.difficulty = { count: 3.5, damage: 1.75, hp: 2.5, speed: 1.75, events: 2.5 };
        }
        modal.querySelectorAll('.ro-diff-slider-input').forEach(slider => {
          const key = slider.dataset.key;
          slider.value = config.difficulty[key];
          const valEl = document.getElementById(`val-${key}`);
          if (valEl) valEl.textContent = `${Math.round(config.difficulty[key] * 100)}%`;
        });
      };
    });

    document.getElementById('ro-diff-close-x').onclick = closeDifficultyModal;
    document.getElementById('ro-diff-save-btn').onclick = closeDifficultyModal;
  }

  // ==========================================
  // 8.3 技能與道具選擇歷史紀錄彈窗 (Pick History Modal)
  // ==========================================
  function openHistoryModal() {
    let modal = document.getElementById('ro-helper-history-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'ro-helper-history-modal';
      document.body.appendChild(modal);
    }
    renderHistoryModalContent();
    modal.style.display = 'flex';
  }

  function closeHistoryModal() {
    const modal = document.getElementById('ro-helper-history-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  function clearPickHistory() {
    if (confirm('確定要清空所有選卡與道具選擇歷史紀錄嗎？清空後將無法還原。')) {
      pickHistory = [];
      savePickHistory();
      renderHistoryModalContent();
    }
  }

  function renderHistoryModalContent() {
    const modal = document.getElementById('ro-helper-history-modal');
    if (!modal) return;

    const rarityColors = {
      0: '#94a3b8',
      1: '#4ade80',
      2: '#38bdf8',
      3: '#c084fc',
      4: '#f59e0b'
    };

    let historyHtml = '';
    if (pickHistory.length === 0) {
      historyHtml = `
        <div style="text-align: center; padding: 45px 15px; color: #64748b;">
          <div style="font-size: 34px; margin-bottom: 10px;">📭</div>
          <div style="font-size: 14px; font-weight: 600; color: #94a3b8; margin-bottom: 6px;">目前尚無技能或道具選擇紀錄</div>
          <div style="font-size: 11px; color: #64748b; line-height: 1.6;">進入關卡戰鬥升級或開啟寶箱後，將在此自動完整記錄每次三選一（或四選一）的詳細候選清單與最終決策！</div>
        </div>
      `;
    } else {
      historyHtml = pickHistory.map((item, idx) => {
        const chosenColor = rarityColors[item.chosenRarity] || '#38bdf8';
        const actionsHtml = item.actionsTaken && item.actionsTaken.length ? `
          <div class="ro-hist-actions">
            ${item.actionsTaken.map(act => `<span class="ro-hist-act-tag">${act}</span>`).join('')}
          </div>
        ` : '';

        const cardsGridHtml = (item.candidates || []).map((cand, cIdx) => {
          const candColor = rarityColors[cand.rarity] || '#94a3b8';
          const isChosen = cand.isChosen;
          return `
            <div class="ro-hist-cand-card ${isChosen ? 'chosen' : ''}">
              ${isChosen ? '<div class="ro-hist-chosen-badge">✔ 已選擇</div>' : ''}
              <div class="ro-hist-cand-header">
                <span class="ro-hist-cand-idx">#${cIdx + 1}</span>
                <span class="ro-hist-cand-rarity" style="color: ${candColor};">${cand.rarityName}</span>
              </div>
              <div class="ro-hist-cand-name" style="color: ${isChosen ? '#34d399' : '#f1f5f9'};">
                ${cand.name}
              </div>
              ${cand.sub ? `<div class="ro-hist-cand-sub" title="${cand.sub}">${cand.sub}</div>` : ''}
              ${cand.desc ? `<div class="ro-hist-cand-desc" title="${cand.desc}">${cand.desc}</div>` : ''}
              ${cand.isColdClone ? `<div class="ro-hist-cand-clone">❄️ 原: ${cand.originalSkill}</div>` : ''}
            </div>
          `;
        }).join('');

        return `
          <div class="ro-hist-item">
            <div class="ro-hist-item-header">
              <div class="ro-hist-item-meta">
                <span class="ro-hist-type-badge ro-hist-type-${item.type || 'skill'}">${item.typeName || '⭐ 升級技能'}</span>
                <span class="ro-hist-time">${item.timeStr || ''}</span>
                <span class="ro-hist-count">${item.totalCandidates || (item.candidates ? item.candidates.length : 0)} 項候選</span>
              </div>
              <div class="ro-hist-chosen-summary">
                <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                  👉 選擇：<b style="color: ${chosenColor};">${item.chosenName}</b>
                  <span class="ro-hist-rarity-pill" style="color: ${chosenColor}; border-color: ${chosenColor}50;">${item.chosenRarityName}</span>
                  ${item.chosenIsClone ? `<span class="ro-hist-clone-pill">❄️ 克隆: ${item.chosenOriginalSkill}</span>` : ''}
                </div>
                ${item.chosenDesc ? `<div class="ro-hist-chosen-desc" title="${item.chosenDesc}">✦ ${item.chosenDesc}</div>` : ''}
              </div>
            </div>
            ${actionsHtml}
            <div class="ro-hist-cards-grid">
              ${cardsGridHtml}
            </div>
          </div>
        `;
      }).join('');
    }

    modal.innerHTML = `
      <style>
        #ro-helper-history-modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 999999999;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft JhengHei", sans-serif;
          user-select: none;
        }
        .ro-hist-modal-box {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          width: 680px;
          max-width: 96vw;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(16, 185, 129, 0.35);
          overflow: hidden;
          color: #f8fafc;
        }
        .ro-hist-modal-header {
          padding: 12px 18px;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ro-hist-modal-header h3 {
          margin: 0;
          font-size: 15px;
          color: #34d399;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ro-hist-btn-clear {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #f87171;
          padding: 3px 9px;
          border-radius: 4px;
          font-size: 11px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .ro-hist-btn-clear:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        .ro-hist-close-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 18px;
          cursor: pointer;
          line-height: 1;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .ro-hist-close-btn:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }
        .ro-hist-modal-sub {
          padding: 8px 18px;
          background: rgba(0, 0, 0, 0.35);
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.5;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .ro-hist-modal-body {
          padding: 14px 18px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .ro-hist-item {
          background: rgba(30, 41, 59, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ro-hist-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }
        .ro-hist-item-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
        }
        .ro-hist-type-badge {
          display: inline-block;
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          background: rgba(56, 189, 248, 0.2);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.3);
        }
        .ro-hist-type-chest {
          background: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
          border-color: rgba(245, 158, 11, 0.3);
        }
        .ro-hist-type-story {
          background: rgba(168, 85, 247, 0.2);
          color: #c084fc;
          border-color: rgba(168, 85, 247, 0.3);
        }
        .ro-hist-time {
          color: #64748b;
        }
        .ro-hist-count {
          color: #94a3b8;
          background: rgba(255, 255, 255, 0.06);
          padding: 1px 5px;
          border-radius: 3px;
        }
        .ro-hist-chosen-summary {
          font-size: 12px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }
        .ro-hist-chosen-desc {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.35;
          word-break: break-word;
        }
        .ro-hist-cand-desc {
          font-size: 10px;
          color: #cbd5e1;
          background: rgba(15, 23, 42, 0.45);
          padding: 2px 5px;
          border-radius: 4px;
          margin-top: 3px;
          line-height: 1.35;
          word-break: break-word;
          max-height: 48px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ro-hist-rarity-pill {
          font-size: 10px;
          padding: 1px 5px;
          border-radius: 3px;
          border: 1px solid;
        }
        .ro-hist-clone-pill {
          font-size: 10px;
          padding: 1px 5px;
          border-radius: 3px;
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
        }
        .ro-hist-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          background: rgba(0, 0, 0, 0.25);
          padding: 4px 8px;
          border-radius: 6px;
        }
        .ro-hist-act-tag {
          font-size: 10px;
          color: #cbd5e1;
        }
        .ro-hist-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 8px;
        }
        .ro-hist-cand-card {
          position: relative;
          background: rgba(15, 23, 42, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          transition: all 0.2s ease;
        }
        .ro-hist-cand-card.chosen {
          border: 2px solid #10b981;
          background: rgba(16, 185, 129, 0.14);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.25);
        }
        .ro-hist-chosen-badge {
          position: absolute;
          top: -7px;
          right: 6px;
          background: #10b981;
          color: white;
          font-size: 9px;
          font-weight: bold;
          padding: 1px 5px;
          border-radius: 3px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .ro-hist-cand-header {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
        }
        .ro-hist-cand-idx {
          color: #64748b;
          font-weight: 600;
        }
        .ro-hist-cand-name {
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ro-hist-cand-sub {
          font-size: 10px;
          color: #94a3b8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ro-hist-cand-clone {
          font-size: 9px;
          color: #38bdf8;
        }
        .ro-hist-modal-footer {
          padding: 10px 18px;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ro-hist-footer-note {
          font-size: 11px;
          color: #64748b;
        }
        .ro-hist-btn-done {
          background: #10b981;
          border: none;
          color: white;
          border-radius: 6px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
        }
        .ro-hist-btn-done:hover {
          background: #059669;
        }
      </style>
      <div class="ro-hist-modal-box">
        <div class="ro-hist-modal-header">
          <h3><span>📜</span> 技能與道具選擇歷史紀錄</h3>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button class="ro-hist-btn-clear" id="ro-hist-clear-btn" title="清空所有選卡紀錄">🗑️ 清空紀錄</button>
            <button class="ro-hist-close-btn" id="ro-hist-close-x">✕</button>
          </div>
        </div>
        <div class="ro-hist-modal-sub">
          顯示每次升級或開寶箱時，畫面上出現的所有候選項目，以及助手最終選擇的技能或道具。
        </div>
        <div class="ro-hist-modal-body" id="ro-hist-list-container">
          ${historyHtml}
        </div>
        <div class="ro-hist-modal-footer">
          <span class="ro-hist-footer-note">共 ${pickHistory.length} 筆紀錄（最多保存最近 50 筆）</span>
          <button class="ro-hist-btn-done" id="ro-hist-save-btn">關閉</button>
        </div>
      </div>
    `;

    document.getElementById('ro-hist-close-x').onclick = closeHistoryModal;
    document.getElementById('ro-hist-save-btn').onclick = closeHistoryModal;
    document.getElementById('ro-hist-clear-btn').onclick = clearPickHistory;
  }

  /**
   * 渲染浮動面板內的好友組隊勾選清單
   */
  function renderFriendsListUI() {
    const listContainer = document.getElementById('ro-h-friends-list');
    if (!listContainer) return;

    // 從遊戲 #fr-body 讀取目前在線/離線的所有好友
    const gameFriends = getGameFriendsList();
    // 合併目前已儲存的好友名單 (防止離線好友消失)
    const allFriendNames = Array.from(new Set([
      ...(config.partyInviteFriends || []),
      ...gameFriends.map(f => f.name)
    ]));

    if (allFriendNames.length === 0) {
      listContainer.innerHTML = '<div style="color: #94a3b8; font-size: 11px; text-align: center; padding: 6px;">尚未讀取到好友，請點擊「🔄 刷新好友」或「手動新增」</div>';
      return;
    }

    let html = '';
    for (const name of allFriendNames) {
      const gf = gameFriends.find(f => f.name.toLowerCase() === name.toLowerCase());
      const isChecked = (config.partyInviteFriends || []).some(n => n.toLowerCase() === name.toLowerCase());
      const statusText = gf ? gf.where : '離線/未快取';
      const statusColor = (gf && gf.isOn) ? '#4ade80' : '#94a3b8';

      html += `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 2px 4px; border-bottom: 1px solid rgba(255,255,255,0.05);">
          <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; flex: 1; overflow: hidden; margin: 0;">
            <input type="checkbox" class="ro-h-friend-cb" data-friend="${name}" ${isChecked ? 'checked' : ''} style="cursor: pointer;">
            <span style="color: ${isChecked ? '#38bdf8' : '#e2e8f0'}; font-weight: ${isChecked ? '600' : 'normal'}; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${name}</span>
            <small style="color: ${statusColor}; font-size: 10px;">(${statusText})</small>
          </label>
          <button type="button" class="ro-h-del-friend" data-friend="${name}" title="從名單移除" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 11px; padding: 0 4px;">✕</button>
        </div>
      `;
    }

    listContainer.innerHTML = html;

    // 綁定好友 checkbox 點擊事件
    listContainer.querySelectorAll('.ro-h-friend-cb').forEach(cb => {
      cb.onchange = () => {
        const fName = cb.dataset.friend;
        if (cb.checked) {
          if (!config.partyInviteFriends.includes(fName)) {
            config.partyInviteFriends.push(fName);
          }
        } else {
          config.partyInviteFriends = config.partyInviteFriends.filter(n => n !== fName);
        }
        saveConfig();
        renderFriendsListUI();
      };
    });

    // 綁定移除按鈕
    listContainer.querySelectorAll('.ro-h-del-friend').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const fName = btn.dataset.friend;
        config.partyInviteFriends = (config.partyInviteFriends || []).filter(n => n !== fName);
        saveConfig();
        renderFriendsListUI();
      };
    });
  }

  function createFloatingPanel() {
    const existing = document.getElementById('ro-helper-panel');
    if (existing) existing.remove();

    const panel = document.createElement('div');
    panel.id = 'ro-helper-panel';
    panel.innerHTML = `
      <style>
        #ro-helper-panel {
          position: fixed;
          top: 15px;
          right: 15px;
          z-index: 99999999;
          width: 320px;
          background: rgba(15, 23, 42, 0.94);
          color: #f8fafc;
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.12);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft JhengHei", sans-serif;
          font-size: 13px;
          backdrop-filter: blur(8px);
          user-select: none;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        #ro-helper-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95));
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          cursor: move;
        }
        #ro-helper-title {
          font-weight: 700;
          font-size: 14px;
          color: #38bdf8;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        #ro-helper-min-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          padding: 2px 6px;
          border-radius: 4px;
        }
        #ro-helper-min-btn:hover {
          color: #f8fafc;
          background: rgba(255, 255, 255, 0.1);
        }
        #ro-helper-body {
          padding: 12px 14px;
          display: ${config.minimized ? 'none' : 'flex'};
          flex-direction: column;
          gap: 9px;
          max-height: 80vh;
          overflow-y: auto;
        }
        .ro-h-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(30, 41, 59, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 7px;
          padding: 6px 10px;
          box-sizing: border-box;
          transition: background 0.15s ease, border-color 0.15s ease;
        }
        .ro-h-row:hover {
          background: rgba(51, 65, 85, 0.55);
          border-color: rgba(255, 255, 255, 0.18);
        }
        .ro-h-row-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: rgba(30, 41, 59, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 7px;
          padding: 7px 10px;
          box-sizing: border-box;
          transition: background 0.15s ease, border-color 0.15s ease;
        }
        .ro-h-row-group:hover {
          background: rgba(51, 65, 85, 0.55);
          border-color: rgba(255, 255, 255, 0.18);
        }
        .ro-h-label {
          font-size: 12px;
          font-weight: 500;
          color: #f1f5f9;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .ro-h-status-box {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 6px;
          padding: 6px 10px;
          font-size: 12px;
          color: #cbd5e1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ro-h-status-line {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ro-h-badge {
          display: inline-block;
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          background: #0284c7;
          color: white;
        }
        .ro-h-switch {
          position: relative;
          display: inline-block;
          width: 36px;
          height: 20px;
        }
        .ro-h-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .ro-h-slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: #334155;
          transition: .3s;
          border-radius: 20px;
        }
        .ro-h-slider:before {
          position: absolute;
          content: "";
          height: 14px;
          width: 14px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .3s;
          border-radius: 50%;
        }
        input:checked + .ro-h-slider {
          background-color: #0ea5e9;
        }
        input:checked + .ro-h-slider:before {
          transform: translateX(16px);
        }
        .ro-h-btn-main {
          width: 100%;
          padding: 8px;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ro-h-btn-start {
          background: #10b981;
          color: #ffffff;
        }
        .ro-h-btn-start:hover {
          background: #059669;
        }
        .ro-h-btn-stop {
          background: #ef4444;
          color: #ffffff;
        }
        .ro-h-btn-stop:hover {
          background: #dc2626;
        }
        .ro-h-btn-test {
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38bdf8;
          border-radius: 6px;
          padding: 5px 8px;
          font-size: 11px;
          cursor: pointer;
          width: 100%;
          font-weight: 600;
        }
        .ro-h-btn-test:hover {
          background: rgba(56, 189, 248, 0.25);
        }
        .ro-h-btn-history {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399;
          border-radius: 6px;
          padding: 5px 8px;
          font-size: 11px;
          cursor: pointer;
          width: 100%;
          font-weight: 600;
          transition: background 0.15s ease;
        }
        .ro-h-btn-history:hover {
          background: rgba(16, 185, 129, 0.25);
        }
        #ro-helper-panel button {
          box-shadow: none;
          outline: none;
          font-family: inherit;
        }
        .ro-h-btn-sub {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          outline: none !important;
          box-shadow: none !important;
          margin: 0 !important;
          box-sizing: border-box;
          line-height: 1;
          transition: background 0.15s ease, border-color 0.15s ease, filter 0.15s ease;
        }
        .ro-h-btn-sub:hover {
          filter: brightness(1.15);
        }
        .ro-h-btn-sub:active {
          filter: brightness(0.92);
        }
        .ro-h-kofi-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 6px 10px;
          background: linear-gradient(135deg, #ff5e5b, #ff8c42);
          color: #ffffff !important;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 700;
          font-size: 12px;
          box-shadow: 0 2px 8px rgba(255, 94, 91, 0.35);
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
        }
        .ro-h-kofi-btn:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(255, 94, 91, 0.5);
        }
        .ro-h-kofi-header-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          background: linear-gradient(135deg, #ff5e5b, #ff8c42);
          color: #ffffff !important;
          text-decoration: none;
          border-radius: 6px;
          font-size: 13px;
          line-height: 1;
          box-shadow: 0 2px 6px rgba(255, 94, 91, 0.4);
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
          cursor: pointer;
        }
        .ro-h-kofi-header-btn:hover {
          filter: brightness(1.15);
          transform: scale(1.1);
          box-shadow: 0 3px 10px rgba(255, 94, 91, 0.65);
        }
        .ro-h-input {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          color: white;
          padding: 3px 6px;
          font-size: 12px;
          outline: none;
        }
        .ro-h-select {
          background: #1e293b;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          color: white;
          padding: 3px 6px;
          font-size: 12px;
          outline: none;
        }
        .ro-h-input-full {
          width: 100%;
          box-sizing: border-box;
          margin-top: 4px;
        }
        .ro-h-stats {
          font-size: 11px;
          color: #94a3b8;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 8px;
          line-height: 1.5;
        }
        .ro-h-stats b {
          color: #f1f5f9;
        }
        .ro-h-skill-tag {
          display: inline-block;
          font-size: 11px;
          padding: 2px 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          cursor: pointer;
          margin: 2px 2px;
          transition: all 0.15s ease;
        }
        .ro-h-skill-tag.active {
          background: rgba(14, 165, 233, 0.25);
          border-color: #0ea5e9;
          color: #38bdf8;
          font-weight: 600;
        }
      </style>

            <div id="ro-helper-header">
        <div id="ro-helper-title" style="display: flex; align-items: center; gap: 7px;">
          <a href="https://github.com/hijacker4163/ro-survivors-helper" target="_blank" rel="noopener noreferrer" title="🐰 Martian Rabbit (火星兔子程式員) - GitHub Repo" style="display: flex; align-items: center; text-decoration: none;">
            <img id="ro-h-logo" src="${MARTIAN_RABBIT_LOGO}" alt="Logo" style="width: 24px; height: 24px; border-radius: 6px; object-fit: cover; border: 1px solid rgba(56, 189, 248, 0.4); box-shadow: 0 0 6px rgba(56, 189, 248, 0.35); cursor: pointer; transition: transform 0.15s ease;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1.0)'">
          </a>
          <span style="font-weight: 700; color: #f8fafc; font-size: 13px; letter-spacing: 0.3px;">${t('title')} <small style="color: #38bdf8; font-size: 11px; font-weight: 600;">v${SCRIPT_VERSION}</small></span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <button id="ro-helper-lang-btn" class="ro-h-lang-header-btn" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #cbd5e1; font-size: 11px; padding: 2px 6px; border-radius: 4px; cursor: pointer; line-height: 1.2;" title="切換語言 / Switch Language (中文/English)">${config.lang === 'en' ? '🌐 中文' : '🌐 EN'}</button>
          <a href="https://ko-fi.com/martianrabbit" target="_blank" rel="noopener noreferrer" class="ro-h-kofi-header-btn" title="☕ ${t('buy_coffee')}">☕</a>
          <button id="ro-helper-min-btn" title="最小化/展開">${config.minimized ? '＋' : '—'}</button>
        </div>
      </div>

      <div id="ro-helper-body">
        <div class="ro-h-status-box">
          <div class="ro-h-status-line">
            <span>${t('status_title')} <span id="ro-h-status-text" style="color: #38bdf8;">${config.enabled ? t('status_running') : t('status_standby')}</span></span>
          </div>
        </div>

        <button class="ro-h-btn-main ${config.enabled ? 'ro-h-btn-stop' : 'ro-h-btn-start'}" id="ro-h-toggle-btn">
          ${config.enabled ? t('btn_stop') : t('btn_start')}
        </button>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('current_job')}</span>
          <select class="ro-h-select" id="ro-h-job" style="width: 155px;">
            <option value="swordsman" ${config.selectedJob === 'swordsman' ? 'selected' : ''}>⚔️ ${config.lang === 'en' ? 'Swordsman' : '劍士 (Swordsman)'}</option>
            <option value="mage" ${config.selectedJob === 'mage' ? 'selected' : ''}>🔮 ${config.lang === 'en' ? 'Mage' : '魔法師 (Mage)'}</option>
            <option value="archer" ${config.selectedJob === 'archer' ? 'selected' : ''}>🏹 ${config.lang === 'en' ? 'Archer' : '弓箭手 (Archer)'}</option>
            <option value="acolyte" ${config.selectedJob === 'acolyte' ? 'selected' : ''}>✝️ ${config.lang === 'en' ? 'Acolyte' : '服事 (Acolyte)'}</option>
            <option value="thief" ${config.selectedJob === 'thief' ? 'selected' : ''}>🗡️ ${config.lang === 'en' ? 'Thief' : '盜賊 (Thief)'}</option>
            <option value="merchant" ${config.selectedJob === 'merchant' ? 'selected' : ''}>💰 ${config.lang === 'en' ? 'Merchant' : '商人 (Merchant)'}</option>
            <option value="taekwon" ${config.selectedJob === 'taekwon' ? 'selected' : ''}>🥋 ${config.lang === 'en' ? 'Taekwon' : '跆拳少年 (Taekwon)'}</option>
            <option value="ninja" ${config.selectedJob === 'ninja' ? 'selected' : ''}>🥷 ${config.lang === 'en' ? 'Ninja' : '忍者 (Ninja)'}</option>
            <option value="gunslinger" ${config.selectedJob === 'gunslinger' ? 'selected' : ''}>🔫 ${config.lang === 'en' ? 'Gunslinger' : '神槍手 (Gunslinger)'}</option>
          </select>
        </div>

        <div id="ro-h-job-skills-container"></div>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('target_stage')}</span>
          <select class="ro-h-select" id="ro-h-stage" style="width: 155px;">
            ${STAGES_CONFIG.map(s => `<option value="${s.id}" ${config.targetStage === s.id ? 'selected' : ''}>${config.lang === 'en' ? (s.en || s.name) : s.name}</option>`).join('')}
          </select>
        </div>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('levelup_mode')}</span>
          <select class="ro-h-select" id="ro-h-levelup-mode" style="width: 155px;">
            <option value="instant" ${config.levelUpMode === 'instant' ? 'selected' : ''}>${t('levelup_instant')}</option>
            <option value="accumulate" ${config.levelUpMode === 'accumulate' ? 'selected' : ''}>${t('levelup_accumulate')}</option>
          </select>
        </div>

        <div class="ro-h-row" id="ro-h-bank-auto-row" style="display: ${config.levelUpMode === 'accumulate' ? 'flex' : 'none'}; padding-left: 14px;">
          <span class="ro-h-label" style="font-size: 11px; color: #94a3b8;">${t('auto_open_bank')}</span>
          <label class="ro-h-switch">
            <input type="checkbox" id="ro-h-bank-auto" ${config.autoOpenBank ? 'checked' : ''}>
            <span class="ro-h-slider"></span>
          </label>
        </div>

        <button type="button" id="ro-h-open-diff-btn" class="ro-h-btn-secondary" style="width: 100%; justify-content: center; background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(14, 165, 233, 0.35); color: #38bdf8; font-weight: 600; padding: 7px 10px; border-radius: 7px; cursor: pointer;">
          ${t('open_diff_modal')}
        </button>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('auto_festival')}</span>
          <label class="ro-h-switch">
            <input type="checkbox" id="ro-h-festival" ${config.autoFestival ? 'checked' : ''}>
            <span class="ro-h-slider"></span>
          </label>
        </div>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('auto_lobby')}</span>
          <label class="ro-h-switch">
            <input type="checkbox" id="ro-h-lobby" ${config.autoSelectLobby ? 'checked' : ''}>
            <span class="ro-h-slider"></span>
          </label>
        </div>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('auto_resume')}</span>
          <label class="ro-h-switch">
            <input type="checkbox" id="ro-h-resume" ${config.autoResume ? 'checked' : ''}>
            <span class="ro-h-slider"></span>
          </label>
        </div>

        <div class="ro-h-row">
          <span class="ro-h-label" title="${t('background_mode_tip')}">${t('background_mode')}</span>
          <label class="ro-h-switch">
            <input type="checkbox" id="ro-h-background-mode" ${config.backgroundMode !== false ? 'checked' : ''}>
            <span class="ro-h-slider"></span>
          </label>
        </div>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('auto_enter_map')}</span>
          <label class="ro-h-switch">
            <input type="checkbox" id="ro-h-enter-map" ${config.autoEnterMap ? 'checked' : ''}>
            <span class="ro-h-slider"></span>
          </label>
        </div>

        <!-- 👥 組隊與好友重組設定 -->
        <div class="ro-h-row-group">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="ro-h-label">${t('auto_reparty')}</span>
            <label class="ro-h-switch">
              <input type="checkbox" id="ro-h-auto-reparty" ${config.autoReParty ? 'checked' : ''}>
              <span class="ro-h-slider"></span>
            </label>
          </div>
          <div id="ro-h-reparty-sub" style="display: ${config.autoReParty ? 'block' : 'none'}; font-size: 11px; margin-top: 4px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #cbd5e1;">${t('party_role')}</span>
              <select class="ro-h-select" id="ro-h-party-role" style="width: 145px; font-size: 11px; padding: 2px 4px;">
                <option value="leader" ${config.partyRole === 'leader' ? 'selected' : ''}>${t('role_leader')}</option>
                <option value="member" ${config.partyRole === 'member' ? 'selected' : ''}>${t('role_member')}</option>
              </select>
            </div>
            
            <!-- 隊長邀請名單專用區 -->
            <div id="ro-h-leader-friends-box" style="display: ${config.partyRole === 'leader' ? 'block' : 'none'}; border-top: 1px dashed rgba(255,255,255,0.12); padding-top: 4px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
                <span style="color: #7dd3fc; font-weight: 600;">${t('target_teammates')}</span>
                <button type="button" id="ro-h-refresh-friends" class="ro-h-btn-sub" style="padding: 2px 8px; font-size: 10px; background: rgba(56, 189, 248, 0.2); border: 1px solid rgba(56, 189, 248, 0.4); color: #38bdf8;" title="${t('refresh_friends')}">${t('refresh_friends')}</button>
              </div>
              <div id="ro-h-friends-list" style="max-height: 120px; overflow-y: auto; background: rgba(0,0,0,0.3); border-radius: 4px; padding: 4px; border: 1px solid rgba(255,255,255,0.08);">
              </div>
              <div style="display: flex; gap: 4px; margin-top: 4px; align-items: stretch;">
                <input type="text" id="ro-h-add-friend-input" class="ro-h-input" placeholder="${t('add_friend_placeholder')}" style="flex: 1; font-size: 11px; padding: 3px 6px; height: 24px; box-sizing: border-box;">
                <button type="button" id="ro-h-add-friend-btn" class="ro-h-btn-sub" style="font-size: 11px; padding: 0 10px; height: 24px; background: #0284c7; border: 1px solid #0284c7; color: #ffffff;" title="${t('add_friend_btn')}">${t('add_friend_btn')}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('auto_party_check')}</span>
          <label class="ro-h-switch">
            <input type="checkbox" id="ro-h-party-check" ${config.autoAcceptPartyCheck ? 'checked' : ''}>
            <span class="ro-h-slider"></span>
          </label>
        </div>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('auto_pick_card')}</span>
          <label class="ro-h-switch">
            <input type="checkbox" id="ro-h-pick-card" ${config.autoPickCard ? 'checked' : ''}>
            <span class="ro-h-slider"></span>
          </label>
        </div>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('pick_delay')}</span>
          <input type="number" class="ro-h-input" id="ro-h-delay" value="${config.pickDelayMs}" min="500" max="3000" step="50" style="width: 70px; text-align: right;">
        </div>

        <!-- 🎁 自動組隊分寶 (Loot Roll) -->
        <div class="ro-h-row-group">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="ro-h-label">${t('auto_loot_roll')}</span>
            <label class="ro-h-switch">
              <input type="checkbox" id="ro-h-loot-roll" ${config.autoLootRoll ? 'checked' : ''}>
              <span class="ro-h-slider"></span>
            </label>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 11px; padding-top: 4px; border-top: 1px dashed rgba(255,255,255,0.08);">
            <span style="color: #94a3b8;">${t('loot_mode')}</span>
            <select class="ro-h-select" id="ro-h-loot-mode" style="width: 155px; font-size: 11px; padding: 2px 4px;">
              <option value="greed_need_legendary" ${config.lootRollMode === 'greed_need_legendary' ? 'selected' : ''}>${t('loot_greed_need')}</option>
              <option value="all_greed" ${config.lootRollMode === 'all_greed' ? 'selected' : ''}>${t('loot_all_greed')}</option>
              <option value="all_pass" ${config.lootRollMode === 'all_pass' ? 'selected' : ''}>${t('loot_all_pass')}</option>
            </select>
          </div>
        </div>

        <div class="ro-h-row">
          <span class="ro-h-label">${t('auto_restart')}</span>
          <label class="ro-h-switch">
            <input type="checkbox" id="ro-h-restart" ${config.autoRestart ? 'checked' : ''}>
            <span class="ro-h-slider"></span>
          </label>
        </div>

        <button class="ro-h-btn-test" id="ro-h-test-btn" style="display: none;" title="立即強制觸發一次選卡檢驗與特權診斷">
          ${t('test_btn')}
        </button>

        <button class="ro-h-btn-history" id="ro-h-history-btn" title="查看技能與道具選擇歷史紀錄">
          ${t('history_btn')}
        </button>

        <div class="ro-h-stats" id="ro-h-stats" title="${t('stats_tooltip') || '雙擊可重設所有統計數據'}">
          ${t('stats_runs')}: <b>${config.stats.runsStarted}</b> | ${t('stats_cards')}: <b>${config.stats.cardsPicked}</b> | ${t('stats_deaths')}: <b style="color: ${(config.stats.deaths || 0) > 0 ? '#f87171' : '#cbd5e1'};">${config.stats.deaths || 0}</b> | ${t('stats_festivals')}: <b>${config.stats.festivalsEntered || 0}</b> | ${t('stats_focus')}: <b>${config.stats.focusedSkills || 0}</b> | ${t('stats_banish')}: <b>${config.stats.banishedSkills || 0}</b> | ${t('stats_lobby')}: <b>${config.stats.lobbiesPicked || 0}</b> | ${t('stats_resumes')}: <b>${config.stats.resumes || 0}</b>
        </div>

        <!-- 🐰 開發者資訊與請喝咖啡贊助按鈕 -->
        <div class="ro-h-footer-box" style="margin-top: 2px; padding-top: 8px; border-top: 1px dashed rgba(255, 255, 255, 0.12); display: flex; flex-direction: column; gap: 6px;">
          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 11px; color: #94a3b8;">
            <span>🐰 <b>${t('developer')}</b></span>
            <span style="color: #cbd5e1;" title="位於南半球從火星下來的兔子程式員">${t('dev_info')}</span>
          </div>
          <a href="https://ko-fi.com/martianrabbit" target="_blank" rel="noopener noreferrer" class="ro-h-kofi-btn" title="位於南半球從火星下來的兔子程式員，感謝您的支持！">
            <span>☕</span> ${t('buy_coffee')}
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(panel);

    // 綁定 UI 元素
    statusTextEl = document.getElementById('ro-h-status-text');
    statsEl = document.getElementById('ro-h-stats');
    stateBadgeEl = document.getElementById('ro-h-badge');
    jobSkillsContainer = document.getElementById('ro-h-job-skills-container');

    if (statsEl) {
      statsEl.ondblclick = () => {
        if (confirm(t('confirm_reset_stats') || '是否確定重設所有統計數據（包含進圖、選卡、死亡失敗次數）？')) {
          config.stats = {
            runsStarted: 0,
            cardsPicked: 0,
            restarts: 0,
            resumes: 0,
            lobbiesPicked: 0,
            festivalsEntered: 0,
            focusedSkills: 0,
            banishedSkills: 0,
            deaths: 0
          };
          saveConfig();
          updateUIStats();
          showToast(t('stats_reset_toast') || '統計數據已重設為 0', 2000);
        }
      };
    }

    const minBtn = document.getElementById('ro-helper-min-btn');
    const bodyEl = document.getElementById('ro-helper-body');
    const toggleBtn = document.getElementById('ro-h-toggle-btn');
    const jobSel = document.getElementById('ro-h-job');
    const stageSel = document.getElementById('ro-h-stage');
    const festivalCb = document.getElementById('ro-h-festival');
    const lobbyCb = document.getElementById('ro-h-lobby');
    const resumeCb = document.getElementById('ro-h-resume');
    const enterCb = document.getElementById('ro-h-enter-map');
    const partyCheckCb = document.getElementById('ro-h-party-check');
    const pickCb = document.getElementById('ro-h-pick-card');
    const restartCb = document.getElementById('ro-h-restart');
    const delayInput = document.getElementById('ro-h-delay');
    const testBtn = document.getElementById('ro-h-test-btn');

        const logoImg = document.getElementById('ro-h-logo');
    if (logoImg) {
      logoImg.onclick = (e) => {
        showToast('🐰 Martian Rabbit (火星兔子程式員) 🚀', 2000);
      };
    }

    const langBtn = document.getElementById('ro-helper-lang-btn');
    if (langBtn) {
      langBtn.onclick = () => {
        config.lang = config.lang === 'en' ? 'zh' : 'en';
        saveConfig();
        createFloatingPanel();
        showToast(config.lang === 'en' ? '🌐 Switched to English' : '🌐 已切換為繁體中文', 1800);
      };
    }

    minBtn.onclick = () => {
      config.minimized = !config.minimized;
      bodyEl.style.display = config.minimized ? 'none' : 'flex';
      minBtn.textContent = config.minimized ? '＋' : '—';
      saveConfig();
    };

    toggleBtn.onclick = () => {
      config.enabled = !config.enabled;
      if (!config.enabled) {
        releaseAllMovementKeys();
        festivalNavPhase = 0;
        navStepCount = 0;
      }
      toggleBtn.className = `ro-h-btn-main ${config.enabled ? 'ro-h-btn-stop' : 'ro-h-btn-start'}`;
      toggleBtn.textContent = config.enabled ? '🛑 停止助手' : '▶️ 啟動助手';
      updateStatus(config.enabled ? '助手已啟動' : '助手已手動暫停');
      saveConfig();
    };

    const openDiffBtn = document.getElementById('ro-h-open-diff-btn');
    if (openDiffBtn) {
      openDiffBtn.onclick = () => {
        openDifficultyModal();
      };
    }

    jobSel.onchange = () => {
      config.selectedJob = jobSel.value;
      saveConfig();
      renderJobSkills();
    };

    stageSel.onchange = () => {
      config.targetStage = stageSel.value;
      if (config.targetStage === 'louyang') {
        config.autoFestival = true;
        if (festivalCb) festivalCb.checked = true;
      } else {
        config.autoFestival = false;
        if (festivalCb) festivalCb.checked = false;
      }
      saveConfig();
    };

    const levelUpSel = document.getElementById('ro-h-levelup-mode');
    const bankAutoRow = document.getElementById('ro-h-bank-auto-row');
    const bankAutoCb = document.getElementById('ro-h-bank-auto');

    levelUpSel.onchange = () => {
      config.levelUpMode = levelUpSel.value;
      if (bankAutoRow) bankAutoRow.style.display = config.levelUpMode === 'accumulate' ? 'flex' : 'none';
      saveConfig();
    };

    bankAutoCb.onchange = () => {
      config.autoOpenBank = bankAutoCb.checked;
      saveConfig();
    };

    festivalCb.onchange = () => {
      config.autoFestival = festivalCb.checked;
      if (config.autoFestival) {
        config.targetStage = 'louyang';
        if (stageSel) stageSel.value = 'louyang';
      } else {
        if (config.targetStage === 'louyang') {
          config.targetStage = 'auto';
          if (stageSel) stageSel.value = 'auto';
        }
      }
      saveConfig();
    };

    lobbyCb.onchange = () => { config.autoSelectLobby = lobbyCb.checked; saveConfig(); };
    resumeCb.onchange = () => { config.autoResume = resumeCb.checked; saveConfig(); };
    const bgModeCb = document.getElementById('ro-h-background-mode');
    if (bgModeCb) {
      bgModeCb.onchange = () => {
        config.backgroundMode = bgModeCb.checked;
        isBackgroundModeActive = config.backgroundMode;
        saveConfig();
        updateStatus(config.backgroundMode ? '🔄 已啟用允許縮小與切頁 (背景運行)' : '⏸️ 已停用縮小與切頁背景運行');
        console.log(`[RO Helper] 允許縮小/切頁背景運行: ${config.backgroundMode ? '開啟' : '關閉'}`);
      };
    }
    enterCb.onchange = () => {
      config.autoEnterMap = enterCb.checked;
      if (enterCb.checked) {
        // 當開啟自動進入地圖時，自動取消組隊跟車模式（避免衝突）
        config.autoAcceptPartyCheck = false;
        if (partyCheckCb) partyCheckCb.checked = false;
      }
      saveConfig();
    };

    if (partyCheckCb) {
      partyCheckCb.onchange = () => {
        config.autoAcceptPartyCheck = partyCheckCb.checked;
        if (partyCheckCb.checked) {
          // 使用者要求：「如果組隊同意開關打開時，自動進入地圖則取消（關閉）」
          config.autoEnterMap = false;
          enterCb.checked = false;
          updateStatus('🤝 已開啟組隊跟車模式 (已自動關閉自動進入地圖)');
        }
        saveConfig();
      };
    }

    const autoRePartyCb = document.getElementById('ro-h-auto-reparty');
    const repartySub = document.getElementById('ro-h-reparty-sub');
    const partyRoleSel = document.getElementById('ro-h-party-role');
    const leaderFriendsBox = document.getElementById('ro-h-leader-friends-box');
    const refreshFriendsBtn = document.getElementById('ro-h-refresh-friends');
    const addFriendInput = document.getElementById('ro-h-add-friend-input');
    const addFriendBtn = document.getElementById('ro-h-add-friend-btn');

    if (autoRePartyCb) {
      autoRePartyCb.onchange = () => {
        config.autoReParty = autoRePartyCb.checked;
        if (repartySub) repartySub.style.display = config.autoReParty ? 'block' : 'none';
        if (config.autoReParty && config.partyRole === 'member') {
          config.autoAcceptPartyCheck = true;
          config.autoEnterMap = false;
          if (partyCheckCb) partyCheckCb.checked = true;
          if (enterCb) enterCb.checked = false;
        }
        saveConfig();
        if (config.autoReParty && config.partyRole === 'leader') {
          renderFriendsListUI();
        }
      };
    }

    if (partyRoleSel) {
      partyRoleSel.onchange = () => {
        config.partyRole = partyRoleSel.value;
        if (leaderFriendsBox) {
          leaderFriendsBox.style.display = config.partyRole === 'leader' ? 'block' : 'none';
        }
        if (config.partyRole === 'member') {
          config.autoAcceptPartyCheck = true;
          config.autoEnterMap = false;
          if (partyCheckCb) partyCheckCb.checked = true;
          if (enterCb) enterCb.checked = false;
          updateStatus('🤝 已切換為隊員模式 (自動同意邀請與出發)');
        } else {
          config.autoEnterMap = true;
          if (enterCb) enterCb.checked = true;
          updateStatus('👑 已切換為隊長模式 (自動組勾選好友並帶隊出發)');
          renderFriendsListUI();
        }
        saveConfig();
      };
    }

    if (refreshFriendsBtn) {
      refreshFriendsBtn.onclick = () => {
        updateStatus('👥 正在讀取遊戲最新好友清單...');
        refreshFriendsList();
        setTimeout(() => {
          renderFriendsListUI();
          showToast('👥 好友名單已刷新！', 1500);
        }, 350);
      };
    }

    if (addFriendBtn && addFriendInput) {
      const doAdd = () => {
        const val = addFriendInput.value.trim();
        if (!val) return;
        if (!config.partyInviteFriends.includes(val)) {
          config.partyInviteFriends.push(val);
          saveConfig();
          renderFriendsListUI();
          showToast(`👥 已加入目標組隊名單: ${val}`, 2000);
        }
        addFriendInput.value = '';
      };
      addFriendBtn.onclick = doAdd;
      addFriendInput.onkeydown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          doAdd();
        }
      };
    }

    if (config.autoReParty && config.partyRole === 'leader') {
      renderFriendsListUI();
    }
    pickCb.onchange = () => { config.autoPickCard = pickCb.checked; saveConfig(); };
    restartCb.onchange = () => { config.autoRestart = restartCb.checked; saveConfig(); };

    const lootRollCb = document.getElementById('ro-h-loot-roll');
    const lootModeSel = document.getElementById('ro-h-loot-mode');
    if (lootRollCb) {
      lootRollCb.onchange = () => {
        config.autoLootRoll = lootRollCb.checked;
        saveConfig();
      };
    }
    if (lootModeSel) {
      lootModeSel.onchange = () => {
        config.lootRollMode = lootModeSel.value;
        saveConfig();
      };
    }



    delayInput.onchange = () => {
      config.pickDelayMs = Math.max(500, parseInt(delayInput.value) || 800);
      delayInput.value = config.pickDelayMs;
      saveConfig();
    };

    testBtn.onclick = manualTestPick;

    const historyBtn = document.getElementById('ro-h-history-btn');
    if (historyBtn) {
      historyBtn.onclick = openHistoryModal;
    }

    // 拖曳功能
    const header = document.getElementById('ro-helper-header');
    let isDragging = false, startX, startY, initLeft, initTop;
    header.onmousedown = (e) => {
      if (e.target === minBtn || e.target.closest('.ro-h-kofi-header-btn')) return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const rect = panel.getBoundingClientRect();
      initLeft = rect.left;
      initTop = rect.top;
      document.onmousemove = (e) => {
        if (!isDragging) return;
        panel.style.left = `${initLeft + e.clientX - startX}px`;
        panel.style.top = `${initTop + e.clientY - startY}px`;
        panel.style.right = 'auto';
      };
      document.onmouseup = () => {
        isDragging = false;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    renderJobSkills();
  }

  function renderJobSkills() {
    if (!jobSkillsContainer) return;
    const job = JOB_DATABASE[config.selectedJob];
    if (!job) {
      jobSkillsContainer.innerHTML = '';
      return;
    }

    const isEn = config.lang === 'en';
    const curCfg = getJobConfig(config.selectedJob);
    const focusCount = (curCfg.focus || []).length;
    const banishCount = (curCfg.banish || []).length;
    const curAffixes = config.preferredAffixes || [];
    const noneText = isEn ? 'None' : '無';
    const affixBadges = curAffixes.map(id => {
      const def = AFFIX_DEFINITIONS.find(a => a.id === id);
      return def ? def.badge : id;
    }).join(isEn ? ', ' : '、') || noneText;

    const curItemFocus = config.itemSettings?.focus || [];
    const curItemBanish = config.itemSettings?.banish || [];
    const itemFocusNames = curItemFocus.map(id => {
      const it = RUN_ITEMS_DATABASE.find(x => x.id === id);
      return it ? (isEn ? (it.name_en || it.name_zh) : it.name_zh) : id;
    }).slice(0, 5).join(isEn ? ', ' : '、') + (curItemFocus.length > 5 ? '…' : '');
    const itemBanishNames = curItemBanish.map(id => {
      const it = RUN_ITEMS_DATABASE.find(x => x.id === id);
      return it ? (isEn ? (it.name_en || it.name_zh) : it.name_zh) : id;
    }).slice(0, 5).join(isEn ? ', ' : '、') + (curItemBanish.length > 5 ? '…' : '');

    const btnSkillsText = isEn ? `📋 Config [${job.name}] Skills & Affixes` : `📋 點此彈出【${job.name}】技能與詞綴偏好設定視窗`;
    const btnItemsText = isEn ? `🎒 Config Items & Deity Blessings` : `🎒 點此彈出【關卡道具/神祇】專注與放逐設定視窗`;

    jobSkillsContainer.innerHTML = `
      <div style="background: rgba(0,0,0,0.3); padding: 8px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 8px;">
        <button id="ro-h-open-skills-modal-btn" class="ro-h-btn-test" style="background: rgba(14, 165, 233, 0.25); border: 1px solid #0ea5e9; color: #38bdf8; font-weight: 700; padding: 7px 10px; font-size: 12px; cursor: pointer; border-radius: 6px; box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);">
          ${btnSkillsText}
        </button>
        <div style="font-size: 11px; color: #cbd5e1; line-height: 1.5; background: rgba(0,0,0,0.25); padding: 5px 8px; border-radius: 4px;">
          <span style="color: #34d399; font-weight: 600;">🎯 ${isEn ? 'Skill Focus' : '技能專注'} (${focusCount}${isEn ? '' : '個'})：</span>${(curCfg.focus || []).join(isEn ? ', ' : '、') || noneText}<br>
          <span style="color: #f87171; font-weight: 600;">🚫 ${isEn ? 'Skill Banish' : '技能放逐'} (${banishCount}${isEn ? '' : '個'})：</span>${(curCfg.banish || []).join(isEn ? ', ' : '、') || noneText}<br>
          <span style="color: #38bdf8; font-weight: 600;">✨ ${isEn ? 'Preferred Affixes' : '偏好詞綴'} (${curAffixes.length}${isEn ? '' : '項'})：</span>${affixBadges}
        </div>

        <button id="ro-h-open-items-modal-btn" class="ro-h-btn-test" style="background: rgba(168, 85, 247, 0.25); border: 1px solid #a855f7; color: #c084fc; font-weight: 700; padding: 7px 10px; font-size: 12px; cursor: pointer; border-radius: 6px; box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);">
          ${btnItemsText}
        </button>
        <div style="font-size: 11px; color: #cbd5e1; line-height: 1.5; background: rgba(0,0,0,0.25); padding: 5px 8px; border-radius: 4px;">
          <span style="color: #c084fc; font-weight: 600;">🎯 ${isEn ? 'Item Focus' : '道具專注'} (${curItemFocus.length}${isEn ? '' : '個'})：</span>${itemFocusNames || noneText}<br>
          <span style="color: #f87171; font-weight: 600;">🚫 ${isEn ? 'Item Banish' : '道具放逐'} (${curItemBanish.length}${isEn ? '' : '個'})：</span>${itemBanishNames || noneText}
        </div>
      </div>
    `;

    const openBtn = document.getElementById('ro-h-open-skills-modal-btn');
    if (openBtn) {
      openBtn.onclick = openSkillsModal;
    }
    const openItemsBtn = document.getElementById('ro-h-open-items-modal-btn');
    if (openItemsBtn) {
      openItemsBtn.onclick = openItemsModal;
    }
  }

  // ==========================================
  // 9. 事件監聽 (切換分頁快速自動解除暫停)
  // ==========================================
  document.addEventListener('visibilitychange', () => {
    if (config.autoResume && isVisible('pause')) {
      handlePause();
    }
  });

  window.addEventListener('blur', () => {
    if (config.autoResume) {
      setTimeout(handlePause, 150);
    }
  });

  // ==========================================
  // 10. 暴露主控台工具 (Console Tools)
  // ==========================================
  window.RO_HELPER = {
    testPick: manualTestPick,
    selectCard: selectBestCardIndex,
    getRarity: getCardRarity,
    resume: handlePause,
    pickLobby: handleLobbyPicker,
    findFocus: findFocusButton,
    findBanish: findBanishButton,
    getState: detectGameState,
    openSkills: openSkillsModal,
    openItems: openItemsModal,
    items: RUN_ITEMS_DATABASE,
    selectStage: (stageId) => {
      const target = STAGES_CONFIG.find(s => s.id === stageId);
      if (!target) {
        console.warn(`[RO Helper] 未知關卡 ID: ${stageId}，可用 ID:`, STAGES_CONFIG.map(s => s.id));
        return false;
      }
      config.targetStage = stageId;
      config.autoFestival = (stageId === 'louyang');
      saveConfig();
      const stageSel = document.getElementById('ro-h-stage');
      if (stageSel) stageSel.value = stageId;
      const festCb = document.getElementById('ro-h-festival');
      if (festCb) festCb.checked = config.autoFestival;
      console.log(`[RO Helper] 已切換目標關卡為: ${target.name}`);
      return true;
    },
    show: () => {
      config.minimized = false;
      createFloatingPanel();
      openSkillsModal();
    },
    openHistory: openHistoryModal,
    getHistory: () => pickHistory,
    clearHistory: clearPickHistory,
    config: config,
    jobs: JOB_DATABASE,
    stages: STAGES_CONFIG,
    save: saveConfig
  };

  // ==========================================
  // 11. 啟動程序 (Bootstrap)
  // ==========================================
  function init() {
    console.log(`%c[RO Survivors Helper v${SCRIPT_VERSION}] 載入成功 (預設待命未啟動)！`, 'color: #10b981; font-weight: bold;');
    
    const startHelperUI = () => {
      createFloatingPanel();
      // 首次載入或未確認過技能時，自動彈出技能專注與放逐設定視窗供玩家即時勾選
      if (!config.skillsConfigured) {
        setTimeout(openSkillsModal, 500);
      }
    };

    if (document.body) {
      startHelperUI();
    } else {
      window.addEventListener('DOMContentLoaded', startHelperUI);
    }

    setInterval(mainLoop, 320);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('ro-helper-skills-modal');
      if (modal && modal.style.display !== 'none') {
        closeSkillsModal();
      }
      const itemsModal = document.getElementById('ro-helper-items-modal');
      if (itemsModal && itemsModal.style.display !== 'none') {
        closeItemsModal();
      }
      const diffModal = document.getElementById('ro-helper-difficulty-modal');
      if (diffModal && diffModal.style.display !== 'none') {
        closeDifficultyModal();
      }
      const histModal = document.getElementById('ro-helper-history-modal');
      if (histModal && histModal.style.display !== 'none') {
        closeHistoryModal();
      }
    }
  });

  init();

})();
