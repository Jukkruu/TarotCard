/**
 * Arcanum Aeterna - Main Logic
 */

/* --- DATA --- */
const TarotData = {
    majors: [
        { code: 'ar00', name: "The Fool", up: "Beginnings, innocence, spontaneity", rev: "Recklessness, risk-taking" },
        { code: 'ar01', name: "The Magician", up: "Manifestation, resourcefulness, power", rev: "Manipulation, poor planning" },
        { code: 'ar02', name: "The High Priestess", up: "Intuition, sacred knowledge", rev: "Secrets, disconnected intuition" },
        { code: 'ar03', name: "The Empress", up: "Femininity, beauty, nature", rev: "Creative block, dependence" },
        { code: 'ar04', name: "The Emperor", up: "Authority, structure, control", rev: "Domination, excessive control" },
        { code: 'ar05', name: "The Hierophant", up: "Spiritual wisdom, tradition", rev: "Personal beliefs, challenging status quo" },
        { code: 'ar06', name: "The Lovers", up: "Love, harmony, choices", rev: "Self-love, disharmony, imbalance" },
        { code: 'ar07', name: "The Chariot", up: "Control, willpower, success", rev: "Self-discipline, lack of direction" },
        { code: 'ar08', name: "Strength", up: "Strength, courage, persuasion", rev: "Inner strength, self-doubt" },
        { code: 'ar09', name: "The Hermit", up: "Soul-searching, introspection", rev: "Isolation, loneliness" },
        { code: 'ar10', name: "Wheel of Fortune", up: "Good luck, karma, destiny", rev: "Bad luck, resistance to change" },
        { code: 'ar11', name: "Justice", up: "Justice, fairness, truth", rev: "Unfairness, lack of accountability" },
        { code: 'ar12', name: "The Hanged Man", up: "Pause, surrender, letting go", rev: "Delays, resistance, stalling" },
        { code: 'ar13', name: "Death", up: "Endings, change, transformation", rev: "Resistance to change" },
        { code: 'ar14', name: "Temperance", up: "Balance, moderation, patience", rev: "Imbalance, excess" },
        { code: 'ar15', name: "The Devil", up: "Shadow self, attachment, addiction", rev: "Releasing limiting beliefs" },
        { code: 'ar16', name: "The Tower", up: "Sudden change, upheaval, awakening", rev: "Personal transformation, fear of change" },
        { code: 'ar17', name: "The Star", up: "Hope, faith, purpose", rev: "Lack of faith, despair" },
        { code: 'ar18', name: "The Moon", up: "Illusion, fear, anxiety", rev: "Release of fear, confusion" },
        { code: 'ar19', name: "The Sun", up: "Positivity, fun, warmth", rev: "Inner child, feeling down" },
        { code: 'ar20', name: "Judgement", up: "Judgement, rebirth, inner calling", rev: "Self-doubt, ignoring the call" },
        { code: 'ar21', name: "The World", up: "Completion, integration, travel", rev: "Seeking personal closure, delays" }
    ],
    minorSuits: [
        { name: 'Wands', code: 'wa', upKey: 'Action & Passion', revKey: 'Delays & Lack of Direction' },
        { name: 'Cups', code: 'cu', upKey: 'Emotion & Intuition', revKey: 'Emotional Blockage' },
        { name: 'Swords', code: 'sw', upKey: 'Intellect & Power', revKey: 'Confusion & Brutality' },
        { name: 'Pentacles', code: 'pe', upKey: 'Material & Career', revKey: 'Loss & Greed' }
    ],
    ranks: [
        { n: 'Ace', s: '01' }, { n: 'Two', s: '02' }, { n: 'Three', s: '03' },
        { n: 'Four', s: '04' }, { n: 'Five', s: '05' }, { n: 'Six', s: '06' },
        { n: 'Seven', s: '07' }, { n: 'Eight', s: '08' }, { n: 'Nine', s: '09' },
        { n: 'Ten', s: '10' }, { n: 'Page', s: 'pa' }, { n: 'Knight', s: 'kn' },
        { n: 'Queen', s: 'qu' }, { n: 'King', s: 'ki' }
    ],

    getDeck() {
        let deck = [...this.majors.map(c => ({ 
            ...c, 
            type: 'Major',
            img: `https://www.sacred-texts.com/tarot/pkt/img/${c.code}.jpg` 
        }))];
        this.minorSuits.forEach(suit => {
            this.ranks.forEach(rank => {
                deck.push({
                    name: `${rank.n} of ${suit.name}`,
                    code: `${suit.code}${rank.s}`,
                    type: 'Minor',
                    img: `https://www.sacred-texts.com/tarot/pkt/img/${suit.code}${rank.s}.jpg`,
                    up: `${rank.n} of ${suit.name}: ${suit.upKey}`,
                    rev: `${rank.n} of ${suit.name} Reversed: ${suit.revKey}`
                });
            });
        });
        return deck;
    }
};

/* --- AUDIO ENGINE --- */
const AudioEngine = {
    ctx: null,
    muted: true,
    oscNodes: [],
    
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    toggleMute() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        this.muted = !this.muted;
        const btn = document.getElementById('btn-sound');
        
        if (!this.muted) {
            btn.textContent = "🔊";
            btn.style.borderColor = "#fff";
            btn.style.boxShadow = "0 0 15px #fff";
            this.startAmbientDrone();
        } else {
            btn.textContent = "🔇";
            btn.style.borderColor = "";
            btn.style.boxShadow = "";
            this.stopAmbientDrone();
        }
    },

    startAmbientDrone() {
        if (this.muted) return;
        this.stopAmbientDrone(); 
        
        const createOsc = (freq, type, pan) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const panner = this.ctx.createStereoPanner();
            
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            
            const lfo = this.ctx.createOscillator();
            lfo.frequency.value = 0.05; 
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.value = 0.03;
            lfo.connect(lfoGain);
            lfoGain.connect(gain.gain);
            lfo.start();

            gain.gain.setValueAtTime(0.06, this.ctx.currentTime); 
            panner.pan.value = pan;

            osc.connect(gain);
            gain.connect(panner);
            panner.connect(this.ctx.destination);
            osc.start();
            
            return { osc, gain, lfo }; 
        };

        this.oscNodes.push(createOsc(55, 'sine', -0.4)); 
        this.oscNodes.push(createOsc(55.5, 'triangle', 0.4)); 
    },

    stopAmbientDrone() {
        this.oscNodes.forEach(node => {
            try { node.osc.stop(); node.lfo.stop(); } catch(e){}
        });
        this.oscNodes = [];
    },

    // White noise swoosh
    playFlip() {
        if (this.muted) return;
        const t = this.ctx.currentTime;
        const bufferSize = this.ctx.sampleRate * 0.6;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(150, t);
        filter.frequency.exponentialRampToValueAtTime(1500, t + 0.15);
        filter.frequency.exponentialRampToValueAtTime(100, t + 0.4);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.4, t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
    },

    // Rapid clicks for shuffle
    playShuffle() {
        if (this.muted) return;
        const t = this.ctx.currentTime;
        for(let i=0; i<15; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'square';
            osc.frequency.value = 100 + Math.random()*50;
            
            const start = t + (i*0.05); 
            gain.gain.setValueAtTime(0, start);
            gain.gain.linearRampToValueAtTime(0.15, start + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.02);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(start);
            osc.stop(start + 0.03);
        }
    }
};

/* --- PARTICLES --- */
const ParticleSystem = {
    canvas: null,
    ctx: null,
    width: 0,
    height: 0,
    particles: [],

    init() {
        this.canvas = document.getElementById('cosmos-canvas');
        if(!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.createParticles();
        this.animate();
    },

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },

    createParticles() {
        for (let i = 0; i < 70; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                size: Math.random() * 2 + 0.5,
                speedY: Math.random() * 0.15 + 0.05,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
    },

    animate() {
        if(!this.ctx) return;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = '#e0d4fc';
        this.particles.forEach(p => {
            p.y -= p.speedY; 
            if (p.y < -5) p.y = this.height + 5;

            this.ctx.globalAlpha = p.opacity;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
        requestAnimationFrame(() => this.animate());
    }
};

/* --- APP --- */
const TarotApp = {
    fullDeck: [],
    drawPile: [],
    drawnCards: [], // Track cards for summary
    tableau: document.getElementById('tableau'),
    status: document.getElementById('status-display'),
    summaryList: document.getElementById('summary-list'),
    isShuffling: false,
    
    init() {
        this.fullDeck = TarotData.getDeck();
        this.shuffleDeck(true); // silent shuffle
        ParticleSystem.init();
    },

    shuffleDeck(silent = false) {
        if (this.isShuffling) return;

        if (!silent) {
            this.isShuffling = true;
            AudioEngine.toggleMute(); // Ensure context is ready if first interaction
            AudioEngine.playShuffle();
            
            const btnShuffle = document.getElementById('btn-shuffle');
            btnShuffle.classList.add('shuffling-active');
            btnShuffle.textContent = "Shuffling...";
            
            this.showStatus("The spirits are realigning...");

            setTimeout(() => {
                this.performShuffleLogic();
                this.resetTableau();
                
                btnShuffle.classList.remove('shuffling-active');
                btnShuffle.textContent = "Shuffle Deck";
                this.isShuffling = false;
                this.showStatus("Deck shuffled. Destiny awaits.");
            }, 1500); 
        } else {
            this.performShuffleLogic();
        }
    },

    performShuffleLogic() {
        this.drawPile = [...this.fullDeck];
        // Fisher-Yates
        for (let i = this.drawPile.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.drawPile[i], this.drawPile[j]] = [this.drawPile[j], this.drawPile[i]];
        }
    },

    resetTableau() {
        this.tableau.innerHTML = '';
        this.drawnCards = [];
        this.updateSummary();
        this.showStatus("");
    },

    showStatus(msg) {
        this.status.textContent = msg;
        this.status.classList.add('visible');
    },

    updateSummary() {
        if (!this.summaryList) return;
        this.summaryList.innerHTML = '';
        
        if (this.drawnCards.length === 0) return;

        this.drawnCards.forEach((card, index) => {
            const li = document.createElement('li');
            const suffix = card.reversed ? " (Reversed)" : "";
            li.textContent = `${index + 1}. ${card.name}${suffix}`;
            this.summaryList.appendChild(li);
        });
    },

    drawCard() {
        if (this.isShuffling) return;
        
        if (this.drawPile.length === 0) {
            this.showStatus("The deck is exhausted. Please shuffle.");
            return;
        }

        const cardData = this.drawPile.shift();
        const isReversed = Math.random() < 0.5;
        
        // Add to history
        this.drawnCards.push({ name: cardData.name, reversed: isReversed });
        this.updateSummary();

        // Audio
        if(AudioEngine.ctx && AudioEngine.ctx.state === 'suspended') AudioEngine.ctx.resume();
        AudioEngine.playFlip();

        this.renderCard(cardData, isReversed);
    },

    renderCard(data, isReversed) {
        const slot = document.createElement('div');
        slot.className = 'card-slot';
        
        const card3d = document.createElement('div');
        card3d.className = 'card-3d in-deck'; 
        if (isReversed) card3d.classList.add('reversed'); // For CSS rotation

        const meaning = isReversed ? data.rev : data.up;
        const statusText = isReversed ? "Reversed" : "Upright";
        const statusClass = isReversed ? "card-status reversed" : "card-status";

        card3d.innerHTML = `
            <div class="card-face card-back"></div>
            <div class="card-face card-front">
                <div class="card-image-wrapper">
                    <img src="${data.img}" alt="${data.name}" 
                         onerror="this.src='https://placehold.co/240x400/000/FFF?text=Image+Lost'">
                </div>
                <div class="card-info">
                    <div class="card-title">${data.name}</div>
                    <div class="${statusClass}">${statusText}</div>
                    <div class="card-meaning">${meaning}</div>
                </div>
            </div>
        `;

        slot.appendChild(card3d);
        this.tableau.appendChild(slot);

        // Animation
        requestAnimationFrame(() => {
            setTimeout(() => {
                card3d.classList.remove('in-deck');
                card3d.classList.add('revealed');
                
                // Fade in text
                setTimeout(() => {
                    const meaningEl = card3d.querySelector('.card-meaning');
                    if (meaningEl) meaningEl.classList.add('visible');
                }, 600);
            }, 50);
        });

        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
};

window.addEventListener('DOMContentLoaded', () => {
    TarotApp.init();
});
