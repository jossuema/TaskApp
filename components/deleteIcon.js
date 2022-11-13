import readTask from "./storageTask.js";

const deleteIcon = (id) => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener("click", () => deleteTask(id));
    return i;
  }

  const deleteTask = (id) => {
    const tasks = JSON.parse(localStorage.getItem("Tasks"));
    const index = tasks.findIndex((item) => item.id == id );
    tasks.splice(index,1);
    localStorage.setItem("Tasks", JSON.stringify(tasks));

    const list = document.querySelector('[data-list]');
    list.innerHTML = "";
    readTask();
  }

  export default deleteIcon;