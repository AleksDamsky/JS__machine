let addButton = document.querySelector('.Button');
let addInput = document.querySelector('.Input');
let Cases = document.querySelector('.cases');

/*Создам массив для внесения в него объектов со значениями*/

let newMassiv = [];

/*Создам функцию - конструктор, которая сможет создавать множество однотипных объектов*/

function DisplayResults(input){

    this.input = input;
    this.checked = false;

}

let update = () => {
    localStorage.setItem('todoList', JSON.stringify(newMassiv))
}

addButton.addEventListener('click', () => {
    newMassiv.push(new DisplayResults(addInput.value));
    update();
})
