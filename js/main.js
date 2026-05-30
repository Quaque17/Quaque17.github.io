// ===== MÚSICA PERSISTENTE ENTRE PÁGINAS =====
const MUSIC_KEY = 'boda_music_playing';
const MUSIC_TIME = 'boda_music_time';

const audio = document.getElementById('musica-boda');
const btn = document.getElementById('music-btn');

if (audio && btn) {
  const wasPlaying = sessionStorage.getItem(MUSIC_KEY) === 'true';
  const savedTime = parseFloat(sessionStorage.getItem(MUSIC_TIME) || '0');

  audio.currentTime = savedTime;

  if (wasPlaying) {
    audio.play().then(() => {
      btn.classList.add('playing');
    }).catch(() => {});
  }

  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem(MUSIC_KEY, (!audio.paused).toString());
    sessionStorage.setItem(MUSIC_TIME, audio.currentTime.toString());
  });

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btn.classList.add('playing');
      sessionStorage.setItem(MUSIC_KEY, 'true');
    } else {
      audio.pause();
      btn.classList.remove('playing');
      sessionStorage.setItem(MUSIC_KEY, 'false');
    }
  });

  // Intentar autoplay solo la primera vez
  if (sessionStorage.getItem(MUSIC_KEY) === null) {
    audio.play().then(() => {
      btn.classList.add('playing');
      sessionStorage.setItem(MUSIC_KEY, 'true');
    }).catch(() => {
      sessionStorage.setItem(MUSIC_KEY, 'false');
    });
  }
}

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
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href').replace('.html', '');
  if (href !== 'index' && currentPath.includes(href)) {
    link.classList.add('active');
  }
});

// ===== CUENTA ATRÁS =====
function updateCountdown() {
  const wedding = new Date('2026-12-12T16:00:00');
  const now = new Date();
  const diff = wedding - now;
  if (diff <= 0) return;

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
