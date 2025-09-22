// Language translations
const translations = {
    'zh-TW': {
        'hero.title': '美國新聞即時通知，投資決策更精準',
        'hero.description': '想看美國新聞但又怕看不懂？PULSE 運用 AI 智能技術，幫您抓取即時國際新聞並提供精準中文摘要。即時數據幫您做即時決策，讓重要投資資訊不再錯過。',
        'hero.freetrial': '🎉 立即註冊！免費體驗限量重要新聞快訊',
        'cta.ios': 'iOS 下載',
        'cta.android': 'Android 下載',
        'features.title': '運作原理',
        'features.realtime.title': '即時監控',
        'features.realtime.desc': '24小時不間斷監控國際重要新聞，第一時間掌握市場動態。',
        'features.ai.title': 'AI 智能篩選',
        'features.ai.desc': 'AI 分析新聞重要性，自動翻譯並摘要，只推送真正重要的投資資訊。',
        'features.push.title': '即時推送通知',
        'features.push.desc': '重要新聞立即推送到您的手機，確保不錯過任何關鍵時刻。',
        'subscription.title': '訂閱方案',
        'subscription.free.name': '免費會員',
        'subscription.free.period': '/永久',
        'subscription.free.feature1': '無限瀏覽一般新聞 + 每日限量重要新聞',
        'subscription.free.feature2': 'AI 智能翻譯與摘要',
        'subscription.free.feature3': '基本新聞閱讀體驗',
        'subscription.free.feature4': '永久免費使用',
        'subscription.monthly.badge': '推薦方案',
        'subscription.monthly.name': '月付會員',
        'subscription.monthly.period': '/月',
        'subscription.monthly.feature1': 'AI 精選重要新聞快訊',
        'subscription.monthly.feature2': '完整 AI 智能摘要與翻譯',
        'subscription.monthly.feature3': '即時推送通知',
        'subscription.monthly.feature4': '多裝置同步支援',
        'subscription.monthly.feature5': '24/7 全天候新聞監控',
        'subscription.trial': '✨ 免費會員每日可閱讀限量重要新聞！',
        'subscription.note': '下載 App 後即可開始使用免費會員功能。升級月付會員享有無限制完整服務。',
        'about.title': '專業新聞智能服務',
        'about.text': 'PULSE 專為投資人士打造，結合尖端 AI 技術與即時新聞監控，精準篩選並推送對您投資決策至關重要的資訊。告別資訊焦慮，只接收真正重要的投資新聞。',
        'footer.tagline': '即時商業新聞快訊',
        'footer.legal': '法律條款',
        'footer.privacy': '隱私政策',
        'footer.terms': '服務條款',
        'footer.deletion': '帳戶刪除',
        'footer.support': '支援',
        'footer.rights': '保留所有權利。',
        'deletion.title': '帳戶刪除 - PULSE',
        'deletion.heading': 'PULSE 帳戶刪除',
        'deletion.intro': '您可以直接在 PULSE 應用程式內刪除您的帳戶。此頁面說明帳戶刪除程序、資料處理方式，以及訂閱管理相關資訊。',
        'deletion.steps.title': '如何刪除帳戶',
        'deletion.steps.step1': '開啟 PULSE 應用程式',
        'deletion.steps.step2': '前往個人檔案 (Profile) 頁面',
        'deletion.steps.step3': '滑到最下方的帳戶管理部分',
        'deletion.steps.step4': '點擊刪除帳戶',
        'deletion.steps.step5': '確認刪除 - 此操作立即生效且無法復原',
        'deletion.contact.title': '需要協助？',
        'deletion.contact.email': '如果您在刪除帳戶時遇到困難，請聯繫我們：support@pulse-news.app',
        'deletion.contact.note': '我們的支援團隊將協助您解決任何帳戶刪除相關問題。',
        'deletion.subscription.title': '訂閱管理重要須知',
        'deletion.subscription.iap': '您的訂閱由 Apple App Store 或 Google Play Store 管理，而非 PULSE 直接管理。',
        'deletion.subscription.cancel': '取消訂閱：請至您的 iPhone/iPad「設定」>「Apple ID」>「訂閱」，或 Android「Google Play Store」>「訂閱」',
        'deletion.subscription.independent': '帳戶刪除和訂閱取消是獨立操作',
        'deletion.subscription.recommendation': '建議先取消訂閱，再刪除帳戶',
        'deletion.data.title': '資料處理說明',
        'deletion.data.deleted.title': '將被完全刪除的資料',
        'deletion.data.deleted.profile': '用戶個人資料和帳戶資訊',
        'deletion.data.deleted.email': '註冊電子郵件地址',
        'deletion.data.deleted.reading': '閱讀歷史和偏好設定',
        'deletion.data.deleted.notifications': '推播通知設定和裝置代碼',
        'deletion.data.deleted.devices': '所有登入資訊和會話資料',
        'deletion.data.deleted.subscription': 'PULSE 內的訂閱狀態記錄',
        'deletion.data.deleted.usage': '所有應用程式使用記錄',
        'deletion.data.retained.title': '非 PULSE 管理的資料',
        'deletion.data.retained.billing': '購買記錄由 Apple/Google 管理',
        'deletion.data.retained.anonymized': '訂閱歷史由 Apple/Google 保存',
        'deletion.data.retained.legal': '付款資訊由 Apple/Google 處理',
        'deletion.data.retained.tax': '退款爭議請聯繫 Apple/Google',
        'deletion.timeline.title': '刪除時程',
        'deletion.timeline.confirmation': '立即生效：在應用程式內確認刪除後立即執行',
        'deletion.timeline.processing': '即時完成：所有 PULSE 資料立即從我們的系統中移除',
        'deletion.timeline.completion': '無法復原：刪除操作完成後無法恢復任何資料',
        'deletion.important.title': '重要注意事項',
        'deletion.important.irreversible': '帳戶刪除是不可逆的操作，立即生效',
        'deletion.important.access': '刪除後將無法訪問任何 PULSE 服務',
        'deletion.important.subscription': 'PULSE 不會取消您的 Apple/Google 訂閱',
        'deletion.important.reregistration': '如需重新使用服務，須重新註冊新帳戶',
        'deletion.important.nodata': '我們不保留任何用戶資料，所有資料將被永久刪除',
        'deletion.legal.title': '法律依據',
        'deletion.legal.gdpr': '根據 GDPR（一般資料保護規則）第 17 條和 CCPA（加州消費者隱私法）規定，用戶有權要求刪除其個人資料。PULSE 完全遵守相關法規，確保用戶權益得到保障。',
        'deletion.back': '← 返回首頁'
    },
    'zh-CN': {
        'hero.title': '美国新闻即时通知，投资决策更精准',
        'hero.description': '想看美国新闻但又怕看不懂？PULSE 运用 AI 智能技术，帮您抓取即时国际新闻并提供精准中文摘要。即时数据帮您做即时决策，让重要投资资讯不再错过。',
        'hero.freetrial': '🎉 立即注册！免费体验限量重要新闻快讯',
        'cta.ios': 'iOS 下载',
        'cta.android': 'Android 下载',
        'features.title': '运作原理',
        'features.realtime.title': '即时监控',
        'features.realtime.desc': '24小时不间断监控国际重要新闻，第一时间掌握市场动态。',
        'features.ai.title': 'AI 智能筛选',
        'features.ai.desc': 'AI 分析新闻重要性，自动翻译并摘要，只推送真正重要的投资资讯。',
        'features.push.title': '即时推送通知',
        'features.push.desc': '重要新闻立即推送到您的手机，确保不错过任何关键时刻。',
        'subscription.title': '订阅方案',
        'subscription.free.name': '免费会员',
        'subscription.free.period': '/永久',
        'subscription.free.feature1': '无限浏览一般新闻 + 每日限量重要新闻',
        'subscription.free.feature2': 'AI 智能翻译与摘要',
        'subscription.free.feature3': '基本新闻阅读体验',
        'subscription.free.feature4': '永久免费使用',
        'subscription.monthly.badge': '推荐方案',
        'subscription.monthly.name': '月付会员',
        'subscription.monthly.period': '/月',
        'subscription.monthly.feature1': 'AI 精选重要新闻快讯',
        'subscription.monthly.feature2': '完整 AI 智能摘要与翻译',
        'subscription.monthly.feature3': '即时推送通知',
        'subscription.monthly.feature4': '多设备同步支持',
        'subscription.monthly.feature5': '24/7 全天候新闻监控',
        'subscription.trial': '✨ 免费会员每日可阅读限量重要新闻！',
        'subscription.note': '下载 App 后即可开始使用免费会员功能。升级月付会员享有无限制完整服务。',
        'about.title': '专业新闻智能服务',
        'about.text': 'PULSE 专为投资人士打造，结合尖端 AI 技术与即时新闻监控，精准筛选并推送对您投资决策至关重要的信息。告别信息焦虑，只接收真正重要的投资新闻。',
        'footer.tagline': '即时商业新闻快讯',
        'footer.legal': '法律条款',
        'footer.privacy': '隐私政策',
        'footer.terms': '服务条款',
        'footer.deletion': '账户删除',
        'footer.support': '支持',
        'footer.rights': '保留所有权利。',
        'deletion.title': '账户删除 - PULSE',
        'deletion.heading': 'PULSE 账户删除',
        'deletion.intro': '您可以直接在 PULSE 应用程序内删除您的账户。此页面说明账户删除程序、数据处理方式，以及订阅管理相关信息。',
        'deletion.steps.title': '如何删除账户',
        'deletion.steps.step1': '打开 PULSE 应用程序',
        'deletion.steps.step2': '前往个人档案 (Profile) 页面',
        'deletion.steps.step3': '滑到最下方的账户管理部分',
        'deletion.steps.step4': '点击删除账户',
        'deletion.steps.step5': '确认删除 - 此操作立即生效且无法撤销',
        'deletion.contact.title': '需要协助？',
        'deletion.contact.email': '如果您在删除账户时遇到困难，请联系我们：support@pulse-news.app',
        'deletion.contact.note': '我们的支持团队将协助您解决任何账户删除相关问题。',
        'deletion.subscription.title': '订阅管理重要须知',
        'deletion.subscription.iap': '您的订阅由 Apple App Store 或 Google Play Store 管理，而非 PULSE 直接管理。',
        'deletion.subscription.cancel': '取消订阅：请至您的 iPhone/iPad「设置」>「Apple ID」>「订阅」，或 Android「Google Play Store」>「订阅」',
        'deletion.subscription.independent': '账户删除和订阅取消是独立操作',
        'deletion.subscription.recommendation': '建议先取消订阅，再删除账户',
        'deletion.data.title': '数据处理说明',
        'deletion.data.deleted.title': '将被完全删除的数据',
        'deletion.data.deleted.profile': '用户个人资料和账户信息',
        'deletion.data.deleted.email': '注册电子邮件地址',
        'deletion.data.deleted.reading': '阅读历史和偏好设置',
        'deletion.data.deleted.notifications': '推送通知设置和设备代码',
        'deletion.data.deleted.devices': '所有登录信息和会话数据',
        'deletion.data.deleted.subscription': 'PULSE 内的订阅状态记录',
        'deletion.data.deleted.usage': '所有应用程序使用记录',
        'deletion.data.retained.title': '非 PULSE 管理的数据',
        'deletion.data.retained.billing': '购买记录由 Apple/Google 管理',
        'deletion.data.retained.anonymized': '订阅历史由 Apple/Google 保存',
        'deletion.data.retained.legal': '付款信息由 Apple/Google 处理',
        'deletion.data.retained.tax': '退款争议请联系 Apple/Google',
        'deletion.timeline.title': '删除时程',
        'deletion.timeline.confirmation': '立即生效：在应用程序内确认删除后立即执行',
        'deletion.timeline.processing': '即时完成：所有 PULSE 数据立即从我们的系统中移除',
        'deletion.timeline.completion': '无法恢复：删除操作完成后无法恢复任何数据',
        'deletion.important.title': '重要注意事项',
        'deletion.important.irreversible': '账户删除是不可逆的操作，立即生效',
        'deletion.important.access': '删除后将无法访问任何 PULSE 服务',
        'deletion.important.subscription': 'PULSE 不会取消您的 Apple/Google 订阅',
        'deletion.important.reregistration': '如需重新使用服务，须重新注册新账户',
        'deletion.important.nodata': '我们不保留任何用户数据，所有数据将被永久删除',
        'deletion.legal.title': '法律依据',
        'deletion.legal.gdpr': '根据 GDPR（一般数据保护规则）第 17 条和 CCPA（加州消费者隐私法）规定，用户有权要求删除其个人数据。PULSE 完全遵守相关法规，确保用户权益得到保障。',
        'deletion.back': '← 返回首页'
    },
    'en': {
        'hero.title': 'Instant US News Notifications for Smarter Investment Decisions',
        'hero.description': 'Can\'t understand U.S. news? PULSE uses AI technology to deliver real-time international news with accurate translations. Get instant data for instant decisions, never miss critical investment information.',
        'hero.freetrial': '🎉 Sign Up Now! Free Access to Limited Important News',
        'cta.ios': 'Download for iOS',
        'cta.android': 'Download for Android',
        'features.title': 'How It Works',
        'features.realtime.title': 'Real-Time Monitoring',
        'features.realtime.desc': '24/7 monitoring of important international news, stay ahead of market trends.',
        'features.ai.title': 'AI-Powered Curation',
        'features.ai.desc': 'AI analyzes news importance, auto-translates and summarizes, delivering only critical investment information.',
        'features.push.title': 'Instant Push Notifications',
        'features.push.desc': 'Important news delivered instantly to your phone, never miss a critical moment.',
        'subscription.title': 'Subscription Plans',
        'subscription.free.name': 'Free Member',
        'subscription.free.period': '/forever',
        'subscription.free.feature1': 'Unlimited general news + daily limited important articles',
        'subscription.free.feature2': 'AI-powered translation & summaries',
        'subscription.free.feature3': 'Basic news reading experience',
        'subscription.free.feature4': 'Forever free access',
        'subscription.monthly.badge': 'Recommended',
        'subscription.monthly.name': 'Monthly Member',
        'subscription.monthly.period': '/month',
        'subscription.monthly.feature1': 'AI-curated critical news alerts',
        'subscription.monthly.feature2': 'Full AI-powered summaries & translation',
        'subscription.monthly.feature3': 'Real-time push notifications',
        'subscription.monthly.feature4': 'Multi-device sync support',
        'subscription.monthly.feature5': '24/7 news monitoring',
        'subscription.trial': '✨ Free members get daily limited access to important news!',
        'subscription.note': 'Download and start using free member features immediately. Upgrade to monthly membership for unlimited access.',
        'about.title': 'Professional News Intelligence',
        'about.text': 'PULSE is designed for investors, combining cutting-edge AI technology with real-time news monitoring to deliver precisely filtered information critical to your investment decisions. Say goodbye to information overload – receive only the investment news that matters.',
        'footer.tagline': 'Critical Business News Alerts',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.deletion': 'Account Deletion',
        'footer.support': 'Support',
        'footer.rights': 'All rights reserved.',
        'deletion.title': 'Account Deletion - PULSE',
        'deletion.heading': 'PULSE Account Deletion',
        'deletion.intro': 'You can delete your account directly within the PULSE app. This page explains the account deletion process, data handling, and subscription management information.',
        'deletion.steps.title': 'How to Delete Your Account',
        'deletion.steps.step1': 'Open the PULSE app',
        'deletion.steps.step2': 'Go to Profile page',
        'deletion.steps.step3': 'Scroll to the bottom Account Management section',
        'deletion.steps.step4': 'Tap Delete Account',
        'deletion.steps.step5': 'Confirm deletion - this action takes effect immediately and cannot be undone',
        'deletion.contact.title': 'Need Help?',
        'deletion.contact.email': 'If you have trouble deleting your account, contact us: support@pulse-news.app',
        'deletion.contact.note': 'Our support team will help you resolve any account deletion issues.',
        'deletion.subscription.title': 'Important Subscription Information',
        'deletion.subscription.iap': 'Your subscription is managed by Apple App Store or Google Play Store, not directly by PULSE.',
        'deletion.subscription.cancel': 'Cancel subscription: Go to iPhone/iPad Settings > Apple ID > Subscriptions, or Android Google Play Store > Subscriptions',
        'deletion.subscription.independent': 'Account deletion and subscription cancellation are separate actions',
        'deletion.subscription.recommendation': 'We recommend cancelling your subscription before deleting your account',
        'deletion.data.title': 'Data Processing Information',
        'deletion.data.deleted.title': 'Data That Will Be Completely Deleted',
        'deletion.data.deleted.profile': 'User profile and account information',
        'deletion.data.deleted.email': 'Registered email address',
        'deletion.data.deleted.reading': 'Reading history and preferences',
        'deletion.data.deleted.notifications': 'Push notification settings and device tokens',
        'deletion.data.deleted.devices': 'All login information and session data',
        'deletion.data.deleted.subscription': 'PULSE subscription status records',
        'deletion.data.deleted.usage': 'All app usage records',
        'deletion.data.retained.title': 'Data Not Managed by PULSE',
        'deletion.data.retained.billing': 'Purchase records managed by Apple/Google',
        'deletion.data.retained.anonymized': 'Subscription history stored by Apple/Google',
        'deletion.data.retained.legal': 'Payment information handled by Apple/Google',
        'deletion.data.retained.tax': 'Refund disputes contact Apple/Google',
        'deletion.timeline.title': 'Deletion Timeline',
        'deletion.timeline.confirmation': 'Immediate effect: Executed immediately upon confirmation in the app',
        'deletion.timeline.processing': 'Instant completion: All PULSE data immediately removed from our systems',
        'deletion.timeline.completion': 'Cannot be undone: No data can be recovered after deletion',
        'deletion.important.title': 'Important Notes',
        'deletion.important.irreversible': 'Account deletion is irreversible and takes effect immediately',
        'deletion.important.access': 'You will lose access to all PULSE services after deletion',
        'deletion.important.subscription': 'PULSE will not cancel your Apple/Google subscription',
        'deletion.important.reregistration': 'You must create a new account to use the service again',
        'deletion.important.nodata': 'We retain no user data - all data will be permanently deleted',
        'deletion.legal.title': 'Legal Basis',
        'deletion.legal.gdpr': 'Under GDPR (General Data Protection Regulation) Article 17 and CCPA (California Consumer Privacy Act), users have the right to request deletion of their personal data. PULSE fully complies with relevant regulations to ensure user rights are protected.',
        'deletion.back': '← Back to Home'
    }
};

// Get saved language or default to zh-TW
let currentLang = localStorage.getItem('selectedLanguage') || 'zh-TW';

// Apply translations
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update page title and meta description
    if (lang === 'zh-TW') {
        document.title = 'PULSE - 即時商業新聞快訊';
        document.querySelector('meta[name="description"]').content = 'PULSE - AI智能新聞快訊，即時推送重要商業新聞到您的手機。想看美國新聞但又怕看不懂？PULSE幫你抓取即時國際新聞。';
    } else if (lang === 'zh-CN') {
        document.title = 'PULSE - 即时商业新闻快讯';
        document.querySelector('meta[name="description"]').content = 'PULSE - AI智能新闻快讯，即时推送重要商业新闻到您的手机。想看美国新闻但又怕看不懂？PULSE帮你抓取即时国际新闻。';
    } else {
        document.title = 'PULSE - Critical Business News Alerts';
        document.querySelector('meta[name="description"]').content = 'PULSE - AI-powered critical news alerts delivered directly to your mobile device. Real-time international business news with intelligent curation.';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Use centralized language manager if available
    const initLang = typeof window.getPulseLanguage === 'function' 
        ? window.getPulseLanguage() 
        : currentLang;
    applyTranslations(initLang);

    // React to centralized language changes
    window.addEventListener('pulse:lang-change', (e) => {
        const lang = (e && e.detail && e.detail.lang) || initLang;
        applyTranslations(lang);
    });
});
