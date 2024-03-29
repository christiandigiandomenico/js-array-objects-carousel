const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const slides = document.querySelector("#slider")
const thumbnailsElement = document.querySelector("#thumbnails");

let slideNumber = 1;

for (let i = 0; i < images.length; i++) {

    const img = images[i].image;

    const titolo = images[i].title

    const desc = images[i].text

    slides.innerHTML += `<div class="mySlide"><img src="./${img}"><h2>${titolo}</h2><p> ${desc}<p></div>`
    thumbnailsElement.innerHTML += `<div class="thumb"><img src="./${img}" alt="anteprima ${titolo}"></div>`;

}

function showSlide(n) {

    const arraySlides = document.getElementsByClassName("mySlide")

    for (let i = 0; i < arraySlides.length; i++) {

        if (i == n) {

            arraySlides[i].classList.add("active");

        } else {

            arraySlides[i].classList.remove("active")

        }

    }

    arraySlides[n].classList.add("active")

}

function showSlide(n) {
    const arraySlides = document.getElementsByClassName("mySlide");
    for (let i = 0; i < arraySlides.length; i++) {
        arraySlides[i].classList.remove("active");
    }
    arraySlides[n].classList.add("active");
}

let activeSlide = 0;

showSlide(activeSlide);


document.getElementById("down-arrow").addEventListener("click", function () {
    activeSlide++;
    if (activeSlide >= images.length) {
        activeSlide = 0;
    }
    showSlide(activeSlide);
});


document.getElementById("up-arrow").addEventListener("click", function () {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = images.length - 1;
    }
    showSlide(activeSlide);
});

const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const reverseButton = document.querySelector("#reverse-button");




let timer;

playButton.addEventListener("click", () => {

    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
    reverseButton.style.display = "none";


    timer = setInterval(function () {

        if (slideNumber > images.length - 1) {
            slideNumber = 1;
            showSlide(slideNumber);

        } else {

            slideNumber++;
            showSlide(slideNumber);
        }

    }, 3000);
});


pauseButton.addEventListener("click", () => {
    playButton.style.display = "inline-block";
    reverseButton.style.display = "inline-block"
    pauseButton.style.display = "none";

    clearInterval(timer);
});


reverseButton.addEventListener("click", () => {
    reverseButton.style.display = "none"
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";



    timer = setInterval(function () {

        if (slideNumber <= 1) {
            slideNumber = images.length;
            showSlide(slideNumber);

        } else {

            slideNumber--;
            showSlide(slideNumber);
        }

    }, 3000);

}); 
