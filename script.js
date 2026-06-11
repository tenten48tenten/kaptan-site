// ===== CONFIG =====
const PHONE_NUMBER = '0552 478 52 73';
const PHONE_HREF  = 'tel:+905524785273';
const WA_HREF     = 'https://wa.me/905524785273';

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
    const cn = document.getElementById('cta-phone-number');
    if (cn) cn.textContent = PHONE_NUMBER;
}

const translations = {
    tr: {
        meta_title: "Fethiye Teknik Servis | CCTV Kamera Kurulum & Bilgisayar Servisi",
        meta_desc: "Fethiye, Göcek, Dalaman ve Ortaca'da güvenlik kamerası kurulumu ve bilgisayar teknik servis hizmetleri.",
        meta_keywords: "fethiye güvenlik kamerası, fethiye bilgisayar tamiri, fethiye cctv, fethiye teknik servis",
        logo_accent: "TEKNİK SERVİS",
        nav_contact: "Hemen Ara",
        hero_tagline: "⭐ Güvenilir & Hızlı Teknik Hizmet — Fethiye",
        hero_title: "Fethiye'de <span class='gradient-text'>Güvenlik Kamerası</span><br>& Bilgisayar Teknik Servisi",
        hero_desc: "Güvenlik kamerası kurulumu, bilgisayar arızaları ve ağ sorunlarınız için uzman ekibimizle yanınızdayız.",
        hero_cta: "Teklif Al",
        hero_secondary: "Hizmetlerimiz",
        call_now_label: "Hemen Arayın",
        whatsapp_btn: "WhatsApp'ta Yaz",
        service_camera_title: "Güvenlik Kamerası",
        service_camera_desc: "HD CCTV, IP kamera, uzaktan mobil izleme kurulumu.",
        service_pc_title: "Bilgisayar Tamiri",
        service_pc_desc: "Yazılım, donanım ve ağ/Wi-Fi sorunlarına hızlı çözüm.",
        service_net_title: "Ağ & Wi-Fi Kurulum",
        service_net_desc: "Villa ve işyerleri için güçlü Mesh Wi-Fi altyapısı.",
        services_header_title: "Hizmetlerimiz",
        services_header_subtitle: "Fethiye, Göcek, Dalaman, Ortaca ve Muğla genelinde profesyonel teknik hizmetler",
        detail_camera_title: "Güvenlik Kamerası & CCTV",
        detail_camera_desc: "Evinizi cep telefonunuzdan 7/24 izleyin.",
        detail_camera_item1: "Uzaktan mobilden canlı izleme",
        detail_camera_item2: "Gece görüşlü kameralar",
        detail_camera_item3: "Yıllık bakım desteği",
        detail_pc_title: "Bilgisayar & Ağ",
        detail_pc_desc: "Yavaşlayan bilgisayarlar ve Wi-Fi sorunları için hızlı servis.",
        detail_pc_item1: "Windows kurulumu ve virüs temizleme",
        detail_pc_item2: "Mesh Wi-Fi kurulumu",
        detail_pc_item3: "SSD ve RAM yükseltme",
        detail_paint_title: "İç & Dış Boyama",
        detail_paint_desc: "Jotun ve Filli Boya ile kaliteli işçilik.",
        detail_paint_item1: "Yüzey hazırlığı ve astar",
        detail_paint_item2: "Rutubet ve çatlak onarımı",
        detail_paint_item3: "Dış cephe boyama",
        card_call_btn: "Bilgi Al",
        why_us_title: "Neden Biz?",
        why_time_title: "Hızlı Müdahale",
        why_time_desc: "Fethiye ve çevresinde en kısa sürede dönüş.",
        why_quality_title: "Garantili İşçilik",
        why_quality_desc: "Tüm kurulumlar firmamız garantisi altındadır.",
        why_lang_title: "Çok Dilli Destek",
        why_lang_desc: "Türkçe, İngilizce ve Rusça hizmet.",
        cta_title: "Hemen İletişime Geçin",
        cta_desc: "Teklif almak ister misiniz? Sizi arayalım.",
        footer_sub: "Fethiye, Göcek, Dalaman, Ortaca Teknik Servis",
        bot_status: "Çevrimiçi (Destek)",
        chat_welcome_meta: "Fethiye Teknik Servis AI bağlandı.",
        chat_welcome: "Merhaba! Fethiye Teknik Servis'e hoş geldiniz 👋 Nasıl yardımcı olabilirim?",
        chat_placeholder: "Mesajınızı yazın...",
        chat_lead_success: "Bilgilerinizi kaydettim, en kısa sürede arayacağız!",
        prompt_name: "Adınızı öğrenebilir miyim?",
        prompt_service: "Hangi hizmetimizle ilgileniyorsunuz? (Kamera / Bilgisayar / Boya)",
        prompt_location: "Neredesiniz?",
        prompt_phone: "Telefon numaranızı yazar mısınız?",
        fab_call: "Ara",
        fab_chat: "Teklif",
    },
    en: {
        meta_title: "Fethiye Tech Service | CCTV Camera & Computer Service",
        meta_desc: "CCTV installation and computer repair in Fethiye, Göcek, Dalaman & Ortaca.",
        meta_keywords: "fethiye cctv, fethiye computer repair, fethiye tech service",
        logo_accent: "TECH SERVICE",
        nav_contact: "Call Now",
        hero_tagline: "⭐ Trusted & Fast Tech Services — Fethiye",
        hero_title: "<span class='gradient-text'>Security Cameras</span><br>& Computer Service in Fethiye",
        hero_desc: "Expert team for cameras, computer repair, and network issues.",
        hero_cta: "Get a Quote",
        hero_secondary: "Our Services",
        call_now_label: "Call Now",
        whatsapp_btn: "WhatsApp Us",
        service_camera_title: "Security Cameras",
        service_camera_desc: "HD CCTV, IP cameras, remote mobile monitoring.",
        service_pc_title: "Computer Repair",
        service_pc_desc: "Software, hardware, and Wi-Fi issues resolved fast.",
        service_net_title: "Network & Wi-Fi",
        service_net_desc: "Mesh Wi-Fi for villas & offices.",
        services_header_title: "Our Services",
        services_header_subtitle: "Professional tech services across Fethiye, Göcek, Dalaman & Ortaca",
        detail_camera_title: "Security Cameras & CCTV",
        detail_camera_desc: "Monitor your home 24/7 from your phone.",
        detail_camera_item1: "Live remote mobile view",
        detail_camera_item2: "Night-vision cameras",
        detail_camera_item3: "Annual maintenance",
        detail_pc_title: "Computer & Network",
        detail_pc_desc: "Quick service for slow computers and Wi-Fi issues.",
        detail_pc_item1: "Windows installation & virus removal",
        detail_pc_item2: "Mesh Wi-Fi for large villas",
        detail_pc_item3: "SSD & RAM upgrades",
        detail_paint_title: "Interior & Exterior Painting",
        detail_paint_desc: "Quality painting with Jotun brands.",
        detail_paint_item1: "Surface preparation",
        detail_paint_item2: "Damp and crack repair",
        detail_paint_item3: "Facade painting",
        card_call_btn: "Get Info",
        why_us_title: "Why Choose Us?",
        why_time_title: "Fast Response",
        why_time_desc: "Quick visits across Fethiye & Göcek.",
        why_quality_title: "Guaranteed Work",
        why_quality_desc: "All installations backed by warranty.",
        why_lang_title: "Multilingual",
        why_lang_desc: "English, Russian, and Turkish.",
        cta_title: "Contact Us Now",
        cta_desc: "Need a quote? We'll call you back.",
        footer_sub: "Tech Service — Fethiye, Göcek, Dalaman, Ortaca",
        bot_status: "Online (Support)",
        chat_welcome_meta: "Fethiye Tech Service AI connected.",
        chat_welcome: "Hello! Welcome to Fethiye Tech Service 👋 How can I help?",
        chat_placeholder: "Type your message...",
        chat_lead_success: "Details saved. We'll call you soon!",
        prompt_name: "Could you tell me your name?",
        prompt_service: "Which service? (Camera / Computer / Painting)",
        prompt_location: "Where are you?",
        prompt_phone: "Your phone number please.",
        fab_call: "Call",
        fab_chat: "Quote",
    },
    ru: {
        meta_title: "Фетхие Teknik Servis | CCTV & Ремонт компьютеров",
        meta_desc: "Установка камер и ремонт компьютеров в Фетхие.",
        meta_keywords: "видеонаблюдение фетхие, ремонт компьютеров фетхие",
        logo_accent: "TECH SERVICE",
        nav_contact: "Позвонить",
        hero_tagline: "⭐ Надежный техсервис — Фетхие",
        hero_title: "<span class='gradient-text'>Камеры безопасности</span><br>и ремонт ПК в Фетхие",
        hero_desc: "Установка камер, ремонт ПК и настройка сети.",
        hero_cta: "Получить смету",
        hero_secondary: "Наши услуги",
        call_now_label: "Позвонить",
        whatsapp_btn: "Написать в WhatsApp",
        service_camera_title: "Камеры безопасности",
        service_camera_desc: "HD CCTV, IP-камеры, удалённый мониторинг.",
        service_pc_title: "Ремонт ПК",
        service_pc_desc: "Устранение неполадок ПО и Wi-Fi.",
        service_net_title: "Сеть & Wi-Fi",
        service_net_desc: "Mesh Wi-Fi для вилл и офисов.",
        services_header_title: "Наши услуги",
        services_header_subtitle: "Техсервис в Фетхие и регионе Мугла",
        detail_camera_title: "Камеры наблюдения",
        detail_camera_desc: "Следите за домом 24/7 с телефона.",
        detail_camera_item1: "Удалённый просмотр",
        detail_camera_item2: "Ночное видение",
        detail_camera_item3: "Ежегодное обслуживание",
        detail_pc_title: "Компьютеры & Сети",
        detail_pc_desc: "Медленный ПК или Wi-Fi — поможем быстро.",
        detail_pc_item1: "Установка Windows, удаление вирусов",
        detail_pc_item2: "Mesh Wi-Fi для вилл",
        detail_pc_item3: "Замена SSD и RAM",
        detail_paint_title: "Покраска",
        detail_paint_desc: "Качественная покраска с Jotun.",
        detail_paint_item1: "Подготовка поверхности",
        detail_paint_item2: "Устранение трещин",
        detail_paint_item3: "Покраска фасадов",
        card_call_btn: "Узнать",
        why_us_title: "Почему мы?",
        why_time_title: "Быстрый ответ",
        why_time_desc: "Быстрый выезд в Фетхие и окрестностях.",
        why_quality_title: "Гарантия",
        why_quality_desc: "Все работы под гарантией компании.",
        why_lang_title: "Многоязычность",
        why_lang_desc: "Русский, английский, турецкий.",
        cta_title: "Свяжитесь с нами",
        cta_desc: "Нужна смета? Мы перезвоним.",
        footer_sub: "Техсервис в Фетхие и регионе Мугла",
        bot_status: "В сети (Поддержка)",
        chat_welcome_meta: "Fethiye Teknik Servis AI подключён.",
        chat_welcome: "Здравствуйте! Добро пожаловать 👋 Чем могу помочь?",
        chat_placeholder: "Введите сообщение...",
        chat_lead_success: "Данные записаны. Мы свяжемся с вами!",
        prompt_name: "Как вас зовут?",
        prompt_service: "Какая услуга? (Камеры / Компьютер / Покраска)",
        prompt_location: "Где вы находитесь?",
        prompt_phone: "Укажите номер телефона.",
        fab_call: "Звонить",
        fab_chat: "Смета",
    }
};

let currentLang = 'tr';

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        setLanguage(btn.getAttribute('data-lang'));
    });
});

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const t = translations[lang];
    document.title = t.meta_title;
    document.getElementById('meta-title') && (document.getElementById('meta-title').innerText = t.meta_title);
    document.getElementById('meta-desc') && document.getElementById('meta-desc').setAttribute('content', t.meta_desc);
    document.getElementById('meta-keywords') && document.getElementById('meta-keywords').setAttribute('content', t.meta_keywords);

    const logoEl = document.getElementById('logo-text');
    if (logoEl) logoEl.innerHTML = '<i class="fa-solid fa-anchor logo-icon"></i> FETHİYE <span class="accent-text">' + t.logo_accent + '</span>';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.innerHTML = t.hero_title;
    const heroDesc = document.getElementById('hero-desc');
    if (heroDesc) heroDesc.innerText = t.hero_desc;

    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages && chatMessages.children.length <= 2) {
        chatMessages.innerHTML = '\n            <div class="message system-msg"><span>' + t.chat_welcome_meta + '</span></div>\n            <div class="message bot-msg"><p>' + t.chat_welcome + '</p></div>\n        ';
    }
}

const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');

document.querySelectorAll('.start-chat-trigger').forEach(el => {
    el.addEventListener('click', () => { if (chatWindow) chatWindow.classList.add('open'); });
});
if (chatClose) chatClose.addEventListener('click', () => chatWindow.classList.remove('open'));

const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

let leadForm = { name: '', service: '', location: '', phone: '' };
let step = 'welcome';

if (chatInput) chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });
if (chatSend) chatSend.addEventListener('click', sendMessage);

function appendMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', isUser ? 'user-msg' : 'bot-msg');
    msgDiv.innerHTML = '<p>' + text + '</p>';
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const el = document.createElement('div');
    el.classList.add('message', 'bot-msg', 'typing-indicator');
    el.innerHTML = '<p><i class="fa-solid fa-circle-notch fa-spin"></i> ...</p>';
    chatMessages.appendChild(el);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return el;
}

function sendMessage() {
    const text = (chatInput.value || '').trim();
    if (!text) return;
    appendMessage(text, true);
    chatInput.value = '';
    const indicator = showTypingIndicator();
    setTimeout(() => { indicator.remove(); processBotResponse(text); }, 900);
}

function processBotResponse(userInput) {
    const t = translations[currentLang];
    if (step === 'welcome') { leadForm.initialQuery = userInput; step = 'ask_name'; appendMessage(t.prompt_name); }
    else if (step === 'ask_name') { leadForm.name = userInput; step = 'ask_service'; appendMessage(t.prompt_service); }
    else if (step === 'ask_service') { leadForm.service = userInput; step = 'ask_location'; appendMessage(t.prompt_location); }
    else if (step === 'ask_location') { leadForm.location = userInput; step = 'ask_phone'; appendMessage(t.prompt_phone); }
    else if (step === 'ask_phone') { leadForm.phone = userInput; step = 'success'; appendMessage(t.chat_lead_success); }
    else { appendMessage(t.chat_lead_success); }
}

applyPhoneLinks();
setLanguage('tr');
