const addBtn = document.querySelector('.wrapper__btn-enter');
const addInput = document.querySelector('.wrapper-massage');
const addCases = document.querySelector('.wrapper__cases');

let mainMassiv = [];


addBtn.addEventListener('click', () => {

    let mainObject = {
        input : addInput.value,
        checked : false,
    }


    mainMassiv.push(mainObject);
    
    console.log(mainMassiv);
})