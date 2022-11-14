//Crea elemento fecha
export default (date) => {
    const dateText = document.createElement('li');
    dateText.classList.add("dateText");
    dateText.innerHTML = date;
    return dateText;
}