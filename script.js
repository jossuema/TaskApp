  import checkComplete from "./components/checkComplete.js";
  import deleteIcon from "./components/deleteIcon.js";
  
  const btn = document.querySelector("[data-form-btn]");

  const comprobarTarea = (evento) => {
    evento.preventDefault();
    const word = document.getElementById("inputFormId").value;
    const date = document.querySelector("[data-form-date]").value;
    const input = document.getElementById("inputFormId");
    const datebox = document.querySelector("[data-form-date]");
    if(word != "" && date != ""){
      input.style="background-color: white; opacity: 1;"
      datebox.style="background-color: white; opacity: 1;"
      addTask();
    }else{
      input.style="background-color: red; opacity: .3;"
      datebox.style="background-color: red; opacity: .3;"
    }
  }

  const addTask = () => {
    const list = document.querySelector('[data-list]');
    const task = crearTarea();
    list.appendChild(task);
  }
  
  function crearTarea(){
    const input = document.querySelector("[data-form-imput]");
    const date = document.querySelector("[data-form-date]");

    const dateElement = document.createElement('span');
    dateElement.innerHTML = moment(date.value).format("DD/MM/YYYY");
    console.log(dateElement);

    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');
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

  btn.addEventListener('click', comprobarTarea)
