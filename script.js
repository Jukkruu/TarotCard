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
            btnShuffle: "Shuffle Deck", btnDraw: "Draw Card", btnReset: "Reset Table", btnHistory: "Chronicle",
            msgShuffle: "The arcane forces stir...", msgShuffled: "The stars have been realigned.", msgCleared: "The table falls silent.",
            msgMax: "Five cards cast. Clear the table to continue.",
            msgNoDraw: "Draw your cards before consulting the oracle.",
            histTitle: "Chronicle of Readings", aiTitle: "Consult the Oracle",
            lblTopic: "Subject:", lblSituation: "Context:", btnCopy: "Transcribe Prompt", copied: "Inscribed to the ether.",
            clearHist: "Erase Chronicle",
            histEmpty: "The chronicle awaits its first revelation."
        },
        th: {
            title: "อาคานัม เอเทอน่า", subtitle: "ตำนานไพ่ทาโรต์",
            btnShuffle: "สับไพ่", btnDraw: "เปิดไพ่", btnReset: "ล้างกระดาน", btnHistory: "บันทึก",
            msgShuffle: "พลังอาถรรพ์กำลังเคลื่อนไหว...", msgShuffled: "ดวงดาวได้ถูกจัดเรียงใหม่แล้ว", msgCleared: "กระดานเงียบงัน",
            msgMax: "เปิดไพ่ครบห้าใบแล้ว กรุณาล้างกระดานก่อนเปิดใบใหม่",
            msgNoDraw: "กรุณาเปิดไพ่ก่อนปรึกษาทวยเทพ",
            histTitle: "บันทึกการเปิดไพ่", aiTitle: "ปรึกษาทวยเทพ",
            lblTopic: "หัวข้อ:", lblSituation: "สถานการณ์:", btnCopy: "คัดลอกคำทำนาย", copied: "จารึกสู่อีเธอร์แล้ว",
            clearHist: "ลบบันทึก",
            histEmpty: "บันทึกรอคอยการเปิดเผยครั้งแรก"
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
    },

    // Synthesized one-shot sound effects
    playOneShot(type) {
        if (!state.soundOn || !this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        if (type === 'whoosh') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(300, t);
            osc.frequency.exponentialRampToValueAtTime(60, t + 0.5);
            gain.gain.setValueAtTime(0.06, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(t); osc.stop(t + 0.5);
        } else if (type === 'shuffle') {
            // Short noise burst
            const bufSize = this.ctx.sampleRate * 0.3;
            const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
            const data = buf.getChannelData(0);
            for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
            const src = this.ctx.createBufferSource();
            src.buffer = buf;
            const g = this.ctx.createGain();
            g.gain.setValueAtTime(0.15, t);
            g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
            src.connect(g); g.connect(this.ctx.destination);
            src.start(); src.stop(t + 0.3);
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

        // Shuffle — Arcane Storm: cards scatter outward
        document.getElementById('btn-shuffle').onclick = () => {
            this.showToast(appData.translations[state.lang].msgShuffle);

            // Measure positions BEFORE clearing
            const cardData = [...document.querySelectorAll('.card-unit')].map(c => ({
                el: c,
                rect: c.getBoundingClientRect()
            }));

            // Reset physics & overlay IMMEDIATELY
            state.drawnCards = []; state.drawnBodies = [];
            document.getElementById('reading-overlay').innerHTML = '';
            Physics.spawnCards();
            this.updateCardCount();

            // Sound
            if (state.soundOn) AudioSys.playOneShot('shuffle');

            // Arcane storm overlay — crackling rune ring
            const stormOverlay = document.createElement('div');
            stormOverlay.className = 'arcane-storm-overlay';
            stormOverlay.innerHTML = '<div class="storm-ring"></div><div class="storm-ring storm-ring-2"></div>';
            document.body.appendChild(stormOverlay);
            setTimeout(() => stormOverlay.remove(), 900);

            if (cardData.length > 0) {
                cardData.forEach((cd, i) => {
                    const c = cd.el;
                    const r = cd.rect;
                    // Give each card a random scatter direction via CSS vars
                    const angle = Math.random() * 360;
                    const dist = 120 + Math.random() * 160;
                    const dx = Math.cos(angle * Math.PI / 180) * dist;
                    const dy = Math.sin(angle * Math.PI / 180) * dist;
                    c.style.setProperty('--scatter-x', `${dx}px`);
                    c.style.setProperty('--scatter-y', `${dy}px`);
                    c.style.setProperty('--scatter-rot', `${(Math.random() - 0.5) * 720}deg`);
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
                    c.classList.add('arcane-scatter');
                });
                setTimeout(() => cardData.forEach(cd => cd.el.remove()), 900);
            } else {
                document.body.classList.add('shake-blur');
                setTimeout(() => document.body.classList.remove('shake-blur'), 700);
            }

            Physics.shakeWorld();
            setTimeout(() => this.showToast(appData.translations[state.lang].msgShuffled), 1000);
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
        // Backdrop click closes history
        const backdrop = document.getElementById('history-backdrop');
        if (backdrop) backdrop.onclick = () => {
            document.getElementById('history-modal').classList.remove('visible');
        };
        document.getElementById('btn-copy-ai').onclick = () => this.copyToAI();
        const btnAiRead = document.getElementById('btn-ai-read');
        if (btnAiRead) btnAiRead.onclick = () => this.askOracle();
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

    updateCardCount() {
        const badge = document.getElementById('card-count-badge');
        if (!badge) return;
        const count = state.drawnCards.length;
        if (count === 0) {
            badge.textContent = '';
            badge.classList.remove('visible');
        } else {
            badge.textContent = `${count} / 5`;
            badge.classList.add('visible');
            badge.classList.toggle('badge-max', count >= 5);
        }
        // Disable/enable draw button
        const btnDraw = document.getElementById('btn-draw');
        if (btnDraw) btnDraw.disabled = count >= 5;
    },

    actionDraw() {
        if (state.drawnCards.length >= 5) {
            this.showToast(appData.translations[state.lang].msgMax);
            return;
        }

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
        el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'center' });

        state.history.push(cardObj);
        this.updateCardCount();
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
        document.getElementById('reading-overlay').innerHTML = '';
        Physics.spawnCards();
        this.updateCardCount();

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

        // Empty state placeholder
        if (state.history.length === 0) {
            const empty = document.createElement('li');
            empty.className = 'history-empty';
            empty.textContent = appData.translations[state.lang].histEmpty;
            list.appendChild(empty);
            return;
        }

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
        if (state.drawnCards.length === 0) {
            this.showToast(appData.translations[state.lang].msgNoDraw);
            return;
        }
        const topic = document.getElementById('ai-topic').value;
        const sit = document.getElementById('ai-situation').value;

        let prompt;
        if (state.lang === 'th') {
            const cards = state.drawnCards.map((c, i) => `${i + 1}. ${c.nameTH} (${c.reversed ? 'กลับหัว' : 'หัวตั้ง'})`).join(', ');
            prompt = `รับบทเป็นหมอดูไพ่ทาโรต์ผู้เชี่ยวชาญ ทำนายดวงชะตาจากไพ่ที่จับได้:
ไพ่ที่ได้: ${cards}
หัวข้อ: ${topic}
สถานการณ์: ${sit || 'ไม่ระบุ'}
ขอ: 1.ความหมายแต่ละใบ 2.ความเชื่อมโยง 3.คำแนะนำ — ภาษาไทยกันเอง`;
        } else {
            const cards = state.drawnCards.map((c, i) => `${i + 1}. ${c.nameEN} (${c.reversed ? 'Reversed' : 'Upright'})`).join(', ');
            prompt = `You are a wise tarot oracle. Read these cards:
Cards: ${cards}
Topic: ${topic}
Situation: ${sit || 'Not specified'}
Provide: 1. Individual meanings 2. Story connecting them 3. Actionable advice. Warm, mystical tone.`;
        }

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
        el.textContent = msg;
        el.classList.add('visible');
        // Proportional duration: 2s base + 40ms per character, max 4s
        const duration = Math.min(4000, Math.max(2000, msg.length * 40));
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => el.classList.remove('visible'), duration);
    },

    showDetail(cardObj) {
        if (!cardObj) return;
        const overlay = document.getElementById('card-detail-overlay');
        const imgEl = document.getElementById('detail-img');
        imgEl.classList.remove('loaded');
        imgEl.onload = () => imgEl.classList.add('loaded');
        imgEl.src = cardObj.img;
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
