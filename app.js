function imageGallery(){
    const highlight = document.querySelector('.gallery-highlight');
    const previews = document.querySelectorAll('.bucuresti_preview img');

 previews.forEach(preview =>{
    preview.addEventListener('click',function(){
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small","big");
        highlight.src=bigSrc;
        previews.forEach(preview => preview.classList.remove('room-active'));
        preview.classList.add("room-active");
    });
 });
}
imageGallery();
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const  nav = document.querySelector('.nav_list');
    const navLinks = document.querySelectorAll('.nav_list li');
    //toggle nav
    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
          //animate-links
    navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=''
        }else{
            link.style.animation = ` navLinkFade 0.5s ease forwards ${index/7+1}s`;
        }
    });
    //burger animation
    burger.classList.toggle('toggle');
    });
  
}

navSlide();