const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]
const errorSpan = document.createElement('span');
errorSpan.className = 'error-message-block';

const createTaskBlock = document.querySelector('.create-task-block');
createTaskBlock.append(errorSpan);
createTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = document.querySelector('.create-task-block__input').value;

    if(!inputTextValidation(text)) return;
    
    tasks.push({
        id: Date.now().toString,
        completed: false,
        text: text,
    })
    const taskItem = createTaskItem(tasks[tasks.length-1].id, tasks[tasks.length-1].text);
    taskListContainer.append(taskItem);
});

const inputTextValidation = (text) => {
    const isTaskExists = tasks.some((task) => task.text === text);
    if (text === ''){
        errorSpan.textContent = 'Название задачи не должно быть пустым';
        return false;
    }else if (isTaskExists){
        errorSpan.textContent = 'Задача с таким именем уже существует';
        return false;
    }else {
        errorSpan.textContent = "";
        return true;
    }
}

const createTaskItem = (taskId, taksText) => {
    console.log(tasks);
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;

    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = 'task-item_main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'task-item__main-content';

    taskItemMainContainer.append(taskItemMainContent);
    taskItem.append(taskItemMainContainer);

    const checkBoxForm = document.createElement('form');
    checkBoxForm.className = 'checkbox-form';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkbox-form__checkbox';
    const inputId = `task-${taskId}`;
    checkBox.id = inputId;

    const label = document.createElement('label');
    label.htnmlfor = inputId;

    const span = document.createElement('task-item__text');
    span.innerText = taksText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'task-item__delete-button default-button delete-button';
    deleteBtn.innerText = 'Удалить';

    taskItemMainContent.append(checkBoxForm, span);
    checkBoxForm.append(checkBox, label);
    taskItemMainContainer.append(deleteBtn);

    return taskItem;

};

const taskListContainer = document.querySelector('.tasks-list');
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    taskListContainer.append(taskItem);
});

const createDeleteForm = (text) => {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay modal-overlay_hidden';

    const deleteModal = document.createElement('div');
    deleteModal.clasname = 'delete modal';

    const deleteModalQuestion  = document.createElement('h3');
    deleteModalQuestion.className = 'delete-modal__question';
    deleteModalQuestion.innerText = text;

    const modalButtons  = document.createElement('div');
    modalButtons.className = 'delete-modal-__buttons';

    const cancelButton = document.createElement('button');
    cancelButton.classname = 'delete-modal__button';
    cancelButton.innerText = 'Отмена';

    const confirmButton = document.createElement('button');
    confirmButton.classname = 'delete-modal__button';
    confirmButton.innerText = 'Удалить';

    modalButtons.append(cancelButton, confirmButton);
    deleteModal.append(deleteModalQuestion, modalButtons );
    modalOverlay.append(deleteModal);
    return {
        deleteModal,
        cancelButton,
        confirmButton,
        modalOverlay
    }

}

let targetTaskToDelete = null;
const {deleteModal, cancelButton, confirmButton, modalOverlay,} 
= createDeleteForm('Вы действительно хотите удалить эту задачу?');
document.body.prepend(modalOverlay);

cancelButton.addEventListener('click', () => {
    modalOverlay.classList.add('modal-overlay_hidden');
});

confirmButton.addEventListener('click', () => {
    const deleteIndex = tasks.findIndex((task) => task.id === targetTaskToDelete);
    if(deleteIndex >= 0){
        tasks.slice(deleteIndex, 1);
        const taskItemHTML = document.querySelector(`[data-task-id="${targetTaskToDelete}"]`);
        taskItemHTML.remove();
        modalOverlay.classList.add('modal-overlay_hidden');
    }
});

taskListContainer.addEventListener('click', (event) => {
    const { target } = event;
    const closestTarget = target.closest('.task-item__delete-button');
    if(closestTarget){
        const closestTask = closestTarget.closest('.task-item');
        if(closestTask){
            const taskId = closestTask.dataset.taskId;
            targetTaskToDelete = taskId;
            modalOverlay.classList.remove('modal-overlay_hidden');
        }
    }
});