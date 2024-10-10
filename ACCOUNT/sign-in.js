

function showPassword(){
    const passwordField = document.getElementById('password');
    const sidebar = document.querySelector('.h-pw-icon-box')
    sidebar.style.display = 'flex'

        const hideicon = document.querySelector('.s-pw-icon-box')
        hideicon.style.display = 'none'
        passwordField.setAttribute('type', 'text');
}

function hidePassword(){
    const passwordField = document.getElementById('password');
    const sidebar = document.querySelector('.h-pw-icon-box')
    sidebar.style.display = 'none'

        const hideicon = document.querySelector('.s-pw-icon-box')
        hideicon.style.display = 'block'
        passwordField.setAttribute('type', 'password');
}






document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('m-num-email');
    const emailErrorMsg = document.getElementById('email-error-msg');
    const emailErrorText = document.getElementById('email-error-text');

    const passwordInput = document.getElementById('password');
    const passwordErrorMsg = document.getElementById('password-error-msg');
    const passwordErrorText = document.getElementById('password-error-text');

    emailInput.addEventListener('input', function() {
        const emailValue = emailInput.value;
        if (!emailValue) {
            emailErrorText.textContent = 'Email or Mobile number is required.';
            emailErrorMsg.style.display = 'flex';
        } else if (!validateEmail(emailValue)) {
            emailErrorText.textContent = 'Please enter a valid email address or phone number.';
            emailErrorMsg.style.display = 'flex';
        } else {
            emailErrorMsg.style.display = 'none';
        }
    });

    passwordInput.addEventListener('input', function() {
        const passwordValue = passwordInput.value;
        if (!passwordValue) {
            passwordErrorText.textContent = 'Password is required.';
            passwordErrorMsg.style.display = 'flex';
        } else if (passwordValue.length > 4  && passwordValue.length < 60  ) {
            passwordErrorText.textContent = 'Your password must contain between 4 and 60 characters.';
            passwordErrorMsg.style.display = 'flex';
        } else {
            passwordErrorMsg.style.display = 'none';
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});





function toggleMoreInfo() {
    var moreInfoBox = document.getElementById('more-info-box');
    var learnMoreLink = document.getElementById('learn-more-link');
    
    
    if (moreInfoBox.style.display === 'none' || moreInfoBox.style.display === '') {
                moreInfoBox.style.display = 'block';
                moreInfoBox.classList.add('.more-info-box.open');
                learnMoreLink.style.display = 'none';
            }
}

