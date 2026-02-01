// ========= CONFIG =========
const PHOTOS = ["1.jpg", "2.jpg", "3.jpg"];

const LOVE_LETTER = `
Kat (Blair),

I made this page because you matter to me more than I can explain.

You’re the person who makes me feel safe to talk.
You stayed with me through everything — quiet days, messy days,
and even when I didn’t know how to handle myself.

I’m still learning. I’m adapting. I’m trying.
But even when I mess up, my choice is still you.

Love,
Tyrell 💖
`.trim();

const TIMELINE = [
  {
    year: "2020",
    text: `June 1, 2020 — I knew you as Blair. Roleplay memories: Isabella, Noah, and Demon.
I lost my right to use Discord to message you, so I wanted your number and I didn’t have time.
Also… the broom obsession started (and it’s still here). 😭`
  },
  {
    year: "2021",
    text: `2020–2021 — I worried, disappeared, and I loved you too much to see you go.`
  },
  {
    year: "2022",
    text: `April/May 2022 — I found you again. 10th grade was my lowest.
I was confused and scared of everyone, and you were the one who could still put a smile on my face.
We roleplayed, stayed up terribly late, and I fell even more — not just for the roleplay, but for you.`
  },
  {
    year: "2023",
    text: `2023 — I lost my dog… he died on my lap, and I shut down.
I isolated, barely ate, slept, or talked.
Your happy birthday message still made me smile, even when I was being dumb and distant.
I got a new phone and went straight back to you.
I asked your birthday (sorry 😭) and found out it’s December 3rd.
Now it’s in my reminders AND in a notebook I carry.`
  },
  {
    year: "2024",
    text: `2024 — You sent me a pear 😭 and I saved it to iCloud.
I thought I was moving to Texas and hoped I’d see you, then found out I wouldn’t.
It hurt, but we kept talking.
Six Flags + the caverns is still on my heart.
I got injured and you were the one person who genuinely checked on me.
(Also: I hated that cruise—too much drama.)`
  },
  {
    year: "2025",
    text: `2025 — The year I finally asked.
I wasn’t trying to steal you or just chase comfort — I wanted to choose you for real.
We flirted (you still called me old 😭).
You said you wanted to take me away and I wanted to go.
Nov 27–Nov 30 were the best conversations.
You asked “what are we?” and I CHOKED…
then I told you how I felt and threw my phone at the wall from embarrassment.
The dent is still there.
You liked me too… and boom. We started dating after so long.
I got you a SendAFriend gift for your birthday and you loved it.
Christmas gifts too — still part of my daily routine.`
  },
  {
    year: "2026",
    text: `2026 — No matter what… dry talks, deep talks, love talks… I still choose you.
Kat, Blair twin, bestie, girlfriend, future wife —
I want to spend my years with you.
I want you happy, loved, cared for, and safe. ❤️`
  }
];

// ========= HELPERS =========
const $ = (id) => document.getElementById(id);

// ========= LOAD =========
document.addEventListener("DOMContentLoaded", () => {

  // ----- GALLERY -----
  const gallery = $("gallery");
  if (gallery) {
    PHOTOS.forEach(name => {
      const img = document.createElement("img");
      img.src = `photos/${name}`;
      img.alt = "Tyrell & Kat";
      img.loading = "lazy";
      img.className = "photo";
      gallery.appendChild(img);
    });
  }

  // ----- LOVE LETTER -----
  const letterText = $("letterText");
  if (letterText) letterText.textContent = LOVE_LETTER;

  // ----- TIMELINE -----
  const wrap = $("timelineWrap");
  if (wrap) {
    TIMELINE.forEach(item => {
      const row = document.createElement("div");
      row.className = "tItem";

      const year = document.createElement("div");
      year.className = "tYear";
      year.textContent = item.year;

      const text = document.createElement("div");
      text.className = "tText";
      text.innerHTML = item.text.replace(/\n/g, "<br>");

      row.appendChild(year);
      row.appendChild(text);
      wrap.appendChild(row);
    });
  }

  setupRunawayNoButton();
  setupBroomShrine();
});

// ========= RUNAWAY NO BUTTON =========
function setupRunawayNoButton(){
  const noBtn = $("noBtn");
  const yesBtn = $("yesBtn");
  if (!noBtn || !yesBtn) return;

  noBtn.addEventListener("click", () => {
    const x = Math.random()*70 + 10;
    const y = Math.random()*60 + 20;
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "vw";
    noBtn.style.top = y + "vh";

    yesBtn.style.transform = "scale(1.15)";
    popHearts();
  });
}

// ========= MODAL =========
$("openLetter")?.addEventListener("click", () =>
  $("modal")?.classList.remove("hidden")
);

$("closeModal")?.addEventListener("click", () =>
  $("modal")?.classList.add("hidden")
);

// ========= BROOM SHRINE =========
function setupBroomShrine(){
  const btn = $("broomBtn");
  const countEl = $("broomCount");
  const emoji = $("broomEmoji");
  if (!btn || !countEl) return;

  let count = parseInt(localStorage.getItem("broomCount") || "0");
  countEl.textContent = count;

  btn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
    localStorage.setItem("broomCount", count);

    emoji?.classList.add("spin");
    setTimeout(()=>emoji?.classList.remove("spin"),200);
    popHearts();
  });
}

// ========= HEARTS =========
function popHearts(){
  for (let i=0;i<15;i++){
    const h=document.createElement("div");
    h.textContent="💖";
    h.style.position="fixed";
    h.style.left=Math.random()*100+"vw";
    h.style.top="90vh";
    h.style.fontSize="20px";
    h.style.transition="all 1s ease-out";
    document.body.appendChild(h);
    setTimeout(()=>{h.style.top="0vh";h.style.opacity=0},50);
    setTimeout(()=>h.remove(),1200);
  }
}
