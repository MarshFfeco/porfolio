class Parallax {
    constructor(parallax, nav, button, buttonPlay, buttonPause, mouse){
        this.parallax = parallax;
        this.nav = nav;
        this.button = button;
        this.buttonPlay = buttonPlay;
        this.buttonPause = buttonPause;
        this.nav = nav;
        this.mouse = mouse;

        this.audio = new Audio('assets/music/CyberCafe.mp3');
        this.audio.volume = 0.1;
        this.audio.loop = true;

        this.duration = 40;

        this.event();
    }

    event() {
        this.parallax.forEach(layer => {
            nav.addEventListener("mouseover", () => {
                 this.button.checked = false;
                 this.verifyPlayOrPause();
                 this.pauseParallax(layer);
            });

            document.addEventListener("scroll", () => {
                if(this.mouse.scrollTop >= 300) {
                    this.button.checked = false;
                    this.pauseParallax(layer); 
                } 
            });

            this.button.addEventListener("click", () => {
                if(this.button.checked && this.mouse.scrollTop <= 300) {
                    this.verifyPlayOrPause();
                    this.playParallax(layer);
                    this.duration-=5;
                    return;
                }

                this.button.checked = false; 
                this.verifyPlayOrPause();
                this.pauseParallax(layer);
            });

        });
    }

    verifyPlayOrPause() {
        if(this.button.checked) {
            this.buttonPlay.style.display = "block";
            this.buttonPause.style.display = "none";
            return;
        }

        this.buttonPlay.style.display = "none";
        this.buttonPause.style.display = "block";
    }

    playParallax(layer) {
        layer.style.animation = `parallax ${this.duration}s linear infinite`;
        this.audio.play();
    }

    pauseParallax(layer) {
        layer.style.animation = "parallax 0s linear infinite";
        this.audio.pause();
        this.duration = 40;
    }
}

const button = document.querySelector(".play-pause");
const buttonPlay = document.getElementById("parallax-play");
const buttonPause = document.getElementById("parallax-pause");
const parallax = document.querySelectorAll(".items");
const nav = document.querySelector(".nav");
const mouse = document.documentElement;

new Parallax(parallax, nav, button, buttonPlay, buttonPause, mouse)