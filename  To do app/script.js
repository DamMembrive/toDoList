document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                createTask(taskText);
                taskInput.value = '';
            }
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            event.target.parentElement.remove();
        }
    });

    function createTask(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${text}
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
    }
});
