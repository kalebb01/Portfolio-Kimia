
const pages = [
 {id:"home",file:"index.html",name:"Home"},
 {id:"goals",file:"tujuan-pembelajaran.html",name:"Learning Goals"},
 {id:"concept",file:"peta-konsep.html",name:"Concept Map"},
 {id:"basic",file:"konsep-dasar.html",name:"Basic Concepts"},
 {id:"solutions",file:"elektrolit-nonelektrolit.html",name:"Types of Solutions"},
 {id:"properties",file:"empat-sifat-koligatif.html",name:"Four Properties"},
 {id:"problems",file:"contoh-soal.html",name:"Example Problems"},
 {id:"applications",file:"penerapan.html",name:"Real Life Application"},
 {id:"lab",file:"laboratorium-virtual.html",name:"Virtual Lab"},
 {id:"videos",file:"video-pembelajaran.html",name:"Learning Videos"},
 {id:"formulas",file:"rumus.html",name:"Formula Corner"},
 {id:"glossary",file:"glosarium.html",name:"Glossary"},
 {id:"about",file:"tentang-saya.html",name:"About Me"}
];
const current = document.body.dataset.page;
const index = pages.findIndex(p=>p.id===current);
const header = document.getElementById("site-header");
header.innerHTML = `<header class="topbar"><a class="brand" href="index.html"><span class="brand-symbol">✳</span><span>CHEM<span class="brand-accent">LAB</span><small>LEARNING PORTFOLIO</small></span></a><button class="menu-toggle" id="menu-toggle" aria-label="Buka menu">☰</button><div class="top-actions"><span class="top-caption">CHEMISTRY • GRADE XII</span><a href="index.html" class="top-home">⌂ <span>Home</span></a></div></header>`;
const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = `<div class="sidebar-label">LEARNING MENU</div><nav>${pages.map((p,i)=>`<a class="side-link ${p.id===current?'active':''}" href="${p.file}"><span class="side-number">${String(i).padStart(2,'0')}</span><span>${p.name}</span>${p.id===current?'<i>•</i>':''}</a>`).join("")}</nav><div class="sidebar-progress"><div class="progress-head"><span>YOUR PROGRESS</span><b>${index+1}/${pages.length}</b></div><div class="progress-track"><span style="width:${((index+1)/pages.length)*100}%"></span></div><small>Keep exploring every topic.</small></div>`;
const prev = pages[Math.max(0,index-1)], next = pages[Math.min(pages.length-1,index+1)];
const prevLink=document.getElementById("prev-link"), nextLink=document.getElementById("next-link");
prevLink.href=prev.file; nextLink.href=next.file;
document.getElementById("prev-title").textContent=index===0?"Start":prev.name;
document.getElementById("next-title").textContent=index===pages.length-1?"Back to Home":next.name;
if(index===0) prevLink.classList.add("disabled");
if(index===pages.length-1) nextLink.href="index.html";
document.getElementById("menu-toggle").addEventListener("click",()=>sidebar.classList.toggle("open"));
document.addEventListener("click",e=>{if(!sidebar.contains(e.target)&&!e.target.closest("#menu-toggle"))sidebar.classList.remove("open")});
