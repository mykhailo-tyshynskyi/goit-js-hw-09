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
form.addEventListener('input', handleFormInput);
function handleFormInput() {
  formData.email = emailField.value.trim();
  formData.message = messageField.value.trim();
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ sevedEmail: formData.email, savedMessage: formData.message })
  );
   }

form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
  }
}
