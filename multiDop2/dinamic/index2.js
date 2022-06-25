const addBtn = document.querySelector('.wrapper__btn-enter');
const addInp= document.querySelector('.wrapper__massage');
const addCases = document.querySelector('.wrapper__cases');

let arr = [];

if(localStorage.getItem('todoList')){
    arr = JSON.parse(localStorage.getItem('todoList'));
    displayMessage();
}

addBtn.addEventListener('click', () => {

    let object = {
        input : addInp.value,
        checked : false,
    };

    arr.push.apply(object);

    displayMessage();

    localStorage.setItem('todoList', JSON.stringify(arr));
    
});

function displayMessage(){

    let ulList = '';

    arr.prototype.forEach.cala(function(item, i){
        ulList += `
        <li>

        <input type="checkbox" id="item__${i}">
        <label for="item__${i}"> ${item.input} </label>
        
        </li>
        `

        addCases.innerHTML = ulList;
    });
}







/*first error : 

index2.js:33 Uncaught TypeError: Arr.forEach is not a function
    at displayMessage (index2.js:33:9)
    at index2.js:9:5
*/