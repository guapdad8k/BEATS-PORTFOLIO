// Supply approved images as local paths, e.g. 'portraits/1takejay.jpg'. 
const producedFor=["Frosty Da Snowmann","1TakeJay","Roxkbottom","HESOYAM","Skid","BoKrazy","ajba6y","DonDollas","bombi hood","orzelg59","mlodykojot","Shaudy Kash","Come On P","EnzoGetsPaid","BabyStone Gorillas (unreleased)"];
const producedWith=["Menace (My n****a menace on the b)","Twonie Bo","TenK Sounds","Come On P","Baabicz","614ase","panchojandro","Twan da Producer","Paupa Got Beats","itsGmo","moeGwalla"];
const portraitImages={for:{},with:{}};
function mountCredits(type,names){
const target=document.getElementById(type+"-portraits"),roster=document.getElementById(type+"-roster"),counter=document.getElementById(type+"-count");if(!target||!roster||!counter)return;
counter.textContent=String(names.length).padStart(2,"0");
names.forEach((name,i)=>{const card=document.createElement("article");card.className="portrait-card"+(!i?" active":"");const source=portraitImages[type]?.[name];if(source){const img=document.createElement("img");img.src=source;img.alt="Portrait: "+name;img.loading="lazy";img.onerror=()=>img.remove();card.append(img)}const monogram=document.createElement("div");monogram.className="portrait-monogram";monogram.textContent=name.slice(0,2).toUpperCase();const title=document.createElement("strong");title.textContent=name;const meta=document.createElement("small");meta.textContent=String(i+1).padStart(2,"0")+" / "+String(names.length).padStart(2,"0")+" — "+(type==="for"?"ARTIST":"PRODUCER");card.append(monogram,title,meta);target.append(card);const chip=document.createElement("span");chip.textContent=name;roster.append(chip)});
let current=0,timer;const cards=[...target.children];const reduced=matchMedia("(prefers-reduced-motion: reduce)");
function advance(){cards[current].classList.remove("active");current=(current+1)%cards.length;cards[current].classList.add("active")}
function stop(){clearInterval(timer);timer=null}function resume(){if(!timer&&!reduced.matches&&!document.hidden)timer=setInterval(advance,type==="for"?3500:4100)}
target.addEventListener("mouseenter",stop);target.addEventListener("mouseleave",resume);target.addEventListener("focusin",stop);target.addEventListener("focusout",resume);document.addEventListener("visibilitychange",()=>document.hidden?stop():resume());reduced.addEventListener?.("change",()=>reduced.matches?stop():resume());resume();
}
document.addEventListener("DOMContentLoaded",()=>{mountCredits("for",producedFor);mountCredits("with",producedWith)});
// Preserve original click-to-play handling, with accessible touch flip on the beat cards.
document.addEventListener("click",event=>{const card=event.target.closest?.(".beat-card");if(!card||event.target.closest(".player-controls,.inquire-btn"))return;if(matchMedia("(hover: none)").matches){document.querySelectorAll(".beat-card.force-flip").forEach(c=>{if(c!==card)c.classList.remove("force-flip")});card.classList.toggle("force-flip")}});
