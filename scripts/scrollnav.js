const navbar = document.querySelector('#navbar')
const scrolldown = document.querySelector('.scroll-down')

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
}