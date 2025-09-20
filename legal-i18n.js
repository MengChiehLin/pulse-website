// Legal Documents Internationalization - Modular Translation System
// This script dynamically loads translation content from separate files

// Global object to store all translations
let legalTranslations = {};

// Function to load translation content for a specific language and document type
async function loadTranslation(lang, docType) {
    try {
        const script = document.createElement('script');
        script.src = `translations/${docType}-${lang}.js`;
        
        return new Promise((resolve, reject) => {
            script.onload = () => {
                // Get the global variable name based on docType and lang
                const varName = `${docType}${lang.replace('-', '')}`;
                const translationData = window[varName];
                
                if (translationData) {
                    // Initialize nested structure if needed
                    if (!legalTranslations[lang]) {
                        legalTranslations[lang] = {};
                    }
                    legalTranslations[lang][docType] = translationData;
                    resolve(translationData);
                } else {
                    reject(new Error(`Translation data not found for ${varName}`));
                }
            };
            
            script.onerror = () => reject(new Error(`Failed to load ${script.src}`));
            document.head.appendChild(script);
        });
    } catch (error) {
        console.error(`Error loading translation for ${lang}-${docType}:`, error);
        return null;
    }
}

// Enhanced language switching functionality for legal documents
async function switchLegalLanguage(lang) {
    const currentPath = window.location.pathname;
    const isPrivacy = currentPath.includes('privacy');
    const isTerms = currentPath.includes('terms');
    
    if (!isPrivacy && !isTerms) return;
    
    const docType = isPrivacy ? 'privacy' : 'terms';
    
    // Load translation if not already loaded
    if (!legalTranslations[lang] || !legalTranslations[lang][docType]) {
        await loadTranslation(lang, docType);
    }
    
    const translations = legalTranslations[lang] && legalTranslations[lang][docType];
    
    if (!translations) {
        console.error(`No translations found for language: ${lang}, docType: ${docType}`);
        return;
    }
    
    // Update document title and HTML lang attribute
    document.title = translations.pageTitle;
    document.documentElement.lang = lang;
    
    // Update language buttons (centralized markup uses data-lang)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Update back link
    const backLink = document.querySelector('.back-link');
    if (backLink) backLink.textContent = translations.backToHome;
    
    // Prefer updating only the dynamic content area if available
    const dynamic = document.getElementById('dynamic-content');
    if (dynamic && translations.mainContent) {
        dynamic.innerHTML = translations.mainContent;
    } else {
        // Fallback: replace whole legal-content while preserving controls
        const contentContainer = document.querySelector('.legal-content');
        if (contentContainer && translations.mainContent) {
            const backLinkHtml = backLink ? backLink.outerHTML : '';
            const languageSelector = document.querySelector('.language-selector');
            const languageSelectorHtml = languageSelector ? languageSelector.outerHTML : '';
            contentContainer.innerHTML = `
                ${backLinkHtml}
                ${languageSelectorHtml}
                ${translations.mainContent}
            `;
        }
    }
    
    // Persisting selection is handled by centralized language manager
}

// Function to get language preference from main site or localStorage
function getLanguagePreference() {
    // Use centralized language manager if available
    if (typeof window.getPulseLanguage === 'function') {
        return window.getPulseLanguage();
    }
    return 'zh-TW';
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', async function() {
    const preferredLang = getLanguagePreference();
    await switchLegalLanguage(preferredLang);
    // Listen for centralized language changes
    window.addEventListener('pulse:lang-change', async (e) => {
        const lang = (e && e.detail && e.detail.lang) || preferredLang;
        await switchLegalLanguage(lang);
    });
});
