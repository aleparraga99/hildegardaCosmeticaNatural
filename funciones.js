function ajustarVelocidadVideo() {
    const video = document.querySelector(".videoHero");
    
    if (video) {  // buena práctica
        video.playbackRate = 0.5;
    }
}

ajustarVelocidadVideo();