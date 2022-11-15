import { crearTarea } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";
import { sortTime, orderTime } from "./sortTime.js";

const readTask = () => {
    const list = document.querySelector('[data-list]')
    const taskList = JSON.parse(localStorage.getItem("Tasks")) || [];

    let dates = uniqueDates(taskList); //Regresa array con fechas no repetidas
    orderDates(dates); //Ordena las fechas
        
    dates.forEach((date) =>{ //Recorre cada elemento del array de fechas

        const dateMoment = moment(date, 'DD/MM/YYYY'); //Asigna fecha del elemento
        list.appendChild(dateElement(date)); //Manda a crear texto de fecha

        const taskArray = [];
        for (let i = 0; i < taskList.length; i++) {
            let task = taskList[i];
            const taskDate = moment(task.fecha, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            if(diff==0){
                taskArray.push(task)
            }
        }

        let arrayTime = sortTime(taskList, date);
        orderTime(arrayTime);
            
        for(let i = 0; i< taskArray.length; i++){
            const index = taskArray.findIndex((item) => item.hora == arrayTime[0]);
            list.appendChild(crearTarea(taskArray[index]));
            arrayTime.splice(0,1);
        }
    })
}

export default readTask;