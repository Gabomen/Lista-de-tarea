const inputField = document.getElementById('input');
const addButton = document.querySelector('.add-btn');
const taskList = document.getElementById('list');

function addNewTask() {
    const newTaskText = inputField.value.trim();

    if (newTaskText) {
        const newTask = document.createElement('li');
        newTask.classList.add('task');

        const checkButton = document.createElement('button');
        checkButton.classList.add('check-btn');
        checkButton.innerHTML = '<svg xmlns="http://www.w3.org/3.00/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="check-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>';

        const taskText = document.createElement('p');
        taskText.textContent = newTaskText;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';

        checkButton.addEventListener('click', function (event) {
            const task = event.target.parentNode;
            task.classList.toggle('completed');
        });

        newTask.appendChild(checkButton);
        newTask.appendChild(taskText);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        inputField.value = '';
    }
}

function deleteTask(event) {
    const taskToDelete = event.target.parentNode;
    taskList.removeChild(taskToDelete);
}

addButton.addEventListener('click', addNewTask);

taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        deleteTask(event);
    }
});
