// import Scrollbar from 'smooth-scrollbar';
// var options = {
//     'damping': 0.05
// }
// Scrollbar.init(document.querySelector('#my-scrollbar'), options);

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo-in');

let text = document.getElementById('textdani');
let backgroundhome = document.getElementById('backhome');
let lokasi = document.getElementById('locc');
let kerja = document.getElementById('kerjaan');

const circledegre = document.querySelectorAll(".logoloc");
circledegre.forEach(logoloc => {
    logoloc.addEventListener("click", (style) => {
        const computedStyle = window.getComputedStyle(style.target)
        console.log(computedStyle.backgroundColor)
        document.body.style.backgroundColor = computedStyle.backgroundColor
    })
})


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
                }) (idx + 1) * 50
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2500)
    })
})

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 0.5 + 'px';
    // text.style.translate = value * -1.5 + 'px';
    backgroundhome.style.marginTop = value * 0.15 + 'px';
    lokasi.style.marginTop = value * 0.5 + 'px';
    // lokasi.style.translate = value * -0.3 + 'px';
    kerja.style.marginTop = value * 0.35 + 'px';
})

window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
})