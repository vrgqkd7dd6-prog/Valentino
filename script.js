const PHOTOS = ["1.jpg","2.jpg","3.jpg"];

const LOVE_LETTER = `Kat (Blair),

I love you and I appreciate you more than I can explain.
You make me feel safe, calm, and happy.

Love,
Tyrell 💖`;

const TIMELINE = [
  {year:"2020",text:"We met and started talking."},
  {year:"2021",text:"We stayed connected."},
  {year:"2022",text:"We found each other again."},
  {year:"2023",text:"You still made me smile during hard times."},
  {year:"2024",text:"You checked on me when I was injured."},
  {year:"2025",text:"I finally asked you out 💖"},
  {year:"2026",text:"Still choosing you every day."}
];

document.addEventListener("DOMContentLoaded", () => {

  const gallery = document.getElementById("gallery");
  if (gallery){
    PHOTOS.forEach(name=>{
      const img=document.createElement("img");
      img.src=`photos/${name}`;
      img.className="photo";
      gallery.appendChild(img);
    });
  }

  const letterText=document.getElementById("letterText");
  if(letterText) letterText.textContent=LOVE_LETTER;

  const wrap=document.getElementById("timelineWrap");
  if(wrap){
    TIMELINE.forEach(item=>{
      const row=document.createElement("div");
      row.className="tItem";
      row.innerHTML=`<div class="tYear">${item.year}</div><div class="tText">${item.text}</div>`;
      wrap.appendChild(row);
    });
  }

  const openBtn=document.getElementById("openLetter");
  const modal=document.getElementById("modal");
  const closeBtn=document.getElementById("closeModal");

  openBtn?.addEventListener("click",()=>modal.classList.remove("hidden"));
  closeBtn?.addEventListener("click",()=>modal.classList.add("hidden"));

  const broomBtn=document.getElementById("broomBtn");
  const broomCount=document.getElementById("broomCount");
  const broomEmoji=document.getElementById("broomEmoji");

  if(broomBtn && broomCount){
    let count=parseInt(localStorage.getItem("broomCount")||"0");
    broomCount.textContent=count;

    broomBtn.addEventListener("click",()=>{
      count++;
      broomCount.textContent=count;
      localStorage.setItem("broomCount",count);

      broomEmoji?.classList.add("spin");
      setTimeout(()=>broomEmoji?.classList.remove("spin"),200);
      popHearts();
    });
  }

  const noBtn=document.getElementById("noBtn");
  const yesBtn=document.getElementById("yesBtn");

  if(noBtn && yesBtn){
    noBtn.addEventListener("click",()=>{
      noBtn.style.position="fixed";
      noBtn.style.left=Math.random()*70+10+"vw";
      noBtn.style.top=Math.random()*60+20+"vh";
      yesBtn.style.transform="scale(1.15)";
      popHearts();
    });
  }
});

function popHearts(){
  for(let i=0;i<12;i++){
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
