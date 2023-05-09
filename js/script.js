let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .hobbies-container, .social-container', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Student', 'Developer', 'Gamer', 'Dallas Mavericks Fan', 'Anime Lover'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById("open-about-btn").addEventListener("click", function(){
    document.getElementById("modal-about").classList.add("open")
})

document.getElementById("close-modal-about-btn").addEventListener("click", function(){
    document.getElementById("modal-about").classList.remove("open")
})

document.getElementById("open-dev-btn").addEventListener("click", function(){
    document.getElementById("modal-dev").classList.add("open")
})

document.getElementById("close-modal-dev-btn").addEventListener("click", function(){
    document.getElementById("modal-dev").classList.remove("open")
})

document.getElementById("open-anime-btn").addEventListener("click", function(){
    document.getElementById("modal-anime").classList.add("open")
})

document.getElementById("close-modal-anime-btn").addEventListener("click", function(){
    document.getElementById("modal-anime").classList.remove("open")
})

document.getElementById("open-games-btn").addEventListener("click", function(){
    document.getElementById("modal-games").classList.add("open")
})

document.getElementById("close-modal-games-btn").addEventListener("click", function(){
    document.getElementById("modal-games").classList.remove("open")
})
