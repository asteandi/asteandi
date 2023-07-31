let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo-in');

let backgroundasteandi = document.getElementById('backgroundasteandi');
let locationasteandi = document.getElementById('locationasteandi');
// let runningtext = document.getElementById('runningtext');
let buttonabout = document.getElementById('buttonabout');
let buttonwork = document.getElementById('buttonwork');


function changeImage(anything) {
    document.getElementById('slider').src = anything;
}
function ToggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        })

        setTimeout (() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2500)
    })
})

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    backgroundasteandi.style.marginTop = value * 0.2 + 'px';
    locationasteandi.style.marginTop = value * 0.15 + 'px';
    // runningtext.style.marginTop = value * 0.5 + 'px';
    buttonabout.style.marginTop = value * -0.1 + 'px';
    buttonwork.style.marginTop = value * -0.1 + 'px';
})

//initialize Tilt Js
VanillaTilt.init(
    document.querySelectorAll(".js-tilt"), {
        max: 35,
        speed: 400,
});

