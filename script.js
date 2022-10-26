const btn = document.querySelector("[data-form-btn]");

const crearTarea = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-imput]");
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${input.value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;

    input.value = '';
    list.appendChild(task)
}

btn.addEventListener('click', crearTarea)