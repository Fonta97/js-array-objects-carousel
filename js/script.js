const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const container = document.querySelector(".items-container");

for (let i = 0; i < images.length; i++) {
    const carousel =
        `<div class="item active">
        <img src="${images[i].image}" alt="">
        <div class="title">${images[i].title}</div>
        <div class="text">${images[i].text}</div>
        <button class="next"><i class="fa-solid fa-angle-down" style="color: #000000;"></i></button>
                <button class="previous"><i class="fa-solid fa-angle-up" style="color: #000000;"></i></button> -->
    </div>`

    container.innerHTML += carousel;
}

const items = document.getElementsByClassName('item');

let activeItem = 0;

const next = document.querySelector('.next');

next.addEventListener('click', function () {

    if (activeItem < items.length - 1) {

        items[activeItem].classList.remove('active');
        items[activeItem].classList.add('hidden');

        activeItem++;

        items[activeItem].classList.add('active');
        items[activeItem].classList.remove('hidden');


        if (activeItem === items.length - 1) {
            next.classList.add('hidden');
        }
    }
});

const previous = document.querySelector('.previous')

previous.addEventListener('click', function () {

    if (activeItem < items.length + 1) {

        items[activeItem].classList.remove('active');
        items[activeItem].classList.add('hidden');

        activeItem--;

        items[activeItem].classList.add('active');
        items[activeItem].classList.remove('hidden');


        if (activeItem === items.length + 1) {
            previous.classList.add('hidden');
        }
    }
});