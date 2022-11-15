
export const sortTime = (taskList, date) => {
    const arrayTime = [];

    taskList.forEach(task => {
        if(task.fecha == date){
            arrayTime.push(task.hora);
        }
    });
    
    return arrayTime;
}

export const orderTime = (times) => {
    return times.sort((a,b) => {
        const firstDate = moment(a, "LT")
        const secondDate = moment(b, "LT")
        return firstDate - secondDate;
    });
}