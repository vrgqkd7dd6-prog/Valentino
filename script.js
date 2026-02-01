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
I got injured and you were the one person who genuinely checked on me.`
  },
  {
    year: "2025",
    text: `2025 — The year I finally asked.
I wasn’t trying to steal you or just chase comfort — I wanted to choose you for real.
You asked “what are we?” and I CHOKED…
then I told you how I felt and threw my phone at the wall from embarrassment.
You liked me too… and boom. We started dating after so long.`
  },
  {
    year: "2026",
    text: `2026 — No matter what… dry talks, deep talks, love talks… I still choose you.
I want you happy, loved, cared for, and safe. ❤️`
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("timelineWrap");
  if (wrap) {
    TIMELINE.forEach(item => {
      const row = document.createElement("div");
      row.className = "tItem";
      row.innerHTML = `
        <div class="tYear">${item.year}</div>
        <div class="tText">${item.text.replace(/\n/g,"<br>")}</div>
      `;
      wrap.appendChild(row);
    });
  }
});
