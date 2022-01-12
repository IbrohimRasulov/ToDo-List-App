import './style.css';

const tasks = [
  {
    description: 'Set up a project with webpack',
    completed: true,
    index: 1,
  },
  {
    description: 'Created an index.html file',
    completed: true,
    index: 2,
  },
  {
    description: 'Set an array of sample to-do tasks',
    completed: true,
    index: 3,
  },
  {
    description: 'Create a funtion to populate the HTML',
    completed: true,
    index: 4,
  },
  {
    description: 'Dynamically create list of tasks',
    completed: true,
    index: 5,
  },
  {
    description: 'Created a style.css',
    completed: true,
    index: 6,
  },
];

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