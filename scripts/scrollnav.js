const navbar = document.querySelector('#navbar')
const scrolldown = document.querySelector('.scroll-down')
const circle = document.querySelectorAll('.circle')

window.onscroll = function () {
    // pageYOffset or scrollY
    if (window.scrollY > 0) {
        navbar.classList.remove('initial')
        navbar.classList.add('scroll')
        scrolldown.classList.add('hide-on-scroll')
    } else {
        navbar.classList.remove('scroll')
        navbar.classList.add('initial')
        scrolldown.classList.remove('hide-on-scroll')
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        navbar.classList.add('hide')
        navbar_alt.classList.add('hide')
    } else {
        navbar.classList.remove('hide')
        navbar_alt.classList.remove('hide')
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.9) {
        for (iter = 0; iter < circle.length; iter++) {
            circle[iter].classList.add('circle-hide')
        }
    } else {
        for (iter = 0; iter < circle.length; iter++) {
            circle[iter].classList.remove('circle-hide')
        }
    }
}
