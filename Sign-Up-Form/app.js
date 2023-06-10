const submitBtn = document.querySelector('button[type=submit]')
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const email = document.querySelector('.email')
const phone = document.querySelector('.phone')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirm-password')
const checkbox = document.querySelector('.check')

const firstNameError = document.querySelector('.firstName-error')
const lastNameError = document.querySelector('.lastName-error')
const emaiError = document.querySelector('.email-error')
const phoneError = document.querySelector('.phone-error')
const passwordError = document.querySelector('.password-error')
const confirmPasswordError = document.querySelector('.confirm-password-error')
const checkboxError = document.querySelector('.checkbox-error')



firstName.addEventListener('input', ()=>{
    if(firstName.value.length<3 || firstName.value.length === 1) firstNameError.classList.add('show-message')
    else{
        firstNameError.classList.remove('show-message')
    }
})

lastName.addEventListener('input', ()=>{
    if(lastName.value.length<3 || lastName.value.length === 1) lastNameError.classList.add('show-message')
    else{
        lastNameError.classList.remove('show-message')
    }
})

email.addEventListener('input', (e)=>{
    const pattern = e.target.getAttribute('pattern');
    const EmailPattern = new RegExp(pattern)
    if(!EmailPattern.test(email.value)) emaiError.classList.add('show-message')
    else emaiError.classList.remove('show-message')
})

phone.addEventListener('input',()=>{
    if(phone.value.length<8 && phone.value.length>0) phoneError.classList.add('show-message')
    else{
        phoneError.classList.remove('show-message')
    }
    console.log(phone.value)
})

password.addEventListener('input', (e)=>{
    const pattern = e.target.getAttribute('pattern')
    const passwordPattern = new RegExp(pattern)
    if(!passwordPattern.test(password.value)) passwordError.classList.add('show-message')
    else passwordError.classList.remove('show-message')
})

confirmPassword.addEventListener('input', ()=>{
 
    if(password.value !== confirmPassword.value) confirmPasswordError.classList.add('show-message')
    else confirmPasswordError.classList.remove('show-message')
})

checkbox.addEventListener('input', ()=>{
    if(!checkbox.checked) checkboxError.classList.add('show-message')
    else checkboxError.classList.remove('show-message')
})
