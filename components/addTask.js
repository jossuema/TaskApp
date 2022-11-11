import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import readTask from "./storageTask.js";

const addTask = () => {
    const list = document.querySelector('[data-list]');

    const taskList = JSON.parse(localStorage.getItem("Tasks")) || [];
    const input = document.querySelector("[data-form-imput]");
    const date = document.querySelector("[data-form-date]");

    const dateElement = document.createElement('span');
    dateElement.innerHTML = moment(date.value).format("DD/MM/YYYY");
    
    let valor = input.value;
    let fecha = moment(date.value).format("DD/MM/YYYY");
    let completado = false;

    const TaskObject = {
      valor,
      fecha,
      completado,
      id: uuid.v4()
    }
    
    taskList.push(TaskObject);
    localStorage.setItem("Tasks", JSON.stringify(taskList));
    list.innerHTML = ""
    readTask();

    input.value = '';
    date.value = '';
  }
  
export function crearTarea({valor, fecha, completado, id}){
    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');

    const check = checkComplete(id);

    if(completado){
      check.classList.toggle('fas');
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    }
  
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = valor;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);

    const dateElement = document.createElement('span');
    dateElement.innerHTML = fecha;

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
}

export default addTask;