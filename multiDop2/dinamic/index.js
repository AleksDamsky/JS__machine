const addBtn = document.querySelector('.wrapper__btn-enter');
const addInput = document.querySelector('.wrapper__massage');
const addCases = document.querySelector('.wrapper__cases');

let mainMassiv = [];

if(localStorage.getItem('todoList')){
    mainMassiv = JSON.parse(localStorage.getItem('todoList'));
    displayMessage();
}


addBtn.addEventListener('click', () => {


    let mainObject = {
        massage : addInput.value,
        checked : false,
    }


    mainMassiv.push(mainObject);
    
    displayMessage();

    localStorage.setItem('todoList', JSON.stringify(mainMassiv));
})

function displayMessage(){

    let htmlElement = '';

    mainMassiv.forEach( function(item, i, mainMassiv){

        htmlElement += `
        <li>
        <input type="checkbox" id="item__${i}" ${item.checked ? 'checked' : ''}>
        <label for="item__${i}"> ${item.massage} </label>
        </li>
        `

        addCases.innerHTML = htmlElement;

    })

}