// --- SAT domains and subdomains ---
const DOMAINS = [
  {
    id: "rw",
    name: "Reading & Writing",
    domains: [
      {
        id: "info_ideas",
        name: "Information and Ideas",
        weight: "26%",
        subdomains: [
          { id: "central_ideas", name: "Central Ideas and Details" },
          { id: "coe_quant", name: "Command of Evidence: Quantitative" },
          { id: "coe_text", name: "Command of Evidence: Textual" },
          { id: "inference", name: "Inference" }
        ]
      },
      {
        id: "craft_structure",
        name: "Craft and Structure",
        weight: "28%",
        subdomains: [
          { id: "cross_text", name: "Cross-Text Connections" },
          { id: "text_structure", name: "Text Structure and Purpose" },
          { id: "words_context", name: "Words in Context" }
        ]
      },
      {
        id: "expression_ideas",
        name: "Expression of Ideas",
        weight: "20%",
        subdomains: [
          { id: "rhet_synthesis", name: "Rhetorical Synthesis" },
          { id: "transitions", name: "Transitions" }
        ]
      },
      {
        id: "standard_english",
        name: "Standard English Conventions",
        weight: "26%",
        subdomains: [
          { id: "boundaries", name: "Boundaries" },
          { id: "form_structure", name: "Form, Structure, Sense" }
        ]
      }
    ]
  },
  {
    id: "math",
    name: "Math",
    domains: [
      {
        id: "algebra",
        name: "Algebra",
        weight: "35%",
        subdomains: [
          { id: "lin_eq_1", name: "Linear equations in 1 variable" },
          { id: "lin_eq_2", name: "Linear equations in 2 variables" },
          { id: "lin_functions", name: "Linear functions" },
          { id: "systems_2", name: "Systems of 2 linear equations in 2 variables" },
          { id: "lin_ineq", name: "Linear inequalities in 1 or 2 variables" }
        ]
      },
      {
        id: "advanced_math",
        name: "Advanced Math",
        weight: "35%",
        subdomains: [
          { id: "equiv_expr", name: "Equivalent expressions" },
          { id: "nonlin_eq", name: "Nonlinear equations in 1 variable and systems of equations in 2 variables" },
          { id: "nonlin_func", name: "Nonlinear functions" }
        ]
      },
      {
        id: "data_analysis",
        name: "Problem-Solving and Data Analysis",
        weight: "15%",
        subdomains: [
          { id: "ratios_rates", name: "Ratios, rates, proportional relationships, and units" },
          { id: "percentages", name: "Percentages" },
          { id: "one_var_data", name: "One-variable data: distributions and measures of center and spread" },
          { id: "two_var_data", name: "Two-variable data: models and scatterplots" },
          { id: "probability", name: "Probability and conditional probability" },
          { id: "inference_stats", name: "Inference from sample statistics and margin of error" },
          { id: "eval_claims", name: "Evaluating statistical claims: observational studies and experiments" }
        ]
      },
      {
        id: "geometry_trig",
        name: "Geometry and Trigonometry",
        weight: "15%",
        subdomains: [
          { id: "area_volume", name: "Area and volume formulas" },
          { id: "lines_angles", name: "Lines, angles, and triangles" },
          { id: "right_trig", name: "Right triangles and trigonometry" },
          { id: "circles", name: "Circles" }
        ]
      }
    ]
  }
];

// --- Hardcoded SAT-style questions (sample set) ---
const QUESTION_BANK = [
  {
    q: "If f(x) = 3x - 2, what is f(5)?",
    choices: ["9", "13", "15", "17"],
    answer: 1,
    subjectId: "math",
    domainId: "algebra",
    subdomainId: "lin_functions"
  },
  {
    q: "Simplify: (2x + 3)(x - 4)",
    choices: ["2x^2 - 5x - 12", "2x^2 - 8x + 3", "2x^2 + 5x - 12", "2x^2 - 5x + 12"],
    answer: 0,
    subjectId: "math",
    domainId: "advanced_math",
    subdomainId: "equiv_expr"
  },
  {
    q: "If 3x + 7 = 22, what is x?",
    choices: ["3", "5", "7", "9"],
    answer: 1,
    subjectId: "math",
    domainId: "algebra",
    subdomainId: "lin_eq_1"
  },
  {
    q: "A line passes through (2,3) and (6,11). What is the slope?",
    choices: ["1", "2", "3", "4"],
    answer: 1,
    subjectId: "math",
    domainId: "algebra",
    subdomainId: "lin_functions"
  },
  {
    q: "If 5a - 2 = 3a + 10, what is a?",
    choices: ["4", "5", "6", "7"],
    answer: 2,
    subjectId: "math",
    domainId: "algebra",
    subdomainId: "lin_eq_1"
  },
  {
    q: "Which is equivalent to 4^(1/2)?",
    choices: ["1", "2", "4", "8"],
    answer: 1,
    subjectId: "math",
    domainId: "advanced_math",
    subdomainId: "equiv_expr"
  },
  {
    q: "If x^2 = 49, then x could be",
    choices: ["7 only", "-7 only", "7 or -7", "0"],
    answer: 2,
    subjectId: "math",
    domainId: "advanced_math",
    subdomainId: "nonlin_eq"
  },
  {
    q: "Simplify: 3(2x - 5) + 4x",
    choices: ["10x - 15", "6x - 15", "10x + 15", "6x + 15"],
    answer: 0,
    subjectId: "math",
    domainId: "advanced_math",
    subdomainId: "equiv_expr"
  },
  {
    q: "If 2x/3 = 10, what is x?",
    choices: ["10", "12", "15", "20"],
    answer: 2,
    subjectId: "math",
    domainId: "algebra",
    subdomainId: "lin_eq_1"
  },
  {
    q: "If g(x) = x^2 + 2x, what is g(3)?",
    choices: ["9", "11", "15", "18"],
    answer: 2,
    subjectId: "math",
    domainId: "advanced_math",
    subdomainId: "nonlin_func"
  },
  {
    q: "In the sentence, 'The scientist noted that the results were unexpected,' the word 'noted' most nearly means",
    choices: ["ignored", "observed", "invented", "doubted"],
    answer: 1,
    subjectId: "rw",
    domainId: "craft_structure",
    subdomainId: "words_context"
  },
  {
    q: "Which choice best completes the sentence? 'The team was exhausted; ___, they finished the project on time.'",
    choices: ["therefore", "however", "because", "for instance"],
    answer: 1,
    subjectId: "rw",
    domainId: "expression_ideas",
    subdomainId: "transitions"
  },
  {
    q: "Which option provides the best evidence for the claim? Claim: 'The study's sample size was large.'",
    choices: ["The study surveyed 2,000 participants.", "The study used a new method.", "The study focused on one city.", "The study lasted two weeks."],
    answer: 0,
    subjectId: "rw",
    domainId: "info_ideas",
    subdomainId: "coe_quant"
  }
];

// --- State ---
let playerHP = 100;
let enemyHP = 100;
let level = 1;
let xp = 0;
let questionIndex = 0;
let correctCount = 0;

let questions = [];
let startTime = null;
let timerInterval = null;
let currentFilter = { subjectId: "all", domainId: "all", subdomainId: "all" };
let progress = {};
let streakCount = 0;
let totalDaysPlayed = 0;
let lastActiveDate = null;
let battleMode = "bot";
let friendIcon = "wizard";
let avatar = {
  gender: "neutral",
  skin: "#f2c9a0",
  hair: "#3b2f2f",
  outfit: "#8a7bff",
  accessory: "none",
  pet: "owl",
  petColor: "#7cf9a2"
};

const SPELLS = ["Spark", "Fireball", "Ice Beam"];
const PETS = {
  owl: "Owl",
  cat: "Cat",
  dog: "Dog",
  dragon: "Dragon",
  fox: "Fox",
  turtle: "Turtle"
};
const FRIEND_ICONS = {
  wizard: "🧙",
  knight: "🗡️",
  archer: "🏹",
  alien: "👽",
  robot: "🤖",
  cat: "🐱"
};

// --- Elements ---
const playerHPFill = document.getElementById("playerHPFill");
const enemyHPFill = document.getElementById("enemyHPFill");
const playerHPText = document.getElementById("playerHPText");
const enemyHPText = document.getElementById("enemyHPText");

const levelText = document.getElementById("levelText");
const xpText = document.getElementById("xpText");
const spellText = document.getElementById("spellText");
const timeText = document.getElementById("timeText");
const streakText = document.getElementById("streakText");
const consistencyText = document.getElementById("consistencyText");

const questionText = document.getElementById("questionText");
const answersDiv = document.getElementById("answers");
const message = document.getElementById("message");

const endScreen = document.getElementById("endScreen");
const endTitle = document.getElementById("endTitle");
const endStats = document.getElementById("endStats");
const playAgainBtn = document.getElementById("playAgainBtn");
const levelUpPopup = document.getElementById("levelUpPopup");

const copyLinkBtn = document.getElementById("copyLinkBtn");
const confettiCanvas = document.getElementById("confettiCanvas");
const ctx = confettiCanvas.getContext("2d");
const landing = document.getElementById("landing");
const gameView = document.getElementById("gameView");
const startBtn = document.getElementById("startBtn");
const startBtnHero = document.getElementById("startBtnHero");
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
const signOutBtn = document.getElementById("signOutBtn");
const userLabel = document.getElementById("userLabel");
const domainList = document.getElementById("domainList");
const subjectSelect = document.getElementById("subjectSelect");
const domainSelect = document.getElementById("domainSelect");
const subdomainSelect = document.getElementById("subdomainSelect");
const battleModeSelect = document.getElementById("battleModeSelect");
const startRoundBtn = document.getElementById("startRoundBtn");
const selectionStats = document.getElementById("selectionStats");
const progressList = document.getElementById("progressList");
const playerAvatar = document.getElementById("playerAvatar");
const avatarPreview = document.getElementById("avatarPreview");
const genderSelect = document.getElementById("genderSelect");
const skinColor = document.getElementById("skinColor");
const hairColor = document.getElementById("hairColor");
const outfitColor = document.getElementById("outfitColor");
const accessorySelect = document.getElementById("accessorySelect");
const petSelect = document.getElementById("petSelect");
const petColor = document.getElementById("petColor");
const playerPet = document.getElementById("playerPet");
const playerPetName = document.getElementById("playerPetName");
const petPreview = document.getElementById("petPreview");
const petPreviewName = document.getElementById("petPreviewName");
const friendIconSelect = document.getElementById("friendIconSelect");
const enemyIcon = document.getElementById("enemyIcon");
const enemyLabel = document.getElementById("enemyLabel");
const dragon = document.getElementById("dragon");
const dragonFire = document.getElementById("dragonFire");
const battleArena = document.getElementById("battleArena");
const swordSlash = document.getElementById("swordSlash");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
const aiInput = document.getElementById("aiInput");
const aiHintBtn = document.getElementById("aiHintBtn");
const aiExplainBtn = document.getElementById("aiExplainBtn");
const aiResponse = document.getElementById("aiResponse");
const aiPanel = document.getElementById("aiPanel");
const aiToggleBtn = document.getElementById("aiToggleBtn");
const aiCloseBtn = document.getElementById("aiCloseBtn");
const aiDragHandle = document.getElementById("aiDragHandle");

// --- Helpers ---
function clamp(val, min, max) { return Math.max(min, Math.min(max, val)); }

function updateBars() {
  playerHP = clamp(playerHP, 0, 100);
  enemyHP = clamp(enemyHP, 0, 100);
  if (!playerHPFill || !enemyHPFill || !playerHPText || !enemyHPText) return;
  playerHPFill.style.width = `${playerHP}%`;
  enemyHPFill.style.width = `${enemyHP}%`;
  playerHPText.textContent = `HP ${playerHP}`;
  enemyHPText.textContent = `HP ${enemyHP}`;
}

function updateStatus() {
  if (levelText) levelText.textContent = level;
  if (xpText) xpText.textContent = xp;
  if (spellText) spellText.textContent = SPELLS[Math.min(level - 1, SPELLS.length - 1)];
  if (streakText) streakText.textContent = streakCount;
  if (consistencyText) consistencyText.textContent = totalDaysPlayed;
}

function applyAvatarToElement(el) {
  if (!el) return;
  el.style.setProperty("--skin", avatar.skin);
  el.style.setProperty("--hair", avatar.hair);
  el.style.setProperty("--outfit", avatar.outfit);
  el.classList.remove("gender-boy", "gender-girl", "gender-neutral", "hat", "glasses", "crown");
  el.classList.add(`gender-${avatar.gender}`);
  if (avatar.accessory !== "none") {
    el.classList.add(avatar.accessory);
  }
}

function applyPetToElement(el) {
  if (!el) return;
  const petType = avatar.pet || "owl";
  el.className = `pet ${petType}`;
  if (petType === "none") {
    el.classList.add("none");
  }
  el.style.setProperty("--pet", avatar.petColor || "#7cf9a2");
}

function renderAvatar() {
  if (genderSelect) genderSelect.value = avatar.gender;
  if (skinColor) skinColor.value = avatar.skin;
  if (hairColor) hairColor.value = avatar.hair;
  if (outfitColor) outfitColor.value = avatar.outfit;
  if (accessorySelect) accessorySelect.value = avatar.accessory;
  if (petSelect) petSelect.value = avatar.pet || "owl";
  if (petColor) petColor.value = avatar.petColor || "#7cf9a2";
  applyAvatarToElement(playerAvatar);
  applyAvatarToElement(avatarPreview);
  applyPetToElement(playerPet);
  applyPetToElement(petPreview);
  const petName = PETS[avatar.pet] || "Pet";
  if (playerPetName) playerPetName.textContent = petName;
  if (petPreviewName) petPreviewName.textContent = petName;
}

function resolveBattleMode(mode) {
  if (mode === "dragon" || mode === "friend" || mode === "bot") return mode;
  return "bot";
}

function updateEnemyIcon() {
  if (!enemyIcon) return;
  if (battleMode === "friend") {
    enemyIcon.textContent = FRIEND_ICONS[friendIcon] || FRIEND_ICONS.wizard;
  } else {
    enemyIcon.textContent = "🤖";
  }
}

function applyBattleMode() {
  battleMode = resolveBattleMode(battleMode);
  if (battleModeSelect) battleModeSelect.value = battleMode;
  if (friendIconSelect) {
    friendIconSelect.value = friendIcon;
    friendIconSelect.disabled = battleMode !== "friend";
  }
  if (enemyLabel) {
    enemyLabel.textContent = battleMode === "dragon" ? "Dragon" : battleMode === "friend" ? "Friend" : "Bot";
  }
  if (enemyIcon) enemyIcon.classList.toggle("hidden", battleMode === "dragon");
  if (dragon) dragon.classList.toggle("hidden", battleMode !== "dragon");
  updateEnemyIcon();
}

function setActiveTab(tabId) {
  tabPanels.forEach(panel => panel.classList.toggle("hidden", panel.id !== tabId));
  tabButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tabId));
}

function updateAvatarField(key, value) {
  avatar = { ...avatar, [key]: value };
  renderAvatar();
  saveProgress();
}

function showMessage(text, type) {
  if (!message) return;
  message.textContent = text;
  message.className = `message ${type || ""}`;
}

function showLevelUp() {
  if (!levelUpPopup) return;
  levelUpPopup.classList.remove("hidden");
  setTimeout(() => levelUpPopup.classList.add("hidden"), 900);
}

let currentUser = null;

const USERS_KEY = "spellsat_users";
const CURRENT_USER_KEY = "spellsat_current_user";

function loadUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function primaryProgressKey() {
  if (!currentUser) return "spellsat_progress_guest";
  return `spellsat_progress_${encodeURIComponent(currentUser)}`;
}

function legacyProgressKey() {
  return currentUser ? `spellsat_progress_${currentUser}` : "spellsat_progress_guest";
}

function progressKeyList() {
  const keys = [primaryProgressKey()];
  const legacy = legacyProgressKey();
  if (legacy !== keys[0]) keys.push(legacy);
  return keys;
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateStreakOnSessionStart() {
  const today = getDateKey();
  if (!lastActiveDate) {
    lastActiveDate = today;
    streakCount = 1;
    totalDaysPlayed = 1;
    return;
  }

  if (lastActiveDate === today) return;

  const lastDate = new Date(`${lastActiveDate}T00:00:00`);
  if (Number.isNaN(lastDate.getTime())) {
    lastActiveDate = today;
    streakCount = 1;
    totalDaysPlayed = 1;
    return;
  }

  const diffDays = Math.floor((new Date(`${today}T00:00:00`) - lastDate) / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    streakCount += 1;
  } else if (diffDays > 1) {
    streakCount = 1;
  } else {
    lastActiveDate = today;
    return;
  }

  totalDaysPlayed += 1;
  lastActiveDate = today;
}

function setUser(name) {
  currentUser = name || null;
  if (userLabel) userLabel.textContent = currentUser ? `Hi, ${currentUser}` : "Guest";
  if (signInBtn && signOutBtn && signUpBtn) {
    signInBtn.classList.toggle("hidden", !!currentUser);
    signUpBtn.classList.toggle("hidden", !!currentUser);
    signOutBtn.classList.toggle("hidden", !currentUser);
  }
  localStorage.setItem(CURRENT_USER_KEY, currentUser || "");
  loadProgress();
  updateStatus();
  updateSelectionStats();
  renderProgress();
  renderAvatar();
  applyBattleMode();
}

function signInFlow() {
  const users = loadUsers();
  const username = (prompt("Enter username") || "").trim();
  if (!username) return;

  if (!users[username]) {
    showMessage("No account found. Use Sign Up.", "ouch");
    return;
  }

  const pin = (prompt("Enter PIN") || "").trim();
  if (users[username].pin && users[username].pin !== pin) {
    showMessage("Incorrect PIN.", "ouch");
    return;
  }
  setUser(username);
}

function signUpFlow() {
  const users = loadUsers();
  const username = (prompt("Create a username") || "").trim();
  if (!username) return;
  if (users[username]) {
    showMessage("Username already exists.", "ouch");
    return;
  }
  const pin = (prompt("Create a PIN (optional)") || "").trim();
  users[username] = { pin };
  saveUsers(users);
  setUser(username);
}

function signOutFlow() {
  saveProgress();
  setUser(null);
}

function saveProgress() {
  const data = {
    level,
    xp,
    progress,
    streakCount,
    totalDaysPlayed,
    lastActiveDate,
    avatar,
    battleMode,
    friendIcon
  };
  localStorage.setItem(primaryProgressKey(), JSON.stringify(data));
}

function loadProgress() {
  const keys = progressKeyList();
  let raw = null;
  for (const key of keys) {
    raw = localStorage.getItem(key);
    if (raw) break;
  }
  if (!raw) {
    level = 1;
    xp = 0;
    progress = {};
    streakCount = 0;
    totalDaysPlayed = 0;
    lastActiveDate = null;
    avatar = {
      gender: "neutral",
      skin: "#f2c9a0",
      hair: "#3b2f2f",
      outfit: "#8a7bff",
      accessory: "none",
      pet: "owl",
      petColor: "#7cf9a2"
    };
    battleMode = "bot";
    friendIcon = "wizard";
    return;
  }
  try {
    const data = JSON.parse(raw);
    if (typeof data.level === "number") level = data.level;
    if (typeof data.xp === "number") xp = data.xp;
    if (data.progress && typeof data.progress === "object") progress = data.progress;
    if (typeof data.streakCount === "number") streakCount = data.streakCount;
    if (typeof data.totalDaysPlayed === "number") totalDaysPlayed = data.totalDaysPlayed;
    if (typeof data.lastActiveDate === "string") lastActiveDate = data.lastActiveDate;
    if (data.avatar && typeof data.avatar === "object") {
      avatar = { ...avatar, ...data.avatar };
    }
    if (typeof data.battleMode === "string") battleMode = resolveBattleMode(data.battleMode);
    if (typeof data.friendIcon === "string") friendIcon = data.friendIcon;
  } catch {
    level = 1;
    xp = 0;
    progress = {};
    streakCount = 0;
    totalDaysPlayed = 0;
    lastActiveDate = null;
    avatar = {
      gender: "neutral",
      skin: "#f2c9a0",
      hair: "#3b2f2f",
      outfit: "#8a7bff",
      accessory: "none",
      pet: "owl",
      petColor: "#7cf9a2"
    };
    battleMode = "bot";
    friendIcon = "wizard";
  }
}

function endGame(result) {
  clearInterval(timerInterval);
  const timeTaken = formatTime((Date.now() - startTime) / 1000);
  if (endTitle) endTitle.textContent = result === "win" ? "You Win 🎉" : "You Lose 😭";
  if (endStats) endStats.textContent = `Score: ${correctCount}/${questions.length} • Time: ${timeTaken}`;
  if (endScreen) endScreen.classList.remove("hidden");
  if (answersDiv) answersDiv.innerHTML = "";
}

function formatTime(seconds) {
  const s = Math.floor(seconds);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

// --- Questions ---
function seedFromURL() {
  const url = new URL(window.location.href);
  const seed = url.searchParams.get("seed");
  return seed ? seed : null;
}

function getModeFromURL() {
  const url = new URL(window.location.href);
  return url.searchParams.get("mode");
}

function getFriendIconFromURL() {
  const url = new URL(window.location.href);
  return url.searchParams.get("friend");
}

// Simple seeded shuffle
function mulberry32(a) {
  let t = a;
  return function() {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function buildQuestionSet(filter = { subjectId: "all", domainId: "all", subdomainId: "all" }) {
  const seed = seedFromURL();
  let base = [...QUESTION_BANK];

  base = base.filter(q => {
    if (filter.subjectId !== "all" && q.subjectId !== filter.subjectId) return false;
    if (filter.domainId !== "all" && q.domainId !== filter.domainId) return false;
    if (filter.subdomainId !== "all" && q.subdomainId !== filter.subdomainId) return false;
    return true;
  });

  if (!seed) return base;

  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  const rng = mulberry32(hash);
  for (let i = base.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [base[i], base[j]] = [base[j], base[i]];
  }
  return base;
}

function renderQuestion() {
  if (playerHP <= 0) return endGame("lose");
  if (enemyHP <= 0) return endGame("win");
  if (!questionText || !answersDiv) return;

  const q = questions[questionIndex % questions.length];
  if (!q) {
    questionText.textContent = "No questions yet for this selection.";
    answersDiv.innerHTML = "";
    if (aiResponse) aiResponse.textContent = "No question loaded yet.";
    return;
  }
  questionText.textContent = q.q;
  answersDiv.innerHTML = "";
  if (aiResponse) aiResponse.textContent = "";

  q.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = choice;
    btn.addEventListener("click", () => handleAnswer(idx));
    answersDiv.appendChild(btn);
  });
}

function handleAnswer(idx) {
  const q = questions[questionIndex % questions.length];
  if (!q) return;
  recordProgress(q, idx === q.answer);
  if (idx === q.answer) {
    enemyHP -= 20;
    xp += 10;
    correctCount++;
    showMessage("⚡ Attack!", "attack");
    if (battleMode === "dragon" && battleArena) {
      battleArena.classList.add("sword-attack");
      setTimeout(() => battleArena.classList.remove("sword-attack"), 500);
    }
    if (xp >= 50) {
      level += 1;
      xp = xp - 50;
      showLevelUp();
      saveProgress();
      shootConfetti();
    }
  } else {
    playerHP -= 10;
    showMessage("💥 Ouch!", "ouch");
    if (battleMode === "dragon" && dragon) {
      dragon.classList.add("fire");
      setTimeout(() => dragon.classList.remove("fire"), 600);
    }
    const battle = document.querySelector(".battle");
    if (battle) {
      battle.classList.add("shake");
      setTimeout(() => battle.classList.remove("shake"), 250);
    }
  }
  updateBars();
  updateStatus();
  updateSelectionStats();
  renderProgress();
  questionIndex += 1;
  renderQuestion();
}

// --- Confetti (tiny) ---
function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);

let confettiPieces = [];
function shootConfetti() {
  const colors = ["#ff8ad4", "#6b72ff", "#7cf9a2", "#ffd166"];
  for (let i = 0; i < 80; i++) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: -10,
      r: 3 + Math.random() * 4,
      c: colors[Math.floor(Math.random() * colors.length)],
      v: 2 + Math.random() * 3,
      a: Math.random() * Math.PI
    });
  }
}

function confettiLoop() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces = confettiPieces.filter(p => p.y < confettiCanvas.height + 10);
  confettiPieces.forEach(p => {
    p.y += p.v;
    p.x += Math.sin(p.a) * 0.5;
    p.a += 0.02;
    ctx.fillStyle = p.c;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(confettiLoop);
}

// --- Timer ---
function startTimer() {
  if (!timeText) return;
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    timeText.textContent = formatTime(elapsed);
  }, 250);
}

function enterGame() {
  if (landing) landing.classList.add("hidden");
  if (gameView) gameView.classList.remove("hidden");
  if (copyLinkBtn) copyLinkBtn.classList.remove("hidden");
  startGame();
}

// --- Copy link ---
copyLinkBtn?.addEventListener("click", async () => {
  const url = new URL(window.location.href);
  if (!url.searchParams.get("seed")) {
    const seed = Math.floor(Math.random() * 999999).toString();
    url.searchParams.set("seed", seed);
  }
  url.searchParams.set("mode", battleMode);
  if (battleMode === "friend") {
    url.searchParams.set("friend", friendIcon);
  } else {
    url.searchParams.delete("friend");
  }
  try {
    await navigator.clipboard.writeText(url.toString());
    showMessage("Challenge link copied!", "attack");
  } catch {
    showMessage("Copy failed — try manually.", "ouch");
  }
});

// --- Restart ---
playAgainBtn?.addEventListener("click", () => {
  resetRound();
  startGame();
});

startBtn?.addEventListener("click", enterGame);
startBtnHero?.addEventListener("click", enterGame);
signInBtn?.addEventListener("click", signInFlow);
signUpBtn?.addEventListener("click", signUpFlow);
signOutBtn?.addEventListener("click", signOutFlow);
genderSelect?.addEventListener("change", (event) => updateAvatarField("gender", event.target.value));
skinColor?.addEventListener("input", (event) => updateAvatarField("skin", event.target.value));
hairColor?.addEventListener("input", (event) => updateAvatarField("hair", event.target.value));
outfitColor?.addEventListener("input", (event) => updateAvatarField("outfit", event.target.value));
accessorySelect?.addEventListener("change", (event) => updateAvatarField("accessory", event.target.value));
petSelect?.addEventListener("change", () => updateAvatarField("pet", petSelect.value));
petColor?.addEventListener("input", (event) => updateAvatarField("petColor", event.target.value));
battleModeSelect?.addEventListener("change", () => {
  battleMode = resolveBattleMode(battleModeSelect.value);
  applyBattleMode();
  saveProgress();
});
friendIconSelect?.addEventListener("change", () => {
  friendIcon = friendIconSelect.value;
  updateEnemyIcon();
  saveProgress();
});
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    setActiveTab(btn.dataset.tab);
  });
});
startRoundBtn?.addEventListener("click", () => {
  resetRound();
  startGame();
});

aiHintBtn?.addEventListener("click", () => {
  const q = questions[questionIndex % questions.length];
  const userText = aiInput ? aiInput.value.trim() : "";
  const response = buildAiResponse(q, "hint", userText);
  if (aiResponse) aiResponse.textContent = response;
});

aiExplainBtn?.addEventListener("click", () => {
  const q = questions[questionIndex % questions.length];
  const userText = aiInput ? aiInput.value.trim() : "";
  const response = buildAiResponse(q, "explain", userText);
  if (aiResponse) aiResponse.textContent = response;
});

aiToggleBtn?.addEventListener("click", () => {
  if (!aiPanel) return;
  aiPanel.classList.toggle("hidden");
  saveAiPanelState();
});

aiCloseBtn?.addEventListener("click", () => {
  if (!aiPanel) return;
  aiPanel.classList.add("hidden");
  saveAiPanelState();
});

// --- Init ---
function startGame() {
  resizeCanvas();
  updateStreakOnSessionStart();
  saveProgress();
  updateBars();
  updateStatus();
  questions = buildQuestionSet(currentFilter);
  updateSelectionStats();
  renderProgress();
  renderQuestion();
  clearInterval(timerInterval);
  startTimer();
}

const lastUser = localStorage.getItem(CURRENT_USER_KEY);
setUser(lastUser || null);
const modeFromURL = getModeFromURL();
const friendIconFromURL = getFriendIconFromURL();
if (modeFromURL) battleMode = resolveBattleMode(modeFromURL);
if (friendIconFromURL && FRIEND_ICONS[friendIconFromURL]) friendIcon = friendIconFromURL;
resizeCanvas();
updateBars();
updateStatus();
setupDomainList();
setupSelectors();
updateSelectionStats();
renderProgress();
applyBattleMode();
setActiveTab("battleTab");
loadAiPanelState();
confettiLoop();

// --- Domain + selection UI ---
function setupDomainList() {
  if (!domainList) return;
  domainList.innerHTML = "";
  DOMAINS.forEach(subject => {
    subject.domains.forEach(domain => {
      const card = document.createElement("div");
      card.className = "domain-card";
      const title = document.createElement("div");
      title.className = "domain-title";
      title.textContent = `${subject.name}: ${domain.name} (${domain.weight})`;
      const subList = document.createElement("div");
      subList.className = "subdomain-list";
      domain.subdomains.forEach(sub => {
        const pill = document.createElement("div");
        pill.className = "subdomain-pill";
        pill.textContent = sub.name;
        subList.appendChild(pill);
      });
      card.appendChild(title);
      card.appendChild(subList);
      domainList.appendChild(card);
    });
  });
}

function setupSelectors() {
  if (!subjectSelect || !domainSelect || !subdomainSelect) return;
  subjectSelect.innerHTML = "";
  subjectSelect.add(new Option("All Sections", "all"));
  DOMAINS.forEach(subject => {
    subjectSelect.add(new Option(subject.name, subject.id));
  });

  subjectSelect.addEventListener("change", () => {
    currentFilter.subjectId = subjectSelect.value;
    currentFilter.domainId = "all";
    currentFilter.subdomainId = "all";
    populateDomainOptions();
    populateSubdomainOptions();
    updateSelectionStats();
    renderProgress();
  });

  domainSelect.addEventListener("change", () => {
    currentFilter.domainId = domainSelect.value;
    currentFilter.subdomainId = "all";
    populateSubdomainOptions();
    updateSelectionStats();
    renderProgress();
  });

  subdomainSelect.addEventListener("change", () => {
    currentFilter.subdomainId = subdomainSelect.value;
    updateSelectionStats();
    renderProgress();
  });

  populateDomainOptions();
  populateSubdomainOptions();
}

function populateDomainOptions() {
  if (!domainSelect) return;
  domainSelect.innerHTML = "";
  domainSelect.add(new Option("All Domains", "all"));
  const subject = DOMAINS.find(s => s.id === currentFilter.subjectId);
  const domains = subject ? subject.domains : DOMAINS.flatMap(s => s.domains);
  domains.forEach(domain => domainSelect.add(new Option(domain.name, domain.id)));
}

function populateSubdomainOptions() {
  if (!subdomainSelect) return;
  subdomainSelect.innerHTML = "";
  subdomainSelect.add(new Option("All Subdomains", "all"));
  const subject = DOMAINS.find(s => s.id === currentFilter.subjectId);
  let domains = subject ? subject.domains : DOMAINS.flatMap(s => s.domains);
  if (currentFilter.domainId !== "all") {
    domains = domains.filter(d => d.id === currentFilter.domainId);
  }
  domains.flatMap(d => d.subdomains).forEach(sub => {
    subdomainSelect.add(new Option(sub.name, sub.id));
  });
}

function resetRound() {
  playerHP = 100;
  enemyHP = 100;
  xp = 0;
  questionIndex = 0;
  correctCount = 0;
  endScreen.classList.add("hidden");
  showMessage("", "");
}

function recordProgress(question, isCorrect) {
  if (!question.subdomainId) return;
  if (!progress[question.subdomainId]) {
    progress[question.subdomainId] = { attempts: 0, correct: 0 };
  }
  progress[question.subdomainId].attempts += 1;
  if (isCorrect) progress[question.subdomainId].correct += 1;
  saveProgress();
}

function getStatsForSubdomain(subId) {
  const stats = progress[subId] || { attempts: 0, correct: 0 };
  const accuracy = stats.attempts === 0 ? 0 : Math.round((stats.correct / stats.attempts) * 100);
  return { ...stats, accuracy };
}

function updateSelectionStats() {
  if (!selectionStats) return;
  const filtered = QUESTION_BANK.filter(q => {
    if (currentFilter.subjectId !== "all" && q.subjectId !== currentFilter.subjectId) return false;
    if (currentFilter.domainId !== "all" && q.domainId !== currentFilter.domainId) return false;
    if (currentFilter.subdomainId !== "all" && q.subdomainId !== currentFilter.subdomainId) return false;
    return true;
  });
  let attempts = 0;
  let correct = 0;
  filtered.forEach(q => {
    const stats = progress[q.subdomainId];
    if (stats) {
      attempts += stats.attempts;
      correct += stats.correct;
    }
  });
  const accuracy = attempts === 0 ? 0 : Math.round((correct / attempts) * 100);
  selectionStats.textContent = `Questions available: ${filtered.length} • Attempts: ${attempts} • Accuracy: ${accuracy}%`;
}

function renderProgress() {
  if (!progressList) return;
  progressList.innerHTML = "";
  DOMAINS.forEach(subject => {
    const subjectDomains = subject.domains.filter(domain => {
      if (currentFilter.subjectId !== "all" && subject.id !== currentFilter.subjectId) return false;
      if (currentFilter.domainId !== "all" && domain.id !== currentFilter.domainId) return false;
      return true;
    });
    subjectDomains.forEach(domain => {
      const wrapper = document.createElement("div");
      wrapper.className = "progress-domain";
      const title = document.createElement("div");
      title.className = "progress-domain-title";
      title.textContent = `${subject.name}: ${domain.name}`;
      wrapper.appendChild(title);
      domain.subdomains.forEach(sub => {
        if (currentFilter.subdomainId !== "all" && sub.id !== currentFilter.subdomainId) return;
        const stats = getStatsForSubdomain(sub.id);
        const item = document.createElement("div");
        item.className = "progress-item";
        item.textContent = `${sub.name} • ${stats.correct}/${stats.attempts} correct • ${stats.accuracy}%`;
        wrapper.appendChild(item);
      });
      progressList.appendChild(wrapper);
    });
  });
}

function buildAiResponse(question, mode, userText) {
  if (!question) return "Pick a question first, then ask for a hint.";
  const base = generateLocalHint(question, mode);
  if (!userText) return base;
  return `${base} (Your note: "${userText}")`;
}

function generateLocalHint(question, mode) {
  const isMath = question.subjectId === "math";
  const prompt = mode === "hint" ? "Hint:" : "Explanation:";
  if (isMath) {
    const steps = [
      "Identify the formula or relationship first.",
      "Try plugging in a value or simplifying step by step.",
      "Eliminate choices that don't match the simplified form."
    ];
    return `${prompt} ${steps.join(" ")}`;
  }
  const steps = [
    "Look for keywords that signal purpose or meaning.",
    "Eliminate choices that contradict the sentence or passage.",
    "Pick the option that best fits the author’s intent."
  ];
  return `${prompt} ${steps.join(" ")}`;
}

// --- AI panel drag + persistence ---
const AI_PANEL_KEY = "spellsat_ai_panel";
let isDraggingAi = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

function saveAiPanelState() {
  if (!aiPanel) return;
  const rect = aiPanel.getBoundingClientRect();
  const data = {
    open: !aiPanel.classList.contains("hidden"),
    x: Math.round(rect.left),
    y: Math.round(rect.top)
  };
  localStorage.setItem(AI_PANEL_KEY, JSON.stringify(data));
}

function loadAiPanelState() {
  if (!aiPanel) return;
  const raw = localStorage.getItem(AI_PANEL_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (data && typeof data.x === "number" && typeof data.y === "number") {
      aiPanel.style.left = `${data.x}px`;
      aiPanel.style.top = `${data.y}px`;
      aiPanel.style.right = "auto";
      aiPanel.style.bottom = "auto";
    }
    if (data && typeof data.open === "boolean") {
      aiPanel.classList.toggle("hidden", !data.open);
    }
  } catch {}
}

function clampAiPanel(x, y) {
  if (!aiPanel) return { x, y };
  const rect = aiPanel.getBoundingClientRect();
  const maxX = Math.max(0, window.innerWidth - rect.width);
  const maxY = Math.max(0, window.innerHeight - rect.height);
  return {
    x: Math.max(0, Math.min(x, maxX)),
    y: Math.max(0, Math.min(y, maxY))
  };
}

aiDragHandle?.addEventListener("mousedown", (event) => {
  if (!aiPanel) return;
  if (aiPanel.classList.contains("hidden")) return;
  isDraggingAi = true;
  const rect = aiPanel.getBoundingClientRect();
  dragOffsetX = event.clientX - rect.left;
  dragOffsetY = event.clientY - rect.top;
  aiPanel.style.right = "auto";
  aiPanel.style.bottom = "auto";
});

window.addEventListener("mousemove", (event) => {
  if (!isDraggingAi || !aiPanel) return;
  const targetX = event.clientX - dragOffsetX;
  const targetY = event.clientY - dragOffsetY;
  const { x, y } = clampAiPanel(targetX, targetY);
  aiPanel.style.left = `${x}px`;
  aiPanel.style.top = `${y}px`;
});

window.addEventListener("mouseup", () => {
  if (!isDraggingAi) return;
  isDraggingAi = false;
  saveAiPanelState();
});
