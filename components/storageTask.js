import { crearTarea } from "./addTask.js";

const readTask = () => {
    const list = document.querySelector('[data-list]')
    const taskList = JSON.parse(localStorage.getItem("Tasks")) || [];

    taskList.forEach(task => {
        list.appendChild(crearTarea(task));
    });
}

export default readTask;