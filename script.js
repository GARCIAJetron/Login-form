document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const formContainer = document.querySelector('.container');
    const overlayLeft = document.querySelector('.overlay-left');
    const overlayRight = document.querySelector('.overlay-right');
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        // Toggle the type attribute
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
    
        // Toggle the eye icon
        togglePassword.classList.toggle('lni-eye');
        togglePassword.classList.toggle('lni-eye-off');

    loginButton.addEventListener('click', () => {
        formContainer.style.transform = 'translateX(-50%)';
        loginContainer.style.opacity = '1';
        loginContainer.style.visibility = 'visible';
        registerContainer.style.opacity = '0';
        registerContainer.style.visibility = 'hidden';
        overlayLeft.classList.add('active');
        overlayRight.classList.remove('active');
    });

    registerButton.addEventListener('click', () => {
        formContainer.style.transform = 'translateX(0)';
        loginContainer.style.opacity = '0';
        loginContainer.style.visibility = 'hidden';
        registerContainer.style.opacity = '1';
        registerContainer.style.visibility = 'visible';
        overlayRight.classList.add('active');
        overlayLeft.classList.remove('active');
    });
});
});
