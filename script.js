document.querySelectorAll('a[href^="#"]').forEach((link)=>{
  link.addEventListener('click',(event)=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});

const video=document.getElementById('sales-video');
const soundToggle=document.getElementById('sound-toggle');

if(video){
  video.muted=true;

  const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting && entry.intersectionRatio>=0.45){
        const playPromise=video.play();
        if(playPromise && typeof playPromise.catch==='function') playPromise.catch(()=>{});
      }else if(!entry.isIntersecting){
        video.pause();
      }
    });
  },{threshold:[0,.45,.75]});

  observer.observe(video);

  if(soundToggle){
    soundToggle.addEventListener('click',()=>{
      video.muted=!video.muted;
      if(video.muted){
        soundToggle.textContent='🔊 Toque para ouvir';
        soundToggle.classList.remove('is-on');
      }else{
        soundToggle.textContent='Som ativado';
        soundToggle.classList.add('is-on');
        video.play().catch(()=>{});
      }
    });
  }
}
