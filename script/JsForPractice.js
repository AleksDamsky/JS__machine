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

let a = 5; 
let b = 3;
let z = [];

switch (z) {
    case a > b : z.push(a);
    break;

    case a < b : console.log('lol');
    break; 
}

console.log(z);