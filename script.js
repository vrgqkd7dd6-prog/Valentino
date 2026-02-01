const PHOTOS=["1.jpg","2.jpg","3.jpg"];

const LOVE_LETTER=`Kat (Blair),
I love you and appreciate you more than I can explain.
You make me feel safe, calm, and happy.
Love, Tyrell 💖`;

const TIMELINE=[
{year:"2020",text:`June 1, 2020 — I knew you as Blair...`},
{year:"2021",text:`2020–2021 — I worried...`},
{year:"2022",text:`April/May 2022 — I found you again...`},
{year:"2023",text:`2023 — I lost my dog...`},
{year:"2024",text:`2024 — You sent me a pear...`},
{year:"2025",text:`2025 — The year I finally asked...`},
{year:"2026",text:`2026 — No matter what… I still choose you.`}
];

document.addEventListener("DOMContentLoaded",()=>{

const gallery=document.getElementById("gallery");
if(gallery){
PHOTOS.forEach(n=>{
const img=document.createElement("img");
img.src=`photos/${n}`;
img.className="photo";
gallery.appendChild(img);
});
}

const letter=document.getElementById("letterText");
if(letter) letter.textContent=LOVE_LETTER;

const wrap=document.getElementById("timelineWrap");
if(wrap){
TIMELINE.forEach(i=>{
const d=document.createElement("div");
d.className="tItem";
d.innerHTML=`<b>${i.year}</b><br>${i.text}`;
wrap.appendChild(d);
});
}

const modal=document.getElementById("modal");
document.getElementById("openLetter")?.onclick=()=>modal.classList.remove("hidden");
document.getElementById("closeModal")?.onclick=()=>modal.classList.add("hidden");

const broomBtn=document.getElementById("broomBtn");
const broomCount=document.getElementById("broomCount");
if(broomBtn){
let c=parseInt(localStorage.getItem("broom")||"0");
broomCount.textContent=c;
broomBtn.onclick=()=>{c++;broomCount.textContent=c;localStorage.setItem("broom",c);popHearts();}
}

const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");
if(noBtn && yesBtn){
noBtn.onclick=()=>{
noBtn.style.position="fixed";
noBtn.style.left=Math.random()*70+"vw";
noBtn.style.top=Math.random()*60+"vh";
yesBtn.style.transform="scale(1.15)";
popHearts();
};
}

});

function popHearts(){
for(let i=0;i<10;i++){
const h=document.createElement("div");
h.textContent="💖";
h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.top="90vh";
h.style.transition="1s";
document.body.appendChild(h);
setTimeout(()=>{h.style.top="0";h.style.opacity="0"},50);
setTimeout(()=>h.remove(),1000);
}
}
