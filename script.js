document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope-wrapper');
    const splash = document.getElementById('splash-page');

    if (envelope) {
        envelope.addEventListener('click', () => {
            // 1. Open the flap
            envelope.classList.add('is-open');

            // 2. Delay for 1.2s to show the flap opening fully
            setTimeout(() => {
                // 3. Fade out the envelope screen
                splash.classList.add('fade-out');
            }, 1200); 
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... Keep your envelope opening code here ...

    // --- COUNTDOWN LOGIC ---
    const targetDate = new Date("May 26, 2026 16:00:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const gap = targetDate - now;

        if (gap > 0) {
            const d = Math.floor(gap / (1000 * 60 * 60 * 24));
            const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((gap % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = d.toString().padStart(2, '0');
            document.getElementById("hours").innerText = h.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
        }
    };

    setInterval(updateCountdown, 1000);
    updateCountdown(); 
});