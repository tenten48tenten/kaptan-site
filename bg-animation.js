// Türk Bayrağı + Particle Network Canvas Animation
(function () {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, particles = [], mouse = { x: -9999, y: -9999 };

    const CONFIG = {
        particleCount: 80,
        particleRadius: 1.8,
        lineDistance: 150,
        mouseDistance: 170,
        speed: 0.35,
        colorPrimary: '255, 255, 255',
        colorSecondary: '255, 220, 220',
        colorTertiary: '255, 200, 200',
    };

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = document.body.scrollHeight || window.innerHeight;
    }

    function drawFlag() {
        ctx.fillStyle = '#E30A17';
        ctx.fillRect(0, 0, W, H);
        ctx.save();
        ctx.globalAlpha = 0.07;
        drawCrescent(W * 0.5, H * 0.35, Math.min(W, H) * 0.38);
        ctx.restore();
        ctx.save();
        ctx.globalAlpha = 0.04;
        drawCrescent(W * 0.1, H * 0.75, Math.min(W, H) * 0.13);
        ctx.restore();
        ctx.save();
        ctx.globalAlpha = 0.03;
        drawCrescent(W * 0.88, H * 0.15, Math.min(W, H) * 0.1);
        ctx.restore();
    }

    function drawCrescent(cx, cy, size) {
        const r = size * 0.27;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(cx - size * 0.05, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#E30A17';
        ctx.beginPath();
        ctx.arc(cx + r * 0.25, cy, r * 0.8, 0, Math.PI * 2);
        ctx.fill();
        drawStar(cx + r * 0.9, cy, 5, r * 0.35, r * 0.14);
    }

    function drawStar(cx, cy, points, outerR, innerR) {
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        for (let i = 0; i < points * 2; i++) {
            const r = i % 2 === 0 ? outerR : innerR;
            const angle = (i * Math.PI) / points - Math.PI / 2;
            i === 0 ? ctx.moveTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle))
                    : ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
        }
        ctx.closePath();
        ctx.fill();
    }

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.vx = (Math.random() - 0.5) * CONFIG.speed;
            this.vy = (Math.random() - 0.5) * CONFIG.speed;
            this.radius = Math.random() * CONFIG.particleRadius + 0.8;
            const r = Math.random();
            this.color = r < 0.6 ? CONFIG.colorPrimary : r < 0.8 ? CONFIG.colorSecondary : CONFIG.colorTertiary;
            this.baseAlpha = Math.random() * 0.35 + 0.2;
            this.alpha = this.baseAlpha;
            this.pulseSpeed = Math.random() * 0.02 + 0.005;
            this.pulseAngle = Math.random() * Math.PI * 2;
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            this.pulseAngle += this.pulseSpeed;
            this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.1;
            const dx = mouse.x - this.x, dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONFIG.mouseDistance) {
                const force = (CONFIG.mouseDistance - dist) / CONFIG.mouseDistance * 0.03;
                this.vx += dx * force * 0.05; this.vy += dy * force * 0.05;
            }
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed > CONFIG.speed * 2.5) { this.vx = (this.vx / speed) * CONFIG.speed * 2.5; this.vy = (this.vy / speed) * CONFIG.speed * 2.5; }
            if (this.x < -20) this.x = W + 20; if (this.x > W + 20) this.x = -20;
            if (this.y < -20) this.y = H + 20; if (this.y > H + 20) this.y = -20;
        }
        draw() {
            const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3);
            g.addColorStop(0, `rgba(${this.color}, ${this.alpha})`);
            g.addColorStop(1, `rgba(${this.color}, 0)`);
            ctx.beginPath(); ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
            ctx.fillStyle = g; ctx.fill();
            ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${Math.min(this.alpha + 0.3, 1)})`; ctx.fill();
        }
    }

    function animate() {
        drawFlag();
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONFIG.lineDistance) {
                    const alpha = (1 - dist / CONFIG.lineDistance) * 0.25;
                    ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255,255,255,${alpha})`; ctx.lineWidth = 0.7; ctx.stroke();
                }
            }
            const dx = mouse.x - particles[i].x, dy = mouse.y - particles[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONFIG.mouseDistance) {
                const alpha = (1 - dist / CONFIG.mouseDistance) * 0.5;
                ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(255,255,255,${alpha})`; ctx.lineWidth = 1; ctx.stroke();
            }
        }
        for (const p of particles) { p.update(); p.draw(); }
        requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', e => { mouse.x = e.clientX + window.scrollX; mouse.y = e.clientY + window.scrollY; });
    window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = document.body.scrollHeight || window.innerHeight; });
    document.addEventListener('scroll', () => { const newH = document.body.scrollHeight; if (newH !== H) H = canvas.height = newH; });

    W = canvas.width = window.innerWidth;
    H = canvas.height = document.body.scrollHeight || window.innerHeight;
    for (let i = 0; i < CONFIG.particleCount; i++) particles.push(new Particle());
    animate();
})();
