let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


window.addEventListener('load', function() {
    let skillsSection = document.getElementById('skills');
    if (skillsSection) {
        let waypoint = new Waypoint({
            element: skillsSection,
            handler: function(direction) {
                let progressBar = document.querySelectorAll('.progress-bar');
                progressBar.forEach((bar) => {
                    bar.style.width = bar.getAttribute('aria-valuenow') + '%';
                });
            },
            offset: '80%'
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {

    const sr = ScrollReveal();



    const homeContentHeadingConfig = {
        origin: 'top',
        distance: '80px',
        duration: 2000,
        delay: 200
    };
    const homeContentConfig = {
        origin: 'top'
    };
    const otherElementsConfig = {
        origin: 'bottom'
    };

    sr.reveal('.home-content, .heading', homeContentHeadingConfig);
    sr.reveal('.home-content', homeContentConfig);
});

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.home-content h1, .about-img', {
        origin: 'left'
    });
    ScrollReveal().reveal('.home-content p, .about-content', {
        origin: 'right'
    });
    ScrollReveal({
        duration: 2000,
        delay: 200,
        distance: '80px',
        reset: true
    }).reveal('.home-content h1, .about-img', {
        origin: 'left'
    }).reveal('.home-content p, .about-content', {
        origin: 'right'
    });

});


document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Dev', 'Backend Dev', 'Good Friend. . .', 'Full Stack'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
const links = document.querySelectorAll('.porfolio-box a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const parent = e.target.closest('.porfolio-box');
        const image = parent.querySelector('img');
        const src = image.getAttribute('src');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img-wrapper');
        const newImg = document.createElement('img');
        newImg.setAttribute('src', src);
        imgWrapper.appendChild(newImg);
        overlay.appendChild(imgWrapper);
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('open'), 0);
    });
});
