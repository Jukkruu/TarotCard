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

let state = { lang: 'en', soundOn: false, drawnCards: [], deckBodies: [], drawnBodies: [], history: [], bgmPlaying: false, welcomeSeen: false };
const fullDeck = appData.generateDeck();
const STORE_KEY = 'arcanum_state_v1';

/* --- 2. ADVANCED AUDIO SYSTEM --- */
const AudioSys = {
    ctx: null,
    bgAudio: null, // HTML Audio Element reference

    init() {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.bgAudio = document.getElementById('bg-music');
    },

    // Reveal chime — a shimmering layered bell with a sparkle tail
    playDraw() {
        if (!state.soundOn || !this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const t = this.ctx.currentTime;
        const master = this.ctx.createGain();
        master.gain.value = 0.9;
        master.connect(this.ctx.destination);

        // A bright open chord (C5 · G5 · C6 · G6) rung in quick succession
        const freqs = [523.25, 783.99, 1046.5, 1567.98];
        freqs.forEach((f, i) => {
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, t);
            osc.frequency.exponentialRampToValueAtTime(f * 1.5, t + 0.45);
            const peak = 0.07 / (i + 1);
            g.gain.setValueAtTime(0.0001, t);
            g.gain.exponentialRampToValueAtTime(peak, t + 0.02 + i * 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7 + i * 0.12);
            osc.connect(g); g.connect(master);
            osc.start(t + i * 0.02); osc.stop(t + 1.0 + i * 0.12);
        });
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
        } else if (type === 'dissolve') {
            // Gentle descending shimmer for the stardust reset
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(880, t);
            osc.frequency.exponentialRampToValueAtTime(180, t + 0.7);
            gain.gain.setValueAtTime(0.07, t);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(t); osc.stop(t + 0.8);
        } else if (type === 'riffle') {
            // Rapid card-flick burst — simulates a riffle shuffle
            const FLICKS = 11;
            for (let i = 0; i < FLICKS; i++) {
                const delay = i * 0.058 + Math.random() * 0.014;
                const bufSz = Math.ceil(this.ctx.sampleRate * 0.052);
                const rbuf = this.ctx.createBuffer(1, bufSz, this.ctx.sampleRate);
                const rd = rbuf.getChannelData(0);
                for (let j = 0; j < bufSz; j++) {
                    rd[j] = (Math.random() * 2 - 1) * Math.pow(1 - j / bufSz, 1.6);
                }
                const rsrc = this.ctx.createBufferSource();
                rsrc.buffer = rbuf;
                const rbp = this.ctx.createBiquadFilter();
                rbp.type = 'bandpass';
                rbp.frequency.value = 1200 + Math.random() * 700;
                rbp.Q.value = 1.0;
                const rg = this.ctx.createGain();
                rg.gain.setValueAtTime(0.0001, t + delay);
                rg.gain.exponentialRampToValueAtTime(0.13, t + delay + 0.006);
                rg.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.052);
                rsrc.connect(rbp); rbp.connect(rg); rg.connect(this.ctx.destination);
                rsrc.start(t + delay);
                rsrc.stop(t + delay + 0.068);
            }
        } else if (type === 'flip') {
            // Card flip — a short filtered noise swish + a soft wooden thunk
            const bufSize = this.ctx.sampleRate * 0.16;
            const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
            const data = buf.getChannelData(0);
            for (let i = 0; i < bufSize; i++) {
                // fade the noise so it reads as a quick "whff"
                data[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
            }
            const src = this.ctx.createBufferSource();
            src.buffer = buf;
            const bp = this.ctx.createBiquadFilter();
            bp.type = 'bandpass';
            bp.frequency.setValueAtTime(1800, t);
            bp.frequency.exponentialRampToValueAtTime(600, t + 0.16);
            bp.Q.value = 0.8;
            const ng = this.ctx.createGain();
            ng.gain.setValueAtTime(0.16, t);
            ng.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
            src.connect(bp); bp.connect(ng); ng.connect(this.ctx.destination);
            src.start(t); src.stop(t + 0.16);

            // soft thunk as it lands
            osc.type = 'sine';
            osc.frequency.setValueAtTime(320, t + 0.06);
            osc.frequency.exponentialRampToValueAtTime(150, t + 0.22);
            gain.gain.setValueAtTime(0.0001, t + 0.06);
            gain.gain.exponentialRampToValueAtTime(0.05, t + 0.09);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(t + 0.06); osc.stop(t + 0.28);
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
        this.loadState();
        Physics.init(); Physics.spawnCards();
        this.setupEvents(); this.updateUI();
        this.spawnRunes();
        this.spawnShootingStars();
        this.preloadImages();
        this.setupKeyboard();

        // Skip the welcome modal on return visits
        if (state.welcomeSeen) {
            const wm = document.getElementById('welcome-modal');
            if (wm) wm.classList.remove('visible');
        }

        // Welcome modal dismiss
        document.getElementById('welcome-dismiss').addEventListener('click', () => {
            document.getElementById('welcome-modal').classList.remove('visible');
            state.welcomeSeen = true; this.saveState();
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
            const sb = document.getElementById('btn-sound');
            if (sb) { sb.textContent = '🔊'; sb.classList.remove('muted'); }
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
        // Shuffle — Riffle deck animation
        document.getElementById('btn-shuffle').onclick = () => {
            this.showToast(appData.translations[state.lang].msgShuffle);

            const drawnEls = [...document.querySelectorAll('#reading-overlay .card-unit')];
            const cx = window.innerWidth / 2, cy = window.innerHeight * 0.44;

            if (drawnEls.length > 0) {
                // Shrink drawn cards toward center before riffle begins
                drawnEls.forEach(c => {
                    const r = c.getBoundingClientRect();
                    const dx = cx - (r.left + r.width / 2);
                    const dy = cy - (r.top + r.height / 2);
                    c.style.transition = 'transform 0.22s ease-in, opacity 0.22s ease-in';
                    c.style.transform = `translate(${dx}px,${dy}px) scale(0.1) rotate(${(Math.random() - 0.5) * 200}deg)`;
                    c.style.opacity = '0';
                    c.style.pointerEvents = 'none';
                });
            } else {
                document.body.classList.add('shake-blur');
                setTimeout(() => document.body.classList.remove('shake-blur'), 700);
            }

            // Reset state after cards fade
            setTimeout(() => {
                state.drawnCards = []; state.drawnBodies = [];
                document.getElementById('reading-overlay').innerHTML = '';
                Physics.spawnCards();
                this.updateCardCount();
                Physics.shakeWorld();
            }, drawnEls.length > 0 ? 220 : 0);

            // Riffle animation
            this.showRiffleShuffle(() => {
                setTimeout(() => this.showToast(appData.translations[state.lang].msgShuffled), 100);
            });

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

        const btnAiRead = document.getElementById('btn-ai-read');
        if (btnAiRead) btnAiRead.onclick = () => this.askOracle();

        // Card of the Day
        const btnDaily = document.getElementById('btn-daily');
        if (btnDaily) btnDaily.onclick = () => this.showDailyCard();

        // Sound toggle (works on desktop & mobile)
        const btnSound = document.getElementById('btn-sound');
        if (btnSound) btnSound.onclick = () => {
            const on = AudioSys.toggle();
            btnSound.textContent = on ? '🔊' : '🔇';
            btnSound.classList.toggle('muted', !on);
            btnSound.setAttribute('aria-label', on ? 'Mute sound' : 'Unmute sound');
            this.saveState();
        };

        // Language toggle EN ⇄ TH
        const btnLang = document.getElementById('btn-lang');
        if (btnLang) btnLang.onclick = () => {
            state.lang = state.lang === 'en' ? 'th' : 'en';
            this.updateUI();
            this.refreshCardLang();
            const histModal = document.getElementById('history-modal');
            if (histModal && histModal.classList.contains('visible')) this.renderHistory();
            this.saveState();
        };
    },



    updateUI() {
        const t = appData.translations[state.lang];
        const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
        set('app-title', t.title); set('app-subtitle', t.subtitle);
        set('btn-shuffle', t.btnShuffle); set('btn-draw', t.btnDraw);
        set('btn-reset', t.btnReset); set('btn-history', t.btnHistory);
        set('history-title', t.histTitle); set('ai-title', t.aiTitle);
        set('lbl-topic', t.lblTopic); set('lbl-situation', t.lblSituation);

        const clrBtn = document.getElementById('btn-clear-hist');
        if (clrBtn) clrBtn.textContent = t.clearHist;

        // Top-bar controls
        set('btn-lang', state.lang.toUpperCase());
        const sb = document.getElementById('btn-sound');
        if (sb) {
            sb.textContent = state.soundOn ? '🔊' : '🔇';
            sb.classList.toggle('muted', !state.soundOn);
        }
    },

    refreshCardLang() {
        document.querySelectorAll('#reading-overlay .card-unit').forEach(el => {
            const c = state.drawnCards[parseInt(el.dataset.cardIndex)];
            if (!c) return;
            const orient = c.reversed
                ? (state.lang === 'th' ? 'กลับหัว' : 'REVERSED')
                : (state.lang === 'th' ? 'หัวตั้ง' : 'UPRIGHT');
            const t = el.querySelector('.card-title');
            const k = el.querySelector('.card-keywords');
            const o = el.querySelector('.card-orientation');
            if (t) t.textContent = state.lang === 'th' ? c.nameTH : c.nameEN;
            if (k) k.textContent = state.lang === 'th' ? c.mTH : c.mEN;
            if (o) o.textContent = orient;
        });
        // Live-update an open detail overlay
        const detail = document.getElementById('card-detail-overlay');
        if (detail.classList.contains('visible') && this._detailCard) {
            const c = this._detailCard;
            document.getElementById('detail-title').textContent = state.lang === 'th' ? c.nameTH : c.nameEN;
            document.getElementById('detail-meaning').textContent = state.lang === 'th' ? c.mTH : c.mEN;
            const oEl = document.getElementById('detail-orient');
            oEl.textContent = c.reversed
                ? (state.lang === 'th' ? '⟲ กลับหัว' : '⟲ REVERSED')
                : (state.lang === 'th' ? '△ หัวตั้ง' : '△ UPRIGHT');
        }
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

        // Start fetching the card image now while the card is still face-down
        const _preImg = new Image(); _preImg.src = cardObj.img;

        // Render DOM — face-down card that flips to reveal
        const overlay = document.getElementById('reading-overlay');
        const el = document.createElement('div');
        el.className = 'card-unit' + (isRev ? ' is-reversed' : '');

        const title = state.lang === 'th' ? cardObj.nameTH : cardObj.nameEN;
        const mean = state.lang === 'th' ? cardObj.mTH : cardObj.mEN;
        const orient = isRev ? (state.lang === 'th' ? "กลับหัว" : "REVERSED") : (state.lang === 'th' ? "หัวตั้ง" : "UPRIGHT");

        el.innerHTML = `
            <div class="card-flip">
                <div class="flip-face flip-back"><div class="card-back-design"></div></div>
                <div class="flip-face flip-front">
                    <div class="card-image-area">
                        <img src="${cardObj.img}" loading="eager" decoding="async" fetchpriority="high">
                        <span class="cu-corner tl"></span>
                        <span class="cu-corner tr"></span>
                        <span class="cu-corner bl"></span>
                        <span class="cu-corner br"></span>
                    </div>
                    <div class="card-text-area">
                        <h3 class="card-title">${title}</h3>
                        <div class="card-orientation ${isRev ? 'reversed' : 'upright'}">${orient}</div>
                        <div class="card-keywords">${mean}</div>
                    </div>
                </div>
            </div>
        `;
        el.dataset.cardIndex = state.drawnCards.length - 1;
        overlay.appendChild(el);
        el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'center' });

        state.history.push(cardObj);
        this.saveState();
        this.updateCardCount();

        // Flip reveal: let the card settle, flip it, then burst at the half-turn
        setTimeout(() => {
            el.classList.add('revealed');
            AudioSys.playOneShot('flip');
            setTimeout(() => {
                const r = el.getBoundingClientRect();
                const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
                this.revealBurst(cx, cy);
                this.spawnSparkles(cx, cy, 12, '#ffd700');
                AudioSys.playDraw();
            }, 470);
        }, 360);
    },

    /* --- FX HELPERS --- */
    revealBurst(x, y) {
        const b = document.createElement('div');
        b.className = 'reveal-burst';
        b.style.left = `${x}px`;
        b.style.top = `${y}px`;
        document.body.appendChild(b);
        setTimeout(() => b.remove(), 750);
    },

    /* --- PERSISTENCE --- */
    loadState() {
        try {
            const raw = localStorage.getItem(STORE_KEY);
            if (!raw) return;
            const s = JSON.parse(raw);
            if (Array.isArray(s.history)) state.history = s.history;
            if (s.lang === 'en' || s.lang === 'th') state.lang = s.lang;
            if (typeof s.soundOn === 'boolean') state.soundOn = s.soundOn;
            state.welcomeSeen = !!s.welcomeSeen;
        } catch (e) { /* private mode / corrupt — ignore */ }
    },

    saveState() {
        try {
            localStorage.setItem(STORE_KEY, JSON.stringify({
                history: state.history.slice(-120),
                lang: state.lang,
                soundOn: state.soundOn,
                welcomeSeen: state.welcomeSeen
            }));
        } catch (e) { /* storage full / blocked — ignore */ }
    },

    /* --- KEYBOARD SHORTCUTS (desktop power-use) --- */
    setupKeyboard() {
        document.addEventListener('keydown', e => {
            const tag = (e.target.tagName || '').toLowerCase();
            if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
            if (e.metaKey || e.ctrlKey || e.altKey) return;

            if (e.key === 'Escape') {
                this.hideDetail();
                const hm = document.getElementById('history-modal');
                if (hm) hm.classList.remove('visible');
                const wm = document.getElementById('welcome-modal');
                if (wm && wm.classList.contains('visible')) {
                    wm.classList.remove('visible');
                    state.welcomeSeen = true; this.saveState();
                }
                return;
            }
            const click = id => { const el = document.getElementById(id); if (el && !el.disabled) el.click(); };
            switch (e.key.toLowerCase()) {
                case 's': click('btn-shuffle'); break;
                case 'd': click('btn-draw'); break;
                case 'r': click('btn-reset'); break;
                case 'h': click('btn-history'); break;
                case 'c': this.showDailyCard(); break;
            }
        });
    },

    /* --- CARD OF THE DAY (deterministic per calendar day) --- */
    showDailyCard() {
        const d = new Date();
        const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
        const idx = (seed * 9301 + 49297) % fullDeck.length;
        const reversed = ((Math.floor(seed / 7)) % 2) === 1;
        const cardObj = { ...fullDeck[idx], reversed };
        this.showDetail(cardObj);
        const typeEl = document.getElementById('detail-type');
        if (typeEl) {
            const label = state.lang === 'th' ? '🌙 ไพ่ประจำวัน' : '🌙 Card of the Day';
            const kind = cardObj.type === 'Major' ? '✦ Major Arcana' : '✧ Minor Arcana';
            typeEl.textContent = `${label} · ${kind}`;
        }
    },

    spawnRunes() {
        const layer = document.getElementById('runes-layer');
        if (!layer) return;
        const glyphs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓',
            '☿', '♀', '♁', '♂', '♃', '♄', '☉', '☽', '✶', '✦', '⛤', '☥', '⚹',
            '🜁', '🜂', '🜃', '🜄', '⚶', '⚷', '⚸', '⚻', '⚼', '⯑', '⯒'];
        const runeColors = [
            'rgba(212,175,55,VAR)',   // gold
            'rgba(180,120,255,VAR)',  // violet
            'rgba(70,200,230,VAR)',   // teal
            'rgba(220,200,255,VAR)',  // pale lavender
            'rgba(255,160,80,VAR)',   // amber
        ];
        const touch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
        const count = touch ? 22 : 44;
        for (let i = 0; i < count; i++) {
            const r = document.createElement('span');
            r.className = 'rune-float';
            r.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
            r.style.left = `${Math.random() * 100}%`;
            r.style.fontSize = `${12 + Math.random() * 28}px`;
            r.style.setProperty('--dur', `${13 + Math.random() * 18}s`);
            r.style.setProperty('--delay', `${-Math.random() * 24}s`);
            r.style.setProperty('--drift', `${(Math.random() - 0.5) * 130}px`);
            const peak = 0.12 + Math.random() * 0.28;
            r.style.setProperty('--peak', `${peak}`);
            const col = runeColors[Math.floor(Math.random() * runeColors.length)]
                .replace('VAR', peak.toFixed(2));
            r.style.color = col;
            r.style.textShadow = `0 0 8px ${col}`;
            layer.appendChild(r);
        }
    },

    spawnShootingStars() {
        const spawn = () => {
            if (document.hidden) return;
            const s = document.createElement('div');
            s.className = 'shooting-star';
            const ang = -(18 + Math.random() * 22);
            const startX = Math.random() * 80;
            const startY = Math.random() * 35;
            const travelX = 28 + Math.random() * 44;
            const travelY = 12 + Math.random() * 22;
            const len = 70 + Math.random() * 130;
            s.style.width = `${len}px`;
            s.style.setProperty('--sx', `${startX}vw`);
            s.style.setProperty('--sy', `${startY}vh`);
            s.style.setProperty('--dx', `${travelX}vw`);
            s.style.setProperty('--dy', `${travelY}vh`);
            s.style.setProperty('--ang', `${ang}deg`);
            s.style.setProperty('--dur', `${0.7 + Math.random() * 0.7}s`);
            document.body.appendChild(s);
            setTimeout(() => s.remove(), 2000);
            setTimeout(spawn, 5000 + Math.random() * 10000);
        };
        setTimeout(spawn, 3000 + Math.random() * 4000);
    },

    showRiffleShuffle(onDone) {
        const N = 12;
        const cx = window.innerWidth / 2, cy = window.innerHeight * 0.44;

        const wrap = document.createElement('div');
        wrap.style.cssText = 'position:fixed;inset:0;z-index:410;pointer-events:none;overflow:hidden;';
        document.body.appendChild(wrap);

        // Build deck pile
        const rcards = [];
        for (let i = 0; i < N; i++) {
            const rc = document.createElement('div');
            rc.className = 'riffle-card';
            rc.textContent = '✦';
            rc.style.cssText = `left:${cx}px;top:${cy}px;opacity:0;transform:translate(-50%,-50%) translateY(${-i * 1.4}px) scale(0.45);`;
            wrap.appendChild(rc);
            rcards.push(rc);
        }

        // Phase 1: Stack entrance (cards deal in staggered)
        requestAnimationFrame(() => {
            rcards.forEach((rc, i) => {
                setTimeout(() => {
                    rc.style.transition = 'transform 0.28s cubic-bezier(0.34,1.56,0.64,1), opacity 0.18s ease';
                    rc.style.opacity = '1';
                    rc.style.transform = `translate(-50%,-50%) translateY(${-i * 1.4}px) rotate(${(Math.random() - 0.5) * 1.2}deg)`;
                }, i * 14);
            });
        });

        const half = Math.floor(N / 2);

        // Phase 2: Split deck left/right (at 260ms)
        setTimeout(() => {
            if (state.soundOn) AudioSys.playOneShot('shuffle');
            rcards.forEach((rc, i) => {
                rc.style.transition = 'transform 0.30s cubic-bezier(0.4,0,0.2,1)';
                if (i < half) {
                    rc.style.transform = `translate(-50%,-50%) translateX(-74px) translateY(${-i * 1.8}px) rotate(${-7 - i * 0.7}deg)`;
                } else {
                    const j = i - half;
                    rc.style.transform = `translate(-50%,-50%) translateX(74px) translateY(${-j * 1.8}px) rotate(${7 + j * 0.7}deg)`;
                }
            });
        }, 260);

        // Phase 3: Riffle interleave (at 620ms)
        const order = [];
        let li = 0, ri = half;
        while (li < half || ri < N) {
            if (li < half && (ri >= N || Math.random() > 0.42)) order.push(li++);
            else order.push(ri++);
        }

        if (state.soundOn) setTimeout(() => AudioSys.playOneShot('riffle'), 615);

        order.forEach((ci, k) => {
            setTimeout(() => {
                rcards[ci].style.transition = 'transform 0.09s ease-in';
                rcards[ci].style.transform = `translate(-50%,-50%) translateY(${-k * 1.6}px) rotate(${(Math.random() - 0.5) * 1.4}deg)`;
            }, 620 + k * 52);
        });

        const riffleDone = 620 + N * 52;

        // Phase 4: Scatter + sparkle burst
        setTimeout(() => {
            this.screenFlash();
            this.spawnSparkles(cx, cy, 22, '#ffd700', { shard: true, spread: 200, minDist: 55 });
            if (state.soundOn) AudioSys.playOneShot('whoosh');
            rcards.forEach((rc, i) => {
                const ang = (i / N) * Math.PI * 2 + (Math.random() - 0.5) * 0.7;
                const dist = 120 + Math.random() * 200;
                rc.style.transition = 'transform 0.55s cubic-bezier(0.2,0.6,0.3,1), opacity 0.45s ease';
                rc.style.transform = `translate(-50%,-50%) translate(${Math.cos(ang) * dist}px,${Math.sin(ang) * dist}px) rotate(${(Math.random() - 0.5) * 540}deg) scale(0.05)`;
                rc.style.opacity = '0';
            });
            setTimeout(() => wrap.remove(), 620);
            if (onDone) onDone();
        }, riffleDone + 100);
    },

    preloadImages() {
        const deck = [...fullDeck];
        let i = 0;
        const BATCH = 8;
        const load = () => {
            deck.slice(i, i + BATCH).forEach(c => { (new Image()).src = c.img; });
            i += BATCH;
            if (i < deck.length) setTimeout(load, 350);
        };
        setTimeout(load, 1200);
    },

    screenQuake() {
        document.body.classList.remove('fx-quake');
        void document.body.offsetWidth; // restart animation
        document.body.classList.add('fx-quake');
        clearTimeout(this._quakeTimer);
        this._quakeTimer = setTimeout(() => document.body.classList.remove('fx-quake'), 720);
    },

    screenFlash(violet = false) {
        const f = document.createElement('div');
        f.className = 'fx-flash' + (violet ? ' violet' : '');
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 560);
    },

    spawnSparkles(x, y, count, color, opts = {}) {
        for (let i = 0; i < count; i++) {
            const s = document.createElement('div');
            s.className = opts.shard ? 'spark shard' : 'spark';
            const ang = opts.upward
                ? (-Math.PI / 2 + (Math.random() - 0.5) * 1.7)
                : (Math.random() * Math.PI * 2);
            const dist = (opts.minDist || 40) + Math.random() * (opts.spread || 90);
            const ox = opts.scatter ? (Math.random() - 0.5) * opts.scatter : 0;
            const oy = opts.scatter ? (Math.random() - 0.5) * opts.scatter : 0;
            s.style.left = `${x + ox}px`;
            s.style.top = `${y + oy}px`;
            s.style.setProperty('--dx', `${Math.cos(ang) * dist}px`);
            s.style.setProperty('--dy', `${Math.sin(ang) * dist}px`);
            s.style.setProperty('--s', `${2 + Math.random() * 4}px`);
            s.style.setProperty('--dur', `${0.7 + Math.random() * 0.7}s`);
            s.style.setProperty('--spark-color', color);
            document.body.appendChild(s);
            setTimeout(() => s.remove(), 1600);
        }
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

        const cx0 = window.innerWidth / 2, cy0 = window.innerHeight / 2;

        // Big violet supernova flash + camera quake
        this.screenFlash(true);
        this.screenQuake();

        // Each card recoils inward, then blasts outward into shards
        cardData.forEach(cd => {
            const c = cd.el;
            const r = cd.rect;
            const ccx = r.left + r.width / 2, ccy = r.top + r.height / 2;
            // Outward direction from screen center (cards near center get a random push)
            let dx = ccx - cx0, dy = ccy - cy0;
            const len = Math.hypot(dx, dy) || 1;
            const push = 320 + Math.random() * 220;
            dx = (dx / len) * push;
            dy = (dy / len) * push;
            c.style.transform = '';
            c.style.setProperty('--ex', `${dx}px`);
            c.style.setProperty('--ey', `${dy}px`);
            c.style.setProperty('--er', `${(Math.random() - 0.5) * 720}deg`);
            Object.assign(c.style, {
                position: 'fixed',
                top: `${r.top}px`,
                left: `${r.left}px`,
                width: `${r.width}px`,
                height: `${r.height}px`,
                margin: '0',
                zIndex: '320',
                pointerEvents: 'none',
                overflow: 'visible'
            });
            document.body.appendChild(c);
            c.getBoundingClientRect();
            c.classList.add('blast-out');

            // Shards exploding from each card
            this.spawnSparkles(ccx, ccy, 14, '#d9b3ff', {
                minDist: 60, spread: 200, shard: true, scatter: Math.max(r.width, r.height) * 0.6
            });
        });

        // Central detonation burst + shockwave
        this.spawnSparkles(cx0, cy0, 30, '#ffd700', { minDist: 90, spread: 360, shard: true });
        const ring1 = document.createElement('div'); ring1.className = 'shock-ring';
        const ring2 = document.createElement('div'); ring2.className = 'shock-ring delay';
        document.body.append(ring1, ring2);
        setTimeout(() => { ring1.remove(); ring2.remove(); }, 950);

        if (state.soundOn) AudioSys.playOneShot('dissolve');
        this.showToast(appData.translations[state.lang].msgCleared);

        // Remove blasted cards after animation
        setTimeout(() => cardData.forEach(cd => cd.el.remove()), 1000);
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
            clearBtn.onclick = () => { state.history = []; this.saveState(); this.renderHistory(); };
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
                <img src="${c.img}" class="history-thumb${c.reversed ? ' reversed' : ''}">
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

    askOracle() {
        if (state.drawnCards.length === 0) {
            this.showToast(state.lang === 'th' ? 'กรุณาเปิดไพ่ก่อน' : 'Draw cards first!');
            return;
        }

        const topic = document.getElementById('ai-topic').value;
        const sit = document.getElementById('ai-situation').value;
        const responseEl = document.getElementById('ai-response');

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

        // Build prompt display
        const isTH = state.lang === 'th';
        const header = document.createElement('div');
        header.className = 'ai-prompt-header';

        const label = document.createElement('span');
        label.textContent = isTH ? '✦ พร้อมวางใน AI ของคุณ' : '✦ Ready for your AI oracle';

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-prompt-btn';
        copyBtn.textContent = '📋 ' + (isTH ? 'คัดลอก' : 'Copy');
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(prompt).then(() => {
                copyBtn.textContent = '✓ ' + (isTH ? 'คัดลอกแล้ว!' : 'Copied!');
                setTimeout(() => {
                    copyBtn.textContent = '📋 ' + (isTH ? 'คัดลอก' : 'Copy');
                }, 2200);
            }).catch(() => {
                copyBtn.textContent = isTH ? 'เลือกข้อความด้านล่าง' : 'Select text below';
            });
        };

        header.appendChild(label);
        header.appendChild(copyBtn);

        const instr = document.createElement('div');
        instr.className = 'ai-prompt-instructions';
        instr.textContent = isTH
            ? 'วางข้อความนี้ใน ChatGPT, Claude, Gemini หรือ AI ใดก็ได้ เพื่อรับคำทำนาย'
            : 'Paste into ChatGPT, Claude, Gemini, or any AI to receive your reading';

        const pre = document.createElement('pre');
        pre.className = 'ai-prompt-text';
        pre.textContent = prompt;

        responseEl.innerHTML = '';
        responseEl.appendChild(header);
        responseEl.appendChild(instr);
        responseEl.appendChild(pre);
        responseEl.style.display = 'block';
        responseEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Auto-copy on button press
        navigator.clipboard.writeText(prompt).then(() => {
            this.showToast(isTH ? '✦ คัดลอกแล้ว — วางใน AI ของคุณ' : '✦ Copied — paste into your AI oracle');
        }).catch(() => {});
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
        this._detailCard = cardObj;
        const overlay = document.getElementById('card-detail-overlay');
        const imgEl = document.getElementById('detail-img');
        imgEl.classList.remove('loaded');
        imgEl.onload = () => imgEl.classList.add('loaded');
        imgEl.src = cardObj.img;
        imgEl.classList.toggle('reversed-img', !!cardObj.reversed);
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
