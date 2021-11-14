import throttle from 'lodash.throttle';

const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

// function onFormInput(e) {
//    console.log(formData);
//    formData[e.target.name] = e.target.value;
//    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
 
// };

// populateTexterea();

// function onFormSubmit(e) {
//    e.preventDefault();
//    const feedbackForm = localStorage.getItem('feedback-form-state');
//    const parsObject = JSON.parse(feedbackForm);
//    console.log(parsObject);
// 
//    e.currentTarget.reset();
//    localStorage.removeItem('feedback-form-state');
  
// };

// function populateTexterea() {
//    let savedMessage = localStorage.getItem('feedback-form-state');
//    const localParse = savedMessage ? JSON.parse(savedMessage) : {};
//    //   persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
//    console.log(localParse);
//   if (localParse) {
//       refs.textarea.value = localParse.message;
//       refs.input.value = localParse.email;
     
//    };
 
// };

// ============================================================================


const LOCALSTOREGE_KEY = 'feedback-form-stat'

initForm();
function onFormInput(e) {
   
   let persistedFilters = localStorage.getItem(LOCALSTOREGE_KEY);
   persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
   persistedFilters[e.target.name] = e.target.value;
   localStorage.setItem(LOCALSTOREGE_KEY, JSON.stringify(persistedFilters));
   
};

function initForm() {
   let persistedFilters = localStorage.getItem(LOCALSTOREGE_KEY);
   if (persistedFilters) {
      persistedFilters = JSON.parse(persistedFilters);
      Object.entries(persistedFilters).forEach(([name, value]) => {
         refs.form.elements[name].value = value;
      });
    }
}
function onFormSubmit(e) {
   e.preventDefault();
   const formData = new FormData(refs.form);
  
  
   const user = {};
   formData.forEach((value, name) => {
      
       user[name] = value;
      

   });
   console.log(user);

   e.currentTarget.reset();
   localStorage.removeItem(LOCALSTOREGE_KEY);
};

