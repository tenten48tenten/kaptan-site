// ===== CONFIG =====
const PHONE_NUMBER = '0552 478 52 73';
const PHONE_HREF = 'tel:+905524785273';
const WA_HREF = 'https://wa.me/905524785273';

function applyPhoneLinks() {
    document.querySelectorAll('[id*="phone"]').forEach(el => {
        if (el.tagName === 'A') el.href = PHONE_HREF;
        else el.textContent = PHONE_NUMBER;
    });
    document.querySelectorAll('[id*="call"]').forEach(el => {
        if (el.tagName === 'A') el.href = PHONE_HREF;
    });
    document.querySelectorAll('[id*="wa"]').forEach(el => {
        if (el.tagName === 'A') el.href = WA_HREF;
    });
    const pn = document.getElementById('top-phone-number');
    if (pn) pn.textContent = PHONE_NUMBER;
    const hn = document.getElementById('hero-phone-number');
    if (hn) hn.textContent = PHONE_NUMBER;
}

// ===== MULTI-LANGUAGE TRANSLATIONS =====
const translations = {
    tr: {
        hero_tagline: "⭐ Güvenilir & Hızlı Yerel Teknik Hizmet",
        hero_title: "Fethiye'de <span class=\"gradient-text\">Güvenlik Kamerası</span><br>& Bilgisayar Teknik Servisi",
        hero_desc: "Güvenlik kamerası kurulumu, bilgisayar arızaları ve ağ sorunlarınız için uzman kadromuzla yanınızdayız. Hızlı müdahale, garantili işçilik.",
        call_now_label: "Hemen Arayın",
        whatsapp_btn: "WhatsApp'ta Yaz",
        hero_cta: "Teklif Al",
        hero_secondary: "Hizmetlerimiz",
        
        service_camera_title: "Güvenlik Kamerası",
        service_camera_desc: "HD CCTV, IP kamera, uzaktan mobil izleme kurulumu.",
        service_pc_title: "Bilgisayar Tamiri",
        service_pc_desc: "Yazılım, donanım ve ağ/Wi-Fi sorunlarına hızlı çözüm.",
        service_net_title: "Ağ & Wi-Fi Kurulum",
        service_net_desc: "Villa ve işyerleri için güçlü Mesh Wi-Fi altyapısı.",
        
        services_header_title: "Hizmetlerimiz",
        services_header_subtitle: "Fethiye, Göcek, Dalaman, Ortaca ve Muğla genelinde sunduğumuz profesyonel teknik hizmetler",
        
        detail_camera_title: "Güvenlik Kamerası & CCTV",
        detail_camera_desc: "Evinizi ve iş yerinizi cep telefonunuzdan 7/24 izleyin. IP kamera, analog HD ve kablosuz güvenlik kamerası çözümlerimizle huzur bulun.",
        detail_camera_item1: "Uzaktan mobilden canlı izleme kurulumu",
        detail_camera_item2: "Gece görüşlü ve hareket sensörlü kameralar",
        detail_camera_item3: "Yıllık bakım ve arıza giderme desteği",
        card_call_btn: "Bilgi Al",
        
        detail_pc_title: "Bilgisayar & Ağ Teknolojileri",
        detail_pc_desc: "Yavaşlayan bilgisayarlar, çöken sistemler, Wi-Fi çekim problemleri veya veri kurtarma ihtiyaçlarınız için hızlı servis.",
        detail_pc_item1: "Windows / MacOS kurulumu ve virüs temizleme",
        detail_pc_item2: "Büyük villalar için Wi-Fi sinyal güçlendirme (Mesh)",
        detail_pc_item3: "Donanım yükseltme (SSD ve RAM montajı)",
        
        detail_paint_title: "İç & Dış Cephe Boyama",
        detail_paint_desc: "Villalarınız ve evleriniz için en kaliteli markalarla (Jotun, Filli Boya) temiz işçilik sunuyoruz. Eşyalarınızı özenle korur, tertemiz teslim ederiz.",
        detail_paint_item1: "Detaylı yüzey hazırlığı ve astar",
        detail_paint_item2: "Rutubet ve çatlak onarımı",
        detail_paint_item3: "Bahçe duvarı ve dış cephe boyama",
        
        why_us_title: "Neden Biz?",
        why_time_title: "Hızlı Müdahale",
        why_time_desc: "Fethiye, Göcek, Dalaman ve Ortaca genelinde arızalarınıza en kısa sürede dönüş sağlıyoruz.",
        why_quality_title: "Garantili İşçilik",
        why_quality_desc: "Kullandığımız malzemeler ve yaptığımız tüm kurulumlar firmamızın garantisi altındadır.",
        why_lang_title: "Çok Dilli Destek",
        why_lang_desc: "İngilizce, Rusça ve Türkçe konuşuyoruz. Yabancı müşterilerimizle doğrudan kendi dillerinde anlaşıyoruz.",
        
        locations_title: "Hizmet Bölgelerimiz",
        locations_subtitle: "Fethiye ve çevre ilçelerdeki tüm mahalle ve beldelere hızlı servis sağlıyoruz",
        loc_cat1_title: "Fethiye Merkez & Mahalleleri",
        loc_cat2_title: "Fethiye Çevresi & Turistik Bölgeler",
        loc_cat3_title: "Çevre İlçeler & Beldeler",

        cta_title: "Hemen İletişime Geçin",
        cta_desc: "Sorunuz mu var? Teklif mi almak istiyorsunuz? Sizi arayalım.",
        footer_sub: "Fethiye, Göcek, Dalaman, Ortaca and Muğla Çevresi Yetkili Teknik Servis Sağlayıcısı",
        
        fab_call: "Ara",
        fab_chat: "Teklif",
        bot_name: "Fethiye Teknik Servis AI",
        bot_status: "Çevrimiçi (Destek)",
        chat_welcome_meta: "Kaptan AI Ajanı bağlandı. Diliniz otomatik algılanacaktır.",
        chat_welcome: "Merhaba! Kaptan Bilişim'e hoş geldiniz. Güvenlik kamerası kurulumu veya bilgisayar arızaları konusunda destek sunuyoruz. Size nasıl yardımcı olabilirim?",
        chat_placeholder: "Mesajınızı yazın...",
        chat_send_err: "Hata: Mesaj gönderilemedi. Lütfen bağlantınızı kontrol edin.",
        chat_typing: "Yazıyor..."
    },
    en: {
        hero_tagline: "⭐ Reliable & Fast Local Technical Service",
        hero_title: "Fethiye <span class=\"gradient-text\">Security Camera</span><br>& Computer Technical Service",
        hero_desc: "We are with you with our expert team for security camera installation, computer failures and network problems. Fast action, guaranteed workmanship.",
        call_now_label: "Call Now",
        whatsapp_btn: "Write on WhatsApp",
        hero_cta: "Get Offer",
        hero_secondary: "Our Services",
        
        service_camera_title: "Security Camera",
        service_camera_desc: "HD CCTV, IP camera, remote mobile monitoring setup.",
        service_pc_title: "Computer Repair",
        service_pc_desc: "Fast solution to software, hardware and network/Wi-Fi problems.",
        service_net_title: "Network & Wi-Fi Setup",
        service_net_desc: "Strong Mesh Wi-Fi infrastructure for villas and offices.",
        
        services_header_title: "Our Services",
        services_header_subtitle: "Professional technical services we offer in Fethiye, Gocek, Dalaman, Ortaca and across Mugla",
        
        detail_camera_title: "Security Camera & CCTV",
        detail_camera_desc: "Watch your home and workplace from your mobile phone 24/7. Peace of mind with our IP camera, analog HD and wireless security camera solutions.",
        detail_camera_item1: "Remote live mobile monitoring setup",
        detail_camera_item2: "Night vision and motion sensor cameras",
        detail_camera_item3: "Annual maintenance and troubleshooting support",
        card_call_btn: "Get Info",
        
        detail_pc_title: "Computer & Network Technologies",
        detail_pc_desc: "Fast service for slow computers, crashing systems, Wi-Fi signal issues or data recovery needs.",
        detail_pc_item1: "Windows / MacOS installation and virus removal",
        detail_pc_item2: "Wi-Fi signal booster (Mesh) for large villas",
        detail_pc_item3: "Hardware upgrade (SSD and RAM installation)",
        
        detail_paint_title: "Interior & Exterior Painting",
        detail_paint_desc: "We offer clean workmanship with top quality brands (Jotun, Filli Boya) for your villas and houses. We protect your stuff and deliver clean.",
        detail_paint_item1: "Detailed surface preparation and primer",
        detail_paint_item2: "Damp and crack repair",
        detail_paint_item3: "Garden wall and exterior painting",
        
        why_us_title: "Why Us?",
        why_time_title: "Fast Response",
        why_time_desc: "We respond to your problems as quickly as possible in Fethiye, Gocek, Dalaman and Ortaca.",
        why_quality_title: "Guaranteed Workmanship",
        why_quality_desc: "The materials we use and all our installations are under our company's warranty.",
        why_lang_title: "Multilingual Support",
        why_lang_desc: "We speak English, Russian and Turkish. We communicate with foreign customers directly in their languages.",
        
        locations_title: "Service Areas",
        locations_subtitle: "We provide fast service to all neighborhoods and towns in Fethiye and surrounding districts",
        loc_cat1_title: "Fethiye Center & Districts",
        loc_cat2_title: "Fethiye Suburbs & Tourist Areas",
        loc_cat3_title: "Nearby Towns & Districts",

        cta_title: "Contact Us Now",
        cta_desc: "Any questions? Want an offer? Let us call you.",
        footer_sub: "Authorized Technical Service Provider for Fethiye, Gocek, Dalaman, Ortaca and Mugla Area",
        
        fab_call: "Call",
        fab_chat: "Offer",
        bot_name: "Fethiye Technical Service AI",
        bot_status: "Online (Support)",
        chat_welcome_meta: "Kaptan AI Agent connected. Your language will be detected automatically.",
        chat_welcome: "Hello! Welcome to Kaptan IT & CCTV. We provide support for security camera setup or computer troubleshooting. How can I help you?",
        chat_placeholder: "Type your message...",
        chat_send_err: "Error: Message could not be sent. Please check your connection.",
        chat_typing: "Typing..."
    },
    ru: {
        hero_tagline: "⭐ Надежная и быстрая местная техподдержка",
        hero_title: "Установка <span class=\"gradient-text\">Камер Видеонаблюдения</span><br>& Ремонт Компьютеров в Фетхие",
        hero_desc: "Мы рядом с вами: профессиональная команда по установке камер видеонаблюдения, устранению неисправностей компьютеров и настройке сетей. Быстрый выезд, гарантия на работы.",
        call_now_label: "Позвонить",
        whatsapp_btn: "Написать в WhatsApp",
        hero_cta: "Получить предложение",
        hero_secondary: "Наши услуги",
        
        service_camera_title: "Видеонаблюдение",
        service_camera_desc: "Установка HD CCTV, IP-камер, удаленного просмотра с телефона.",
        service_pc_title: "Ремонт Компьютеров",
        service_pc_desc: "Быстрое решение проблем с ПО, комплектующими и сетью/Wi-Fi.",
        service_net_title: "Сети и Wi-Fi",
        service_net_desc: "Мощная система Mesh Wi-Fi для вилл и офисов.",
        
        services_header_title: "Наши Услуги",
        services_header_subtitle: "Профессиональные технические услуги в Фетхие, Гёджеке, Даламане, Ортадже и по всей провинции Мугла",
        
        detail_camera_title: "Камеры Видеонаблюдения & CCTV",
        detail_camera_desc: "Следите за домом и офисом с телефона 24/7. Полное спокойствие с нашими решениями: IP, аналоговые HD и беспроводные камеры.",
        detail_camera_item1: "Настройка удаленного просмотра на смартфоне",
        detail_camera_item2: "Камеры с ночным видением и датчиками движения",
        detail_camera_item3: "Ежегодное обслуживание и устранение неисправностей",
        card_call_btn: "Инфо",
        
        detail_pc_title: "Компьютерные и Сетевые Технологии",
        detail_pc_desc: "Быстрая помощь при медленной работе ПК, сбоях системы, плохом сигнале Wi-Fi или для восстановления данных.",
        detail_pc_item1: "Установка Windows / MacOS и удаление вирусов",
        detail_pc_item2: "Усиление сигнала Wi-Fi (Mesh) для больших вилл",
        detail_pc_item3: "Апгрейд железа (установка SSD и оперативной памяти)",
        
        detail_paint_title: "Покраска Стен и Фасадов",
        detail_paint_desc: "Предлагаем качественные малярные работы для вилл и домов с использованием лучших брендов (Jotun, Filli Boya). Аккуратно защищаем мебель, сдаем работу под ключ.",
        detail_paint_item1: "Тщательная подготовка стен и грунтовка",
        detail_paint_item2: "Устранение сырости и трещин",
        detail_paint_item3: "Покраска садовых стен и фасадов",
        
        why_us_title: "Почему мы?",
        why_time_title: "Быстрый Выезд",
        why_time_desc: "Максимально быстро реагируем на вызовы в Фетхие, Гёджеке, Даламане и Ортадже.",
        why_quality_title: "Гарантия на Работы",
        why_quality_desc: "Все используемые материалы и наши услуги находятся под официальной гарантией компании.",
        why_lang_title: "Поддержка на русском",
        why_lang_desc: "Мы говорим по-английски, по-русски и по-турецки. Общаемся с иностранными клиентами напрямую на их языке.",
        
        locations_title: "Районы Обслуживания",
        locations_subtitle: "Быстро выезжаем во все районы и поселки Фетхие и соседних регионов",
        loc_cat1_title: "Центр Фетхие и Районы",
        loc_cat2_title: "Окрестности Фетхие и Турзоны",
        loc_cat3_title: "Соседние Города и Поселки",

        cta_title: "Связаться Сейчас",
        cta_desc: "Есть вопросы? Хотите расчет стоимости? Мы перезвоним вам.",
        footer_sub: "Авторизованный поставщик технических услуг в Фетхие, Гёджеке, Даламане, Ортадже и по всей Мугле",
        
        fab_call: "Звонок",
        fab_chat: "Запрос",
        bot_name: "ИИ-Ассистент Каптан",
        bot_status: "В сети (Поддержка)",
        chat_welcome_meta: "Подключен ИИ-агент Каптан. Язык определится автоматически.",
        chat_welcome: "Здравствуйте! Добро пожаловать в Каптан Технологии. Мы помогаем с установкой камер видеонаблюдения и ремонтом компьютеров. Чем я могу вам помочь?",
        chat_placeholder: "Введите сообщение...",
        chat_send_err: "Ошибка: Сообщение не отправлено. Проверьте подключение.",
        chat_typing: "Печатает..."
    }
};

let currentLang = 'tr';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Translate all elements with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Translate static elements that need inline updating
    const titleEl = document.getElementById('hero-title');
    if (titleEl && translations[lang]['hero_title']) {
        titleEl.innerHTML = translations[lang]['hero_title'];
    }

    const descEl = document.getElementById('hero-desc');
    if (descEl && translations[lang]['hero_desc']) {
        descEl.innerHTML = translations[lang]['hero_desc'];
    }

    // Dynamic SEO Meta Tags update
    const metaTitle = document.getElementById('meta-title');
    if (metaTitle) {
        if (lang === 'tr') metaTitle.textContent = "Fethiye Teknik Servis | CCTV Kamera Kurulum & Bilgisayar Servisi";
        else if (lang === 'en') metaTitle.textContent = "Fethiye Technical Service | CCTV Camera Setup & PC Repair";
        else if (lang === 'ru') metaTitle.textContent = "Ремонт Компьютеров & Видеонаблюдение в Фетхие | Техподдержка";
    }

    const metaDesc = document.getElementById('meta-desc');
    if (metaDesc) {
        if (lang === 'tr') metaDesc.setAttribute('content', "Fethiye, Göcek, Dalaman ve Ortaca'da profesyonel güvenlik kamerası kurulumu ve bilgisayar teknik servis hizmetleri. Hızlı, güvenilir ve uygun fiyatlı çözümler.");
        else if (lang === 'en') metaDesc.setAttribute('content', "Professional security camera installation and computer repair services in Fethiye, Gocek, Dalaman and Ortaca. Fast, reliable and affordable solutions.");
        else if (lang === 'ru') metaDesc.setAttribute('content', "Профессиональная установка камер видеонаблюдения и ремонт компьютеров в Фетхие, Гёджеке, Даламане и Ортадже. Быстро, надежно и недорого.");
    }
}

// ===== CHAT BOT FUNCTIONALITY =====
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatWidget = document.getElementById('chat-widget');
const chatClose = document.getElementById('chat-close');
const startChatTriggers = document.querySelectorAll('.start-chat-trigger');

// Open / Close Chat
startChatTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        chatWidget.classList.add('active');
        chatInput.focus();
    });
});

if (chatClose) {
    chatClose.addEventListener('click', () => {
        chatWidget.classList.remove('active');
    });
}

// Add message to window
function addMessage(text, isBot = false) {
    if (!chatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isBot ? 'bot-msg' : 'user-msg'}`;
    const p = document.createElement('p');
    p.textContent = text;
    msgDiv.appendChild(p);
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle sending message
async function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    addMessage(text, false);
    chatInput.value = '';

    // Show typing state
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-msg typing-msg';
    typingDiv.innerHTML = `<p><i>${translations[currentLang]['chat_typing'] || 'Typing...'}</i></p>`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const response = await fetch('https://kaptan-site-chat-server-production.up.railway.app/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: text, lang: currentLang })
        });
        
        typingDiv.remove();

        if (response.ok) {
            const data = await response.json();
            addMessage(data.reply, true);
        } else {
            addMessage(translations[currentLang]['chat_send_err'] || 'Error: Could not get response.', true);
        }
    } catch (err) {
        typingDiv.remove();
        addMessage(translations[currentLang]['chat_send_err'] || 'Error: Connection failed.', true);
    }
}

if (chatSend && chatInput) {
    chatSend.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
}

// ===== EVENT LISTENERS & INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    applyPhoneLinks();
    
    // Bind lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Detect browser language and apply
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('ru')) {
        setLanguage('ru');
    } else if (userLang.startsWith('en')) {
        setLanguage('en');
    } else {
        setLanguage('tr');
    }
});
