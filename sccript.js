let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

let seaarchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    document.classList.add('active');
}

document.querySelector('#close-seacrh').onclick = () => {
    seaarchFrom.classList.remove('active');
}

window.onscroll = () => {
    navbar,classList.remove('acrtive');
    if(window.scrollY>0) {
        document.querySelector('.header').classList.add('active');
    }else {
        document.querySelector('.header').classList('active');
    }
};

window.onload = () => {
    if(window.scrollY>0) {
        document.querySelector('.header').classList.add('active');
    }else {
        document.querySelector('.header').classList.remove('active');
    }
};