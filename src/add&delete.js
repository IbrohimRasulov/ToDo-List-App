export {addTask, displayTasksFromLS, deleteTask}
import isChecked from './updateStatus'

const submitForm = document.querySelector('form');
const taskInput = document.querySelector('#task-input');
const todoList = document.querySelector('.list-group');

const displayTasksFromLS = (tasks) => {
  tasks.forEach((task) => {
    let li = printTask(task);
    isChecked(li, tasks);
    deleteTask(li, tasks);
  });
};

const addTask = (tasks) => {
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    tasks.push({ description: taskInput.value, completed: false, index: tasks.length });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    todoList.innerHTML = '';
    displayTasksFromLS(tasks);
    taskInput.value = '';
  });
}
const printTask = (task) => {
  const li = document.createElement('li');

  li.classList = 'list-group-item';
  li.setAttribute('draggable', 'true');
  li.innerHTML = `
  <i class="fa fa-grip-vertical drag-drop"></i>
  <input type="checkbox" class="checkbox">
  <label id="${task.index}">${task.description}</label>
  <i class="fa fa-trash-alt delete-btn float-end"></i>
  `;

  document.querySelector('.list-group').appendChild(li);

  return li;
}

const deleteTask = (li, tasks) => {
  li.children[3].addEventListener('click', () => {
    console.log(tasks);
    for(let i = 0; i < tasks.length; i += 1) {
      if ((tasks[i].index) == (li.children[2].id)) {
        tasks.splice(i, 1);
      }
    }

    console.log(tasks);
    tasks.forEach((task, index) => {
      task.index = index;
    });

    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(tasks));

    todoList.innerHTML = '';
    displayTasksFromLS(tasks);

    console.log(tasks);
  });
}