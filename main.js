document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      console.log(`Navigasi ke: ${link.href}`);
    });
  });

  const scrollToTopBtn = document.getElementById("scrollToTop");

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}); 

document.addEventListener("click", () => {
  const audio = document.getElementById("bg-music");
  if (audio && audio.paused) {
    audio.play();
  }
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s" || e.key === "a")) {
    e.preventDefault();
  }
});

const btn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
});
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const player = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');
const tracks = playlist.getElementsByTagName('li');
const toggleBtn = document.getElementById('toggleBtn');
const playerBody = document.getElementById('playerBody');

// Highlight aktif
function clearActive() {
  for (let track of tracks) {
    track.classList.remove('active');
  }
}

// Play lagu
for (let track of tracks) {
  track.addEventListener('click', function () {
    clearActive();
    this.classList.add('active');
    player.src = this.getAttribute('data-src');
    player.play();
  });
}

// Auto play lagu berikutnya
player.addEventListener('ended', function () {
  for (let i = 0; i < tracks.length; i++) {
    if (tracks[i].classList.contains('active') && i + 1 < tracks.length) {
      tracks[i + 1].click();
      break;
    }
  }
});

// Drag and move
const dragHandle = document.getElementById('dragHandle');
const windowEl = document.getElementById('musicPlayerWindow');

let offsetX = 0, offsetY = 0, isDragging = false;

dragHandle.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - windowEl.offsetLeft;
  offsetY = e.clientY - windowEl.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    windowEl.style.left = (e.clientX - offsetX) + 'px';
    windowEl.style.top = (e.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Support touch untuk HP
dragHandle.addEventListener('touchstart', (e) => {
  isDragging = true;
  offsetX = e.touches[0].clientX - windowEl.offsetLeft;
  offsetY = e.touches[0].clientY - windowEl.offsetTop;
});

document.addEventListener('touchmove', (e) => {
  if (isDragging) {
    windowEl.style.left = (e.touches[0].clientX - offsetX) + 'px';
    windowEl.style.top = (e.touches[0].clientY - offsetY) + 'px';
  }
});

document.addEventListener('touchend', () => {
  isDragging = false;
});

const minimizedBubble = document.getElementById('minimizedBubble');

// Tombol minimize diklik
toggleBtn.addEventListener('click', () => {
  document.getElementById('musicPlayerWindow').style.display = 'none';
  minimizedBubble.style.display = 'flex';
});

// Klik bubble untuk restore
minimizedBubble.addEventListener('click', () => {
  document.getElementById('musicPlayerWindow').style.display = 'block';
  minimizedBubble.style.display = 'none';
});

const audioPlayer = document.getElementById('audioPlayer');
const playlistItems = document.querySelectorAll('#playlist li');

playlistItems.forEach(item => {
  item.addEventListener('click', () => {
    const songSrc = item.getAttribute('data-src');
    audioPlayer.src = songSrc;
    audioPlayer.play();
  });
});