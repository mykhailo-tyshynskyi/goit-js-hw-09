const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailField = form.elements.email;
const messageField = form.elements.message;

const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? '';
emailField.value = savedData.sevedEmail ?? '';
messageField.value = savedData.savedMessage ?? '';
let email = '';
let message = '';
console.log(savedData);
form.addEventListener('input', handleFormInput);
function handleFormInput() {
  email = emailField.value;
  message = messageField.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ sevedEmail: email, savedMessage: message })
  );
}

form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  if (email === '' || message === '') {
    alert('Fill please all fields');
  } else {
    formData.email = email;
    formData.message = message;
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
}
