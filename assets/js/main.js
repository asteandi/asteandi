let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo-in');

let text = document.getElementById('textdani');
let backgroundhome = document.getElementById('backhome');
let lokasi = document.getElementById('locc');
let kerja = document.getElementById('kerjaan');

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
    text.style.marginTop = value * 1.1 + 'px';
    backgroundhome.style.marginTop = value * 0.6 + 'px';
    lokasi.style.marginTop = value * 1.1 + 'px';
    kerja.style.marginTop = value * 0.3 + 'px';
})

window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
})