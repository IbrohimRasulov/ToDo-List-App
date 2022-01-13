export {isChecked as default}

const isChecked = (li, tasks) => {
  li.children[1].addEventListener('change', (event) => {
    li.children[2].classList.toggle('checked');

    if (event.target.checked) {
      tasks[li.children[2].id].completed = true;

      localStorage.clear();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks[li.children[2].id].completed = false;

      localStorage.clear();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
}