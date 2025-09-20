// Centralized language manager for the website (homepage, legal pages, article page)
// - Detects preferred language from URL/localStorage/browser
// - Persists selection
// - Updates <html lang>
// - Manages .lang-btn active state
// - Emits a global 'pulse:lang-change' event

(function () {
  const SUPPORTED = ['zh-TW', 'zh-CN', 'en'];
  const DEFAULT_LANG = 'zh-TW'; // default to Traditional Chinese
  const STORAGE_KEY = 'pulseLanguage';

  function getFromUrl() {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang && SUPPORTED.includes(urlLang)) return urlLang;
    } catch (_) {}
    return null;
  }

  function getFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('selectedLanguage');
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (_) {}
    return null;
  }

  function getFromBrowser() {
    try {
      const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (navLang.startsWith('zh-tw') || navLang === 'zh-hant') return 'zh-TW';
      if (navLang.startsWith('zh-cn') || navLang === 'zh-hans') return 'zh-CN';
      if (navLang.startsWith('en')) return 'en';
    } catch (_) {}
    return null;
  }

  function detectInitial() {
    return getFromUrl() || getFromStorage() || getFromBrowser() || DEFAULT_LANG;
  }

  let current = detectInitial();

  function applyLangToDocument(lang) {
    try {
      document.documentElement.lang = lang;
      // Toggle active state on language buttons if present
      document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      });
    } catch (_) {}
  }

  function setLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    if (current === lang) return;
    current = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      // Back-compat with homepage script
      localStorage.setItem('selectedLanguage', lang);
    } catch (_) {}
    applyLangToDocument(lang);
    const evt = new CustomEvent('pulse:lang-change', { detail: { lang } });
    window.dispatchEvent(evt);
  }

  function getLanguage() {
    return current;
  }

  // Setup button handlers once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize document attributes and buttons
    applyLangToDocument(current);

    // Attach click handlers to any present language buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const lang = (e.currentTarget && (e.currentTarget).getAttribute('data-lang')) || DEFAULT_LANG;
        setLanguage(lang);
      });
    });
  });

  // Expose minimal API
  window.getPulseLanguage = getLanguage;
  window.setPulseLanguage = setLanguage;
})();

