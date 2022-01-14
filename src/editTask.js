export {editTask as default}

const editTask = (li, tasks) => {
  li.children[2].addEventListener('keyup', (event) => {
    tasks[event.target.id].description = event.target.value;
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}