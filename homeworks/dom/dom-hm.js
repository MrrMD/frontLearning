const addNewInputWithLabel  = (labelText, inputType, inputName, inputPlaceHolder) => {
    const label = document.createElement('label');
    label.innerText = labelText;

    const input = document.createElement('input');
    input.type = inputType;
    input.name = inputName;
    input.placeholder = inputPlaceHolder;

    label.append(input);

    return label;
};

const formContainer = document.createElement('form');
formContainer.className = 'create-user-form';

const userNameLabel = addNewInputWithLabel('Имя', 'text', 'userName', 'Введите ваше имя');
const userPasswordLabel = addNewInputWithLabel('Пароль', 'password', 'password', 'Придумайте пароль');

const confirmBtn = document.createElement('button');
confirmBtn.type = 'submit';
confirmBtn.innerText = 'Подтверидть';

formContainer.append(userNameLabel, userPasswordLabel, confirmBtn);

document.body.prepend(formContainer);

// my solutin
// const userForm = document.createElement('form');
// const body = document.querySelector('body');

// userForm.className = 'create-user-form';

// userForm.appendChild(document.createElement('label')).innerHTML = 'Имя ';
// const userNameInput = document.createElement('input');
// userNameInput.type = 'text';
// userNameInput.name = 'userName';
// userNameInput.placeholder = 'Введите ваше имя';
// userForm.append(userNameInput);

// userForm.appendChild(document.createElement('label')).innerHTML = 'Пароль ';
// const userPasswordInput = document.createElement('input');
// userPasswordInput.type = 'password';
// userPasswordInput.name = 'password';
// userPasswordInput.placeholder = 'Придумайте пароль';
// userForm.append(userPasswordInput);

// userForm.appendChild(document.createElement('label')).innerHTML = 'Подтвердить ';
// const userCreateSubmitBtn = document.createElement('button');
// userCreateSubmitBtn.type = 'submit';
// userForm.append(userCreateSubmitBtn);


// body.append(userForm);

