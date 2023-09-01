const burger = document.querySelector('#myBurger');
const menu = document.querySelector('#myMenu');

burger.addEventListener('click', (e) => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden');
    }
});

