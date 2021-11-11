import throttle from 'lodash.throttle';

const formData = {};
const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
   localStorage.setItem('feedback-form-state', JSON.stringify(formData)); 
};

populateTexterea();

function onFormSubmit(e) {
   e.preventDefault();
   const feedbackForm = localStorage.getItem('feedback-form-state');
   const parsObject = JSON.parse(feedbackForm);
   console.log(parsObject);
   e.currentTarget.reset();
   localStorage.removeItem('feedback-form-state');
};

function populateTexterea() {
   const savedMessage = localStorage.getItem('feedback-form-state');
   const localParse = JSON.parse(savedMessage);

  if (localParse) {
      
      refs.textarea.value = localParse.message;
      refs.input.value = localParse.email;
     
   };
 
};
