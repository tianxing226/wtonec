const LINKS = Object.freeze({
  github: "https://github.com/tianxing226/wtonec",
  xposed: "https://github.com/Xposed-Modules-Repo/dev.wtonec",
  docs: "https://github.com/tianxing226/wtonec/tree/main/docs",
  storage: "https://github.com/tianxing226/wtonec/blob/main/docs/STORAGE.md",
  samples: "https://github.com/tianxing226/wtonec/tree/main/examples/android-kotlin",
});

const SCREENS = Object.freeze({
  home: {
    src: "assets/wtonec-home.jpg",
    alt: "Wtonec 主页实机截图",
    eyebrow: "运行状态",
    title: "一眼确认模块与语音功能",
    description: "展示 LSPosed 激活状态、语音入口以及 TG、官网和项目链接。",
    accent: "#05A5FA",
    caption: "Wtonec 主页",
  },
  settings: {
    src: "assets/wtonec-settings.jpg",
    alt: "Wtonec 设置页实机截图",
    eyebrow: "DEX 与宿主",
    title: "配置与维护集中呈现",
    description: "宿主包、桌面入口、DEX 缓存与模块维护状态位于同一设置页。",
    accent: "#D3FFAF",
    caption: "Wtonec 设置页",
  },
  security: {
    src: "assets/wtonec-security.jpg",
    alt: "Wtonec 安全页实机截图",
    eyebrow: "安全框架",
    title: "计划能力保持透明",
    description: "页面明确标记当前为接口框架，模块、进程与数据风险扫描仍在开发计划中。",
    accent: "#FFD84D",
    caption: "Wtonec 安全页",
  },
  about: {
    src: "assets/wtonec-about.jpg",
    alt: "Wtonec 关于页实机截图",
    eyebrow: "构建身份",
    title: "版本与使用说明可追踪",
    description: "构建身份、变体、提交信息和完整使用步骤都可以在应用内核对。",
    accent: "#FF6747",
    caption: "Wtonec 关于页",
  },
});

document.querySelectorAll("[data-link]").forEach((link) => {
  const target = LINKS[link.dataset.link];
  if (target) link.href = target;
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");

function updateScrollState() {
  const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const ratio = Math.min(1, Math.max(0, window.scrollY / scrollable));
  progress.style.width = `${ratio * 100}%`;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState, { passive: true });

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -48px" });
  revealItems.forEach((item) => revealObserver.observe(item));
}

const workbench = document.querySelector("[data-workbench]");
const modeButtons = [...document.querySelectorAll("[data-mode]")];
const modeStatus = document.querySelector("[data-mode-status]");
const voiceText = document.querySelector("[data-voice-text]");
const charCount = document.querySelector("[data-char-count]");
const generateButton = document.querySelector("[data-generate]");
const generationStatus = document.querySelector("[data-generation-status]");
const waveformBars = [...document.querySelectorAll("[data-waveform] i")];
let generationTimer;

waveformBars.forEach((bar, index) => {
  const height = 18 + ((index * 17 + 13) % 58);
  bar.style.setProperty("--bar-height", `${height}%`);
  bar.style.setProperty("--bar-index", index);
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((candidate) => {
      const selected = candidate === button;
      candidate.classList.toggle("is-active", selected);
      candidate.setAttribute("aria-pressed", String(selected));
    });
    modeStatus.textContent = button.dataset.mode;
    generationStatus.textContent = `已切换至${button.dataset.mode}`;
  });
});

function updateCharCount() {
  charCount.textContent = [...voiceText.value].length;
}

voiceText.addEventListener("input", updateCharCount);
updateCharCount();

generateButton.addEventListener("click", () => {
  window.clearTimeout(generationTimer);
  workbench.classList.add("is-generating");
  generateButton.disabled = true;
  generationStatus.textContent = `${modeStatus.textContent} · 正在构建音频波形`;

  generationTimer = window.setTimeout(() => {
    workbench.classList.remove("is-generating");
    generateButton.disabled = false;
    generationStatus.textContent = "演示完成 · MP3 → SILK → 当前会话";
    waveformBars.forEach((bar, index) => {
      const height = 16 + ((index * 29 + voiceText.value.length * 3) % 68);
      bar.style.setProperty("--bar-height", `${height}%`);
    });
  }, reducedMotion ? 80 : 1200);
});

const gallery = document.querySelector("[data-gallery]");
const galleryStage = document.querySelector("[data-gallery-stage]");
const galleryTabs = [...document.querySelectorAll("[data-screen]")];
const galleryImage = document.querySelector("[data-gallery-image]");
const galleryEyebrow = document.querySelector("[data-gallery-eyebrow]");
const galleryTitle = document.querySelector("[data-gallery-title]");
const galleryDescription = document.querySelector("[data-gallery-description]");
const galleryAccent = document.querySelector(".gallery-accent");
let activeScreen = "home";
let galleryTimer;
let pointerStartX = null;

function selectScreen(screenName, focusTab = false) {
  const screen = SCREENS[screenName];
  if (!screen || screenName === activeScreen) return;
  activeScreen = screenName;
  window.clearTimeout(galleryTimer);
  galleryStage.classList.add("is-changing");

  galleryTabs.forEach((tab) => {
    const selected = tab.dataset.screen === screenName;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focusTab) tab.focus();
  });

  galleryTimer = window.setTimeout(() => {
    galleryImage.src = screen.src;
    galleryImage.alt = screen.alt;
    galleryEyebrow.textContent = screen.eyebrow;
    galleryTitle.textContent = screen.title;
    galleryDescription.textContent = screen.description;
    galleryAccent.style.backgroundColor = screen.accent;
    galleryStage.classList.remove("is-changing");
  }, reducedMotion ? 0 : 150);
}

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => selectScreen(tab.dataset.screen));
  tab.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const currentIndex = galleryTabs.indexOf(tab);
    const direction = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
    const nextIndex = (currentIndex + direction + galleryTabs.length) % galleryTabs.length;
    selectScreen(galleryTabs[nextIndex].dataset.screen, true);
  });
});

gallery.addEventListener("pointerdown", (event) => {
  pointerStartX = event.clientX;
});

gallery.addEventListener("pointerup", (event) => {
  if (pointerStartX === null) return;
  const delta = event.clientX - pointerStartX;
  pointerStartX = null;
  if (Math.abs(delta) < 56) return;
  const currentIndex = galleryTabs.findIndex((tab) => tab.dataset.screen === activeScreen);
  const nextIndex = (currentIndex + (delta < 0 ? 1 : -1) + galleryTabs.length) % galleryTabs.length;
  selectScreen(galleryTabs[nextIndex].dataset.screen);
});

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");

document.querySelector("[data-open-lightbox]").addEventListener("click", () => {
  const screen = SCREENS[activeScreen];
  lightboxImage.src = screen.src;
  lightboxImage.alt = screen.alt;
  lightboxCaption.textContent = screen.caption;
  lightbox.showModal();
});

document.querySelector("[data-close-lightbox]").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  const hero = document.querySelector(".hero");
  const primary = document.querySelector(".hero-shot-primary");
  const secondary = document.querySelector(".hero-shot-secondary");

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    primary.style.transform = `translate(${x * 12}px, ${y * 10}px) rotate(4deg)`;
    secondary.style.transform = `translate(${x * -8}px, ${y * -7}px) rotate(-5deg)`;
  });

  hero.addEventListener("pointerleave", () => {
    primary.style.transform = "rotate(4deg)";
    secondary.style.transform = "rotate(-5deg)";
  });
}
