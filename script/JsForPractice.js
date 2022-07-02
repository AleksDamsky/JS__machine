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

// В бесконечном цикле делается запрос на ввод двух чисел (два отдельных вызова функции prompt()). Числа сравниваются между собой, и выводится одна из трёх фраз: «числа равны», «первое число меньше», «второе число меньше». Если пользователь ввёл не число, выводится фраза «первый ввод – не число» (или «второй ввод – не число»), и выполнение скрипта прекращается.

while (true) {

    let massage1 = +prompt('Введите первое число');
    
    let massage2 = +prompt('Введите второе число');

    if ( parseInt(massage1) && parseInt(massage2)){

        if ( massage1 == massage2){
            alert('Числа равны');
            break;
        } else if ( massage1 < massage2){
            alert('Первое число меньше второго');
            break;
        } else if ( massage1 > massage2){
            alert('Первое число больше второго');
            break;
        }

    } else {

      alert('это не число');
      break;

};


}
// let massage = prompt(`Введите число`);

// if ( parseInt(massage)){
//     alert('Это число ')
// } else{
//     alert('Это другой тип данных')
// }