import './style.css';

const submitForm = document.querySelector('form');
const taskInput = document.querySelector('#task-input');
const todoList = document.querySelector('.list-group');

const tasks = [];

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();

  tasks.push({ description: taskInput.value, completed: false, index: tasks.length });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  todoList.innerHTML = '';

  displayTasksFromLS();

  taskInput.value = '';

  console.log(tasks);
});


const displayTasksFromLS = () => {
  tasks.forEach((task) => {
    const li = document.createElement('li');

    li.classList = 'list-group-item';
    li.setAttribute('draggable', 'true');
    li.innerHTML = `
    <i class="fas fa-bars drag-drop"></i>
    <input type="checkbox" class="checkbox" checked="${task.completed}">
    <label>${task.description}</label>
    <i class="fa fa-trash-alt delete-btn float-end"></i>
    `;

    document.querySelector('.list-group').appendChild(li);
  });
};