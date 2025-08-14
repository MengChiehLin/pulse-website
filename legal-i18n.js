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
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });
    
    // Update back link
    const backLink = document.querySelector('.back-link');
    if (backLink) backLink.textContent = translations.backToHome;
    
    // Replace main content completely using the comprehensive mainContent
    const contentContainer = document.querySelector('.legal-content');
    if (contentContainer && translations.mainContent) {
        // Find the back link and language selector to preserve them
        const backLinkHtml = backLink ? backLink.outerHTML : '';
        const languageSelector = document.querySelector('.language-selector');
        const languageSelectorHtml = languageSelector ? languageSelector.outerHTML : '';
        
        // Replace the content while preserving back link and language selector
        contentContainer.innerHTML = `
            ${backLinkHtml}
            ${languageSelectorHtml}
            ${translations.mainContent}
        `;
    }
    
    // Store language preference in localStorage
    localStorage.setItem('pulseLanguage', lang);
}

// Function to get language preference from main site or localStorage
function getLanguagePreference() {
    // Check URL parameters first (for navigation from main site)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && ['zh-TW', 'zh-CN', 'en'].includes(urlLang)) {
        return urlLang;
    }
    
    // Check localStorage
    const savedLang = localStorage.getItem('pulseLanguage');
    if (savedLang && ['zh-TW', 'zh-CN', 'en'].includes(savedLang)) {
        return savedLang;
    }
    
    // Default to Traditional Chinese
    return 'zh-TW';
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', async function() {
    const preferredLang = getLanguagePreference();
    await switchLegalLanguage(preferredLang);
});