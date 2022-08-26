function animationPicture(){
    const picture = document.getElementById('foto');
    picture.addEventListener('click', function(){
        window.animatelo.flip('#foto');
        window.animatelo.jello('.nav');
    })

}

AOS.init();
window.animatelo.flip('#foto');
window.animatelo.fadeIn('#paragrafo');
window.animatelo.jello('.nav');
window.animatelo.jello('#titleBadges');
animationPicture();
