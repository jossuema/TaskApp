const checkComplete = (id) => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', (event) => completeTask(event, id));
    return i;
  }

const completeTask = (event, id) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    const tasks = JSON.parse(localStorage.getItem("Tasks"));
    const index = tasks.findIndex((item) => item.id == id );
    tasks[index]['completado'] = !tasks[index]['completado'];
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    console.log(tasks[index]);
}

export default checkComplete;