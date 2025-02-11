const addBtn = document.getElementById('add-btn');
const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const clearAllBtn = document.getElementById('clear-all-btn');
const showAllBtn = document.getElementById('show-all');
const showCompletedBtn = document.getElementById('show-completed');
const showStuffBtn = document.getElementById('show-stuff');

let tasks = [];

function addTask() {
    const taskText = inputField.value.trim();
    
    if (taskText !== "") {
        const task = {
            text: taskText,
            completed: false,
            stuff: false
        };

        tasks.push(task);
        inputField.value = ''; // Reset input field
        updateTaskList();
    }
}

function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

function toggleTaskStuff(index) {
    tasks[index].stuff = !tasks[index].stuff;
    updateTaskList();
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function updateTaskList() {
    todoList.innerHTML = "";

    tasks.forEach((task, index) => {
        const item = document.createElement('li');
        item.classList.add('todo-item');
        
        if (task.completed) {
            item.classList.add('completed');
        }
        if (task.stuff) {
            item.classList.add('stuff');
        }

        item.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleTaskStatus(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="toggleTaskStuff(${index})">${task.stuff ? 'Unmark Stuff' : 'Mark as Stuff'}</button>
                <button onclick="removeTask(${index})">×</button>
            </div>
        `;

        todoList.appendChild(item);
    });
}

function clearAllTasks() {
    tasks = [];
    updateTaskList();
}

// Event Listeners
addBtn.addEventListener('click', addTask);
clearAllBtn.addEventListener('click', clearAllTasks);

showAllBtn.addEventListener('click', () => {
    updateTaskList(); // Show all tasks
});

showCompletedBtn.addEventListener('click', () => {
    const completedTasks = tasks.filter(task => task.completed);
    displayFilteredTasks(completedTasks);
});

showStuffBtn.addEventListener('click', () => {
    const stuffTasks = tasks.filter(task => task.stuff);
    displayFilteredTasks(stuffTasks);
});

function displayFilteredTasks(filteredTasks) {
    todoList.innerHTML = "";
    filteredTasks.forEach((task, index) => {
        const item = document.createElement('li');
        item.classList.add('todo-item');

        if (task.completed) {
            item.classList.add('completed');
        }
        if (task.stuff) {
            item.classList.add('stuff');
        }

        item.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleTaskStatus(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="toggleTaskStuff(${index})">${task.stuff ? 'Unmark Stuff' : 'Mark as Stuff'}</button>
                <button onclick="removeTask(${index})">×</button>
            </div>
        `;

        todoList.appendChild(item);
    });
}
