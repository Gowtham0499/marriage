// ── SVG Templates ──
const templeSVG = `<svg viewBox="0 0 800 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M400 10 L420 50 H440 L450 30 L460 50 H480 L490 30 L500 50 H520 L530 50 V80 H270 V50 H290 L300 50 H310 L320 30 L330 50 H350 L360 30 L370 50 H380 Z" opacity=".8"/>
  <rect x="280" y="80" width="240" height="60" opacity=".6"/>
  <rect x="260" y="140" width="280" height="60" opacity=".4"/>
  <rect x="350" y="90" width="20" height="40" rx="10" opacity=".3"/>
  <rect x="390" y="90" width="20" height="40" rx="10" opacity=".3"/>
  <rect x="430" y="90" width="20" height="40" rx="10" opacity=".3"/>
  <path d="M100 200 V120 L130 80 L160 120 V200Z" opacity=".25"/>
  <path d="M120 70 L130 50 L140 70Z" opacity=".25"/>
  <path d="M640 200 V120 L670 80 L700 120 V200Z" opacity=".25"/>
  <path d="M660 70 L670 50 L680 70Z" opacity=".25"/>
  <path d="M0 200 H800" stroke="currentColor" stroke-width="1" opacity=".2"/>
</svg>`;

const diyaSVG = `<svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="105" rx="35" ry="12" fill="currentColor" opacity=".6"/>
  <path d="M20 105 Q20 75 50 70 Q80 75 80 105Z" fill="currentColor" opacity=".5"/>
  <rect x="45" y="55" width="10" height="18" rx="5" fill="currentColor" opacity=".4"/>
  <ellipse cx="50" cy="42" rx="8" ry="16" fill="currentColor" opacity=".7"/>
  <ellipse cx="50" cy="35" rx="4" ry="10" fill="currentColor" opacity=".9"/>
  <circle cx="50" cy="30" r="12" fill="none" stroke="currentColor" opacity=".15" stroke-width="1">
    <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values=".15;.05;.15" dur="2s" repeatCount="indefinite"/>
  </circle>
</svg>`;

const templeDividerSVG = `<svg viewBox="0 0 1200 80" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 80 H1200 V60 H680 V40 L620 20 H580 L520 40 V60 H0Z" opacity=".08"/>
  <path d="M580 20 L600 5 L620 20Z" opacity=".12"/>
  <path d="M200 80 V65 L215 55 L230 65 V80Z" opacity=".05"/>
  <path d="M970 80 V65 L985 55 L1000 65 V80Z" opacity=".05"/>
</svg>`;

// ── Inject SVGs ──
document.querySelectorAll('.temple-bg').forEach(el => el.innerHTML = templeSVG);
document.querySelectorAll('.diya-decor, .section-diya').forEach(el => el.innerHTML = diyaSVG);
document.querySelectorAll('.temple-divider').forEach(el => el.innerHTML = templeDividerSVG);

// ── Events ──
const events = [
  { name: "Mehendi", date: "Friday, March 9th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
  { name: "Haldi", date: "Friday, March 10th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
  { name: "Cocktail", date: "Friday, March 10th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
  { name: "Engagement", date: "Friday, March 11th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
  { name: "Shaadi", date: "Friday, March 12th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
  { name: "Reception", date: "Friday, March 17th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" }
];
const grid = document.getElementById("events-grid");
events.forEach(e => {
  grid.innerHTML += `<div class="event-card"><h3>${e.name}</h3><p class="date">${e.date}</p><p class="venue">${e.venue}</p><p class="time">${e.time}</p><a href="https://maps.google.com/?q=Rambagh+Palace+Jaipur" target="_blank">See the route →</a></div>`;
});

// ── Countdown ──
const wedding = new Date("2026-03-12T18:00:00+05:30");
function updateCountdown() {
  const diff = Math.max(0, wedding - new Date());
  const d = Math.floor(diff / 864e5), h = Math.floor(diff % 864e5 / 36e5),
        m = Math.floor(diff % 36e5 / 6e4), s = Math.floor(diff % 6e4 / 1e3);
  const pad = n => String(n).padStart(2, "0");
  document.getElementById("countdown").innerHTML =
    `<span>${pad(d)}</span><span class="sep">:</span><span>${pad(h)}</span><span class="sep">:</span><span>${pad(m)}</span><span class="sep">:</span><span>${pad(s)}</span>`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ── Scroll reveal with stagger ──
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("revealed");
    if (e.target.hasAttribute("data-stagger")) {
      [...e.target.children].forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.12}s`;
      });
    }
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll("[data-reveal],[data-stagger]").forEach(el => revealObs.observe(el));

// ── Parallax ──
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      document.querySelectorAll(".parallax-bg").forEach(el => {
        const rect = el.closest("section").getBoundingClientRect();
        el.style.transform = `translateY(${(rect.top + rect.height / 2) * 0.08}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});

// ── Floating particles ──
const floaters = document.getElementById("floaters");
const symbols = ["✦", "✧", "❋", "❊", "·", "⋆"];
for (let i = 0; i < 15; i++) {
  const el = document.createElement("span");
  el.className = "floater";
  el.textContent = symbols[i % symbols.length];
  el.style.left = Math.random() * 100 + "%";
  el.style.animationDuration = (12 + Math.random() * 18) + "s";
  el.style.animationDelay = (Math.random() * 20) + "s";
  el.style.fontSize = (8 + Math.random() * 10) + "px";
  floaters.appendChild(el);
}

// ── Sparkles in countdown ──
const sparkleContainer = document.getElementById("sparkles");
for (let i = 0; i < 20; i++) {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = Math.random() * 100 + "%";
  s.style.bottom = "0";
  s.style.animationDuration = (3 + Math.random() * 5) + "s";
  s.style.animationDelay = (Math.random() * 8) + "s";
  sparkleContainer.appendChild(s);
}
