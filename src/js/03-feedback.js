import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const throttledUpdateLocalStorage = throttle(updateLocalStorage, 500);

  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  emailInput.addEventListener('input', throttledUpdateLocalStorage);
  messageInput.addEventListener('input', throttledUpdateLocalStorage);

  loadFromLocalStorage();

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearLocalStorage();
    clearFormFields();
    displayFormData();
  });

  function updateLocalStorage() {
    const data = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }

  function loadFromLocalStorage() {
    const data = localStorage.getItem('feedback-form-state');
    if (data) {
      const parsedData = JSON.parse(data);
      emailInput.value = parsedData.email;
      messageInput.value = parsedData.message;
    }
  }

  function clearLocalStorage() {
    localStorage.removeItem('feedback-form-state');
  }

  function clearFormFields() {
    emailInput.value = '';
    messageInput.value = '';
  }

  function displayFormData() {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log('Form Data:', formData);
  }
});
