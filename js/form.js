const contactForm = document.getElementById('contact-form');
const nameInput   = document.getElementById('name');
const emailInput  = document.getElementById('email');
const messageInput = document.getElementById('message');

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
  
  if (messageInput.value.trim() === '') {
    showError(messageInput, 'Message is required');
    isValid = false;
  } else {
    removeError(messageInput);
  }
  
  if (isValid) {
    contactForm.reset();
    alert('Message sent successfully!');
  }
}

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector('.form__error');
  errorElement.textContent = message;
  formGroup.classList.add('error');
}

function removeError(input) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector('.form__error');
  errorElement.textContent = '';
  formGroup.classList.remove('error');
}

contactForm.addEventListener('submit', validateForm);
