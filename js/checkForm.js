const username = document.querySelector('#name')
const email = document.querySelector('#mail')
const msg = document.querySelector('#msg')
const btn = document.querySelector('.contact__form--btn')


const showError = input => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.form__error')

    formBox.classList.add('error')
    errorMsg.classList.add('activeError')
}

const clearError = input => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.form__error')

    formBox.classList.remove('error')
    errorMsg.classList.remove('activeError')
}

const checkMail = email => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email)
    }

}


const checkForm = (input) => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
        }
    });
}

btn.addEventListener('click', e => {
    e.preventDefault()

    checkForm([username, email, msg])
    checkMail(email)
})