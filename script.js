// Games Data
const gamesData = [
    {
        id: 1,
        name: "GTA V",
        shortDesc: "لعبة حركة وجريمة مثيرة",
        longDesc: "لعبة حركة وجريمة مثيرة من Rockstar Games مع عالم مفتوح ضخم وقصة درامية مجنونة. تتميز بتفاصيل عالية جداً وأكشن لا ينتهي.",
        rating: 4.9,
        image: "https://via.placeholder.com/280x350/1a1a1a/c41e3a?text=GTA+V",
        modalImage: "https://via.placeholder.com/600x400/1a1a1a/c41e3a?text=GTA+V+Details",
        iosLink: "https://apps.apple.com",
        androidLink: "https://play.google.com"
    },
    {
        id: 2,
        name: "Forza Horizon 5",
        shortDesc: "لعبة سباق مذهلة",
        longDesc: "لعبة سباق مذهلة في المكسيك مع رسوميات خيالية وآلاف السيارات المختلفة. تجربة قيادة حقيقية لا تُنسى.",
        rating: 4.8,
        image: "https://via.placeholder.com/280x350/1a1a1a/c41e3a?text=Forza+5",
        modalImage: "https://via.placeholder.com/600x400/1a1a1a/c41e3a?text=Forza+Details",
        iosLink: "https://apps.apple.com",
        androidLink: "https://play.google.com"
    },
    {
        id: 3,
        name: "Forza Horizon 6",
        shortDesc: "أحدث إصدار من Forza",
        longDesc: "الإصدار الجديد من Forza Horizon مع بيئات مذهلة وتجربة سباق لا تُنسى. أسرع وأجمل من أي وقت مضى.",
        rating: 4.9,
        image: "https://via.placeholder.com/280x350/1a1a1a/c41e3a?text=Forza+6",
        modalImage: "https://via.placeholder.com/600x400/1a1a1a/c41e3a?text=Forza+6+Details",
        iosLink: "https://apps.apple.com",
        androidLink: "https://play.google.com"
    },
    {
        id: 4,
        name: "Red Dead Redemption 2",
        shortDesc: "ملحمة الغرب الأمريكي",
        longDesc: "ملحمة الغرب الأمريكي القديم مع قصة درامية رائعة والعالم الأكثر تفصيلاً في التاريخ. تجربة سردية لا تُصدق.",
        rating: 4.9,
        image: "https://via.placeholder.com/280x350/1a1a1a/c41e3a?text=RDR2",
        modalImage: "https://via.placeholder.com/600x400/1a1a1a/c41e3a?text=RDR2+Details",
        iosLink: "https://apps.apple.com",
        androidLink: "https://play.google.com"
    },
    {
        id: 5,
        name: "Fortnite",
        shortDesc: "لعبة حرب ملكية",
        longDesc: "لعبة حرب ملكية مثيرة مع بناء ديناميكي ومعارك 100 لاعب مجنونة. مجانية وممتعة للجميع.",
        rating: 4.7,
        image: "https://via.placeholder.com/280x350/1a1a1a/c41e3a?text=Fortnite",
        modalImage: "https://via.placeholder.com/600x400/1a1a1a/c41e3a?text=Fortnite+Details",
        iosLink: "https://apps.apple.com",
        androidLink: "https://play.google.com"
    },
    {
        id: 6,
        name: "Resident Evil 7",
        shortDesc: "لعبة رعب مخيفة",
        longDesc: "لعبة رعب مرعبة من منظور شخصي مع أجواء مخيفة جداً وألغاز مثيرة. لأحبائك الشجعان فقط!",
        rating: 4.6,
        image: "https://via.placeholder.com/280x350/1a1a1a/c41e3a?text=RE7",
        modalImage: "https://via.placeholder.com/600x400/1a1a1a/c41e3a?text=RE7+Details",
        iosLink: "https://apps.apple.com",
        androidLink: "https://play.google.com"
    },
    {
        id: 7,
        name: "God of War Ragnarok",
        shortDesc: "ملحمة إلهية",
        longDesc: "ملحمة الإله كراتوس مع قتال مذهل وقصة درامية عميقة وتصوير سينمائي. نهاية حقيقية للسلسلة.",
        rating: 4.9,
        image: "https://via.placeholder.com/280x350/1a1a1a/c41e3a?text=GoW",
        modalImage: "https://via.placeholder.com/600x400/1a1a1a/c41e3a?text=GoW+Details",
        iosLink: "https://apps.apple.com",
        androidLink: "https://play.google.com"
    },
    {
        id: 8,
        name: "The Last of Us Part 2",
        shortDesc: "قصة إنسانية مؤثرة",
        longDesc: "قصة إنسانية مؤثرة جداً في عالم ما بعد الكارثة مع رسوميات وتمثيل مذهليين. لعبة درامية من الدرجة الأولى.",
        rating: 4.8,
        image: "https://via.placeholder.com/280x350/1a1a1a/c41e3a?text=TLOU2",
        modalImage: "https://via.placeholder.com/600x400/1a1a1a/c41e3a?text=TLOU2+Details",
        iosLink: "https://apps.apple.com",
        androidLink: "https://play.google.com"
    }
];

// Language Translations
const translations = {
    ar: {
        "logo-text": "Games Zone",
        "main-title": "الألعاب المتاحة",
        "footer-text": "&copy; 2026 Games Zone. جميع الحقوق محفوظة.",
        "home-link": "الرئيسية",
        "about-link": "حول",
        "lang-text": "EN",
        "search-placeholder": "ابحث عن لعبة..."
    },
    en: {
        "logo-text": "Games Zone",
        "main-title": "Available Games",
        "footer-text": "&copy; 2026 Games Zone. All rights reserved.",
        "home-link": "Home",
        "about-link": "About",
        "lang-text": "AR",
        "search-placeholder": "Search for a game..."
    }
};

let currentLanguage = 'ar';

// Render Games
function renderGames(gamesToRender = gamesData) {
    const gamesGrid = document.getElementById('games-grid');
    gamesGrid.innerHTML = '';

    gamesToRender.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-poster">
                <img src="${game.image}" alt="${game.name}">
                <div class="play-overlay">
                    <button class="play-now-btn" onclick="openModal(${game.id})">PLAY NOW</button>
                </div>
            </div>
            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.shortDesc}</p>
                <div class="game-rating">
                    <span class="stars">⭐⭐⭐⭐⭐</span>
                    <span class="rating-score">${game.rating}/5</span>
                </div>
                <button class="download-btn" onclick="openModal(${game.id})">تحميل</button>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

// Modal Functions
function openModal(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = `modal-${gameId}`;
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal(${gameId})">×</button>
            <img src="${game.modalImage}" alt="${game.name}" class="modal-image">
            <div class="modal-body">
                <h2>${game.name}</h2>
                <p>${game.longDesc}</p>
                <div class="modal-rating">
                    <span class="stars">⭐⭐⭐⭐⭐</span>
                    <span class="rating-score">${game.rating}/5</span>
                </div>
                <div class="modal-buttons">
                    <a href="${game.iosLink}" target="_blank" class="ios-btn">
                        <i class="fab fa-apple"></i> تحميل iOS
                    </a>
                    <a href="${game.androidLink}" target="_blank" class="android-btn">
                        <i class="fab fa-android"></i> تحميل Android
                    </a>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(gameId);
        }
    });
}

function closeModal(gameId) {
    const modal = document.getElementById(`modal-${gameId}`);
    if (modal) {
        modal.remove();
    }
}

// Language Toggle
document.getElementById('lang-btn').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    updateLanguage();
});

function updateLanguage() {
    const lang = translations[currentLanguage];
    
    document.getElementById('lang-text').textContent = lang['lang-text'];
    document.getElementById('logo-text').textContent = lang['logo-text'];
    document.getElementById('main-title').textContent = lang['main-title'];
    document.getElementById('footer-text').innerHTML = lang['footer-text'];
    document.getElementById('home-link').textContent = lang['home-link'];
    document.getElementById('about-link').textContent = lang['about-link'];
    
    const searchInput = document.getElementById('search-input');
    searchInput.placeholder = lang['search-placeholder'];

    // Change document direction
    if (currentLanguage === 'ar') {
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
    }

    renderGames();
}

// Search Functionality
document.getElementById('search-input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = gamesData.filter(game => 
        game.name.toLowerCase().includes(searchTerm) || 
        game.shortDesc.toLowerCase().includes(searchTerm)
    );
    renderGames(filtered);
});

// Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('active');
    });
});

// Initial render
renderGames();