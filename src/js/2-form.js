const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailField = form.elements.email;
const messageField = form.elements.message;

const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
emailField.value = savedData.sevedEmail ?? '';
messageField.value = savedData.savedMessage ?? '';
formData.email = emailField.value;
formData.message = messageField.value;


let email = '';
let message = '';
form.addEventListener('input', handleFormInput);
function handleFormInput() {
  email = emailField.value.trim();
  message = messageField.value.trim();
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ sevedEmail: email, savedMessage: message })
  );
  formData.email = email;
  formData.message = message;

  }

form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  if (emailField.value === '' || messageField.value === '') {
    alert('Fill please all fields');
  } else {
    
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
  }
}
