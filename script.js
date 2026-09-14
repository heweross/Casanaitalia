document.querySelectorAll('a[href^="#"]').forEach((link)=>{
  link.addEventListener('click',(event)=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});

// VIDEO SLOT
// Quando o vídeo estiver pronto, substitua o conteúdo de #video-slot por um iframe responsivo
// (YouTube/Vimeo) ou por uma tag <video controls poster="...">.
