export const uniqueDates = (tasks) => {
 const uniqueDates = [];
 tasks.forEach(task => {if(!uniqueDates.includes(task.fecha)){uniqueDates.push(task.fecha);}});
 return uniqueDates;
}