export const uniqueDates = (tasks) => {
 const uniqueDates = [];

 tasks.forEach(task => {
    if(!uniqueDates.includes(task.fecha)){
        uniqueDates.push(task.fecha);}
    });
    return uniqueDates;
}

export const orderDates = (dates) => {
    return dates.sort((a,b) => {
        const firstDate = moment(a, "DD/MM/YYYY")
        const secondDate = moment(b, "DD/MM/YYYY")
        return firstDate - secondDate;
    });
}