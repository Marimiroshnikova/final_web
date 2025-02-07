const contactForm = document.getElementById('contact-form');
const nameInput   = document.getElementById('name');
const emailInput  = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageInput = document.getElementById('message');
const togglePasswordButton = document.getElementById('toggle-password');

const submitButton = contactForm.querySelector('button[type="submit"]');

function validateForm(e) {
  e.preventDefault();
  let isValid = true;
  
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  } else {
    removeError(nameInput);
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, 'Please enter a valid email');
    isValid = false;
  } else {
    removeError(emailInput);
  }
  
  if (passwordInput.value.trim() === '') {
    showError(passwordInput, 'Password is required');
    isValid = false;
  } else if (passwordInput.value.trim().length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters long');
    isValid = false;
  } else {
    removeError(passwordInput);
  }
  
  if (messageInput.value.trim() === '') {
    showError(messageInput, 'Message is required');
    isValid = false;
  } else {
    removeError(messageInput);
  }
  
  if (isValid) {
    submitButton.textContent = 'Message sent!';
    submitButton.classList.add('success');
    
    setTimeout(() => {
      submitButton.textContent = 'Send Message';
      submitButton.classList.remove('success');
    }, 3000);
    
    contactForm.reset();
  }
}

function showError(input, message) {
  const formGroup = input.closest('.form__group');
  const errorElement = formGroup.querySelector('.form__error');
  errorElement.textContent = message;
  formGroup.classList.add('error');
}

function removeError(input) {
  const formGroup = input.closest('.form__group');
  const errorElement = formGroup.querySelector('.form__error');
  errorElement.textContent = '';
  formGroup.classList.remove('error');
}

togglePasswordButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.innerHTML = '<i class="ri-eye-off-line"></i>';
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.innerHTML = '<i class="ri-eye-line"></i>';
  }
});

contactForm.addEventListener('submit', validateForm);
