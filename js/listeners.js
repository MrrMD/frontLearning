// const contactSubmitBtn = document.querySelector('body');
// contactSubmitBtn.addEventListener('click', (event) => {
//     console.log(event.target);
//     // const target = event.target;
//     const { target } = event;
//     // target.classList.add('avatar');
// });




// const allElements = document.querySelectorAll('.btn');

// allElements.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         const { target } = event;
//         allElements.forEach((button) => {
//             button.classList.remove('avatar');
//         });
//         target.classList.add('avatar');
//     });
// });


//  submit
// const contactForm = document.querySelector('.contact-form');
// // console.log(contactForm);
// contactForm.addEventListener('submit', (event) => {
//     console.log(event);
//     event.preventDefault();
//     const {target} = event;
//     const taskNameInput = target.name;
//     const inputValue = taskNameInput.value;
//     console.log(inputValue);
//     if (inputValue) {
//         alert('Привет ' + inputValue + ", ваше сообщение было отправлено!");
//     } else {
//         alert('Введите верные данные');
//     };
// });

// keydown, keyup
// document.addEventListener('keydown', (event) => {
//     const { key } = event;
//     console.log(key);
//     const buttonOne = document.querySelector(`[data-button-id="${key}"]`);
//     console.log(buttonOne);

//     if(buttonOne){
//         const deleteConfirmed = confirm(`Вы действительно хотите удалить кнопку ${key} ?`);
//         if (deleteConfirmed){
//             buttonOne.remove();
//         }
//     }
// });

//  mouseover, mouseout, mousemove
// const createToolTip = (text) => {
//     const tooltip = document.createElement('span');
//     tooltip.textContent = text;
//     tooltip.className = 'tooltip';
    
//     return tooltip;
// }

// document.addEventListener('mouseover', (event) => {
//     const { target } = event;
//     const isOverDeleteBtn = target.className.includes('btn');

//     if (isOverDeleteBtn) {
//         console.log('succes');
//         const tooltipHtml = createToolTip('Удалить кнопку?');
//         // target.append(tooltipHtml);
//         document.querySelector('.contact').append(tooltipHtml);
//     }
// });




//  contextmenu
// document.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
// });
    
// const checkNameInputOnValidation = (value) => {
//     if (!value || value.includes('@')){
//         return false;
//     } 
//     return true;
// };

// //  change смена фокуса, input каждая буква
// const nameInput = document.querySelector('.contact-form').name;
// nameInput.addEventListener('input', (event) => {
//     const { target } = event;
//     const { value } = target;
//     const isValid = checkNameInputOnValidation(value);

//     if (!isValid) {
//         console.log("Имя не валидно");
//     }else {
//         console.log(("Всё ок"));
//     }

// });