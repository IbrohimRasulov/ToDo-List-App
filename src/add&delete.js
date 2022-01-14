import isChecked from './updateStatus';
import editTask from './editTask';

const submitForm = document.querySelector('form');
const taskInput = document.querySelector('#task-input');
const todoList = document.querySelector('.list-group');

const printTask = (task) => {
  const li = document.createElement('li');

  li.classList = 'list-group-item';
  li.setAttribute('draggable', 'true');
  li.innerHTML = `
  <i class="fa fa-grip-vertical drag-drop"></i>
  <input type="checkbox" class="checkbox">
  <input type="text" id="${task.index}" value="${task.description}" class="singleTaskInput">
  <i class="fa fa-trash-alt delete-btn float-end"></i>
  `;

  document.querySelector('.list-group').appendChild(li);

  if (task.completed === true) {
    li.children[2].classList.add('checked');
    li.children[1].checked = true;
  }

  return li;
};

const deleteTask = (li, tasks) => {
  li.children[3].addEventListener('click', () => {
    for (let i = 0; i < tasks.length; i += 1) {
      if ((tasks[i].index) === (li.children[2].id)) {
        tasks.splice(i, 1);
      }
    }

    tasks.forEach((task, index) => {
      task.index = index;
    });

    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(tasks));

    /* eslint-disable */
    todoList.innerHTML = '';
    displayTasksFromLS(tasks);
  });
};

const displayTasksFromLS = (tasks) => {
  tasks.forEach((task) => {
    const li = printTask(task);
    isChecked(li, tasks);
    deleteTask(li, tasks);
    editTask(li, tasks);
  });
};
/* eslint-enable */

const addTask = (tasks) => {
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    tasks.push({ description: taskInput.value, completed: false, index: tasks.length });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    todoList.innerHTML = '';
    displayTasksFromLS(tasks);
    taskInput.value = '';
  });
};

export { addTask, displayTasksFromLS, deleteTask };