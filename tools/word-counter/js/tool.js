/* ===================================================
   Best Digital Marketer - Word Counter Tool
   tool.js - All interactive JavaScript logic
   =================================================== */

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}
function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
}

// ===== FAQ =====
function toggleFaq(el) {
    const item = el.parentElement;
    item.classList.toggle('active');
}

// ===== TABS =====
function switchTab(id, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    btn.classList.add('active');
}

// ===== SYLLABLE COUNT (approx) =====
function countSyllables(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    if (!word.length) return 0;
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    const m = word.match(/[aeiouy]{1,2}/g);
    return m ? m.length : 1;
}

// ===== ANIMATE NUMBER =====
function setNum(id, val) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = typeof val === 'number' ? val.toLocaleString() : val;
    el.classList.remove('pop');
    void el.offsetWidth;
    el.classList.add('pop');
}

// ===== FORMAT TIME =====
function formatTime(seconds) {
    if (seconds < 60) return Math.ceil(seconds) + ' sec';
    const m = Math.floor(seconds / 60);
    const s = Math.ceil(seconds % 60);
    return s > 0 ? m + ' min ' + s + ' sec' : m + ' min';
}

// ===== STOP WORDS =====
const STOP = new Set([
    'the','a','an','and','or','but','in','on','at','to','for','of','with','by',
    'from','is','was','are','were','be','been','being','have','has','had','do',
    'does','did','will','would','could','should','may','might','shall','can',
    'not','this','that','these','those','it','its','i','we','you','he','she',
    'they','me','us','him','her','them','my','our','your','his','their','what',
    'which','who','as','if','so','then','than','about','up','out','into','over',
    'after','before','during','through','between','against','under','within',
    'without','along','following','across','behind','beyond','plus','except',
    'around','since','while','although','though','even','just','also','both',
    'either','neither','each','every','all','some','any','few','more','most',
    'other','such','no','only','same','very','too','still','yet','much','many',
    'well','back','there','here','now','then'
]);

// ===== MAIN ANALYZE FUNCTION =====
function analyze() {
    const text = document.getElementById('mainTextarea').value;

    // ---- WORDS ----
    const words = text.trim().length === 0 ? [] : text.trim().split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;

    // ---- CHARACTERS ----
    const charCount = text.length;
    const charNoSpace = text.replace(/\s/g, '').length;
    const spaces = text.split('').filter(c => c === ' ' || c === '\t').length;

    // ---- SENTENCES ----
    const sentenceMatches = text.match(/[^.!?…]+[.!?…]+/g) || [];
    const sentenceCount = text.trim().length === 0 ? 0 : sentenceMatches.length || (text.trim().length > 0 ? 1 : 0);

    // ---- PARAGRAPHS ----
    const paragraphCount = text.trim().length === 0 ? 0 : text.trim().split(/\n\s*\n+/).filter(p => p.trim().length > 0).length;

    // ---- LINES ----
    const lineCount = text.trim().length === 0 ? 0 : text.split('\n').filter(l => l.trim().length > 0).length;

    // ---- UNIQUE WORDS ----
    const cleanWords = words.map(w => w.toLowerCase().replace(/[^a-z0-9'\-]/g, ''));
    const uniqueWords = new Set(cleanWords.filter(w => w.length > 0));
    const uniqueCount = uniqueWords.size;

    // ---- AVG WORD LENGTH ----
    const wordLengths = cleanWords.filter(w => /^[a-z]/.test(w)).map(w => w.length);
    const avgWordLen = wordLengths.length ? (wordLengths.reduce((a,b) => a+b, 0) / wordLengths.length).toFixed(1) : 0;

    // ---- AVG WORDS/SENTENCE ----
    const avgWordsPerSentence = sentenceCount > 0 ? (wordCount / sentenceCount).toFixed(1) : 0;

    // ---- LONGEST WORD ----
    const longestWord = cleanWords.filter(w => /^[a-z]/.test(w)).reduce((a, b) => a.length > b.length ? a : b, '');

    // ---- READING TIME ----
    const readSec = wordCount / 238 * 60;
    const speakSec = wordCount / 130 * 60;

    // ---- SYLLABLES ----
    const syllableCount = words.reduce((sum, w) => sum + countSyllables(w), 0);

    // ---- FLESCH SCORE ----
    let fleschScore = 'N/A', readLevel = 'N/A', gradeLevel = 'N/A';
    if (wordCount >= 30 && sentenceCount > 0) {
        const asl = wordCount / sentenceCount;
        const asw = syllableCount / wordCount;
        const flesch = 206.835 - (1.015 * asl) - (84.6 * asw);
        const fRounded = Math.min(100, Math.max(0, Math.round(flesch)));
        fleschScore = fRounded;
        if (fRounded >= 90) { readLevel = 'Very Easy'; gradeLevel = '5th Grade'; }
        else if (fRounded >= 80) { readLevel = 'Easy'; gradeLevel = '6th Grade'; }
        else if (fRounded >= 70) { readLevel = 'Fairly Easy'; gradeLevel = '7th Grade'; }
        else if (fRounded >= 60) { readLevel = 'Standard'; gradeLevel = '8-9th Grade'; }
        else if (fRounded >= 50) { readLevel = 'Fairly Difficult'; gradeLevel = '10-12th Grade'; }
        else if (fRounded >= 30) { readLevel = 'Difficult'; gradeLevel = 'College'; }
        else { readLevel = 'Very Difficult'; gradeLevel = 'Professional'; }
    }

    // ---- KEYWORD DENSITY ----
    const freq = {};
    cleanWords.forEach(w => {
        if (w.length > 2 && !STOP.has(w) && /^[a-z]/.test(w)) {
            freq[w] = (freq[w] || 0) + 1;
        }
    });
    const sortedKeywords = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    const topKeywords = sortedKeywords.slice(0, 10);
    const maxFreq = topKeywords.length ? topKeywords[0][1] : 1;

    // ===== UPDATE UI =====

    // Stats bar
    setNum('stat-words', wordCount);
    setNum('stat-chars', charCount);
    setNum('stat-nospace', charNoSpace);
    setNum('stat-sentences', sentenceCount);
    setNum('stat-paragraphs', paragraphCount);
    setNum('stat-lines', lineCount);

    // Char indicator
    document.getElementById('charCount').textContent = charCount.toLocaleString();

    // Sidebar reading time
    document.getElementById('rt-avg').textContent = wordCount === 0 ? '0 sec' : formatTime(readSec);
    document.getElementById('rt-speak').textContent = wordCount === 0 ? '0 sec' : formatTime(speakSec);

    // Content goals
    updateGoal('twitter', charCount, 280);
    updateGoal('meta', charCount, 160);
    updateGoal('blog', wordCount, 1000);
    updateGoal('long', wordCount, 2500);

    // Sidebar keywords (top 5)
    const skEl = document.getElementById('sidebar-keywords');
    if (topKeywords.length === 0) {
        skEl.innerHTML = '<li class="density-empty">Type text to see keywords</li>';
    } else {
        skEl.innerHTML = topKeywords.slice(0, 5).map(([word, count]) => {
            const pct = wordCount > 0 ? ((count / wordCount) * 100).toFixed(1) : 0;
            const barW = Math.round((count / maxFreq) * 100);
            return `<li class="density-item">
                <span class="density-word">${word}</span>
                <div class="density-bar-wrap"><div class="density-bar" style="width:${barW}%"></div></div>
                <span class="density-pct">${pct}%</span>
            </li>`;
        }).join('');
    }

    // Details tab
    setNum('d-words', wordCount);
    setNum('d-unique', uniqueCount);
    setNum('d-sentences', sentenceCount);
    setNum('d-paragraphs', paragraphCount);
    setNum('d-avgword', avgWordLen);
    setNum('d-avgsentence', avgWordsPerSentence);
    document.getElementById('d-longestword').textContent = longestWord || 'N/A';
    setNum('d-spaces', spaces);

    // Keywords tab
    if (topKeywords.length === 0) {
        document.getElementById('keyword-table-wrap').innerHTML = `
            <div class="empty-state">
                <div class="es-icon">🔑</div>
                <div>Type or paste text above to see keyword density analysis</div>
            </div>`;
    } else {
        let rows = topKeywords.map(([word, count]) => {
            const pct = wordCount > 0 ? ((count / wordCount) * 100).toFixed(2) : '0.00';
            const barW = Math.round((count / maxFreq) * 100);
            return `<tr>
                <td><strong>${word}</strong></td>
                <td>${count}</td>
                <td>${pct}%</td>
                <td><div class="kd-bar-wrap"><div class="kd-bar" style="width:${barW}%"></div></div></td>
            </tr>`;
        }).join('');
        document.getElementById('keyword-table-wrap').innerHTML = `
            <table class="keyword-table">
                <thead><tr>
                    <th>Keyword</th>
                    <th>Count</th>
                    <th>Density</th>
                    <th>Frequency</th>
                </tr></thead>
                <tbody>${rows}</tbody>
            </table>`;
    }

    // Readability tab
    document.getElementById('r-flesch').textContent = fleschScore;
    document.getElementById('r-level').textContent = readLevel;
    document.getElementById('r-grade').textContent = gradeLevel;
    setNum('r-syllables', syllableCount);
}

// ===== UPDATE GOAL BARS =====
function updateGoal(key, current, max) {
    const pct = Math.min((current / max) * 100, 100);
    document.getElementById('g-' + key).textContent = current.toLocaleString() + '/' + max.toLocaleString();
    const fill = document.getElementById('gf-' + key);
    fill.style.width = pct + '%';
    fill.className = 'goal-fill' + (current > max ? ' over' : current >= max ? ' done' : '');
}

// ===== COPY TEXT =====
function copyText() {
    const text = document.getElementById('mainTextarea').value;
    if (!text.trim()) return;
    navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!'));
}

// ===== DOWNLOAD TEXT =====
function downloadText() {
    const text = document.getElementById('mainTextarea').value;
    if (!text.trim()) return;
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'my-text.txt';
    a.click();
}

// ===== CLEAR =====
function clearAll() {
    document.getElementById('mainTextarea').value = '';
    analyze();
}

// ===== TOAST =====
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== EVENT LISTENER =====
document.getElementById('mainTextarea').addEventListener('input', analyze);

// Run once on load
analyze();

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nb = document.querySelector('.navbar');
    nb.style.background = window.scrollY > 50 ? 'rgba(10,10,15,0.98)' : 'rgba(10,10,15,0.95)';
});

// Scroll animations
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.feature-card, .step-card, .detail-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    obs.observe(el);
});
