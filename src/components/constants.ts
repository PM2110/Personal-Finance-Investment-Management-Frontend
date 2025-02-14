export const getConstant = (key: string, lang: string = "en"): string => {
    return constants[key]?.[lang] || "";
};

const constants: { [key: string]: { [lang: string]: string } } = {
    
    // Account Code Form
    
    ENTER6DIGCODE: {
        en: "Enter 6 digit code",
        hi: "6 अंकों का कोड दर्ज करें",
        gu: "6 અંકનો કોડ દાખલ કરો",
        fr: "Entrez le code à 6 chiffres",
        ja: "6桁のコードを入力してください"
    },
    WESENDITTO: {
        en: "We send it to ",
        hi: "हम इसे भेजते हैं ",
        gu: "અમે તેને મોકલીએ છીએ ",
        fr: "Nous l'envoyons à ",
        ja: "私たちはそれを送ります "
    },
    YOUR6DIGCODE: {
        en: "Your 6 digit code",
        hi: "आपका 6 अंकों का कोड",
        gu: "તમારો 6 અંકનો કોડ",
        fr: "Votre code à 6 chiffres",
        ja: "あなたの6桁のコード"
    },
    SUBMIT: {
        en: "Submit",
        hi: "प्रस्तुत",
        gu: "સબમિટ",
        fr: "Soumettre",
        ja: "提出する"
    },
    DIDNTRECCODE: {
        en: "Didn't receive a code?",
        hi: "कोड प्राप्त नहीं हुआ?",
        gu: "કોડ પ્રાપ્ત થયો નથી?",
        fr: "Vous n'avez pas reçu de code?",
        ja: "コードを受け取りませんでしたか？"
    },
    CHANGE: {
        en: "Change",
        hi: "बदलें",
        gu: "બદલો",
        fr: "Changer",
        ja: "変更"
    },

    // Account Country Form
    YOURCNTRYRES: {
        en: "Your country of primary residence",
        hi: "आपका प्राथमिक निवास देश",
        gu: "તમારો મુખ્ય નિવાસ દેશ",
        fr: "Votre pays de résidence principale",
        ja: "あなたの主な居住国"
    },
    YOUCANADDACC: {
        en: "You can add another account later on, too.",
        hi: "आप बाद में एक और खाता जोड़ सकते हैं।",
        gu: "તમે પછીથી બીજું ખાતું પણ ઉમેરી શકો છો.",
        fr: "Vous pouvez ajouter un autre compte plus tard.",
        ja: "後で別のアカウントを追加することもできます。"
    },
    CHOOSECOUNTRY: {
        en: "Choose Country",
        hi: "देश चुनें",
        gu: "દેશ પસંદ કરો",
        fr: "Choisissez le pays",
        ja: "国を選択"
    },
    CONTINUE: {
        en: "Continue",
        hi: "जारी रखें",
        gu: "ચાલુ રાખો",
        fr: "Continuer",
        ja: "続ける"
    },

    // Email Verification Component
    TOLOGIN: {
        en: "To login, check your email",
        hi: "लॉगिन करने के लिए, अपना ईमेल जांचें",
        gu: "લૉગિન કરવા માટે, તમારું ઇમેઇલ તપાસો",
        fr: "Pour vous connecter, vérifiez votre e-mail",
        ja: "ログインするには、メールを確認してください"
    },
    FORSECURITY: {
        en: "For security, we've sent you an email to ",
        hi: "सुरक्षा के लिए, हमने आपको एक ईमेल भेजा है ",
        gu: "સુરક્ષા માટે, અમે તમને એક ઇમેઇલ મોકલ્યો છે ",
        fr: "Pour des raisons de sécurité, nous vous avons envoyé un e-mail à ",
        ja: "セキュリティのために、あなたにメールを送りました "
    },
    SIMPLYCLICK: {
        en: "Simply click the link in the email and you'll be set.",
        hi: "बस ईमेल में लिंक पर क्लिक करें और आप सेट हो जाएंगे।",
        gu: "માત્ર ઇમેઇલમાં લિંક પર ક્લિક કરો અને તમે સેટ થઈ જશો.",
        fr: "Cliquez simplement sur le lien dans l'e-mail et vous serez prêt.",
        ja: "メール内のリンクをクリックするだけで設定完了です。"
    },
    DIDNTGETEMAIL: {
        en: "Didn't get an email?",
        hi: "ईमेल प्राप्त नहीं हुआ?",
        gu: "ઇમેઇલ પ્રાપ્ત થયો નથી?",
        fr: "Vous n'avez pas reçu d'e-mail?",
        ja: "メールが届きませんでしたか？"
    },
    SENDITAGAIN: {
        en: "Send it again",
        hi: "इसे फिर से भेजें",
        gu: "ફરીથી મોકલો",
        fr: "Renvoyez-le",
        ja: "もう一度送信"
    },

    // Email Verified Component
    EMAILVERIFIED: {
        en: "Email Verified",
        hi: "ईमेल सत्यापित",
        gu: "ઇમેઇલ ચકાસાયેલ",
        fr: "E-mail vérifié",
        ja: "メール確認済み"
    },
    YOUREMAILVERIFIED: {
        en: "Your email address ",
        hi: "आपका ईमेल पता ",
        gu: "તમારું ઇમેઇલ સરનામું ",
        fr: "Votre adresse e-mail ",
        ja: "あなたのメールアドレス "
    },
    HASBEENVERIFIED: {
        en: " has been verified. In the future, you need to use this email address when logging in to ",
        hi: " सत्यापित हो गया है। भविष्य में, आपको लॉगिन करते समय इस ईमेल पते का उपयोग करना होगा ",
        gu: " ચકાસાયેલ છે. ભવિષ્યમાં, તમારે લૉગિન કરતી વખતે આ ઇમેઇલ સરનામું વાપરવું પડશે ",
        fr: " a été vérifié. À l'avenir, vous devrez utiliser cette adresse e-mail pour vous connecter à ",
        ja: " が確認されました。今後、ログインする際にはこのメールアドレスを使用する必要があります "
    },
    PFIM: {
        en: "PFIM",
        hi: "पीएफआईएम",
        gu: "પીએફઆઈએમ",
        fr: "PFIM",
        ja: "PFIM"
    },

    // Success Link Sent Component
    SUCCESSLINKSENT: {
        en: "Success send a link",
        hi: "सफलता लिंक भेजें",
        gu: "સફળતા લિંક મોકલો",
        fr: "Lien envoyé avec succès",
        ja: "リンク送信成功"
    },
    OPENLINK: {
        en: "Open link at your email and reset your password and make a new password again.",
        hi: "अपने ईमेल पर लिंक खोलें और अपना पासवर्ड रीसेट करें और फिर से नया पासवर्ड बनाएं।",
        gu: "તમારા ઇમેઇલ પર લિંક ખોલો અને તમારો પાસવર્ડ રીસેટ કરો અને ફરીથી નવો પાસવર્ડ બનાવો.",
        fr: "Ouvrez le lien dans votre e-mail et réinitialisez votre mot de passe et créez un nouveau mot de passe.",
        ja: "メールのリンクを開いてパスワードをリセットし、再度新しいパスワードを作成してください。"
    },

    // Sign In Form
    LOGINTOYOURACCOUNT: {
        en: "Login to your account",
        hi: "अपने खाते में लॉगिन करें",
        gu: "તમારા ખાતામાં લૉગિન કરો",
        fr: "Connectez-vous à votre compte",
        ja: "アカウントにログイン"
    },
    ENTERYOURDETAILS: {
        en: "Enter your details to login.",
        hi: "लॉगिन करने के लिए अपने विवरण दर्ज करें।",
        gu: "લૉગિન કરવા માટે તમારો વિગત દાખલ કરો.",
        fr: "Entrez vos coordonnées pour vous connecter.",
        ja: "ログインするための詳細を入力してください。"
    },
    EMAIL: {
        en: "Email",
        hi: "ईमेल",
        gu: "ઇમેઇલ",
        fr: "E-mail",
        ja: "メール"
    },
    PASSWORD: {
        en: "Password",
        hi: "पासवर्ड",
        gu: "પાસવર્ડ",
        fr: "Mot de passe",
        ja: "パスワード"
    },
    SIGNIN: {
        en: "Sign In",
        hi: "साइन इन करें",
        gu: "સાઇન ઇન કરો",
        fr: "Se connecter",
        ja: "サインイン"
    },

    // Forgot Password Form
    FORGOTYOURPASSWORD: {
        en: "Forgot Your Password",
        hi: "अपना पासवर्ड भूल गए",
        gu: "તમારો પાસવર્ડ ભૂલી ગયા છો",
        fr: "Mot de passe oublié",
        ja: "パスワードをお忘れですか"
    },
    ENTERYOUREMAIL: {
        en: "Enter your email and we will send you a link to reset your password.",
        hi: "अपना ईमेल दर्ज करें और हम आपको अपना पासवर्ड रीसेट करने के लिए एक लिंक भेजेंगे।",
        gu: "તમારું ઇમેઇલ દાખલ કરો અને અમે તમને તમારો પાસવર્ડ રીસેટ કરવા માટે એક લિંક મોકલશું.",
        fr: "Entrez votre e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
        ja: "メールアドレスを入力すると、パスワードをリセットするためのリンクが送信されます。"
    },
    SENDEMAIL: {
        en: "Send Email",
        hi: "ईमेल भेजें",
        gu: "ઇમેઇલ મોકલો",
        fr: "Envoyer un e-mail",
        ja: "メールを送信"
    },

    // Footer Sign In Component
    PERSONALFINANCE: {
        en: "Personal Finance & Investment Manager",
        hi: "व्यक्तिगत वित्त और निवेश प्रबंधक",
        gu: "વ્યક્તિગત નાણાકીય અને રોકાણ મેનેજર",
        fr: "Gestionnaire de finances personnelles et d'investissement",
        ja: "個人財務および投資マネージャー"
    },

    // Other Settings Component
    LANGUAGESETTINGS: {
        en: "Language Settings",
        hi: "भाषा सेटिंग्स",
        gu: "ભાષા સેટિંગ્સ",
        fr: "Paramètres de langue",
        ja: "言語設定"
    },
    DISPLAYTHEAPP: {
        en: "Display the app in your selected language.",
        hi: "अपने चयनित भाषा में ऐप प्रदर्शित करें।",
        gu: "તમારી પસંદ કરેલી ભાષામાં એપ્લિકેશન પ્રદર્શિત કરો.",
        fr: "Affichez l'application dans la langue sélectionnée.",
        ja: "選択した言語でアプリを表示します。"
    },
    THEME: {
        en: "Theme",
        hi: "थीम",
        gu: "થીમ",
        fr: "Thème",
        ja: "テーマ"
    },
    SETUNIQUECODE: {
        en: "Set unique code that appears on all PFIM communications from us to you.",
        hi: "हमसे आपके लिए सभी पीएफआईएम संचार पर दिखाई देने वाला अद्वितीय कोड सेट करें।",
        gu: "અમારી તરફથી તમારા માટે તમામ PFIM સંચાર પર દેખાતો અનન્ય કોડ સેટ કરો.",
        fr: "Définissez un code unique qui apparaît sur toutes les communications PFIM de nous à vous.",
        ja: "私たちからあなたへのすべてのPFIM通信に表示される一意のコードを設定します。"
    },

    // Other Settings Privacy Security Component
    CHANGEPASSWORD: {
        en: "Change Password",
        hi: "पासवर्ड बदलें",
        gu: "પાસવર્ડ બદલો",
        fr: "Changer le mot de passe",
        ja: "パスワードを変更する"
    },
    CHANGEPASSWORDDESC: {
        en: "Change your password if you think your password is not protected.",
        hi: "यदि आपको लगता है कि आपका पासवर्ड सुरक्षित नहीं है तो अपना पासवर्ड बदलें।",
        gu: "જો તમને લાગે છે કે તમારો પાસવર્ડ સુરક્ષિત નથી તો તમારો પાસવર્ડ બદલો.",
        fr: "Changez votre mot de passe si vous pensez que votre mot de passe n'est pas protégé.",
        ja: "パスワードが保護されていないと思われる場合は、パスワードを変更してください。"
    },
    BACKUPCODES: {
        en: "Backup Codes",
        hi: "बैकअप कोड",
        gu: "બેકઅપ કોડ",
        fr: "Codes de sauvegarde",
        ja: "バックアップコード"
    },
    BACKUPCODESDESC: {
        en: "Create and store new backup codes for use in the event of losing access to your authentication app.",
        hi: "अपने प्रमाणीकरण ऐप तक पहुंच खोने की स्थिति में उपयोग के लिए नए बैकअप कोड बनाएं और संग्रहीत करें।",
        gu: "તમારા પ્રામાણિકતા એપ્લિકેશન સુધીની ઍક્સેસ ગુમાવવાના કિસ્સામાં ઉપયોગ માટે નવા બેકઅપ કોડ બનાવો અને સંગ્રહ કરો.",
        fr: "Créez et stockez de nouveaux codes de sauvegarde à utiliser en cas de perte d'accès à votre application d'authentification.",
        ja: "認証アプリへのアクセスを失った場合に使用するための新しいバックアップコードを作成して保存します。"
    },
    TWOSTEPVERIFICATION: {
        en: "Two Step Verification",
        hi: "दो चरण सत्यापन",
        gu: "બે પગલાની ચકાસણી",
        fr: "Vérification en deux étapes",
        ja: "二段階認証"
    },
    TWOSTEPVERIFICATIONDESC: {
        en: "We use two step verification when we need to check it's really you using your account.",
        hi: "हम दो चरण सत्यापन का उपयोग करते हैं जब हमें यह जांचने की आवश्यकता होती है कि वास्तव में आप अपने खाते का उपयोग कर रहे हैं।",
        gu: "જ્યારે અમારે ચકાસવું હોય કે તમે ખરેખર તમારું ખાતું વાપરી રહ્યા છો ત્યારે અમે બે પગલાની ચકાસણીનો ઉપયોગ કરીએ છીએ.",
        fr: "Nous utilisons la vérification en deux étapes lorsque nous devons vérifier que c'est bien vous qui utilisez votre compte.",
        ja: "アカウントを使用しているのが本当にあなたであることを確認する必要がある場合に、二段階認証を使用します。"
    },

    // Other Settings Notifications Component
    GENERALNOTIFICATIONS: {
        en: "General Notifications",
        hi: "सामान्य सूचनाएं",
        gu: "સામાન્ય સૂચનાઓ",
        fr: "Notifications générales",
        ja: "一般通知"
    },
    GENERALNOTIFICATIONSDESC: {
        en: "Notifications about transactions, balance and exclusive offers.",
        hi: "लेनदेन, शेष राशि और विशेष ऑफ़र के बारे में सूचनाएं।",
        gu: "લેણદેણ, બેલેન્સ અને વિશિષ્ટ ઓફર્સ વિશેની સૂચનાઓ.",
        fr: "Notifications sur les transactions, le solde et les offres exclusives.",
        ja: "取引、残高、限定オファーに関する通知。"
    },
    NOTIFICATIONMETHOD: {
        en: "Notification Method",
        hi: "सूचना विधि",
        gu: "સૂચના પદ્ધતિ",
        fr: "Méthode de notification",
        ja: "通知方法"
    },
    NOTIFICATIONMETHODDESC: {
        en: "Choose how you prefer to receive notifications.",
        hi: "आप सूचनाएं प्राप्त करने का तरीका चुनें।",
        gu: "તમે સૂચનાઓ કેવી રીતે પ્રાપ્ત કરવી પસંદ કરો તે પસંદ કરો.",
        fr: "Choisissez comment vous préférez recevoir les notifications.",
        ja: "通知の受け取り方法を選択してください。"
    },

    // Other Settings Localization Component
    CURRENCY: {
        en: "Currency",
        hi: "मुद्रा",
        gu: "ચલણ",
        fr: "Devise",
        ja: "通貨"
    },
    CURRENCYDESC: {
        en: "Choose your preferred currency.",
        hi: "अपनी पसंदीदा मुद्रा चुनें।",
        gu: "તમારી પસંદગીની ચલણ પસંદ કરો.",
        fr: "Choisissez votre devise préférée.",
        ja: "希望の通貨を選択してください。"
    },
    TIMEZONE: {
        en: "Timezone",
        hi: "समय क्षेत्र",
        gu: "સમય ઝોન",
        fr: "Fuseau horaire",
        ja: "タイムゾーン"
    },
    TIMEZONEDESC: {
        en: "Choose your timezone and preferred format.",
        hi: "अपना समय क्षेत्र और पसंदीदा प्रारूप चुनें।",
        gu: "તમારો સમય ઝોન અને પસંદગીનો ફોર્મેટ પસંદ કરો.",
        fr: "Choisissez votre fuseau horaire et votre format préféré.",
        ja: "タイムゾーンと希望の形式を選択してください。"
    },
    DATEFORMAT: {
        en: "Date Format",
        hi: "तिथि प्रारूप",
        gu: "તારીખ ફોર્મેટ",
        fr: "Format de date",
        ja: "日付形式"
    },
    DATEFORMATDESC: {
        en: "Choose your preferred date format.",
        hi: "अपना पसंदीदा तिथि प्रारूप चुनें।",
        gu: "તમારો પસંદગીનો તારીખ ફોર્મેટ પસંદ કરો.",
        fr: "Choisissez votre format de date préféré.",
        ja: "希望の日付形式を選択してください。"
    },
};