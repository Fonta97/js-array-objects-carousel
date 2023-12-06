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

const itemContainer = document.querySelector(".items-container");

images.forEach((element, index) => {

    if (index === 0) {
        itemContainer.innerHTML +=
            `<div class="item active">
        <img class="fix_img" src="${element.image}" alt="">
        <h1 class="title">${element.title}</h1>
        <h2 class="subtitle">${element.text}</h2>
    </div>`
    }

    itemContainer.innerHTML +=
        `<div class="item">
        <img class="fix_img" src="${element.image}" alt="">
        <h1 class="title">${element.title}</h1>
        <h2 class="subtitle">${element.text}</h2>
    </div>`
});





const items = document.getElementsByClassName("item");
console.log(items);

let activeItem = 0;

//navigazione in su
const downBtn = document.getElementById("angle_right");

//aggiungo l'azione di scroll sopra al mio bottone
downBtn.addEventListener("click", function () {

    if (activeItem < items.length - 1) {
        //tolgo la classe active dall'elemento corrente
        items[activeItem].classList.remove('active');

        //incremento l'indice dell'elemento da visualizzare
        activeItem++;

        //aggiungo la classe active all'elemento successivo
        items[activeItem].classList.add('active');


    }

}
)


//navigazione in su
const upBtn = document.getElementById("angle_left");

//aggiungo l'azione di scroll sopra al mio bottone
upBtn.addEventListener("click", function () {

    if (activeItem > 0) {
        //tolgo la classe active dall'elemento corrente
        items[activeItem].classList.remove('active');

        //decremento l'indice dell'elemento da visualizzare
        activeItem--;

        //aggiungo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

    }

}
)


