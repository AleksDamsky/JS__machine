let addMassage = document.querySelector('.Input');
let addSaved = document.querySelector('.Button');
let userList = document.querySelector('.todo');

/*Ниже строкой создаем массив для хранения собщений от пользователя*/

    let freeMassiv = [];

    addSaved.addEventListener('click', () => {

    /*строкой ниже создадим объект, который потом занесем в массив. Этот объект будет содержать результаты input*/

    let newList = { 
        answer : addMassage.value, /*строка от юзера*/
        checked : true, /*выполнено или нет*/
        important : false,
    }

    freeMassiv.push(newList); /*тут мы как раз добавляем сообщения в тот верхний массив*/

    displayMassage(); /*вызываем функцию кажлый раз, когда кликаем на <добавить>*/
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
        <label for="item__${i}">${item.answer}</label>
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