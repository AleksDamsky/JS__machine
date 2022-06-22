let addMassage = document.querySelector('.Input');
let addSaved = document.querySelector('.Button');
let userList = document.querySelector('.todo');

/*Ниже строкой создаем массив для хранения собщений от пользователя*/

    let freeMassiv = [];

    /*следующие строки будут содержать скрипт, который будет выводить сохраненные(с помощью localStorage) в массиве результаты автоматически*/

    if(localStorage.getItem('DoList')){ /*если localStorage получал какие-то данные в 'DoList', то{*

    /*нужно разобрать массив, откуда эта информация поступала с помощью <JSON.parse(localStorage.getItem('DoList'))>*/
        freeMassiv = JSON.parse(localStorage.getItem('DoList'));

        /*выводим это с помощью функции*/
        displayMassage();
    }

    addSaved.addEventListener('click', () => {

        if(!addMassage.value){
            return;
        }

    /*строкой ниже создадим объект, который потом занесем в массив. Этот объект будет содержать результаты input*/

    let newList = { 
        answer : addMassage.value, /*строка от юзера*/
        checked : false, /*выполнено или нет*/
        important : false,
    }

    freeMassiv.push(newList); /*тут мы как раз добавляем сообщения в тот верхний массив*/

    displayMassage(); /*вызываем функцию каждый раз, когда кликаем на <добавить>*/

    /*Очень классная фича, о котоорой узнал только что - строка ниже
    <localStorage> - - это свойство, позволяющее сохранять данные;Сохранение происходит только в виде строки;
    <.setItem> - - это свойство localStorage, которое создает новое значение внутри localStorage;
    <'DoList'> - - это уникальное название внесенного значения;
    <JSON> - - это объект;
    <.stringify> - - это свойство объекта JSON, которое превращает вносимое в строку (в скобках к свойству я указал массив, в котором хранятся результаты ввода пользователя);
    */

    localStorage.setItem('DoList', JSON.stringify(freeMassiv));
})


/*Это функция, в которой мы будем перебирать массив и вывводить сообщения в виде li*/
function displayMassage() {

    /*Строкой ниже создаем переменную, в которою загружаем верстку нашего списка, который будет на экране*/

    let disMassage = '';

    /*Метод forEach принимает в параметр callback - функцию*/
    freeMassiv.forEach(function(item, i) { 

        /*disMassage строкой ниже конкатенирует получаемые результаты от input. То есть список будет увеличиваться в длину. Короче, так делаем список;*/

        disMassage += `
        <li>
        <input type="checkbox" id="item__${i}" ${item.checked ? 'checked' : ''}>
        <label for="item__${i}" class="${item.important ? 'important' : ''}">${item.answer}</label>
        </li>
        `;
        
        /*Строка ниже содержит код, который выволит нашу верстку в сам браузер как HTML-элементы*/

        userList.innerHTML = disMassage;
    })

}

/*<input type="checkbox" id="item__${i}"> - - Это тег с атрибутом HTML, который выводит результат ввода значений пользователем || Атрибут type - Сообщает браузеру, к какому типу относится элемент формы.*/

/*Тег <label> устанавливает связь между определенной меткой, в качестве которой обычно выступает текст, и элементом формы (<input>, <select>, <textarea>). 

for - Идентификатор элемента, с которым следует установить связь.*/

/*${item.checked ? 'checked' : '' - - Это такое условие, при котором проверяется истинность. То есть в ToDo  - это проверка выполненности задания(галочка) || 'checked' - принципиально важно вносить название свойства, а не кабы что;*/


/*Ниже создадим код, который будет отслеживать выполненность заданий, то есть, когда будет ставиться галочка напротив дела, она будет так же сохраняться || будет сохранение в localStorage*/

/*userList - - нужно вводить имнно это имя переменной, так как именно она является списком, в который вводятся данные;*/
userList.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id'); /*
    event - - событие, которое произошло;
    .target - - это элемнт, который вызвался бы...
    .getAttribute('id') - - это получение id элемента, который будет вызван;
    */

    /*Следующими двумя строками ниже мы получаем текст пунктов, которые были внесены пользователем*/
   let forLabel = userList.querySelector('[for=' + idInput + ']')
   let valueLabel = forLabel.innerHTML;

    /*Теперь напишем код, который будет искать определенное значение среди всех значений в объектах*/   

    freeMassiv.forEach(function(item) {
        if(item.answer === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('DoList', JSON.stringify(freeMassiv));
        }
    })
})

/*Ниже мы напишем код, позволяющий при нажатии на левую кнопку мыши, вызывать специальное меню, а не по умолчанию;*/




/*Блок кода, который не работает... надо разобраться(не выделяет красным важные дела и не удаляет при нажатии ctrl + Прав.кн.мыши)*/

/*Ниже будет напсан код, который при нажатии правой кнопкой мыши выделяет текст, помечая его как важный и, заетем, удаляет его, при необходимости;*/

userList.addEventListener('contextmenu', function(event){

    event.preventDefault(); //отмена стандартного поведения браузера (то есть, при нажатии правой кнопокой мыши ничего не происходит);

    freeMassiv.forEach(function(item, i){
        if(item.freeMassiv === event.target.innerHTML){
            if(event.ctrlKey){
                freeMassiv.splice(i, 1);
            }else{
                item.important = !item.important;
            }
            item.important = !item.important;
            displayMassage();
            localStorage.setItem('DoList', JSON.stringify(freeMassiv));
        }
    })
})


/*Еще нужно весь этот проектик подогнать под сужение экрана. Под мобилу, короче;*/