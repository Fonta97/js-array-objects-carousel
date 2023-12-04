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