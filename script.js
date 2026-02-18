/**
 * Arcanum Aeterna - Final Production Polish
 * script.js - Advanced Audio, FX, and UI Logic
 */

/* --- 1. DATA (Immutable) --- */
const appData = {
    cardsData: {
        majors: [
            { code: 'ar00', nameEN: "The Fool", nameTH: "The Fool (คนโง่)", mEN: "New Beginnings, Innocence", mTH: "การเริ่มต้นใหม่, ความไร้เดียงสา" },
            { code: 'ar01', nameEN: "The Magician", nameTH: "The Magician (นักมายากล)", mEN: "Manifestation, Resourcefulness", mTH: "พลังแห่งการสร้างสรรค์, ความสามารถ" },
            { code: 'ar02', nameEN: "The High Priestess", nameTH: "The High Priestess (ราชินีพระจันทร์)", mEN: "Intuition, Sacred Knowledge", mTH: "สัญชาตญาณ, ความรู้ศักดิ์สิทธิ์" },
            { code: 'ar03', nameEN: "The Empress", nameTH: "The Empress (จักรพรรดินี)", mEN: "Femininity, Abundance", mTH: "ความเป็นแม่, ความอุดมสมบูรณ์" },
            { code: 'ar04', nameEN: "The Emperor", nameTH: "The Emperor (จักรพรรดิ)", mEN: "Authority, Structure", mTH: "อำนาจ, โครงสร้าง" },
            { code: 'ar05', nameEN: "The Hierophant", nameTH: "The Hierophant (สังฆราช)", mEN: "Spiritual Wisdom, Tradition", mTH: "ปัญญาทางธรรม, ประเพณี" },
            { code: 'ar06', nameEN: "The Lovers", nameTH: "The Lovers (คู่รัก)", mEN: "Love, Harmony", mTH: "ความรัก, ความปรองดอง" },
            { code: 'ar07', nameEN: "The Chariot", nameTH: "The Chariot (อัศวินรถม้า)", mEN: "Control, Willpower", mTH: "การควบคุม, ความมุ่งมั่น" },
            { code: 'ar08', nameEN: "Strength", nameTH: "Strength (ความแข็งแกร่ง)", mEN: "Courage, Influence", mTH: "ความกล้าหาญ, พลังใจ" },
            { code: 'ar09', nameEN: "The Hermit", nameTH: "The Hermit (ฤาษี)", mEN: "Soul Searching, Introspection", mTH: "การค้นหาตนเอง, ความสันโดษ" },
            { code: 'ar10', nameEN: "Wheel of Fortune", nameTH: "Wheel of Fortune (กงล้อแห่งโชค)", mEN: "Good Luck, Karma", mTH: "โชคดี, กรรมลิขิต" },
            { code: 'ar11', nameEN: "Justice", nameTH: "Justice (ความยุติธรรม)", mEN: "Justice, Fairness", mTH: "ความยุติธรรม, ความถูกต้อง" },
            { code: 'ar12', nameEN: "The Hanged Man", nameTH: "The Hanged Man (คนแขวนคอ)", mEN: "Pause, Surrender", mTH: "การหยุดพัก, การเสียสละ" },
            { code: 'ar13', nameEN: "Death", nameTH: "Death (ความตาย)", mEN: "Endings, Transformation", mTH: "จุดจบ, การเปลี่ยนแปลง" },
            { code: 'ar14', nameEN: "Temperance", nameTH: "Temperance (ความสมดุล)", mEN: "Balance, Moderation", mTH: "ความสมดุล, ทางสายกลาง" },
            { code: 'ar15', nameEN: "The Devil", nameTH: "The Devil (ปีศาจ)", mEN: "Shadow Self, Attachment", mTH: "ตัณหา, พันธนาการ" },
            { code: 'ar16', nameEN: "The Tower", nameTH: "The Tower (ตึกถล่ม)", mEN: "Sudden Change, Upheaval", mTH: "การเปลี่ยนแปลงกะทันหัน, หายนะ" },
            { code: 'ar17', nameEN: "The Star", nameTH: "The Star (ดวงดาว)", mEN: "Hope, Faith", mTH: "ความหวัง, ศรัทธา" },
            { code: 'ar18', nameEN: "The Moon", nameTH: "The Moon (พระจันทร์)", mEN: "Illusion, Fear", mTH: "ภาพลวงตา, ความกลัว" },
            { code: 'ar19', nameEN: "The Sun", nameTH: "The Sun (พระอาทิตย์)", mEN: "Positivity, Success", mTH: "ความสดใส, ความสำเร็จ" },
            { code: 'ar20', nameEN: "Judgement", nameTH: "Judgement (การตัดสิน)", mEN: "Judgement, Rebirth", mTH: "การพิพากษา, การเกิดใหม่" },
            { code: 'ar21', nameEN: "The World", nameTH: "The World (โลก)", mEN: "Completion, Integration", mTH: "ความสมบูรณ์, การบรรลุผล" }
        ],
        suits: [
            { nameEN: 'Wands', nameTH: 'ไม้เท้า', code: 'wa' },
            { nameEN: 'Cups', nameTH: 'ถ้วย', code: 'cu' },
            { nameEN: 'Swords', nameTH: 'ดาบ', code: 'sw' },
            { nameEN: 'Pentacles', nameTH: 'เหรียญ', code: 'pe' }
        ],
        ranks: [
            { nEN: 'Ace', nTH: '1 (Ace)', s: 'ac' },
            { nEN: 'Two', nTH: '2', s: '02' }, { nEN: 'Three', nTH: '3', s: '03' },
            { nEN: 'Four', nTH: '4', s: '04' }, { nEN: 'Five', nTH: '5', s: '05' },
            { nEN: 'Six', nTH: '6', s: '06' }, { nEN: 'Seven', nTH: '7', s: '07' },
            { nEN: 'Eight', nTH: '8', s: '08' }, { nEN: 'Nine', nTH: '9', s: '09' },
            { nEN: 'Ten', nTH: '10', s: '10' },
            { nEN: 'Page', nTH: 'มหาดเล็ก', s: 'pa' }, { nEN: 'Knight', nTH: 'อัศวิน', s: 'kn' },
            { nEN: 'Queen', nTH: 'ราชินี', s: 'qu' }, { nEN: 'King', nTH: 'ราชา', s: 'ki' }
        ]
    },
    translations: {
        en: {
            title: "Arcanum Aeterna", subtitle: "The Master Mystic Tarot",
            btnShuffle: "Shuffle Deck", btnDraw: "Draw Card", btnReset: "Reset Table", btnHistory: "History 📜",
            msgShuffle: "The cosmos is shifting...", msgShuffled: "Destiny is realigned.", msgCleared: "The table is silent.",
            histTitle: "Session History", aiTitle: "Consult the Oracle",
            lblTopic: "Topic:", lblSituation: "Context:", btnCopy: "Full Reading", copied: "Inscribed to clipboard!",
            clearHist: "Clear History"
        },
        th: {
            title: "อาคานัม เอเทอน่า", subtitle: "ตำนานไพ่ทาโรต์",
            btnShuffle: "สับไพ่ลิขิต", btnDraw: "เปิดไพ่พยากรณ์", btnReset: "ล้างกระดาน", btnHistory: "ประวัติ 📜",
            msgShuffle: "ดวงดาวกำลังผันแปร...", msgShuffled: "พร้อมสำหรับการทำนาย", msgCleared: "ล้างกระดานแล้ว",
            histTitle: "ประวัติการเปิดไพ่", aiTitle: "ปรึกษาทวยเทพ (AI)",
            lblTopic: "หัวข้อ:", lblSituation: "สถานการณ์:", btnCopy: "คัดลอกคำทำนาย", copied: "บันทึกเรียบร้อย!",
            clearHist: "ล้างประวัติ"
        }
    },
    // Smart Minor Arcana Meaning Generator
    getMinorMeaning(rank, suit) {
        const rankEN = { 'Ace': 'New Beginning', 'Two': 'Balance', 'Three': 'Collaboration', 'Four': 'Stability', 'Five': 'Conflict', 'Six': 'Harmony', 'Seven': 'Reflection', 'Eight': 'Mastery', 'Nine': 'Fulfillment', 'Ten': 'Completion', 'Page': 'Curiosity', 'Knight': 'Action', 'Queen': 'Nurturing', 'King': 'Authority' };
        const rankTH = { 'Ace': 'การเริ่มต้นใหม่', 'Two': 'ความสมดุล', 'Three': 'ความร่วมมือ', 'Four': 'ความมั่นคง', 'Five': 'ความขัดแย้ง', 'Six': 'ความกลมกลืน', 'Seven': 'การไตร่ตรอง', 'Eight': 'ความชำนาญ', 'Nine': 'ความสมหวัง', 'Ten': 'ความสมบูรณ์', 'Page': 'ความอยากรู้', 'Knight': 'การลงมือทำ', 'Queen': 'การดูแลเอาใจใส่', 'King': 'อำนาจ' };
        const suitEN = { 'Wands': 'Action & Passion', 'Cups': 'Love & Emotion', 'Swords': 'Intellect & Truth', 'Pentacles': 'Wealth & Material' };
        const suitTH = { 'Wands': 'การกระทำและแรงบันดาลใจ', 'Cups': 'ความรักและอารมณ์', 'Swords': 'สติปัญญาและความจริง', 'Pentacles': 'ทรัพย์สินและวัตถุ' };
        return {
            en: `${rankEN[rank] || rank} in ${suitEN[suit] || suit}`,
            th: `${rankTH[rank] || rank}ใน${suitTH[suit] || suit}`
        };
    },
    generateDeck() {
        let deck = [];
        this.cardsData.majors.forEach(c => deck.push({ ...c, id: c.code, img: `https://www.sacred-texts.com/tarot/pkt/img/${c.code}.jpg`, type: 'Major' }));
        this.cardsData.suits.forEach(s => {
            this.cardsData.ranks.forEach(r => {
                const meaning = this.getMinorMeaning(r.nEN, s.nameEN);
                deck.push({
                    id: `${s.code}${r.s}`,
                    nameEN: `${r.nEN} of ${s.nameEN}`, nameTH: `${r.nTH} ${s.nameTH}`,
                    mEN: meaning.en, mTH: meaning.th,
                    img: `https://www.sacred-texts.com/tarot/pkt/img/${s.code}${r.s}.jpg`, type: 'Minor'
                });
            });
        });
        return deck;
    }
};

let state = { lang: 'en', soundOn: false, drawnCards: [], deckBodies: [], drawnBodies: [], history: [], bgmPlaying: false };
const fullDeck = appData.generateDeck();

/* --- 2. ADVANCED AUDIO SYSTEM --- */
const AudioSys = {
    ctx: null,
    bgAudio: null, // HTML Audio Element reference

    init() {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.bgAudio = document.getElementById('bg-music');
    },

    // Magic Chime Sound
    playDraw() {
        if (!state.soundOn || !this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Ethereal Sound Design
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, t); // A4
        osc.frequency.exponentialRampToValueAtTime(880, t + 0.1); // Slide Up
        osc.frequency.exponentialRampToValueAtTime(1760, t + 0.6); // High sparkle

        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(t + 0.6);
    },

    toggle() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        state.soundOn = !state.soundOn;
        this.updateBgMusic();
        return state.soundOn;
    },

    updateBgMusic() {
        if (!this.bgAudio) this.bgAudio = document.getElementById('bg-music');
        if (state.soundOn) {
            this.bgAudio.volume = 0.5;
            this.bgAudio.play().catch(e => console.log("User interaction needed for BGM"));
        } else {
            this.bgAudio.pause();
        }
    }
};

/* --- 3. PHYSICS & VISUALS --- */
const Physics = {
    engine: null, render: null, runner: null, width: window.innerWidth, height: window.innerHeight,

    init() {
        const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;
        this.engine = Engine.create();
        this.engine.world.gravity = { x: 0, y: 0 }; // Zero G

        this.render = Render.create({
            element: document.getElementById('physics-container'), engine: this.engine,
            options: { width: this.width, height: this.height, background: 'transparent', wireframes: false }
        });

        // Invisible Physics Layout
        const mouse = Mouse.create(this.render.canvas);
        const mc = MouseConstraint.create(this.engine, { mouse: mouse, constraint: { stiffness: 0.2, render: { visible: false } } });
        Composite.add(this.engine.world, mc);
        this.render.mouse = mouse;

        Render.run(this.render);
        this.runner = Runner.create();
        Runner.run(this.runner, this.engine);

        window.addEventListener('resize', () => {
            this.width = window.innerWidth; this.height = window.innerHeight;
            this.render.canvas.width = this.width; this.render.canvas.height = this.height;
        });
    },

    spawnCards() {
        const { Bodies, Composite } = Matter;
        // Clear
        state.deckBodies.forEach(b => Composite.remove(this.engine.world, b));
        state.deckBodies = []; state.drawnBodies = [];

        fullDeck.forEach(c => {
            const body = Bodies.rectangle(
                Math.random() * (this.width - 200) + 100, Math.random() * (this.height - 200) + 100,
                90, 150, {
                restitution: 0.9, frictionAir: 0.05,
                render: { visible: false }, // Invisible physics
                plugin: { data: c }
            });
            Composite.add(this.engine.world, body);
            state.deckBodies.push(body);
        });
    },

    shakeWorld() {
        state.deckBodies.forEach(b => {
            if (b.isStatic) return;
            Matter.Body.setVelocity(b, { x: (Math.random() - 0.5) * 30, y: (Math.random() - 0.5) * 30 });
            Matter.Body.setAngularVelocity(b, (Math.random() - 0.5));
        });
    }
};

/* --- 4. CORE APP --- */
const App = {
    init() {
        Physics.init(); Physics.spawnCards();
        this.setupEvents(); this.updateUI();

        // Parallax background
        document.addEventListener('mousemove', e => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20, y = (e.clientY / window.innerHeight - 0.5) * 20;
            document.getElementById('stars-fg').style.transform = `translate(${x}px, ${y}px)`;
        });

        // Init Audio Context on any first click to allow Sound.mp3 to play later
        document.body.addEventListener('click', () => {
            AudioSys.init();
            if (state.soundOn) AudioSys.updateBgMusic();
        }, { once: true });

        // --- MAGICAL EFFECTS ---
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        // 1. Spawn Floating Particles (fewer on mobile)
        const particleBox = document.getElementById('particles-container');
        const particleCount = isTouchDevice ? 15 : 35;
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 4 + 1;
            p.style.cssText = `
                left: ${Math.random() * 100}%;
                --size: ${size}px;
                --dur: ${Math.random() * 10 + 6}s;
                --delay: ${Math.random() * 10}s;
                --drift: ${(Math.random() - 0.5) * 80}px;
                --peak-opacity: ${Math.random() * 0.4 + 0.2};
            `;
            particleBox.appendChild(p);
        }

        // Desktop-only effects
        if (!isTouchDevice) {
            // 2. Cursor Glow Trail
            const glowCanvas = document.getElementById('cursor-glow');
            const ctx = glowCanvas.getContext('2d');
            const resizeCanvas = () => { glowCanvas.width = window.innerWidth; glowCanvas.height = window.innerHeight; };
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            let mouseTrail = [];
            document.addEventListener('mousemove', e => {
                mouseTrail.push({ x: e.clientX, y: e.clientY, age: 0 });
                if (mouseTrail.length > 20) mouseTrail.shift();
            });

            const drawGlow = () => {
                ctx.clearRect(0, 0, glowCanvas.width, glowCanvas.height);
                mouseTrail.forEach((pt, i) => {
                    pt.age++;
                    const alpha = Math.max(0, 0.15 - pt.age * 0.008);
                    const radius = Math.max(1, 30 - pt.age * 1.2);
                    if (alpha <= 0) return;
                    const grad = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, radius);
                    grad.addColorStop(0, `rgba(212, 175, 55, ${alpha})`);
                    grad.addColorStop(1, 'transparent');
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
                    ctx.fill();
                });
                mouseTrail = mouseTrail.filter(pt => pt.age < 20);
                requestAnimationFrame(drawGlow);
            };
            drawGlow();

            // 3. Interactive 3D Card Tilt (mouse only)
            document.getElementById('reading-overlay').addEventListener('mousemove', e => {
                const card = e.target.closest('.card-unit');
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) scale(1.02)`;
            });
            document.getElementById('reading-overlay').addEventListener('mouseleave', e => {
                const card = e.target.closest('.card-unit');
                if (card) card.style.transform = '';
            }, true);
        }

        // 4. Click-to-expand card detail (both mobile & desktop)
        document.getElementById('reading-overlay').addEventListener('click', e => {
            const card = e.target.closest('.card-unit');
            if (!card) return;
            const idx = parseInt(card.dataset.cardIndex);
            if (isNaN(idx)) return;
            this.showDetail(state.drawnCards[idx]);
        });

        // Close detail overlay
        const detailOverlay = document.getElementById('card-detail-overlay');
        detailOverlay.querySelector('.card-detail-close').addEventListener('click', () => this.hideDetail());
        detailOverlay.addEventListener('click', e => {
            if (e.target === detailOverlay) this.hideDetail();
        });
    },

    setupEvents() {
        document.getElementById('lang-en').onclick = () => this.setLang('en');
        document.getElementById('lang-th').onclick = () => this.setLang('th');

        // Sound Switch (Glassmorphism button)
        const btnSound = document.getElementById('btn-sound');
        btnSound.onclick = () => {
            const isOn = AudioSys.toggle();
            btnSound.textContent = isOn ? "🔊" : "🔇";
            btnSound.classList.toggle('sound-on', isOn);
            this.showToast(isOn ? "Sound Enabled" : "Sound Muted");
        };

        // Shuffle with Visual FX (Screen Shake)
        document.getElementById('btn-shuffle').onclick = () => {
            this.showToast(appData.translations[state.lang].msgShuffle);
            // Instant clear (no vanish animation for shuffle)
            state.drawnCards = []; state.drawnBodies = [];
            document.getElementById('reading-overlay').innerHTML = '';
            Physics.spawnCards();
            Physics.shakeWorld();

            // Visual Shake FX on canvas AND body
            const canvas = document.getElementById('physics-container');
            canvas.classList.add('shake-blur');
            document.body.classList.add('shake-blur');
            setTimeout(() => {
                canvas.classList.remove('shake-blur');
                document.body.classList.remove('shake-blur');
            }, 800);

            setTimeout(() => this.showToast(appData.translations[state.lang].msgShuffled), 1000);

            // Ensure audio starts if on
            if (state.soundOn) AudioSys.updateBgMusic();
        };

        document.getElementById('btn-draw').onclick = () => {
            this.actionDraw();
            if (state.soundOn) AudioSys.updateBgMusic();
        };
        document.getElementById('btn-reset').onclick = () => this.actionReset();

        document.getElementById('btn-history').onclick = () => {
            document.getElementById('history-modal').classList.add('visible');
            this.renderHistory();
        };
        document.getElementById('close-history').onclick = () => {
            document.getElementById('history-modal').classList.remove('visible');
        };
        document.getElementById('btn-copy-ai').onclick = () => this.copyToAI();
    },

    setLang(l) {
        state.lang = l;
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(`lang-${l}`).classList.add('active');
        this.updateUI();
        this.renderHistory(); // Re-render for text update if open
    },

    updateUI() {
        const t = appData.translations[state.lang];
        const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
        set('app-title', t.title); set('app-subtitle', t.subtitle);
        set('btn-shuffle', t.btnShuffle); set('btn-draw', t.btnDraw);
        set('btn-reset', t.btnReset); set('btn-history', t.btnHistory);
        set('history-title', t.histTitle); set('ai-title', t.aiTitle);
        set('lbl-topic', t.lblTopic); set('lbl-situation', t.lblSituation);
        set('btn-copy-ai', t.btnCopy);

        const clrBtn = document.getElementById('btn-clear-hist');
        if (clrBtn) clrBtn.textContent = t.clearHist;
    },

    actionDraw() {
        if (state.drawnCards.length >= 5) { this.showToast("Max 5 Cards!"); return; }

        const available = state.deckBodies.filter(b => !b.isStatic && !state.drawnBodies.includes(b));
        if (available.length === 0) return;

        const body = available[Math.floor(Math.random() * available.length)];
        const data = body.plugin.data;
        const isRev = Math.random() < 0.5;
        const cardObj = { ...data, reversed: isRev };

        state.drawnBodies.push(body); state.drawnCards.push(cardObj);
        Matter.Body.setPosition(body, { x: -9999, y: -9999 }); Matter.Body.setStatic(body, true);

        // Render DOM
        const overlay = document.getElementById('reading-overlay');
        const el = document.createElement('div');
        el.className = 'card-unit'; // Matches CSS .card-unit

        const title = state.lang === 'th' ? cardObj.nameTH : cardObj.nameEN;
        const mean = state.lang === 'th' ? cardObj.mTH : cardObj.mEN;
        const orient = isRev ? (state.lang === 'th' ? "กลับหัว" : "REVERSED") : (state.lang === 'th' ? "หัวตั้ง" : "UPRIGHT");

        el.innerHTML = `
            <div class="card-image-area"><img src="${cardObj.img}"></div>
            <div class="card-text-area">
                <h3 class="card-title">${title}</h3>
                <div class="card-orientation ${isRev ? 'reversed' : 'upright'}">${orient}</div>
                <div class="card-keywords">${mean}</div>
            </div>
        `;
        el.dataset.cardIndex = state.drawnCards.length - 1;
        overlay.appendChild(el);
        // Scroll to new
        el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'center' });

        // Persist to history (survives reset)
        state.history.push(cardObj);

        AudioSys.playDraw();
    },

    actionReset() {
        const cards = document.querySelectorAll('.card-unit');
        if (cards.length === 0) {
            // Nothing to animate, just reset physics
            state.drawnCards = []; state.drawnBodies = [];
            Physics.spawnCards();
            return;
        }
        // Apply vanishing animation
        cards.forEach(c => c.classList.add('vanishing'));
        this.showToast(appData.translations[state.lang].msgCleared);
        // Wait for animation, then clear
        setTimeout(() => {
            state.drawnCards = []; state.drawnBodies = [];
            document.getElementById('reading-overlay').innerHTML = '';
            Physics.spawnCards();
        }, 500);
    },

    renderHistory() {
        const list = document.getElementById('history-list'); list.innerHTML = '';
        const headerEl = document.querySelector('.history-header');

        // Add Clear Button if not there
        let clearBtn = document.getElementById('btn-clear-hist');
        if (!clearBtn && headerEl) {
            clearBtn = document.createElement('button');
            clearBtn.id = 'btn-clear-hist';
            clearBtn.className = 'btn-clear-hist';
            clearBtn.textContent = appData.translations[state.lang].clearHist;
            clearBtn.onclick = () => { state.history = []; this.renderHistory(); };
            headerEl.insertBefore(clearBtn, headerEl.querySelector('.close-btn'));
        }
        if (clearBtn) clearBtn.textContent = appData.translations[state.lang].clearHist;

        // Use persistent history (survives Reset)
        state.history.forEach((c, i) => {
            const li = document.createElement('li'); li.className = 'history-item';
            const name = state.lang === 'th' ? c.nameTH : c.nameEN;
            const mean = state.lang === 'th' ? c.mTH : c.mEN;
            const orientLabel = c.reversed ? (state.lang === 'th' ? 'กลับหัว' : 'Rev') : (state.lang === 'th' ? 'หัวตั้ง' : 'Up');

            li.innerHTML = `
                <img src="${c.img}" class="history-thumb">
                <div class="history-info">
                    <span class="history-name">${name} <small style="color:#888;">(${orientLabel})</small></span>
                    <span class="history-meta">${mean}</span>
                </div>
                <button class="history-action" title="Copy Card" onclick="App.copyOne(${i})">📋</button>
            `;
            list.appendChild(li);
        });
    },

    copyOne(index) {
        const c = state.history[index];
        if (!c) return;
        const txt = `${c.nameEN} (${c.reversed ? 'Rev' : 'Upright'}) - ${c.mEN}`;
        navigator.clipboard.writeText(txt).then(() => this.showToast("Card copied!"));
    },

    copyToAI() {
        const topic = document.getElementById('ai-topic').value;
        const sit = document.getElementById('ai-situation').value;
        const cards = state.drawnCards.map((c, i) => `${i + 1}. ${c.nameTH} (${c.reversed ? 'กลับหัว' : 'หัวตั้ง'})`).join(', ');

        const prompt = `รับบทเป็นหมอดูไพ่ทาโรต์ผู้เชี่ยวชาญที่มีประสบการณ์กว่า 20 ปี ช่วยทำนายดวงชะตาจากไพ่ที่ฉันจับได้ดังนี้:
ไพ่ที่ได้: ${cards}
หัวข้อคำถาม: ${topic}
สถานการณ์ปัจจุบัน: ${sit}
สิ่งที่ต้องการ:
1. ความหมายของไพ่แต่ละใบในบริบทนี้
2. ความเชื่อมโยงของไพ่ทั้งหมด (Storytelling)
3. คำแนะนำที่ทำได้จริง (Actionable Advice)
ขอภาษาที่เป็นกันเอง เข้าใจง่าย และตรงไปตรงมา`;

        navigator.clipboard.writeText(prompt).then(() => this.showToast(appData.translations[state.lang].copied));
    },

    showToast(msg) {
        const el = document.getElementById('status-display');
        el.textContent = msg; el.classList.add('visible');
        setTimeout(() => el.classList.remove('visible'), 2000);
    },

    showDetail(cardObj) {
        if (!cardObj) return;
        const overlay = document.getElementById('card-detail-overlay');
        document.getElementById('detail-img').src = cardObj.img;
        document.getElementById('detail-title').textContent = state.lang === 'th' ? cardObj.nameTH : cardObj.nameEN;

        const orientEl = document.getElementById('detail-orient');
        orientEl.textContent = cardObj.reversed
            ? (state.lang === 'th' ? '⟲ กลับหัว' : '⟲ REVERSED')
            : (state.lang === 'th' ? '△ หัวตั้ง' : '△ UPRIGHT');
        orientEl.className = 'card-detail-orient ' + (cardObj.reversed ? 'reversed' : 'upright');

        document.getElementById('detail-meaning').textContent = state.lang === 'th' ? cardObj.mTH : cardObj.mEN;
        document.getElementById('detail-type').textContent = cardObj.type === 'Major' ? '✦ Major Arcana' : '✧ Minor Arcana';

        overlay.classList.add('visible');
    },

    hideDetail() {
        document.getElementById('card-detail-overlay').classList.remove('visible');
    }
};

window.onload = () => App.init();
