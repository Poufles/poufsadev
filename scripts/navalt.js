const navbar_alt = document.querySelector('#navbar-alt');
const button = document.querySelector('.arrow')

function clicked() {
    if (navbar_alt.classList.contains('clicked-alt')) {
        navbar_alt.classList.remove('clicked-alt')
        button.classList.remove('arrow-clicked')
    } else {
        navbar_alt.classList.add('clicked-alt')
        button.classList.add('arrow-clicked')
    }
}