const email = document.getElementById('email')
const emailCopy = document.getElementById('email-confirm')
const form = document.getElementById('form')
const error = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    if (email.value !== emailCopy.value) {
        e.preventDefault()
        error.textContent = "Emails must match"
    }
})

