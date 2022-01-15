import { displayTasksFromLS } from "./add&delete";

const clearTask = (tasks, todoList) => {
  document.querySelector('#clr-btn').addEventListener('click', () => {
    for (let i = 0; i < tasks.length; i += 1) {
      if ((tasks[i].completed) === true) {
        tasks.splice(i, 1);
      }
    }

    tasks.forEach((task, index) => {
      task.index = index;
    });

    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(tasks));

    todoList.innerHTML = '';
    displayTasksFromLS(tasks);
  });
};

export { clearTask as default };