// ===== MENÚ HAMBURGUESA =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ===== LINK ACTIVO =====
const currentPath = window.location.pathname.replace(/\/$/, '') || '/index';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href').replace(/\/$/, '');
  if (currentPath.endsWith(href.replace('.html', ''))) {
    link.classList.add('active');
  }
});

// ===== CUENTA ATRÁS =====
function updateCountdown() {
  const wedding = new Date('2025-09-20T16:00:00');
  const now = new Date();
  const diff = wedding - now;

  if (diff <= 0) {
    const el = document.getElementById('countdown');
    if (el) el.innerHTML = '<p style="font-family:Cormorant Garamond,serif;font-size:2rem;color:var(--verde)">¡Ya estamos casados! 🎉</p>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val).padStart(2, '0');
  };

  set('cd-days', days);
  set('cd-hours', hours);
  set('cd-minutes', minutes);
  set('cd-seconds', seconds);
}

if (document.getElementById('countdown')) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}
// ===== MÚSICA =====
const audio = document.getElementById('musica-boda');
const btn = document.getElementById('music-btn');

if (audio && btn) {
  // Intenta autoplay al cargar
  audio.play().then(() => {
    btn.classList.add('playing');
  }).catch(() => {
    // El navegador lo bloqueó, el botón queda visible para que el usuario lo active
  });

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btn.classList.add('playing');
    } else {
      audio.pause();
      btn.classList.remove('playing');
    }
  });
}
