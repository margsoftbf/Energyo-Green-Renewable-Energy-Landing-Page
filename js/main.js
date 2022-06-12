const navBurger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile')
const allNavItems = document.querySelectorAll('.mobile__item')

function handleNav() {
navBurger.classList.toggle('is-active')
mobileMenu.classList.toggle('mobile-active')

allNavItems.forEach(item => {
item.addEventListener('click', () =>{
    navBurger.classList.remove('is-active')
    mobileMenu.classList.remove('mobile-active')
        })
    })
}

navBurger.addEventListener('click', handleNav)