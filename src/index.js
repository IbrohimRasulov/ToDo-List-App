import './style.css';

const submitForm = document.querySelector('form');
const taskInput = document.querySelector('#task-input');

const tasks = [];

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();

  tasks.push({description: taskInput.value, completed: false, index: tasks.length})

  localStorage.setItem('tasks', JSON.stringify(tasks))

  taskInput.value = '';
  console.log(tasks);
});