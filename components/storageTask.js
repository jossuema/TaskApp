import { crearTarea } from "./addTask.js";
import dateElement from "./dateElement.js";

const readTask = () => {
    const list = document.querySelector('[data-list]')
    const taskList = JSON.parse(localStorage.getItem("Tasks")) || [];



    taskList.forEach(task => {
        list.appendChild(dateElement(task.fecha));
        list.appendChild(crearTarea(task));
    });
}

export default readTask;