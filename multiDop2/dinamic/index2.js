const addBtn = document.querySelector('.wrapper__btn-enter');
const addInp= document.querySelector('.wrapper__massage');
const addCases = document.querySelector('.wrapper__cases');

let arr = [];

addBtn.addEventListener('click', () => {

    let object = {
        input : addInp.value,
        checked : false,
    }

    arr.push(object);
    
});

function displayMessage(){

    arr.forEach(item, i){
        
    }
}