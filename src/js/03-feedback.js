const throttle = require('lodash.throttle');
const formEl = document.querySelector('.feedback-form');

const storage = {
  addItem(key, value) {
    const result = JSON.stringify(value);
    localStorage.setItem(key, result);
  },

  getItem(key) {
    try {
      const payload = localStorage.getItem(key);
      return JSON.parse(payload);
    } catch (error) {
      console.error('Error parse');
    }
  },
};

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit', onSubmitForm);
addEventListener('DOMContentLoaded', onPageInit);

function onInputChange() {
  const formData = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };
  storage.addItem('feedback-form-state', formData);
}
