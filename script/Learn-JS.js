// function sayHello () {
//     console.log('hi, friend!', this);
// };

// let newObj = {
//     name : 'Aleks',
//     age : 21,
//     fastFunc : sayHello,

//     greteeng : () => {
//         console.log(`Hi, my name is ${this.name}, and my ${this.age} old!`)
//     },

//     newFunc : sayHello.bind('23342'),
// };

// console.log(newObj)


// let obj1 = {
//     name : 'Aleks',
//     age : 21, 

//     greteeng : (job, phone) => {
//         console.group(`${this.name}info :`)
//         console.log(`Hey, my name is ${this.name}!`);
//         console.log(`Old : ${this.age}`);
//         console.log(`Phone : ${this.phone}`);
//         console.log(`Job : ${this.job}`);
//         console.groupEnd();
//     },
// };

// let newObj = {
//     name: 'Dasha',
//     age : 22,

//     greeting: () => {
//         console.log(`Hey! I'm ${job}`);
//     }
// }

// let test = obj1.greteeng.bind(newObj);
// test('Designer', '234 13515');

// let abc = {
//     a : 'a',
//     b : 'b',
//     c : 'c',

//     lol : () => {
//         return this.a;
//     }
// };

// console.log(abc.lol());
// const dir = 2;

// function abb () {
//     return this.dir;
// };

// abb.apply();
// function func(c, d){
//     return this.a + this.b + c + d;
// };


// let A = {
//     a : 2,
//     b : 5,
// };

// console.log(func(1, 1));

// let a = {
//     name : 'aleks',
//     age : 21,

//     f : () => {
//         return this.age;
//     },
// };

// console.log(a.f());


//---------------------------------------------------------------------
/*типы данных*/

//number, string, boolean, NaN, undefined, null, object, symbol

//typeof - смотреть тип данных переменной;

// let userName = 21;
// console.log(typeof (userName)); //number

// userName = 'Aleks';
// console.log(typeof (userName));// string

// userName = true;
// console.log(typeof (userName));//boolean

// userName = 11;
// console.log(typeof (userNAme)); // undefined

// userName = null;
// console.log(userName); // null
// userName = null;
// console.log(typeof userName); // object - общепризнанная ошибка;

// userName = NaN;
// console.log(userName); //NaN - ошибка математической операции;

// userName = {
//     car: 'benz',
// }
// console.log(typeof userName); // object 

// userName = Symbol('lol');
// console.log(typeof userName); //Symbol - установление универсального идентификатора;

// userName = function () {
//     // ...
// };

// console.log(typeof userName); //function

//9 типов данных - number, string, boolean, NaN, null, undefined, object, symbol, function;


//--------------------------------------------------------------------------
/*Операторы*/

// Операторы - операнды - аргументы. Они применяются к операторам.
// Существуют Унарные(+a) и Бинарные(a + b) операторы.

// Математические операторы --   + - / * % **
// Логические операторы --   ! || && ?? 


//--------------------------------------------------------------------------
/*Условия*/

// if(...условие...){

// }
//--------------
// if () {

// } else {

// }

//--------------

// if(){

// } else if {

// } else {

// }

//---------------

// let a = 5;

// let b = (3 + 4) ? 7 : 'lol'; - - если (3 + 4) = 7, то вывести 7, иначе 'lol';

// console.log(b);

//--------------

// let a = 5; 
// let b = 3;
// let z = [];

// switch (z) {
//     case a > b : z.push(a);
//     break;

//     case a < b : console.log('lol');
//     break; 
// }

// console.log(z);

//условия : if() ; if() else ; if() else if() else; switch(параметр){ case условие : действие}


/*----------------------------------------------------------------------*/

/* Циклы */

// while( условие ){
// тело цикла
//}

// let a = 0;

// while(a < 4) {
//     console.log(a);
//     a++;
// }

//----------------------

//do{} while(){}

// let a = 3;

// do{
//     console.log(a);
//     a++;
// }while( a > 7);

// Методика этого цикла понятна - если мы хотим чтобы программа вывела наш параметр хотя бы один раз, без каких-то условий, то нужно писать через do; Если поменять знаки с больше на меньше в примере, то программа выведет числа от 3 до 7;

//---------------------

//for (начало; условие; шаг){}

// let arr = ['2', '4', '23'];

// for(let i = 0; i < arr.length; i++){
//     console.log(i);
// }

// Задачей в этом примере было перебрать массив и узнать его длину, затем вывести на экран;
/* Немного хотел бы разобрать эту задачку: Что я сделал для перебора массива?
1) после создания <for> в скобках создал переменную, которая будет служить нам в качестве контейнера, куда мы сложим информацию о том, сколько элементов находится в мааасиве;
2) Говорю, что по умолчанию <i>(наш контейнер) меньше длины массива;
3) Говорю, что необходимо делать "положительный" шаг в массиве , начиная от 0 индекса (то бишь от первого элемента), до конечного элемента в массиве;

4) Вывожу перменную - контейнер;
*/

//-----------------------------------

// Использование цикла с директивой <break>

// let arr = ['2', '4', '23', 'lol', 'lol', 'lol', 'lol', 'lol', 'lol', 'lol', 'lol'];
// let arr2 = [];
// for(let i = 0; i < arr.length; i++){
//     if( i == 4 ){
//         break;
//     };

//     console.log(i);

//     arr2.push(i);
// }

// console.log(arr2);

// Тут я использую <break>, который останавливает тело цикла, когда оно доходит до определенного условия; Так же я создал новый массив, куда словил информацию, хранящуюся в переменной - контейнере; Нужно отметить, что <push> я сделал внутри цикла, так как переменная - контейнер является локальной, то есть она находится там, где была создана, то бишь в цикле for();

//----------------------------------------

// Директива <continue>

// for(let i = 0; i < 10; i++){
//     if( i == 4) continue;
//     console.log(i);
// }

// В чем особенность этой директивы? Нужно задать условие, на каком именно моменте программа будет прерываться и с помощью директивы <continue> отключать цикл. Но прелесть в том, что цикл отключается только в том моменте, а затем начинает работать снова;

//-----------------------------------------

// Метки для цикла

// firstFor: for(let i = 30; i > 10; i--){
//     for(let sum = 0; sum < 10; sum++){
//         if(sum == 5){
//             continue firstFor;
//         }

//         console.log(i);
//     }

// }

// Не осбо понял, но синтаксис такой;

// Итого, у нас есть циклы while(), do while() for(начало, условие, шаг);

/*------------------------------------------------------------------------------------------------------------*/

/* Функции */

// Function expression, Function Declaration, callback, Стрелочная функция, рекурсия;
// Названия фунцкций начинается с действия add.. show.. set.. get..

//1. Function Declaration

// function имя (параметр){...тело функции...}

// function getNumber(a, b) {

//     let sumNumber = a + b;

//     console.log(sumNumber);

// };

// getNumber(5, 7);

//----------------------------

// Функция с директивой return;

//<return> в функции это как консоль лог;

// function calcNumber(a, b){
//     let c = a + b;
//     return c;
// }

// console.log(calcNumber(3, 5))

//------------------------
//Function Expression;

// let func = (a, b) => {
//     let c = a * b;
//     return c;
// };

// console.log(func(2, 4));

//---------------------------

/* Рекурсия */

// Рекурсия - это функция, вызывающая саму себя;

//--------------------------------------------------------------------------------------------------

/* Массивы */

// Массив - это своего рода объект;

// Обыкновенный массив

// let arr = [
//     'clone',
//     'clone - sniper',
//     'clone - pilot',
// ];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);

//----------------------

//Способы получения элементов массива, либо элементов элементов массива;
// let arr = [
//     'clone',
//     'clone - sniper',
//     'clone - pilot',

//     function funcArr(){
//         console.log('hi!');
//     },

//     obj = {
//         key : 'Aleks',
//         secondName : 'Hripunov',
//     }
// ];

// console.log(arr[4].secondName);
// console.log(arr[3]());

//------------------------

// Длина массива;

// let arr = [
//         'clone',
//         'clone - sniper',
//         'clone - pilot',
//     ];

//     console.log(arr.length);

//-------------------------

// Так как массив это тот же объект в JS, то ведет он себя так же как и объект == массив можно копировать в другую перменную, но копия будет ссылкой на первоначальный массив;

// let arr = [
//     'lol',
//     'kek',
//     'buba',
// ];

// let arr2 = arr;

// arr2.lenght = 1;

// console.log(arr);

//--------------------------

/*Способ работы с элементами массива = их изменение;*/

// let arr = [
//     'lol',
//     'kek',
//     'buba',
// ];

// arr[0] = 'lolik';

// arr[3] = 'pops';

// console.log(arr);

//--------------------------

/* Метод <push> */
//Данный метод добавляет новый элемент в конец массива;

// let arr = [
//     'lol',
//     'kek',
//     'buba',
// ];

// let object = {
//     name: 'Aleks',
//     car: 'Aston Martin Victor',
// };

// arr.push(object);

// console.log(arr);
//---------------------------------

/* Метод <pop> */
//Метод, который удаляет элемент массива с конца;

// let arr = [
//     'lol',
//     'kek',
//     'buba',
// ];

// arr.pop();
// console.log(arr);


//---------------------------------

/* Метод <shift> */

// Такой метод, который удаляет первый элемент массива и перемещает другие элементы на позицию вперед;

// let arr = [
//     'lol',
//     'kek',
//     'buba',
// ];

// function arrFunc () {
//     console.log('Hi, lolik!');
// };

// arr.shift();

// arr.push(arrFunc);

// console.log(arr[2]());

//----------------------------------

/* Метод <unshift> */
// Метод, который добавляет элемент в массив с начала и сдвигает другие элементы на позиуию назад;

// let arr = [
//     'lol',
//     'kek',
//     'buba',
// ];

// arr.shift();

// function arrFunc() {
//     arr.push('buba crasava');
//     alert('buba top')
// };

// arr.unshift('lolik');
// arr.push(arrFunc);

// console.log(arr);
// console.log(arr[3]());

//-----------------------

/* Метод <forEach> */

//Метод, который применяет функцию к каждому элементу массива; Перебор элементов массива;
//Необходимо помнить, что даный метод не возвращает ничего, то есть просто перебирает массив и закидвает его обратно в главный массив;

// let arr = [
//     'lol',
//     'kek',
//     'buba',
// ];

// const showArr = arr.forEach((item) => {
//     console.log(item);
// });

// console.log(showArr);

//---------------------------

/* Метод <map> */
//Такой метод, который перебирает массив, применят к нему функцию и возвращает результат в новом массиве;

// let arr = [
//     'lol',
//     'kek',
//     'buba',
// ];

// const newArr = arr.map((item, index) => {
//     return item + item + index;
// });

// console.log(newArr);
// console.log(arr);

//-------------------------------

/* метод <reduce> */
//Такой метод, который перебирает элементы массива и возвращает новую структуру данных;

// acc - это аккумулятор. Это и есть новая структура данных, которую мы будем возвращать;

// let arr = [
//     'lol',
//     'kek',
//     'buba',
// ];

// let newArr = arr.reduce((acc, item, index) => {

//     acc[index] = item;
//     return acc; // По умолчанию, при вызове <acc>(аккумулятора), берется первый элемент массива

// }, {}) // Тут мы обозначаем структуру данных, которую мы хотим создать с помощью аккумулятора;

// console.log(newArr);

//------------------------------

/* Метод <find> */
//Такой метод, который ищет элементы массива и возвращает их нам, если они там есть;

// let arr = [
//     'lol',
//     'kek',
//     'buba',
// ];

// let newArr = arr.find((item, index) => {
//     return item == 'lol';
// });

// console.log(newArr);


/* Структуры данных : Map и Set */

// Map - это как структура данных Object, только разница в том, что Map позволяет применять к новой коллекции разные ключи;

// let a = new Map(); //тут я создал новую пустую структуру;

// let arr = ['asdfavhuasd'];

// function vievString (arr) {

//     let map = new Map();

//     for (let i = 0; i < arr.length; i++){
//         let containStr = arr[i];

//         if (map.has(containStr)){

//             return false;
//         }

//         map.add(containStr);
//     }

//     return true;
// };

// console.log(vievString(arr));


/* Замыкания в JS */

// function testClosing(n) {
//     return function (b) {
//         return n * b;
//      };
// }

// const addFunc = testClosing(2);

// console.log(addFunc(2));

// function testClosing(num) {
//     return (n) => {
//         return n + num;
//     }
// }

// let calc = testClosing(4);

// console.log(calc(4));

//---------------------------------------------------------------------------------------------------------------

/* Повторение прошедших тем  */

// 1) Типы данных.

// string, number, BigInt, undefined, NaN, null, function, object, symbol;

// string - строковый тип данных ''
// number - числовой тип данных;
// BigInt - это такой тип данных, при котором возможно работать с числами больше допустимого значения в JS; Главное, необходимо поставить в конце символ <n> для того чтобы программа поняла с каким типом данных мы работаем;
// undefined - тип данных, при который обозначает неопределенность переменной;
// NaN - это неправильная математическая операция;
// null - это нулевой тип данных; Его можно обозначить, а так же увидеть в ходе работы программы;
// function - тоже тип данных (вообще, в JS все значится как объект), с помощью функций, мы можем использовать один и тот же код в разных частях рабочего контекста;
// Object - это список именнованных коллекций; Все в JS(почти) является объектами; Состоит из ключа и его значения;
// Symbol - это тип данных, который позволяет нам давать какому-то объекту определенный индивидуальный id, для того, чтобы выделить этот объект из массы других;

// 2) Операторы.

// Операторы - это то, что применяется к операндам; Еще их называют аргументами; Бывают Математические операторы и логические операторы;

// Математические операторы --  < + - / % ** * > ;
// Логические операторы --  < ! && || ?? > 

// Существуют Бинарные опраторы и унарные операторы; Унарные опреаторы в онсновном меняют тип данных; Бинарные операторы выполняют математические действия;

// Условия.

// 1) if() ;
// 2) if() {} else if () {} else{};
// 3) switch () {  case ... : ...; break;  case ... : ...; break;} ;


// Циклы.

// 1) while( ... ) {};
// 2) do{}while(){} ;
// 3) for (...; ...; ...) {}

// Массивы.

// Это упорядоченный список коллекций;

// let arr = ["12"] - это литерал оъекта; Это значение в программе;

// знаю несколько методов массива: 

// 1) .forEach() - принимает в себя функцию и, перебирая элементы массива, применят к каждому из них эту самую функцию;

// 2) .map() - выводит результаты условия в новый массив;

// 3) .index();
// 4) .indexOf();
// 5) .flat();
// 6) .filter();
// 7) .concat();
// 8) .reverse();
// 9) .reduce();
// 10) .fil();
// 11) .includes();
// 12) .flatmap();
// 13) .
 
// function splitString(stringToSplit, separator) {

//     let arrayOfStrings = [];
//     arrayOfStrings.push(stringToSplit);
//     arrayOfStrings = stringToSplit.split(separator);
  
//     console.log('Оригинальная строка: "' + stringToSplit + '"');
//     console.log('Разделитель: "' + separator + '"');
//     console.log('Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '));
//   };

// splitString('И как хорош тот новый мир, где есть такие люди!');
// //   console.log(splitString("И как хорош тот новый мир, где есть такие люди!"), "");

// let a = 5;
// let b = 6;

// function sumNum (){
//     return a + b;

// };

// console.log(sumNum(a, b))

/* OOП */

// Создание класса;

// ООП - это Объекто Ориентированное Программирование; Создавалось для того, чтобы помогать процедурному Программированию;
// Существует <class>, который имеет свои свойства и методы - < properties > && < methods >

// Свойства отвечают за внешнее и 'визуальное' представление класса. Свойства и методы находятся в блоке : характеристика;

// Класс - это что-то общее. Оно сууществует, но очень глобально, как муравей. Муравьев много, и они существуют везде, поэтому, для определения конкретного примера из класса можно создать < object >.

// Object - это объект. Он является типичным примером или предсавителем своего класса.

// Геттеры < get > - чтобы получать значение извне; Сеттеры < set > - для того, чтобы их изменять;


// class Lesson  {
//     усидчивость;
//     время;
    
//     constructor(focus, time){
//         this.усидчивость = focus;
//         this.время = time;
//     };

//     results(){
//         return this.усидчивость * this.время;
//     };
// }

// const person1 = new Lesson (50, 10000);

// console.log(person1.results());

// class Clone {
//     number;
//     name;
//     unit;

//     constructor (num, n, u){
//         this.number = num;
//         this.name = n;
//         this.unit = u;
//     };

//     dinamic(){
//         console.log('Yes, command!');
//     }
// };

// Просто создание и вызов объектов, образованных от класса;

// const rokkie = new Clone('NC-34/234', 'Liip', 'ArksOP');
// console.log(rokkie);

// const rokkie2 = new Clone('CC-269/9913', 'Hover', 'ArksOP');
// console.log(rokkie2);

// Пример наследования класса;

// class CloneClon extends Clone{
//     motherLand;
//     first_fight;

//     constructor(number, name, unit, motherLand, first_fight){
//         super(number, name, unit);
//         this.motherLand = motherLand;
//         this.first_fight = first_fight;
//     }
// };

// const clone_pilot = new CloneClon ('CB - 250/00', 'Shark', 'NovaCORp', 'Camino', '22dbd');
// console.log(clone_pilot);


// Практика ООП

// class DataBase {
//     url;

//     constructor(){
//         this.url = Math.random();
//     }
// };

// let db1 = new DataBase();
// let db2 = new DataBase();

// console.log(db1.url);
// console.log(db2.url);

// class Clone {
//     name;
//     old; 

//     constructor(n, o){
//         this.name = n;
//         this.old = o;
//     };

//     gritting() {
//         console.log('hellow!');
//     };

// };

// let clone1 = new Clone('Aleks');
// console.log(clone1.name)


// class DataBase {
//     url;

//     constructor(){
//         this.url = Math.random(); 
//     }
// }

// let cloneDb = new DataBase();
// console.log(cloneDb.url);

// ООП - это способ решения задач в программированни с помщью классов или прототипов; также позволяет создавать программные обеспечения;


// Принцип ООП - создать сложную систему объектов, которые будут решать тяжелые задачи;
// Объявление себя в ООП - self, this;
// Наследование - это способ сказать, что объекты от класса похожи друг на друга, но не идентичны, так как каждый выполняет свою работу;
// Инкапсуляция - это капсула, в которой есть информация;

// Классовое наследование в ООП - это система чертеж -> проект;
// Сам < class > в ООп - это чертеж для < object >;
// В классе сущестуют свойства и методы; Свойства - это основные характеристики для класса; Методы - это действия и функции, которые может производить этот класс; Помимо свойств и методов есть < constructor >; Конструктор определяет свойства, которые будут входить в новый объект;

class Car {
    name;
    country;
    number;

    constructor(name, country){
        this.name = name;
        this.country = country;
        this.number = Math.floor(Math.random() * 20);
    }
};

// const car1 = new Car('Benz', 'Germany');
// console.log(car1);

// Нужно знать, что различные изменения в классе изменят и объекты, наследуемые от него; ТАк же и изменятся дочерние элементы объекта;

// Можно расширять класс посредством комманды вот такой логики:  /* extend - расширять */

class RussiaCar extends Car {

    // расширитель включает в себя свойства прототипа, и свои собственые;
    date;
    city;

    // конструктор первыми параметрами включает в себя свойства своего прототипа;
    constructor(name, country, city){
        // < super > - этим методом мы говорим о том, что необходимо включить первыми параметры прототипа;
        super(name, country);
        this.date = function randomDate(start, end, startHour, endHour) {
            var date = new Date(+start + Math.random() * (end - start));
            var hour = startHour + Math.random() * (endHour - startHour) | 0;
            date.setHours(hour);
            return date; // тут должна была быть рандомная дата...
          }
          this.city = city;
        };
    };

function showCar(){
    const RussianCar = new RussiaCar('Lada', 'Russia', 'Moscow');

    console.log(RussianCar.date());
    console.log(RussianCar.name);
    console.log(RussianCar.country);
    console.log(RussianCar.number);
    console.log(RussianCar.city);
};

console.log(showCar());