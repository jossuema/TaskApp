( () => {

const btn = document.querySelector("[data-form-btn]");

const crearTarea = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-imput]");
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = input.value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`
    //task.innerHTML = content;

    input.value = '';
    task.appendChild(taskContent);
    list.appendChild(task);
}

btn.addEventListener('click', crearTarea)

const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', completeTask)
  return i;
}

const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  console.log(event.target)
}

})();
