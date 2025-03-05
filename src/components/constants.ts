import { useSelector } from "react-redux";

export const GetConstant = (key: string): string => {
    const { language } = useSelector((state: { userPreference: { data: { language: string } } }) => state?.userPreference?.data);
    const normalizedLanguage = normalizeLanguage(language);
    return constants[key]?.[normalizedLanguage] || constants[key]?.["en"] || "";
};

const normalizeLanguage = (language: string | undefined): string => {
    if (!language) return "en";

    switch (language) {
        case "EN(UK)":
        case "EN(US)":
            return "en";
        case "Hin":
            return "hi";
        case "Guj":
            return "guj";
        case "Fr":
            return "fr";
        case "Ja":
            return "ja";
        default:
            return "en";
    }
}

const constants: { [key: string]: { [lang: string]: string | { GBP: string, INR: string, USD: string } | { DD_MM_YYYY: string; DD_MM_YY: string; YYYY_MM_DD: string; MM_DD_YYYY: string; } | { UTC_00_12: string, UTC_05_30_12: string, UTC_00_24: string, UTC_05_30_24: string } } } = {
    YOURFINANCIALDASHBOARD: {
        en: "Your Financial Dashboard",
        hi: "आपका वित्तीय डैशबोर्ड",
        guj: "તમારું આર્થિક ડેશબોર્ડ",
        fr: "Votre tableau de bord financier",
        ja: "あなたの財務ダッシュボード"
    },
    MYBUDGET: {
        en: "My Budget",
        hi: "मेरा बजट",
        guj: "મારું બજેટ",
        fr: "Mon Budget",
        ja: "私の予算"
    },
    MYFAMILY: {
        en: "My Family",
        hi: "मेरा परिवार",
        guj: "મારો પરિવાર",
        fr: "Ma famille",
        ja: "私の家族"
    },
    ADDTRANSACTION: {
        en: "Add Transaction",
        hi: "लेन-देन जोड़ें",
        guj: "ટ્રાન્ઝેક્શન ઉમેરો",
        fr: "Ajouter une transaction",
        ja: "取引を追加"
    },
    ADD_ACCOUNT: {
        en: "Add Your Bank Account",
        hi: "आपका बैंक खाता जोड़ें",
        guj: "તમારો બેંક ખાતો ઉમેરો",
        fr: "Ajouter votre compte bancaire",
        ja: "銀行口座を追加"
    },
    EXCHANGE_RATE: {
        en: "Exchange Rate",
        hi: "विनिमय दर",
        guj: "વિનિમય દર",
        fr: "Taux de change",
        ja: "為替レート"
    },
    ADDBUDGET: {
        en: "Add Budget",
        hi: "बजट जोड़ें",
        guj: "બજેટ ઉમેરો",
        fr: "Ajouter un budget",
        ja: "予算を追加"
    },
    ADDFAMILY: {
        en: "Add Family",
        hi: "परिवार जोड़ें",
        guj: "કુટુંબ ઉમેરો",
        fr: "Ajouter une famille",
        ja: "家族を追加"
    },
    ADDTRANSACTIONBUTTON: {
        en: "Add Transaction",
        hi: "लेन-देन जोड़ें",
        guj: "ટ્રાન્ઝેક્શન ઉમેરો",
        fr: "Ajouter une transaction",
        ja: "取引を追加"
    },
    EXPORT: {
        en: "Export",
        hi: "निर्यात करें",
        guj: "એક્સપોર્ટ",
        fr: "Exporter",
        ja: "エクスポート"
    },
    WELCOME_BACK: {
        en: "Welcome back",
        hi: "स्वागत है",
        guj: "આપનો સ્વાગત છે",
        fr: "Bienvenue de nouveau",
        ja: "おかえりなさい"
    },
    EFFORTLESSLY_MANAGE_FINANCE: {
        en: "Effortlessly manage and monitor your financial resources with ease",
        hi: "अपने वित्तीय संसाधनों को आसानी से प्रबंधित और मॉनिटर करें",
        guj: "તમારા આર્થિક સંસાધનોને સરળતાથી વ્યવસ્થિત અને મોનીટર કરો",
        fr: "Gérez et surveillez vos ressources financières en toute simplicité",
        ja: "財務資源を簡単に管理して監視する"
    },
    ORGANIZE_FAMILY: {
        en: "Organize and access your Family",
        hi: "अपने परिवार को व्यवस्थित करें और पहुँचें",
        guj: "તમારા પરિવારને ગોઠવો અને એક્સેસ કરો",
        fr: "Organisez et accédez à votre famille",
        ja: "家族を整理してアクセスする"
    },
    ORGANIZE_RECEIPTS: {
        en: "Efficiently organize and keep track of your incoming receipts for hassle-free financial management",
        hi: "आसान वित्तीय प्रबंधन के लिए अपनी आने वाली रसीदों को कुशलतापूर्वक व्यवस्थित और ट्रैक करें",
        guj: "આરામદાયક આર્થિક વ્યવસ્થાપન માટે તમારી આવતી રસીદોને કાર્યક્ષમ રીતે ગોઠવો અને ટ્રેક કરો",
        fr: "Organisez efficacement et suivez vos reçus entrants pour une gestion financière sans tracas",
        ja: "面倒な財務管理を避けるために、入ってくる領収書を効率的に整理し追跡する"
    },
    STAY_UPDATED: {
        en: "Stay updated with the latest news and trends in the financial world",
        hi: "वित्तीय दुनिया में नवीनतम समाचारों और रुझानों के साथ अपडेट रहें",
        guj: "આર્થિક વિશ્વમાં નવીનતમ સમાચાર અને ઝુકાવ સાથે અપડેટ રહો",
        fr: "Restez à jour avec les dernières nouvelles et tendances dans le monde financier",
        ja: "金融の世界で最新のニュースやトレンドを追い続ける"
    },
    CONNECT_TO_TOOLS: {
        en: "Connect and sync with essential tools and platforms",
        hi: "आवश्यक उपकरणों और प्लेटफ़ॉर्म्स के साथ कनेक्ट करें और सिंक करें",
        guj: "આવશ્યક ટૂલ્સ અને પ્લેટફોર્મ સાથે કનેક્ટ અને સિંક કરો",
        fr: "Connectez-vous et synchronisez-vous avec les outils et plateformes essentiels",
        ja: "重要なツールやプラットフォームと接続し同期する"
    },
    CUSTOMIZE_DETAILS: {
        en: "Customize and edit essential details",
        hi: "आवश्यक विवरण कस्टमाईज़ और संपादित करें",
        guj: "આવશ્યક વિગતોને કસ્ટમાઈઝ અને એડિટ કરો",
        fr: "Personnalisez et modifiez les détails essentiels",
        ja: "必要な詳細をカスタマイズして編集する"
    },
    MAIN: {
        en: "Main",
        hi: "मुख्य",
        guj: "મુખ્ય",
        fr: "Principal",
        ja: "メイン"
    },
    DASHBOARD: {
        en: "Dashboard",
        hi: "डैशबोर्ड",
        guj: "ડેશબોર્ડ",
        fr: "Tableau de bord",
        ja: "ダッシュボード"
    },
    BUDGET: {
        en: "Budget",
        hi: "बजट",
        guj: "બજેટ",
        fr: "Budget",
        ja: "予算"
    },
    FAMILY: {
        en: "Family",
        hi: "परिवार",
        guj: "પરિવાર",
        fr: "Famille",
        ja: "家族"
    },
    TRANSACTIONS: {
        en: "Transactions",
        hi: "लेन-देन",
        guj: "લેન-દેન",
        fr: "Transactions",
        ja: "取引"
    },
    ACCOUNTS: {
        en: "Accounts",
        hi: "खाते",
        guj: "ખાતાં",
        fr: "Comptes",
        ja: "アカウント"
    },
    NEWS: {
        en: "News",
        hi: "समाचार",
        guj: "સમાચાર",
        fr: "Nouvelles",
        ja: "ニュース"
    },
    OTHER: {
        en: "Other",
        hi: "अन्य",
        guj: "અન્ય",
        fr: "Autre",
        ja: "その他"
    },
    INTEGRATIONS: {
        en: "Integrations",
        hi: "एकीकरण",
        guj: "ઇન્ટિગ્રેશન",
        fr: "Intégrations",
        ja: "統合"
    },
    SETTINGS: {
        en: "Settings",
        hi: "सेटिंग्स",
        guj: "સેટિંગ્સ",
        fr: "Paramètres",
        ja: "設定"
    },
    LOGOUT: {
        en: "Logout",
        hi: "लॉगआउट",
        guj: "લોગઆઉટ",
        fr: "Se déconnecter",
        ja: "ログアウト"
    },
    NEED_SUPPORT: {
        en: "Need Support?",
        hi: "सहायता चाहिए?",
        guj: "મદદ જોઈએ?",
        fr: "Besoin de support?",
        ja: "サポートが必要ですか？"
    },
    CONTACT_SUPPORT: {
        en: "Contact support for assistance.",
        hi: "सहायता के लिए समर्थन से संपर्क करें।",
        guj: "મદદ માટે સપોર્ટનો સંપર્ક કરો.",
        fr: "Contactez le support pour obtenir de l'aide.",
        ja: "サポートに連絡して支援を受けてください。"
    },
    INCOME_BY_CATEGORY: {
        en: "Income by Category",
        hi: "श्रेणी के अनुसार आय",
        guj: "શ્રેણી અનુસાર આવક",
        fr: "Revenu par catégorie",
        ja: "カテゴリー別の収入"
    },
    EXPENSE_BY_CATEGORY: {
        en: "Expense by Category",
        hi: "श्रेणी के अनुसार खर्च",
        guj: "શ્રેણી અનુસાર ખર્ચ",
        fr: "Dépenses par catégorie",
        ja: "カテゴリー別の支出"
    },
    SPENDING_SUMMARY: {
        en: "Spending Summary",
        hi: "खर्च सारांश",
        guj: "ખર્ચનું સારાંશ",
        fr: "Résumé des Dépenses",
        ja: "支出の概要"
    },
    MORE_OPTIONS: {
        en: "More Options",
        hi: "अधिक विकल्प",
        guj: "વધુ વિકલ્પો",
        fr: "Plus d'options",
        ja: "さらにオプション"
    },
    SPENT: {
        en: "Spent",
        hi: "खर्च किया",
        guj: "ખર્ચ",
        fr: "Dépensé",
        ja: "支出"
    },
    ACCOUNT_BALANCE: {
        en: "Your account balance is",
        hi: "आपका खाता बैलेंस है",
        guj: "તમારું ખાતું બેલેન્સ છે",
        fr: "Votre solde de compte est",
        ja: "あなたの口座残高は"
    },
    INFO: {
        en: "Info",
        hi: "जानकारी",
        guj: "માહિતી",
        fr: "Info",
        ja: "情報"
    },
    NEWS_LABEL: {
        en: "News",
        hi: "समाचार",
        guj: "સમાચાર",
        fr: "Actualités",
        ja: "ニュース"
    },
    NO_NEWS_FOUND: {
        en: "No News Found",
        hi: "कोई समाचार नहीं मिला",
        guj: "કોઈ સમાચાર મળ્યા નથી",
        fr: "Aucune nouvelle trouvée",
        ja: "ニュースが見つかりません"
    },
    GENERAL: {
        en: "General",
        hi: "सामान्य",
        guj: "સામાન્ય",
        fr: "Général",
        ja: "一般"
    },
    FOREX: {
        en: "Forex",
        hi: "फॉरेक्स",
        guj: "ફોરેક્સ",
        fr: "Forex",
        ja: "外国為替"
    },
    CRYPTO: {
        en: "Crypto",
        hi: "क्रिप्टो",
        guj: "ક્રિપ્ટો",
        fr: "Crypto",
        ja: "暗号"
    },
    MERGER: {
        en: "Merger",
        hi: "विलय",
        guj: "મિલાવટ",
        fr: "Fusion",
        ja: "合併"
    },
    VIEW_MORE: {
        en: "View More",
        hi: "अधिक देखें",
        guj: "વધુ જુઓ",
        fr: "Voir plus",
        ja: "もっと見る"
    },
    HEALTH_SCORE_LABEL: {
        en: "Health Score",
        hi: "स्वास्थ्य स्कोर",
        guj: "હેલ્થ સ્કોર",
        fr: "Score de santé",
        ja: "健康スコア"
    },
    TOTAL_INCOME_LABEL: {
        en: "Total Income",
        hi: "कुल आय",
        guj: "કુલ આવક",
        fr: "Revenu total",
        ja: "総収入"
    },
    TOTAL_EXPENSE_LABEL: {
        en: "Total Expense",
        hi: "कुल खर्च",
        guj: "કુલ ખર્ચ",
        fr: "Dépense totale",
        ja: "総費用"
    },
    NO_ACCOUNT_SELECTED: {
        en: "No account selected",
        hi: "कोई खाता चयनित नहीं है",
        guj: "કોઈ ખાતા પસંદ કરેલ નથી",
        fr: "Aucun compte sélectionné",
        ja: "アカウントが選択されていません"
    },
    ACCOUNT_LABEL: {
        en: "Account",
        hi: "खाता",
        guj: "ખાતા",
        fr: "Compte",
        ja: "アカウント"
    },
    SETTINGS_LABEL: {
        en: "Settings",
        hi: "सेटिंग्स",
        guj: "સેટિંગ્સ",
        fr: "Paramètres",
        ja: "設定"
    },
    NOTIFICATIONS_LABEL: {
        en: "Notifications",
        hi: "सूचनाएँ",
        guj: "નોટિફિકેશન્સ",
        fr: "Notifications",
        ja: "通知"
    },
    PRIVACY_SECURITY_LABEL: {
        en: "Privacy & Security",
        hi: "गोपनीयता और सुरक्षा",
        guj: "ગોપનીયતા અને સુરક્ષા",
        fr: "Confidentialité et sécurité",
        ja: "プライバシーとセキュリティ"
    },
    LOCALIZATION_LABEL: {
        en: "Localization",
        hi: "स्थानीयकरण",
        guj: "સ્થાનિકકરણ",
        fr: "Localisation",
        ja: "ローカリゼーション"
    },
    PROFILE_PHOTO_LABEL: {
        en: "Profile Photo",
        hi: "प्रोफाइल फोटो",
        guj: "પ્રોફાઈલ ફોટો",
        fr: "Photo de profil",
        ja: "プロフィール写真"
    },
    FULL_NAME_LABEL: {
        en: "Full Name",
        hi: "पूरा नाम",
        guj: "પૂર્ણ નામ",
        fr: "Nom complet",
        ja: "フルネーム"
    },
    EMAIL_LABEL: {
        en: "Email Address",
        hi: "ईमेल पता",
        guj: "ઈમેલ સરનામું",
        fr: "Adresse e-mail",
        ja: "メールアドレス"
    },
    PHONE_LABEL: {
        en: "Phone Number",
        hi: "फोन नंबर",
        guj: "ફોન નંબર",
        fr: "Numéro de téléphone",
        ja: "電話番号"
    },
    ADDRESS_LABEL: {
        en: "Address",
        hi: "पता",
        guj: "સરનામું",
        fr: "Adresse",
        ja: "住所"
    },
    CHANGE_LABEL: {
        en: "Change",
        hi: "बदलें",
        guj: "બદલો",
        fr: "Changer",
        ja: "変更"
    },
    EDIT_LABEL: {
        en: "Edit",
        hi: "संपादित करें",
        guj: "સંપાદિત કરો",
        fr: "Éditer",
        ja: "編集"
    },
    ADD_LABEL: {
        en: "Add",
        hi: "जोड़ें",
        guj: "જોડો",
        fr: "Ajouter",
        ja: "追加"
    },
    CANCEL_LABEL: {
        en: "Cancel",
        hi: "रद्द करें",
        guj: "રદ કરો",
        fr: "Annuler",
        ja: "キャンセル"
    },
    SAVE_LABEL: {
        en: "Save",
        hi: "सहेजें",
        guj: "સેવ કરો",
        fr: "Sauvegarder",
        ja: "保存"
    },
    LANGUAGE_SETTINGS_LABEL: {
        en: "Language Settings",
        hi: "भाषा सेटिंग्स",
        guj: "ભાષા સેટિંગ્સ",
        fr: "Paramètres de langue",
        ja: "言語設定"
    },
    THEME_LABEL: {
        en: "Theme",
        hi: "थीम",
        guj: "થીમ",
        fr: "Thème",
        ja: "テーマ"
    },
    WEB_CONTACTS_LABEL: {
        en: "Web Contacts",
        hi: "वेब संपर्क",
        guj: "વેબ સંપર્કો",
        fr: "Contacts web",
        ja: "ウェブコンタクト"
    },
    API_TOKEN_LABEL: {
        en: "API Token",
        hi: "एपीआई टोकन",
        guj: "એપીઆઈ ટોકન",
        fr: "Jeton API",
        ja: "APIトークン"
    },
    SECURE_COMMUNICATION_CODE_LABEL: {
        en: "Secure Communication Code",
        hi: "सुरक्षित संचार कोड",
        guj: "સુરક્ષિત સંચાર કોડ",
        fr: "Code de communication sécurisé",
        ja: "安全な通信コード"
    },
    CLOSE_ACCOUNT_LABEL: {
        en: "Close Your Account",
        hi: "अपना खाता बंद करें",
        guj: "તમારું ખાતું બંધ કરો",
        fr: "Fermer votre compte",
        ja: "アカウントを閉じる"
    },
    OPEN_WEB_CONTACTS_LABEL: {
        en: "Open Web Contacts",
        hi: "वेब संपर्क खोलें",
        guj: "વેબ સંપર્કો ખોલો",
        fr: "Ouvrir les contacts web",
        ja: "ウェブコンタクトを開く"
    },
    OPEN_API_TOKEN_LABEL: {
        en: "Open API Token",
        hi: "एपीआई टोकन खोलें",
        guj: "એપીઆઈ ટોકન ખોલો",
        fr: "Ouvrir le jeton API",
        ja: "APIトークンを開く"
    },
    CREATE_COMMUNICATION_CODE_LABEL: {
        en: "Create Communication Code",
        hi: "संचार कोड बनाएं",
        guj: "સંચાર કોડ બનાવો",
        fr: "Créer un code de communication",
        ja: "通信コードを作成"
    },
    CLOSE_LABEL: {
        en: "Close",
        hi: "बंद करें",
        guj: "બંધ કરો",
        fr: "Fermer",
        ja: "閉じる"
    },
    LANGUAGE_SETTINGS_DESCRIPTION_LABEL: {
        en: "Display the app in your selected language.",
        hi: "आपकी चुनी हुई भाषा में ऐप प्रदर्शित करें।",
        guj: "તમારી પસંદ કરેલ ભાષામાં એપ્લિકેશન પ્રદર્શિત કરો.",
        fr: "Affichez l'application dans la langue sélectionnée.",
        ja: "選択した言語でアプリを表示します。"
    },
    THEME_DESCRIPTION_LABEL: {
        en: "Select the app theme.",
        hi: "ऐप का थीम चुनें।",
        guj: "એપ્લિકેશનનું થીમ પસંદ કરો.",
        fr: "Sélectionnez le thème de l'application.",
        ja: "アプリのテーマを選択します。"
    },
    WEB_CONTACTS_DESCRIPTION_LABEL: {
        en: "Set unique code that appears on all PFIM communications from us to you.",
        hi: "हमसे आपको भेजी गई सभी PFIM संवादों में दिखाई देने वाला अद्वितीय कोड सेट करें।",
        guj: "અમારી તરફથી તમને મોકલવામાં આવેલી તમામ PFIM સંપ્રેક્ષણોમાં દેખાતો અનન્ય કોડ સેટ કરો.",
        fr: "Définissez un code unique qui apparaît dans toutes les communications PFIM de notre part à votre attention.",
        ja: "私たちからあなたへのすべてのPFIM通信に表示されるユニークコードを設定します。"
    },
    API_TOKEN_DESCRIPTION_LABEL: {
        en: "Set unique code that appears on all PFIM communications from us to you.",
        hi: "हमसे आपको भेजी गई सभी PFIM संवादों में दिखाई देने वाला अद्वितीय कोड सेट करें।",
        guj: "અમારી તરફથી તમને મોકલવામાં આવેલી તમામ PFIM સંપ્રેક્ષણોમાં દેખાતો અનન્ય કોડ સેટ કરો.",
        fr: "Définissez un code unique qui apparaît dans toutes les communications PFIM de notre part à votre attention.",
        ja: "私たちからあなたへのすべてのPFIM通信に表示されるユニークコードを設定します。"
    },
    SECURE_COMMUNICATION_CODE_DESCRIPTION_LABEL: {
        en: "Set unique code that appears on all PFIM communications from us to you.",
        hi: "हमसे आपको भेजी गई सभी PFIM संवादों में दिखाई देने वाला अद्वितीय कोड सेट करें।",
        guj: "અમારી તરફથી તમને મોકલવામાં આવેલી તમામ PFIM સંપ્રેક્ષણોમાં દેખાતો અનન્ય કોડ સેટ કરો.",
        fr: "Définissez un code unique qui apparaît dans toutes les communications PFIM de notre part à votre attention.",
        ja: "私たちからあなたへのすべてのPFIM通信に表示されるユニークコードを設定します。"
    },
    GENERAL_NOTIFICATIONS_LABEL: {
        en: "General Notifications",
        hi: "सामान्य सूचनाएँ",
        guj: "સામાન્ય સૂચનાઓ",
        fr: "Notifications générales",
        ja: "一般通知"
    },
    GENERAL_NOTIFICATIONS_DESCRIPTION_LABEL: {
        en: "Notifications about transactions, balance, and exclusive offers.",
        hi: "लेन-देन, बैलेंस और विशेष ऑफ़रों के बारे में सूचनाएँ।",
        guj: "લેણદેણ, બેલેન્સ અને વિશિષ્ટ ઑફર્સ વિશેની સૂચનાઓ.",
        fr: "Notifications concernant les transactions, le solde et les offres exclusives.",
        ja: "取引、残高、独占オファーに関する通知。"
    },
    TRANSACTION_ALERTS_LABEL: {
        en: "Transaction Alerts",
        hi: "लेन-देन सूचनाएँ",
        guj: "લેણદેણ એલર્ટ",
        fr: "Alertes de transaction",
        ja: "取引アラート"
    },
    TRANSACTION_ALERTS_DESCRIPTION_LABEL: {
        en: "Receive notifications about transactions by email.",
        hi: "ईमेल के माध्यम से लेन-देन के बारे में सूचनाएँ प्राप्त करें।",
        guj: "ઇમેઇલ દ્વારા લેણદેણ વિશે સૂચનાઓ મેળવો.",
        fr: "Recevez des notifications sur les transactions par e-mail.",
        ja: "取引に関する通知をメールで受け取る。"
    },
    LOW_BALANCE_ALERTS_LABEL: {
        en: "Low Balance Alerts",
        hi: "कम बैलेंस सूचनाएँ",
        guj: "કોમ્પલિ બેલેન્સ એલર્ટ",
        fr: "Alertes de solde bas",
        ja: "残高不足アラート"
    },
    LOW_BALANCE_ALERTS_DESCRIPTION_LABEL: {
        en: "Receive notifications about low balance by SMS.",
        hi: "एसएमएस के माध्यम से कम बैलेंस की सूचनाएँ प्राप्त करें।",
        guj: "એસએમએસ દ્વારા નીચા બેલેન્સ અંગે સૂચનાઓ મેળવો.",
        fr: "Recevez des notifications sur le solde faible par SMS.",
        ja: "低バランスに関する通知をSMSで受け取る。"
    },
    EXCLUSIVE_OFFERS_ALERTS_LABEL: {
        en: "Exclusive Offers",
        hi: "विशेष ऑफ़र्स",
        guj: "વિશિષ્ટ ઓફરો",
        fr: "Offres exclusives",
        ja: "限定オファー"
    },
    EXCLUSIVE_OFFERS_ALERTS_DESCRIPTION_LABEL: {
        en: "Receive notifications about exclusive offers by SMS.",
        hi: "एसएमएस के माध्यम से विशेष ऑफ़रों के बारे में सूचनाएँ प्राप्त करें।",
        guj: "એસએમએસ દ્વારા વિશિષ્ટ ઓફરો વિશે સૂચનાઓ મેળવો.",
        fr: "Recevez des notifications sur les offres exclusives par SMS.",
        ja: "限定オファーに関する通知をSMSで受け取る。"
    },
    NOTIFICATION_METHOD_LABEL: {
        en: "Notification Method",
        hi: "सूचना विधि",
        guj: "સૂચના પદ્ધતિ",
        fr: "Méthode de notification",
        ja: "通知方法"
    },
    NOTIFICATION_METHOD_DESCRIPTION_LABEL: {
        en: "Choose how you prefer to receive notifications.",
        hi: "आपको सूचनाएँ प्राप्त करने का तरीका चुनें।",
        guj: "તમારા માટે સૂચનાઓ પ્રાપ્ત કરવાનો વિકલ્પ પસંદ કરો.",
        fr: "Choisissez comment vous préférez recevoir les notifications.",
        ja: "通知を受け取る方法を選択してください。"
    },
    INVALID_LOW_BALANCE_VALUE_ERROR: {
        en: "Please enter a valid value between 0 and 1.",
        hi: "कृपया 0 और 1 के बीच एक मान दर्ज करें।",
        guj: "કૃપા કરીને 0 અને 1 વચ્ચે માન્ય મૂલ્ય દાખલ કરો.",
        fr: "Veuillez entrer une valeur valide entre 0 et 1.",
        ja: "0と1の間で有効な値を入力してください。"
    },
    EMAIL_NOTIFICATIONS_LABEL: {
        en: "Email Notifications",
        hi: "ईमेल सूचनाएँ",
        guj: "ઇમેઇલ સૂચનાઓ",
        fr: "Notifications par e-mail",
        ja: "メール通知"
    },
    EMAIL_NOTIFICATIONS_DESCRIPTION_LABEL: {
        en: "Receive notifications by email.",
        hi: "ईमेल द्वारा सूचनाएँ प्राप्त करें।",
        guj: "ઇમેઇલ દ્વારા સૂચનાઓ મેળવો.",
        fr: "Recevez des notifications par e-mail.",
        ja: "メールで通知を受け取る。"
    },
    SMS_NOTIFICATIONS_LABEL: {
        en: "SMS Notifications",
        hi: "एसएमएस सूचनाएँ",
        guj: "એસએમએસ સૂચનાઓ",
        fr: "Notifications par SMS",
        ja: "SMS通知"
    },
    SMS_NOTIFICATIONS_DESCRIPTION_LABEL: {
        en: "Receive notifications by SMS.",
        hi: "एसएमएस के माध्यम से सूचनाएँ प्राप्त करें।",
        guj: "એસએમએસ દ્વારા સૂચનાઓ મેળવો.",
        fr: "Recevez des notifications par SMS.",
        ja: "SMSで通知を受け取る。"
    },
    CHANGE_PASSWORD_LABEL: {
        en: "Change Password",
        hi: "पासवर्ड बदलें",
        guj: "પાસવર્ડ બદલો",
        fr: "Changer le mot de passe",
        ja: "パスワードを変更"
    },
    CHANGE_PASSWORD_DESCRIPTION_LABEL: {
        en: "Change your password if you think your password is not protected.",
        hi: "अगर आपको लगता है कि आपका पासवर्ड सुरक्षित नहीं है, तो इसे बदलें।",
        guj: "જો તમને લાગે છે કે તમારું પાસવર્ડ સુરક્ષિત નથી, તો તેને બદલાવ.",
        fr: "Changez votre mot de passe si vous pensez qu'il n'est pas protégé.",
        ja: "パスワードが保護されていないと思う場合は、パスワードを変更してください。"
    },
    BACKUP_CODES_LABEL: {
        en: "Backup Codes",
        hi: "बैकअप कोड",
        guj: "બેકઅપ કોડ",
        fr: "Codes de secours",
        ja: "バックアップコード"
    },
    BACKUP_CODES_DESCRIPTION_LABEL: {
        en: "Create and store new backup codes for use in the event of losing access to your authentication app.",
        hi: "अपनी प्रमाणीकरण ऐप तक पहुंच खोने की स्थिति में उपयोग के लिए नए बैकअप कोड बनाएं और स्टोर करें।",
        guj: "તમારા ઓથન્ટિકેશન એપ્લિકેશનનો ઍક્સેસ ગુમાવાની સ્થિતિમાં ઉપયોગ માટે નવા બેકઅપ કોડ બનાવો અને સ્ટોર કરો.",
        fr: "Créez et stockez de nouveaux codes de secours pour une utilisation en cas de perte d'accès à votre application d'authentification.",
        ja: "認証アプリへのアクセスを失った場合に使用する新しいバックアップコードを作成して保存します。"
    },
    TWO_STEP_VERIFICATION_LABEL: {
        en: "Two Step Verification",
        hi: "दो-चरण सत्यापन",
        guj: "દ્વિ-પદ ઘટક પુષ્ટિ",
        fr: "Vérification en deux étapes",
        ja: "二段階認証"
    },
    TWO_STEP_VERIFICATION_DESCRIPTION_LABEL: {
        en: "We use two step verification when we need to check if it's really you using your account.",
        hi: "हम दो-चरण सत्यापन का उपयोग करते हैं जब हमें यह जांचने की आवश्यकता होती है कि क्या यह वास्तव में आप हैं जो अपना खाता उपयोग कर रहे हैं।",
        guj: "અમે બે-સ્તરીય પુષ્ટિનો ઉપયોગ કરીએ છીએ જ્યારે અમારે ચકાસવું હોય છે કે શું આ વાસ્તવમાં તમે તમારા એકાઉન્ટનો ઉપયોગ કરી રહ્યા છો.",
        fr: "Nous utilisons la vérification en deux étapes lorsque nous devons vérifier si c'est vraiment vous qui utilisez votre compte.",
        ja: "アカウントを使用しているのが本当にあなたであるかどうかを確認するために、二段階認証を使用します。"
    },
    AUTHENTICATOR_APP_LABEL: {
        en: "Authenticator App",
        hi: "प्रमाणीकरण ऐप",
        guj: "ઓથન્ટિકેટર એપ્લિકેશન",
        fr: "Application d'authentification",
        ja: "認証アプリ"
    },
    AUTHENTICATOR_APP_DESCRIPTION_LABEL: {
        en: "Use an authenticator app for two-step verification.",
        hi: "दो-चरण सत्यापन के लिए एक प्रमाणीकरण ऐप का उपयोग करें।",
        guj: "બે-સ્તરીય પુષ્ટિ માટે ઓથન્ટિકેટર એપ્લિકેશનનો ઉપયોગ કરો.",
        fr: "Utilisez une application d'authentification pour la vérification en deux étapes.",
        ja: "二段階認証のために認証アプリを使用します。"
    },
    GENERATE_CODES_LABEL: {
        en: "Generate Codes",
        hi: "कोड उत्पन्न करें",
        guj: "કોડ જનરેટ કરો",
        fr: "Générer les codes",
        ja: "コードを生成"
    },
    CURRENCY_LABEL: {
        en: "Currency",
        hi: "मुद्रा",
        guj: "કરન્સી",
        fr: "Monnaie",
        ja: "通貨"
    },
    CURRENCY_DESCRIPTION_LABEL: {
        en: "Choose your preferred currency.",
        hi: "अपनी पसंदीदा मुद्रा चुनें।",
        guj: "તમારી પસંદગીઓના કરન્સી પસંદ કરો.",
        fr: "Choisissez votre devise préférée.",
        ja: "希望する通貨を選んでください。"
    },
    TIMEZONE_LABEL: {
        en: "Timezone",
        hi: "समय क्षेत्र",
        guj: "ટાઇમઝોન",
        fr: "Fuseau horaire",
        ja: "タイムゾーン"
    },
    TIMEZONE_DESCRIPTION_LABEL: {
        en: "Choose your timezone and preferred format.",
        hi: "अपना समय क्षेत्र और पसंदीदा प्रारूप चुनें।",
        guj: "તમારા ટાઇમઝોન અને પસંદગીનું ફોર્મેટ પસંદ કરો.",
        fr: "Choisissez votre fuseau horaire et votre format préféré.",
        ja: "希望のタイムゾーンと形式を選択してください。"
    },
    DATE_FORMAT_LABEL: {
        en: "Date Format",
        hi: "तारीख प्रारूप",
        guj: "તારીખ ફોર્મેટ",
        fr: "Format de la date",
        ja: "日付形式"
    },
    DATE_FORMAT_DESCRIPTION_LABEL: {
        en: "Choose your preferred data format.",
        hi: "अपना पसंदीदा डेटा प्रारूप चुनें।",
        guj: "તમારો પસંદગીનો તારીખ ફોર્મેટ પસંદ કરો.",
        fr: "Choisissez votre format de date préféré.",
        ja: "希望する日付形式を選んでください。"
    },
    CURRENCY_OPTIONS: {
        en: {
            GBP: "United Kingdom Pound Sterling",
            INR: "Indian Rupee",
            USD: "United States Dollar"
        },
        hi: {
            GBP: "ब्रिटेन पाउंड स्टर्लिंग",
            INR: "भारतीय रुपया",
            USD: "संयुक्त राज्य डॉलर"
        },
        guj: {
            GBP: "યુનાઇટેડ કિંગડમ પાઉન્ડ સ્ટર્લિંગ",
            INR: "ભારતીય રૂપિયો",
            USD: "યુનાઇટેડ સ્ટેટ્સ ડોલર"
        },
        fr: {
            GBP: "Livre sterling britannique",
            INR: "Rupee indien",
            USD: "Dollar américain"
        },
        ja: {
            GBP: "イギリスポンド",
            INR: "インドルピー",
            USD: "アメリカドル"
        }
    },

    TIMEZONE_OPTIONS: {
        en: {
            UTC_00_12: "UTC+00.00, 12-Hours Format",
            UTC_05_30_12: "UTC+05:30, 12-Hours Format",
            UTC_00_24: "UTC+00.00, 24-Hours Format",
            UTC_05_30_24: "UTC+05:30, 24-Hours Format"
        },
        hi: {
            UTC_00_12: "UTC+00.00, 12-घंटे प्रारूप",
            UTC_05_30_12: "UTC+05:30, 12-घंटे प्रारूप",
            UTC_00_24: "UTC+00.00, 24-घंटे प्रारूप",
            UTC_05_30_24: "UTC+05:30, 24-घंटे प्रारूप"
        },
        guj: {
            UTC_00_12: "UTC+00.00, 12-કલાક ફોર્મેટ",
            UTC_05_30_12: "UTC+05:30, 12-કલાક ફોર્મેટ",
            UTC_00_24: "UTC+00.00, 24-કલાક ફોર્મેટ",
            UTC_05_30_24: "UTC+05:30, 24-કલાક ફોર્મેટ"
        },
        fr: {
            UTC_00_12: "UTC+00.00, format 12 heures",
            UTC_05_30_12: "UTC+05.30, format 12 heures",
            UTC_00_24: "UTC+00.00, format 24 heures",
            UTC_05_30_24: "UTC+05.30, format 24 heures"
        },
        ja: {
            UTC_00_12: "UTC+00.00, 12時間形式",
            UTC_05_30_12: "UTC+05.30, 12時間形式",
            UTC_00_24: "UTC+00.00, 24時間形式",
            UTC_05_30_24: "UTC+05.30, 24時間形式"
        }
    },

    DATE_FORMAT_OPTIONS: {
        en: {
            DD_MM_YYYY: "DD/MM/YYYY",
            DD_MM_YY: "DD-MM-YY",
            YYYY_MM_DD: "YYYY/MM/DD",
            MM_DD_YYYY: "MM/DD/YYYY"
        },
        hi: {
            DD_MM_YYYY: "DD/MM/YYYY",
            DD_MM_YY: "DD-MM-YY",
            YYYY_MM_DD: "YYYY/MM/DD",
            MM_DD_YYYY: "MM/DD/YYYY"
        },
        guj: {
            DD_MM_YYYY: "DD/MM/YYYY",
            DD_MM_YY: "DD-MM-YY",
            YYYY_MM_DD: "YYYY/MM/DD",
            MM_DD_YYYY: "MM/DD/YYYY"
        },
        fr: {
            DD_MM_YYYY: "DD/MM/YYYY",
            DD_MM_YY: "DD-MM-YY",
            YYYY_MM_DD: "YYYY/MM/DD",
            MM_DD_YYYY: "MM/DD/YYYY"
        },
        ja: {
            DD_MM_YYYY: "DD/MM/YYYY",
            DD_MM_YY: "DD-MM-YY",
            YYYY_MM_DD: "YYYY/MM/DD",
            MM_DD_YYYY: "MM/DD/YYYY"
        }
    }
};

export default constants;
