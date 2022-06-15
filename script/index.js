let addMassage = document.querySelector('.Input');
let addSaved = document.querySelector('.Button');
let userList = document.querySelector('.todo');

addSaved.addEventListener('click', () => {

    /*Ниже строкой создаем массив для хранения собщений от пользователя*/

    let freeMassiv = [];

    /*строкой ниже создадим объект, который потом занесем в массив. Этот объект будет содержать результаты input*/
    let newList = { 
        answer : addMassage.value, /*строка от юзера*/
        checkd : false, /*выполнено или нет*/
        important : false,
    }

    freeMassiv.push(newList); /*тут мы как раз добавляем сообщения в тот верхний массив*/

    console.log(newList); // обращение к свойству addMassage
})