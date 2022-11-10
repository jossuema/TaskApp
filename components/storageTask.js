import { crearTarea } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates } from "../services/date.js";

const readTask = () => {
    const list = document.querySelector('[data-list]')
    const taskList = JSON.parse(localStorage.getItem("Tasks")) || [];

    const dates = uniqueDates(taskList);
    dates.forEach((date) =>{
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date));
        taskList.forEach(task => {
            const taskDate = moment(task.fecha, 'DD/MM/YYYY');

            const diff = dateMoment.diff(taskDate);
            if(diff==0){
                list.appendChild(crearTarea(task));
            }
        });
    })

    
}

export default readTask;