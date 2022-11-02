  import checkComplete from "./components/checkComplete.js";
  import deleteIcon from "./components/deleteIcon.js";
  
  const btn = document.querySelector("[data-form-btn]");

  const comprobarTarea = (evento) => {
    evento.preventDefault();
    const word = document.getElementById("inputFormId").value;
    const date = document.querySelector("[data-form-date]").value;
    console.log(word);
    //console.log(input.value)
    const input = document.getElementById("inputFormId");
    const datebox = document.querySelector("[data-form-date]");
    if(word !== "" || date !== ""){
      input.style="background-color: white; opacity: 1;"
      datebox.style="background-color: white; opacity: 1;"
      crearTarea();
    }else{
      input.style="background-color: red; opacity: .3;"
      datebox.style="background-color: red; opacity: .3;"
    }
  }
  
  function crearTarea(){
    const input = document.querySelector("[data-form-imput]");
    const date = document.querySelector("[data-form-date]");

    console.log(date.value);
    console.log(moment(date.value).format("DD/MM/YYYY"));
    const data = new Date()
    console.log(data)

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
    task.appendChild(deleteIcon());
    list.appendChild(task);
  }

  btn.addEventListener('click', comprobarTarea)
