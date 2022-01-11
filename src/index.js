import _ from 'lodash';
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
  const checkBox = document.createElement('input');
  const icon = document.createElement('i');
  const label = document.createElement('label');

  li.classList = 'list-group-item';
  li.setAttribute('draggable', 'true');
  checkBox.type = 'checkbox';
  checkBox.classList = 'checkbox';
  checkBox.checked = task.completed;
  label.innerHTML = task.description;
  icon.classList = 'fa fa-ellipsis-v drag-drop float-end';

  li.appendChild(checkBox);
  li.appendChild(label);
  li.appendChild(icon);
  document.querySelector('.list-group').appendChild(li);
});