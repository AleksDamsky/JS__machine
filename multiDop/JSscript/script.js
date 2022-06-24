const addButton = document.querySelector('.Button');
const addInput = document.querySelector('.Input');
const Cases = document.querySelector('.cases');

/*Создам массив для внесения в него объектов со значениями*/

let newMassiv;
!localStorage.todoList ? newMassiv = [] : newMassiv = JSON.parse(localStorage.getItem(todoList));

/*Создам функцию - конструктор, которая сможет создавать множество однотипных объектов*/

function DisplayResults(input){

    this.input = input;
    this.checked = false;

}

/* *С этой строки* */
/*Со строки <*С этой строки*> до <*До этой строки*> мы создаем шаблоны вывода в список на экран, которые будут содержать дела, введенные пользователем.*/

let createTemplate = (todoList, i) => {
    return `
        <div class="cases-item">

            <div class="description">
                ${todoList.input}
            </div>

            <div class="buttons">

                <input class="btn-complete" type="checkbox">

                <button class="btn-delete">

                </button>

            </div>
    
        </div>
`
}

let fillHtmlList = () => {
    Cases.innerHTML = "";//зачистка всего, что не нужно нам, но находится в списке;
    if(newMassiv.lenght > 0){
        newMassiv.forEach((item, i) => {
            Cases.innerHTML += createTemplate(item, i)
        })
    }

}

fillHtmlList();

/* *До этой строки* */

let update = () => {
    localStorage.setItem('todoList', JSON.stringify(newMassiv))
}

addButton.addEventListener('click', () => {
    newMassiv.push(new DisplayResults(addInput.value));
    update();
    fillHtmlList();
});
