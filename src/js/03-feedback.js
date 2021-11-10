const formData = { };
const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
   const resData = new FormData(e);
   resData.array.forEach(element => {
      
   });
  
  
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

function populateTexterea(e) {
   const savedMessage = localStorage.getItem('feedback-form-state');
   const localString = JSON.parse(savedMessage);
   console.log(localString);

    if (savedMessage) {
      
      refs.textarea.value = savedMessage;
     refs.input.value = savedMessage;
     
   };
 
};
