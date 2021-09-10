/*===== SHOW MENU =====*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    closeIcon = document.querySelector('#nav-toggle i');

navToggle.addEventListener('click', showMenu);

function showMenu() {
    navMenu.classList.toggle('show-menu');

    closeIcon.classList.toggle('fa-times');
}

/*===== ACTIVE & REMOVE MENU ======*/
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => link.addEventListener('click', linkAction));

function linkAction() {
    // Active link
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');

    // Remove menu mobile & Close Icon
    navMenu.classList.remove('show-menu');
    closeIcon.classList.remove('fa-times');
}

/*===== SCROLL HEADER ======*/
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
    const nav = document.getElementById('header');

    // When the scroll is heigher 200 viewport height, add the "scroll-header" class to the <header> tag
    //nav.classList.toggle('scroll-header', this.scrollY >= 200);
    if (this.scrollY >= 100) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

/*===== SHOW SCROLL TOP ======*/
window.addEventListener('scroll', scrollTop);

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');

    // When the scroll is heigher 560 viewport height, add the "show-scrolltop" class to the <a> tag with the "scroll-top" class to show the scrolltop button 
    if (this.scrollY >= 10) {
        scrollTop.classList.add('show-scrolltop');
    } else {
        scrollTop.classList.remove('show-scrolltop');
    }
}

/*===== SLICKY TESTIMONIALS ======*/
$('.testimonials__container').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

/*===== SCROLL REVEAL ANIMATION ======*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal('.home__img, .home__content, .services__item, .featured__item, .brands__img', { origin: 'top', interval: 200 });
sr.reveal('.about__img', { origin: 'left' });
sr.reveal('.about__content, .banner__content', { origin: 'right' });
sr.reveal('.footer__copyright', { origin: 'bottom' });