import  throttle  from "lodash.throttle";

const formData = {};
const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', throttle(onFormSubmit, 2000));
refs.form.addEventListener('input', throttle(onFormInput, 2000));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
   
  
  
};
populateTexterea();
function onFormSubmit(e) {
   e.preventDefault();
   const feedbackForm = localStorage.getItem('feedback-form-state');
   const parsForm = JSON.parse(feedbackForm);
   console.log(parsForm);
   

   // console.log(localStorage.getItem('feedback-form-state'));
   e.currentTarget.reset();
   localStorage.removeItem('feedback-form-state');
};

function populateTexterea() {
   const savedMessage = localStorage.getItem('feedback-form-state');
   const localString = JSON.parse(savedMessage);
   console.log(localString);

   if (localString) {
      
      refs.textarea.value = localString;
      refs.input.value = localString;
     
   };
 
}
