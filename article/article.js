// Article detail page logic
// - Parses urlHash from path or query
// - Fetches article from backend
// - Renders in Chinese (Traditional/Simplified) based on centralized language
// - For English preference, shows notice and offers link to original content

(function () {
  const API_BASE_URL = 'https://9m9zvy2pdd.execute-api.us-east-1.amazonaws.com/Prod';
  const titleEl = document.getElementById('title');
  const metaEl = document.getElementById('meta');
  const summaryEl = document.getElementById('summary');
  const originalLinkEl = document.getElementById('originalLink');
  const noticeEl = document.getElementById('notice');
  const sourceEl = document.getElementById('source');
  const badgeEl = document.getElementById('badge');
  const levelEl = document.getElementById('level');

  function getUrlHash() {
    try {
      const pathParts = (window.location.pathname || '').split('/').filter(Boolean);
      // Expecting /article/{hash}
      if (pathParts.length >= 2 && pathParts[0] === 'article' && pathParts[1] !== 'index.html') {
        return decodeURIComponent(pathParts[1]);
      }
      // Fallback: query param ?id= or ?hash=
      const params = new URLSearchParams(window.location.search);
      const q = params.get('id') || params.get('hash');
      if (q) return q;
    } catch (_) {}
    return null;
  }

  function langKeyForArticle(lang) {
    if (lang === 'zh-CN') return 'simple_chinese';
    // default to Traditional Chinese if unsupported or 'en'
    return 'traditional_chinese';
  }

  function fmtDate(iso) {
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return '';
      return d.toLocaleString();
    } catch (_) { return ''; }
  }

  async function fetchArticle(urlHash) {
    const safeHash = encodeURIComponent(urlHash);
    const resp = await fetch(`${API_BASE_URL}/articles/${safeHash}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      // no credentials — public endpoint with CORS
    });
    if (resp.status === 404) return null;
    if (!resp.ok) throw new Error(`API error ${resp.status}`);
    const data = await resp.json();
    return data.article || null;
  }

  function t(key, lang) {
    const dict = {
      'button.viewOriginal': {
        'zh-TW': '閱讀原始文章',
        'zh-CN': '阅读原始文章',
        'en': 'View Original Article'
      },
      'notice.english': {
        'zh-TW': '顯示中文翻譯。如需英文，請閱讀原始文章。',
        'zh-CN': '显示中文翻译。如需英文，请阅读原始文章。',
        'en': 'Chinese translation is shown. For English, view the original source.'
      }
    };
    const table = dict[key] || {};
    return table[lang] || table['zh-TW'] || '';
  }

  function criticalBadge(level) {
    if (typeof level !== 'number') return null;
    if (level >= 5) return 'BREAKING';
    if (level >= 4) return 'IMPORTANT';
    return null;
  }

  function applyLanguageUI(lang, article) {
    // Toggle central active state is handled by lang.js
    // Set page title/meta description based on language
    if (lang === 'zh-CN') {
      document.title = (article?.title?.simple_chinese || 'PULSE 文章詳情') + ' - PULSE';
    } else if (lang === 'en') {
      document.title = (article?.originalTitle || 'PULSE Article') + ' - PULSE';
    } else {
      document.title = (article?.title?.traditional_chinese || 'PULSE 文章詳情') + ' - PULSE';
    }

    // Localize the button and notice
    originalLinkEl.textContent = t('button.viewOriginal', lang);
    if (lang === 'en') {
      noticeEl.style.display = '';
      noticeEl.textContent = t('notice.english', lang);
    } else {
      noticeEl.style.display = 'none';
      noticeEl.textContent = '';
    }
  }

  function renderArticle(article) {
    const currentLang = (typeof window.getPulseLanguage === 'function') ? window.getPulseLanguage() : 'zh-TW';
    const key = langKeyForArticle(currentLang);

    // Title and Summary
    const titleText = article?.title?.[key] || article?.title?.traditional_chinese || article?.originalTitle || '';
    const summaryText = article?.summary?.[key] || article?.summary?.traditional_chinese || '';

    titleEl.textContent = titleText || '無標題文章';
    summaryEl.textContent = summaryText || '';

    // Meta and actions
    const metaBits = [];
    if (article?.source) metaBits.push(article.source);
    if (article?.publishedAt) metaBits.push(fmtDate(article.publishedAt));
    metaEl.textContent = metaBits.join(' · ');

    // Top-left source label and badge
    sourceEl.textContent = article?.source || '';
    const badge = criticalBadge(article?.critical_level);
    if (badge) {
      badgeEl.textContent = badge;
      badgeEl.style.display = '';
    } else {
      badgeEl.style.display = 'none';
    }

    if (article?.url) {
      originalLinkEl.href = article.url;
      originalLinkEl.style.display = '';
    } else {
      originalLinkEl.style.display = 'none';
    }

    // Bottom-right critical level chip
    if (typeof article?.critical_level === 'number') {
      levelEl.textContent = 'level: ' + String(article.critical_level);
      levelEl.style.display = '';
    } else {
      levelEl.style.display = 'none';
    }

    applyLanguageUI(currentLang, article);
  }

  function renderError(message) {
    titleEl.textContent = '找不到文章';
    metaEl.textContent = '';
    summaryEl.textContent = message || '請確認連結是否正確。';
    originalLinkEl.style.display = 'none';
  }

  async function init() {
    const urlHash = getUrlHash();
    if (!urlHash || !/^[a-fA-F0-9]{8,}$/.test(urlHash)) {
      renderError('缺少或無效的文章識別碼');
      return;
    }
    try {
      const article = await fetchArticle(urlHash);
      if (!article) {
        renderError('文章不存在或已被移除');
        return;
      }
      renderArticle(article);

      // Re-render on language change
      window.addEventListener('pulse:lang-change', () => renderArticle(article));
    } catch (err) {
      renderError('載入文章時發生錯誤');
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
