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

const createTaskItem = (taskId, taksText) => {
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

console.log("asda");

const taskListContainer = document.querySelector('.tasks-list');
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    taskListContainer.append(taskItem);
});