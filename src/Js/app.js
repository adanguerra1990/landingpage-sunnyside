document,addEventListener('DOMContentLoaded', () => {
    iniciarApp()
})

function iniciarApp() {    
    crearGaleria();
    navegacionFija();    
}
const navToggle =  document.querySelector('#nav-toggle');
const navMenu =  document.querySelector('#nav-menu');
const navLink = document.querySelectorAll('.nav__link')


window.addEventListener('scroll', scrollUp);
navToggle.addEventListener('click', mostrarMenu);
navLink.forEach(link => link.addEventListener('click', linkAction))

function mostrarMenu() {
    
    navMenu.classList.toggle('show-menu');        
}

function linkAction() {
    
    navMenu.classList.remove('show-menu')
}


function navegacionFija() {
   window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.header');
    const body = document.querySelector('body');
    const scrollY = window.scrollY;

    if (scrollY > 520) {
        navbar.classList.add('fixed');
        body.classList.add('fixed-body');
    } else {
        navbar.classList.remove('fixed');
        body.classList.remove('fixed-body');
    }
    
   })
    
}

function crearGaleria() {
    const imagenes = [
        {imagen: 'image-gallery-cone',
        clase: 'img1'},
        {imagen: 'image-gallery-milkbottles',
        clase: 'img2'},
        {imagen: 'image-gallery-orange',
        clase: 'img3'},
        {imagen: 'image-gallery-sugarcubes',
        clase: 'img4'},
    ]

    const container = document.querySelector('.galeria');
    

    imagenes.forEach(img => {

        const imgElementMobile = document.createElement('img');
        imgElementMobile.src = `build/img/mobile/${img.imagen}.jpg`;
        imgElementMobile.alt = img.imagen;
        imgElementMobile.className = `galria__img mobile ${img.clase}`;

        const imgElementDesktop = document.createElement('img');
        imgElementDesktop.src = `build/img/desktop/${img.imagen}.jpg`;
        imgElementDesktop.alt = img.imagen;
        imgElementDesktop.className = `galria__img desktop ${img.clase}`;

        container.appendChild(imgElementMobile);
        container.appendChild(imgElementDesktop);
        
    })    
    
}

function scrollUp() {
    const btnScrollUp = document.querySelector('.scrollup');
    this.scrollY >= 350 ? btnScrollUp.classList.add('show-scroll') : btnScrollUp.classList.remove('show-scroll')    
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: 400
})

sr.reveal(`.home__title, .home__img`);
sr.reveal(`.reveal-1`, {origin: 'left'});
sr.reveal(`.reveal-2`, {origin: 'right'});
sr.reveal(`.card--description`, {origin: 'bottom'});
sr.reveal(`.testimonial__card`, { scale: 0.85 });
sr.reveal(`.footer__container`);