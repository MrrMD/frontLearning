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


//submit

const contactForm = document.querySelector('.contact-form');
// console.log(contactForm);
contactForm.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();
    const {target} = event;
    const taskNameInput = target.name;
    const inputValue = taskNameInput.value;
    console.log(inputValue);
    if (inputValue) {
        alert('Привет ' + inputValue + ", ваше сообщение было отправлено!");
    } else {
        alert('Введите верные данные');
    }
});