import './style.css';

const tasks = [];

tasks.forEach((task) => {
  const li = document.createElement('li');

  li.classList = 'list-group-item';
  li.setAttribute('draggable', 'true');
  li.innerHTML = `
  <input type="checkbox" class="checkbox" checked="${task.completed}">
  <label>${task.description}</label>
  <i class="fa fa-ellipsis-v drag-drop float-end"></i>
  `

  document.querySelector('.list-group').appendChild(li);
});