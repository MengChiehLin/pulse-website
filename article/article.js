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
  const backLinkEl = document.getElementById('backLink');
  const rightsEl = document.getElementById('rightsText');
  const taglineEl = document.getElementById('tagline');

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
      },
      'link.backHome': {
        'zh-TW': '返回首頁',
        'zh-CN': '返回首页',
        'en': 'Back to Home'
      },
      'footer.rights': {
        'zh-TW': '保留所有權利。',
        'zh-CN': '保留所有权利。',
        'en': 'All rights reserved.'
      },
      'header.tagline': {
        'zh-TW': 'BUSINESS NEWS',
        'zh-CN': 'BUSINESS NEWS',
        'en': 'BUSINESS NEWS'
      },
      'meta.articleDesc': {
        'zh-TW': 'PULSE 文章詳情頁面',
        'zh-CN': 'PULSE 文章详情页面',
        'en': 'PULSE Article Detail Page'
      },
      'meta.articlePageTitle': {
        'zh-TW': 'PULSE 文章詳情',
        'zh-CN': 'PULSE 文章详情',
        'en': 'PULSE Article'
      },
      'error.notFound': {
        'zh-TW': '找不到文章',
        'zh-CN': '未找到文章',
        'en': 'Article not found'
      },
      'error.checkLink': {
        'zh-TW': '請確認連結是否正確。',
        'zh-CN': '请确认链接是否正确。',
        'en': 'Please verify the link.'
      },
      'error.invalidId': {
        'zh-TW': '缺少或無效的文章識別碼',
        'zh-CN': '缺少或无效的文章标识',
        'en': 'Missing or invalid article ID'
      },
      'error.removed': {
        'zh-TW': '文章不存在或已被移除',
        'zh-CN': '文章不存在或已被移除',
        'en': 'The article does not exist or was removed'
      },
      'error.load': {
        'zh-TW': '載入文章時發生錯誤',
        'zh-CN': '加载文章时发生错误',
        'en': 'An error occurred while loading the article'
      },
      'error.generic': {
        'zh-TW': '請稍後再試。',
        'zh-CN': '请稍后重试。',
        'en': 'Please try again later.'
      },
      'label.level': {
        'zh-TW': '等級：',
        'zh-CN': '等级：',
        'en': 'Level: '
      },
      'article.noTitle': {
        'zh-TW': '無標題文章',
        'zh-CN': '无标题文章',
        'en': 'Untitled'
      }
    };
    const table = dict[key] || {};
    return table[lang] || table['zh-TW'] || '';
  }

  function criticalBadge(level) {
    if (typeof level !== 'number') return null;
    if (level >= 5) return { text: 'BREAKING', color: '#ff4757' };
    if (level >= 4) return { text: 'IMPORTANT', color: '#ff6b35' };
    return { text: 'GENERAL', color: '#ffa502' };
  }

  function applyLanguageUI(lang, article) {
    // Toggle central active state is handled by lang.js
    // Set page title/meta description based on language
    if (lang === 'zh-CN') {
      document.title = (article?.title?.simple_chinese || t('meta.articlePageTitle', lang)) + ' - PULSE';
    } else if (lang === 'en') {
      document.title = (article?.originalTitle || t('meta.articlePageTitle', lang)) + ' - PULSE';
    } else {
      document.title = (article?.title?.traditional_chinese || t('meta.articlePageTitle', lang)) + ' - PULSE';
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

    // Back link, footer rights, header tagline
    if (backLinkEl) backLinkEl.textContent = '← ' + t('link.backHome', lang);
    if (rightsEl) rightsEl.textContent = t('footer.rights', lang);
    if (taglineEl) taglineEl.textContent = t('header.tagline', lang);

    // Meta description (fallback if article summary unavailable)
    try {
      const metaDescEl = document.querySelector('meta[name="description"]');
      if (metaDescEl) {
        const key = langKeyForArticle(lang);
        const descFromArticle = article?.summary?.[key] || article?.summary?.traditional_chinese || '';
        metaDescEl.setAttribute('content', descFromArticle || t('meta.articleDesc', lang));
      }
    } catch (_) {}
  }

  function renderArticle(article) {
    const currentLang = (typeof window.getPulseLanguage === 'function') ? window.getPulseLanguage() : 'zh-TW';
    const key = langKeyForArticle(currentLang);

    // Title and Summary
    const titleText = article?.title?.[key] || article?.title?.traditional_chinese || article?.originalTitle || '';
    const summaryText = article?.summary?.[key] || article?.summary?.traditional_chinese || '';

    titleEl.textContent = titleText || t('article.noTitle', currentLang);
    try { titleEl.classList.remove('loading'); } catch (_) {}
    summaryEl.textContent = summaryText || '';

    // Meta and actions
    // Only show time/date in meta to avoid duplicate source line
    metaEl.textContent = article?.publishedAt ? fmtDate(article.publishedAt) : '';

    // Top-left source label and badge
    sourceEl.textContent = article?.source || '';
    const badge = criticalBadge(article?.critical_level);
    if (badge) {
      badgeEl.textContent = badge.text;
      badgeEl.style.display = '';
      badgeEl.style.borderColor = badge.color;
      badgeEl.style.color = badge.color;
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
      const currentLang = (typeof window.getPulseLanguage === 'function') ? window.getPulseLanguage() : 'zh-TW';
      levelEl.textContent = t('label.level', currentLang) + String(article.critical_level);
      levelEl.style.display = '';
    } else {
      levelEl.style.display = 'none';
    }

    applyLanguageUI(currentLang, article);
  }

  function renderError(titleKey, bodyKey) {
    const currentLang = (typeof window.getPulseLanguage === 'function') ? window.getPulseLanguage() : 'zh-TW';
    titleEl.textContent = t(titleKey, currentLang) || t('error.notFound', currentLang);
    metaEl.textContent = '';
    summaryEl.textContent = t(bodyKey, currentLang) || '';
    originalLinkEl.style.display = 'none';
    try { titleEl.classList.remove('loading'); } catch (_) {}
  }

  async function init() {
    const initLang = (typeof window.getPulseLanguage === 'function') ? window.getPulseLanguage() : 'zh-TW';
    applyLanguageUI(initLang, null);

    // Handle language changes; re-render if article is available
    let currentArticle = null;
    window.addEventListener('pulse:lang-change', (e) => {
      const lang = (e && e.detail && e.detail.lang) || initLang;
      if (currentArticle) {
        renderArticle(currentArticle);
      } else {
        applyLanguageUI(lang, null);
      }
    });

    const urlHash = getUrlHash();
    if (!urlHash || !/^[a-fA-F0-9]{8,}$/.test(urlHash)) {
      renderError('error.invalidId', 'error.checkLink');
      return;
    }
    try {
      const article = await fetchArticle(urlHash);
      if (!article) {
        renderError('error.notFound', 'error.removed');
        return;
      }
      currentArticle = article;
      renderArticle(article);
    } catch (err) {
      renderError('error.load', 'error.generic');
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
