import addTask from "./components/addTask.js";  
import readTask from "./components/storageTask.js";

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

btn.addEventListener('click', comprobarTarea)

readTask();
