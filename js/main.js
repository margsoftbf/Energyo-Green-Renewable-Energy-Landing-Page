const navBurger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile')
const allNavItems = document.querySelectorAll('.mobile__item')
const counterItems = document.querySelectorAll('.counter')
const counterBox = document.querySelector('.counter-box')
const pricingBoxBtn = document.querySelectorAll('.pricing-box__select')

function handleNav() {
    navBurger.classList.toggle('is-active')
    mobileMenu.classList.toggle('mobile-active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
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

const counterOption = {
    root: null,
    rootMargin: '-260px',
    threshold: 0.1
}

const startCounter = entry => {

    if (entry[0].isIntersecting) {
        counterItems.forEach(counter => {

            const updateCounter = () => {
                const finalNumber = counter.getAttribute('data-number')
                const value = parseInt(counter.textContent)

                const speed = finalNumber / 300


                if (value < finalNumber) {
                    counter.textContent = `${Math.floor(value + speed)}`
                    setTimeout(updateCounter, 1)
                } else {
                    counter.textContent = finalNumber
                }
            }

            updateCounter()

        })
    }
}


const observer = new IntersectionObserver(startCounter, counterOption)
observer.observe(counterBox)


function selectedOption(e) {
    removeSelected()
    removeButtonText()
    e.target.parentElement.classList.add('active')
    e.target.textContent = 'Selected'
}

function removeButtonText() {
    const selectedButton = document.querySelectorAll('.pricing-box__select')
    selectedButton.forEach((item) => {
        item.textContent = 'Select'
    })
}


function removeSelected() {
    const selectedBox = document.querySelectorAll('.pricing-box')
    selectedBox.forEach(item => {
        item.classList.remove('active')
    })
}
pricingBoxBtn.forEach(item => item.addEventListener('click', selectedOption))
navBurger.addEventListener('click', handleNav)