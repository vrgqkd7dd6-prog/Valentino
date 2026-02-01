// ========= EDIT THESE =========
const VALENTINES = "2026-02-14T00:00:00";
const PHOTOS = ["1.jpg", "2.jpg", "3.jpg"]; // put your image filenames here (in /photos)

const LOVE_LETTER = `
Kat (Blair),

I made this page because you matter to me more than I can explain.

You’re the person who makes me feel safe to talk.
You stayed with me through everything—when life was quiet, when it was messy,
and when I didn’t even know how to handle myself.

I know I’m only two months into this relationship with you and I’m still learning.
I’m adapting. I’m trying. Because even if I mess up sometimes, my choice is still you.
I want to be someone who protects your peace, makes you feel loved, and shows up for you.

So… will you be my Valentine?

Love,
Tyrell 💖
`.trim();

// Your real timeline (2020–2026)
const TIMELINE = [
  {
    year: "2020",
    text:
      "June 1, 2020 — I knew you as Blair. Roleplay memories: Isabella, Noah, and Demon. " +
      "I lost my right to use Discord to message you, so I wanted your number and I didn’t have time. " +
      "Also… the broom obsession started (and it’s still here). 😭"
  },
  {
    year: "2021",
    text:
      "2020–2021 — I worried, disappeared, and I loved you too much to see you go."
  },
  {
    year: "2022",
    text:
      "April/May 2022 — I found you again. 10th grade was my lowest. I was confused and scared of everyone, " +
      "and you were the one who could still put a smile on my face. We roleplayed, stayed up terribly late, " +
      "and I fell even more — not just for the roleplay, but for you."
  },
  {
    year: "2023",
    text:
      "2023 — I lost my dog… he died on my lap, and I shut down. I isolated, barely ate, slept, or talked. " +
      "Your happy birthday message still made me smile, even when I was being dumb and distant. " +
      "I got a new phone and went straight back to you. " +
      "I asked your birthday (sorry 😭) and found out it’s December 3rd. " +
      "Now it’s in my reminders AND in a notebook I carry."
  },
  {
    year: "2024",
    text:
      "2024 — You sent me a pear 😭 and I saved it to iCloud. I thought I was moving to Texas and hoped I’d see you, " +
      "then found out I wouldn’t. It hurt, but we kept talking. Six Flags + the caverns is still on my heart. " +
      "I got injured and you were the one person who genuinely checked on me. (Also: I hated that cruise—too much drama.)"
  },
  {
    year: "2025",
    text:
      "2025 — The year I finally asked. I wasn’t trying to steal you or just chase comfort—I wanted to choose you for real. " +
      "We flirted (you still called me old 😭). You said you wanted to take me away and I wanted to go. " +
      "Nov 27–Nov 30, 2025 were the best conversations. You asked “what are we?” and I CHOKED… " +
      "then I told you how I felt and threw my phone at the wall from embarrassment. The dent is still there. " +
      "You liked me too… and boom. We started dating after so long. " +
      "I got you a SendAFriend gift for your birthday and you loved it. Christmas gifts too—still part of my daily routine."
  },
  {
    year: "2026",
    text:
      "2026 — No matter what… dry talks, deep talks, love talks… I still choose you. " +
      "Kat, Blair twin, bestie, girlfriend, future wife — I want to spend my years with you. " +
      "I want you happy, loved, cared for, and safe. 💘"
  }
];

// ========= HELPERS =========
const $ = (id) => document.getElementById(id);

// ========= ON LOAD =========
document.addEventListener("DOMContentLoaded", () => {
  // Gallery
  const grid = $("galleryGrid");
  if (grid) {
    PHOTOS.forEach((name) => {
      const img = document.createElement("img");
      img.src = `photos/${name}`;
      img.alt = "Tyrell & Kat";
      img.loading = "lazy";
      grid.appendChild(img);
    });
  }

  // Love letter text
  const letter = $("letterText");
  if (letter) letter.textContent = LOVE_LETTER;

  // Timeline
  const wrap = $("timelineWrap");
  if (wrap) {
    wrap.innerHTML = "";
    TIMELINE.forEach(item => {
      const row = document.createElement("div");
      row.className = "tItem";

      const year = document.createElement("div");
      year.className = "tYear";
      year.textContent = item.year;

      const dot = document.createElement("div");
      dot.className = "tDot";

      const txt = document.createElement("div");
      txt.className = "tText";
      txt.textContent = item.text;

      row.appendChild(year);
      row.appendChild(dot);
      row.appendChild(txt);
      wrap.appendChild(row);
    });
  }

  // Runaway no button
  setupRunawayNoButton();

  // Broom shrine
  setupBroomShrine();
});

// ========= MUSIC =========
const player = $("player");
const playBtn = $("playBtn");
if (playBtn && player) {
  playBtn.addEventListener("click", async () => {
    try {
      if (player.paused) {
        await player.play();
        playBtn.textContent = "Pause ⏸️";
      } else {
        player.pause();
        playBtn.textContent = "Play our song 🎶";
      }
    } catch {
      alert("Tap again to play (some phones block autoplay).");
    }
  });
}

// ========= LOVE LETTER MODAL =========
const letterBtn = $("letterBtn");
const modal = $("modal");
const closeModal = $("closeModal");
const kissBtn = $("kissBtn");
const hugBtn = $("hugBtn");
const miniMsg = $("miniMsg");

function openModal(){ modal?.classList.remove("hidden"); }
function closeIt(){ modal?.classList.add("hidden"); }

letterBtn?.addEventListener("click", openModal);
closeModal?.addEventListener("click", closeIt);
modal?.addEventListener("click", (e) => { if (e.target === modal) closeIt(); });

kissBtn?.addEventListener("click", () => {
  if (miniMsg) miniMsg.textContent = "Mwah 😘 delivered.";
  popHearts();
});
hugBtn?.addEventListener("click", () => {
  if (miniMsg) miniMsg.textContent = "Big warm hug 🤗 delivered.";
  popHearts();
});

// ========= COUNTDOWN =========
function updateCountdown(){
  const daysEl = $("days"), hoursEl = $("hours"), minsEl = $("mins"), secsEl = $("secs");
  if (!daysEl && !hoursEl && !minsEl && !secsEl) return;

  const target = new Date(VALENTINES).getTime();
  const now = Date.now();
  let diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000*60*60*24));
  diff -= days * (1000*60*60*24);
  const hours = Math.floor(diff / (1000*60*60));
  diff -= hours * (1000*60*60);
  const mins = Math.floor(diff / (1000*60));
  diff -= mins * (1000*60);
  const secs = Math.floor(diff / 1000);

  if (daysEl) daysEl.textContent = days;
  if (hoursEl) hoursEl.textContent = hours;
  if (minsEl) minsEl.textContent = mins;
  if (secsEl) secsEl.textContent = secs;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ========= RUNAWAY "NO" BUTTON =========
function setupRunawayNoButton(){
  const noBtn = $("noBtn");
  const yesBtn = $("yesBtn");
  if (!noBtn || !yesBtn) return;

  let initialized = false;

  function initFixedPosition(){
    if (initialized) return;
    initialized = true;

    const rect = noBtn.getBoundingClientRect();
    noBtn.style.position = "fixed";
    noBtn.style.left = rect.left + "px";
    noBtn.style.top = rect.top + "px";
    noBtn.style.zIndex = "9998";
  }

  function moveNoButtonAway(fromX, fromY){
    initFixedPosition();

    const padding = 12;
    const bw = noBtn.offsetWidth;
    const bh = noBtn.offsetHeight;

    const maxX = window.innerWidth - bw - padding;
    const maxY = window.innerHeight - bh - padding;

    let x, y;
    let tries = 0;

    do {
      x = padding + Math.random() * maxX;
      y = padding + Math.random() * maxY;
      tries++;
    } while (distance(x + bw/2, y + bh/2, fromX, fromY) < 220 && tries < 30);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Make YES slightly stronger each time
    const currentScale = getScale(yesBtn);
    yesBtn.style.transform = `scale(${(currentScale + 0.08).toFixed(2)})`;

    if (miniMsg) miniMsg.textContent = "Nope 🙈 you can’t escape this love.";
    popHearts();
  }

  function distance(ax, ay, bx, by){
    const dx = ax - bx;
    const dy = ay - by;
    return Math.sqrt(dx*dx + dy*dy);
  }

  function getScale(el){
    const t = el.style.transform || "";
    const match = t.match(/scale\(([^)]+)\)/);
    return match ? parseFloat(match[1]) || 1 : 1;
  }

  noBtn.addEventListener("mouseenter", (e) => {
    moveNoButtonAway(e.clientX, e.clientY);
  });

  noBtn.addEventListener("touchstart", (e) => {
    const touch = e.touches && e.touches[0];
    if (touch) moveNoButtonAway(touch.clientX, touch.clientY);
    e.preventDefault();
  }, { passive:false });

  noBtn.addEventListener("click", (e) => {
    moveNoButtonAway(e.clientX || window.innerWidth/2, e.clientY || window.innerHeight/2);
    e.preventDefault();
  });

  window.addEventListener("resize", () => {
    if (!initialized) return;

    const padding = 12;
    const bw = noBtn.offsetWidth;
    const bh = noBtn.offsetHeight;

    const maxX = window.innerWidth - bw - padding;
    const maxY = window.innerHeight - bh - padding;

    const left = parseFloat(noBtn.style.left || "0");
    const top = parseFloat(noBtn.style.top || "0");

    noBtn.style.left = `${Math.min(Math.max(padding, left), maxX)}px`;
    noBtn.style.top  = `${Math.min(Math.max(padding, top),  maxY)}px`;
  });
}

// ========= BROOM SHRINE =========
function setupBroomShrine(){
  const broomBtn = $("broomBtn");
  const broomCountEl = $("broomCount");
  const broomEmoji = $("broomEmoji");
  if (!broomBtn || !broomCountEl) return;

  let broomCount = parseInt(localStorage.getItem("broomCount") || "0", 10);
  broomCountEl.textContent = broomCount;

  broomBtn.addEventListener("click", () => {
    broomCount++;
    broomCountEl.textContent = broomCount;
    localStorage.setItem("broomCount", broomCount);

    if (broomEmoji){
      broomEmoji.classList.add("spin");
      setTimeout(() => broomEmoji.classList.remove("spin"), 180);
    }

    if (broomCount % 5 === 0) popHearts();
  });
}

// ========= HEART CONFETTI (global for yes.html too) =========
window.popHearts = function popHearts(){
  const amount = 24;
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.textContent = Math.random() > 0.5 ? "💖" : "💘";
    heart.style.position = "fixed";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.top = "-10px";
    heart.style.fontSize = (16 + Math.random()*22) + "px";
    heart.style.filter = "drop-shadow(0 10px 20px rgba(0,0,0,.25))";
    heart.style.zIndex = 9999;
    heart.style.transition = "transform 1.6s linear, opacity 1.6s linear";
    document.body.appendChild(heart);

    const drift = (Math.random() * 220) - 110;
    const fall = window.innerHeight + 80;

    requestAnimationFrame(() => {
      heart.style.transform = `translate(${drift}px, ${fall}px) rotate(${Math.random()*360}deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 1700);
  }
};