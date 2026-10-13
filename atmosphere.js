// Ambient interactions; never intercept scroll or door drag.
document.addEventListener('DOMContentLoaded', () => {
  const root=document.documentElement;
  const main=document.getElementById('main-content');
  const hero=document.querySelector('.hero');
  const logo=document.querySelector('.hero-logo');
  if(!main||!hero)return;
  const unlock=()=>{if(!main.classList.contains('visible'))return;root.style.setProperty('overflow-y','auto','important');document.body.style.setProperty('overflow-y','auto','important')};
  const observer=new MutationObserver(unlock);observer.observe(main,{attributes:true,attributeFilter:['class']});unlock();
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&matchMedia('(pointer: fine)').matches){
    let frame=0;hero.addEventListener('pointermove',e=>{if(frame)return;frame=requestAnimationFrame(()=>{const rect=hero.getBoundingClientRect(),x=(e.clientX-rect.left)/rect.width-.5,y=(e.clientY-rect.top)/rect.height-.5;hero.style.setProperty('--parallax-x',(x*16).toFixed(1)+'px');hero.style.setProperty('--parallax-y',(y*12).toFixed(1)+'px');frame=0})});
    hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--parallax-x','0px');hero.style.setProperty('--parallax-y','0px')});
  }
});
