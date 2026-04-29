// IGNOU MEG Hub - Main JavaScript
let currentLang = localStorage.getItem('megLanguage') || 'en';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderNotes();
    renderTools();
    renderResources();
    renderFAQs();
    renderTips();
    setupEventListeners();
    applyLanguage(currentLang);
});

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// Language menu toggle
function toggleLanguageMenu() {
    const dropdown = document.getElementById('langDropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

// Close language menu when clicking outside
document.addEventListener('click', function(e) {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    if (!e.target.closest('.language-selector')) {
        langDropdown.style.display = 'none';
    }
});

// Change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('megLanguage', lang);
    document.getElementById('langLabel').textContent = lang.toUpperCase();
    applyLanguage(lang);
    document.getElementById('langDropdown').style.display = 'none';
    location.reload();
}

// Apply language
function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Render Notes
function renderNotes() {
    const grid = document.getElementById('notesGrid');
    grid.innerHTML = megData.notes.map(note => `
        <div class="meg-card" data-category="${note.category}">
            <div class="meg-card-icon">📖</div>
            <h3>${note.code}</h3>
            <p style="font-weight: 600; color: var(--primary); margin-bottom: 8px;">${note.title}</p>
            <p>${note.desc}</p>
            <div class="meg-card-links">
                ${note.driveLink ? `<a href="${note.driveLink}" class="link-btn" target="_blank">📥 Notes</a>` : '<span class="link-btn" style="opacity: 0.5;">📥 Coming Soon</span>'}
                <a href="${note.whatsappLink}" class="link-btn whatsapp" target="_blank">💬 Group</a>
            </div>
        </div>
    `).join('');
}

// Filter notes
function filterNotes(category) {
    const cards = document.querySelectorAll('#notesGrid .meg-card');
    const tabs = document.querySelectorAll('.meg-tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
        } else {
            card.style.display = 'none';
        }
    });
}

// Render Tools
function renderTools() {
    const grid = document.getElementById('toolsGrid');
    grid.innerHTML = megData.tools.map(tool => `
        <div class="meg-card">
            <div class="meg-card-icon">${tool.icon}</div>
            <h3>${tool.title}</h3>
            <p>${tool.desc}</p>
            <a href="#" class="link-btn" style="display: inline-block;">Try Tool →</a>
        </div>
    `).join('');
}

// Render Resources
function renderResources() {
    const grid = document.getElementById('resourcesGrid');
    grid.innerHTML = megData.resources.map(res => `
        <div class="meg-card">
            <div class="meg-card-icon">${res.icon}</div>
            <h3>${res.title}</h3>
            <p>${res.desc}</p>
            <a href="${res.link}" class="link-btn" target="_blank">📖 Access →</a>
        </div>
    `).join('');
}

// Render FAQs
function renderFAQs() {
    const container = document.getElementById('faqContainer');
    container.innerHTML = megData.faqs.map((faq, idx) => `
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFAQ(this)">
                <h3>${faq.q}</h3>
                <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                <p>${faq.a}</p>
            </div>
        </div>
    `).join('');
}

// Toggle FAQ
function toggleFAQ(element) {
    const item = element.closest('.faq-item');
    document.querySelectorAll('.faq-item.active').forEach(el => {
        if (el !== item) el.classList.remove('active');
    });
    item.classList.toggle('active');
}

// Render Tips
function renderTips() {
    const grid = document.getElementById('tipsGrid');
    grid.innerHTML = megData.tips.map(tip => `
        <div class="tip-card">
            <div class="tip-number">${tip.num}</div>
            <h3>${tip.title}</h3>
            <p>${tip.desc}</p>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Close mobile menu on nav link click
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.remove('active');
        });
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Set initial language label
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('langLabel').textContent = currentLang.toUpperCase();
});
