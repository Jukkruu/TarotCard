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
            lblTopic: "Topic:", lblSituation: "Context:", btnCopy: "Copy Prompt", copied: "Inscribed to clipboard!",
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
            options: {
                width: this.width, height: this.height,
                background: 'transparent',
                wireframes: false,
                showAngleIndicator: false,
                showVelocity: false,
                showCollisions: false,
                showDebug: false
            }
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

        // Welcome modal dismiss
        document.getElementById('welcome-dismiss').addEventListener('click', () => {
            document.getElementById('welcome-modal').classList.remove('visible');
            // Init audio on this user gesture (required by browsers)
            AudioSys.init();
            if (state.soundOn) AudioSys.updateBgMusic();
        });

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

        // Visibility Change Handling (Background Sleep)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Pause systems
                if (Physics.runner) Matter.Runner.stop(Physics.runner);
                if (AudioSys.bgAudio) AudioSys.bgAudio.pause();
            } else {
                // Resume systems
                if (Physics.runner && Physics.engine) Matter.Runner.run(Physics.runner, Physics.engine);
                if (state.soundOn && AudioSys.bgAudio) {
                    AudioSys.bgAudio.play().catch(e => console.log("Bg audio resume blocked"));
                }
            }
        });

        // Prevent multi-touch zoom (pinch) on mobile
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) e.preventDefault();
        }, { passive: false });

        // Auto-enable sound on mobile (button is hidden)
        if (isTouchDevice) {
            state.soundOn = true;
            document.body.addEventListener('touchstart', () => {
                AudioSys.init();
                AudioSys.updateBgMusic();
            }, { once: true });
        }

        // Desktop-only effects
        if (!isTouchDevice) {
            // Interactive 3D Card Tilt (mouse only)
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

        // Shuffle with Galactic Vortex Effect
        document.getElementById('btn-shuffle').onclick = () => {
            this.showToast(appData.translations[state.lang].msgShuffle);

            const cardData = [...document.querySelectorAll('.card-unit')].map(c => ({
                el: c,
                rect: c.getBoundingClientRect()
            }));

            // Reset physics & overlay IMMEDIATELY — clean slate for new draws
            state.drawnCards = []; state.drawnBodies = [];
            document.getElementById('reading-overlay').innerHTML = '';
            Physics.spawnCards();

            // Galaxy vortex overlay
            const vortexOverlay = document.createElement('div');
            vortexOverlay.className = 'galaxy-overlay';
            vortexOverlay.innerHTML = '<div class="galaxy-disc"></div><div class="galaxy-core"></div>';
            document.body.appendChild(vortexOverlay);
            setTimeout(() => vortexOverlay.remove(), 1100);

            if (cardData.length > 0) {
                cardData.forEach(cd => {
                    const c = cd.el;
                    const r = cd.rect;
                    Object.assign(c.style, {
                        position: 'fixed',
                        top: `${r.top}px`,
                        left: `${r.left}px`,
                        width: `${r.width}px`,
                        height: `${r.height}px`,
                        margin: '0',
                        zIndex: '300',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    });
                    document.body.appendChild(c);
                    c.getBoundingClientRect(); // force reflow
                    c.classList.add('vortex-suck');
                });
                setTimeout(() => cardData.forEach(cd => cd.el.remove()), 1100);
            } else {
                document.body.classList.add('shake-blur');
                setTimeout(() => document.body.classList.remove('shake-blur'), 700);
            }

            Physics.shakeWorld();
            setTimeout(() => this.showToast(appData.translations[state.lang].msgShuffled), 1200);
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
        const cardData = [...document.querySelectorAll('.card-unit')].map(c => ({
            el: c,
            rect: c.getBoundingClientRect()
        }));

        // ── Reset state, overlay & physics IMMEDIATELY ──
        state.drawnCards = [];
        state.drawnBodies = [];
        document.getElementById('reading-overlay').innerHTML = ''; // clean overlay NOW
        Physics.spawnCards();

        if (cardData.length === 0) return;

        // Screen flash
        const flash = document.createElement('div');
        flash.className = 'burn-flash';
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 800);

        // Float cards at their exact screen pos
        cardData.forEach(cd => {
            const c = cd.el;
            const r = cd.rect;
            Object.assign(c.style, {
                position: 'fixed',
                top: `${r.top}px`,
                left: `${r.left}px`,
                width: `${r.width}px`,
                height: `${r.height}px`,
                margin: '0',
                zIndex: '300',
                pointerEvents: 'none',
                overflow: 'visible'
            });
            document.body.appendChild(c);
            c.getBoundingClientRect();
            c.classList.add('alchemical-burn');
        });

        if (state.soundOn) AudioSys.playOneShot('whoosh');
        this.showToast(appData.translations[state.lang].msgCleared);

        // Remove burned cards after animation
        setTimeout(() => cardData.forEach(cd => cd.el.remove()), 1600);
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

        const prompt = `รับบทเป็นหมอดูไพ่ทาโรต์ผู้เชี่ยวชาญที่มีประสบการณ์กว่า 100 ปีทำนายดวงชะตาจากไพ่ที่ฉันจับได้ดังนี้:
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

    async askOracle() {
        if (state.drawnCards.length === 0) {
            this.showToast(state.lang === 'th' ? 'กรุณาเปิดไพ่ก่อน' : 'Draw cards first!');
            return;
        }

        const topic = document.getElementById('ai-topic').value;
        const sit = document.getElementById('ai-situation').value;
        const loadingEl = document.getElementById('ai-loading');
        const responseEl = document.getElementById('ai-response');
        const readBtn = document.getElementById('btn-ai-read');

        // Show loading, hide previous response
        loadingEl.style.display = 'flex';
        responseEl.style.display = 'none';
        readBtn.disabled = true;
        readBtn.textContent = '⏳ Reading...';

        // Build card descriptions
        const cardDescs = state.drawnCards.map((c, i) => {
            const name = `${c.nameEN} / ${c.nameTH}`;
            const orient = c.reversed ? 'Reversed (กลับหัว)' : 'Upright (หัวตั้ง)';
            const meaning = `${c.mEN} / ${c.mTH}`;
            return `Card ${i + 1}: ${name} — ${orient} — ${meaning}`;
        }).join('\n');

        const lang = state.lang === 'th' ? 'Thai (ภาษาไทย)' : 'English';

        const prompt = `You are Arcanum Aeterna, a wise and mystical tarot oracle with 20 years of experience. You speak with elegance and warmth.

The seeker has drawn these cards:
${cardDescs}

Topic: ${topic}
Their situation: ${sit || 'Not specified'}

Please provide a reading in ${lang} with:
1. 🃏 Individual card interpretations in the context of their question
2. 🔗 How the cards connect — tell a story
3. ✨ Actionable advice they can follow
4. 🌟 A final empowering message

Use a warm, mystical tone. Keep it concise but meaningful (under 500 words). Use emojis sparingly for section headers.
${state.lang === 'th' ? 'ตอบเป็นภาษาไทยทั้งหมด ใช้ภาษาที่สละสลวย เป็นกันเอง เข้าใจง่าย' : ''}`;

        try {
            const API_KEY = 'AIzaSyDRc-i1GdwfVatlPOTk1_ZKLJ8EkrjAxAg';
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${API_KEY}`;
            const body = JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.9,
                    maxOutputTokens: 1024
                }
            });

            // Retry logic for rate limits (429)
            let res, retries = 0;
            const maxRetries = 3;
            while (retries <= maxRetries) {
                res = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body
                });
                if (res.status === 429 && retries < maxRetries) {
                    retries++;
                    const waitSec = retries * 3;
                    loadingEl.querySelector('span').textContent = `Rate limited — retrying in ${waitSec}s... (${retries}/${maxRetries})`;
                    await new Promise(r => setTimeout(r, waitSec * 1000));
                    continue;
                }
                break;
            }

            if (!res.ok) {
                const errBody = await res.text().catch(() => '');
                throw new Error(res.status === 429
                    ? (state.lang === 'th' ? 'กรุณารอสักครู่แล้วลองใหม่' : 'Too many requests — please wait a moment and try again')
                    : `API error ${res.status}`);
            }

            const data = await res.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!text) throw new Error('Empty response');

            // Basic markdown to HTML
            const formatted = text
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/### (.+)/g, '<h4>$1</h4>')
                .replace(/## (.+)/g, '<h3>$1</h3>')
                .replace(/\n/g, '<br>');

            responseEl.innerHTML = formatted;
            responseEl.style.display = 'block';
            responseEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

        } catch (err) {
            responseEl.innerHTML = `<span style="color: #e74c3c;">⚠️ ${state.lang === 'th' ? 'เกิดข้อผิดพลาด' : 'Oracle Error'}: ${err.message}</span>`;
            responseEl.style.display = 'block';
        } finally {
            loadingEl.style.display = 'none';
            readBtn.disabled = false;
            readBtn.textContent = '🔮 Read My Cards';
        }
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
