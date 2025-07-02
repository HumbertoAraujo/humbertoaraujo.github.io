function animationPicture(){
    const picture = document.querySelector('.profile-img');
    picture.addEventListener('click', function(){
           })
}

AOS.init();
window.animatelo.flip('.profile-img');
animationPicture();

const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.nav-menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});