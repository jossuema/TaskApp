import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

const addTask = () => {
    const list = document.querySelector('[data-list]');
    const task = crearTarea();
    list.appendChild(task);
  }
  
  function crearTarea(){
    const taskList = JSON.parse(localStorage.getItem("Tasks")) || [];
    console.log(taskList);
    const input = document.querySelector("[data-form-imput]");
    const date = document.querySelector("[data-form-date]");

    const dateElement = document.createElement('span');
    dateElement.innerHTML = moment(date.value).format("DD/MM/YYYY");
    console.log(dateElement);

    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');
    
    let valor = input.value;
    let fecha = date.value;
    const TaskObject = {
      valor,
      fecha
    }

    taskList.push(TaskObject);
    localStorage.setItem("Tasks", JSON.stringify(taskList));
  
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = input.value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);


    //task.innerHTML = content;
    input.value = '';
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
}

export default addTask;