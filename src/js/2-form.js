const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailField = form.elements.email;
const messageField = form.elements.message;

const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
emailField.value = savedData.email ?? '';
messageField.value = savedData.message ?? '';
formData.email = emailField.value;
formData.message = messageField.value;
form.addEventListener('input', handleFormInput);
function handleFormInput() {
  formData.email = emailField.value.trim();
  formData.message = messageField.value.trim();
   localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(formData)
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
