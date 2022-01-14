import './style.css';
import {addTask, displayTasksFromLS, deleteTask} from './add&delete'

let tasks = [];

const getFromLS = () => {
  if (localStorage.length !== 0) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    displayTasksFromLS(tasks);
  }
}

getFromLS();

addTask(tasks);