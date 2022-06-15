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
    handleNavItemsAnimation()
}


const handleNavItemsAnimation = () => {
    let delayTime = 0;
    
    allNavItems.forEach((item) => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    });
};
const deleteAnimation = () => {
    allNavItems.forEach((item) => {
        item.classList.remove('nav-items-animation');
    });
};


navBurger.addEventListener('click', handleNav)