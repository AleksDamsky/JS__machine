// Exercise number 1.


// В бесконечном цикле делается запрос на ввод двух чисел (два отдельных вызова функции prompt()). Числа сравниваются между собой, и выводится одна из трёх фраз: «числа равны», «первое число меньше», «второе число меньше». Если пользователь ввёл не число, выводится фраза «первый ввод – не число» (или «второй ввод – не число»), и выполнение скрипта прекращается.

// while (true) {

//     let massage1 = +prompt('Введите первое число');
    
//     let massage2 = +prompt('Введите второе число');

//     if ( parseInt(massage1) && parseInt(massage2)){

//         if ( massage1 == massage2){
//             alert('Числа равны');
//             break;
//         } else if ( massage1 < massage2){
//             alert('Первое число меньше второго');
//             break;
//         } else if ( massage1 > massage2){
//             alert('Первое число больше второго');
//             break;
//         }

//     } else {

//       alert('это не число');
//       break;

// };


// }
// let massage = prompt(`Введите число`);

// if ( parseInt(massage)){
//     alert('Это число ')
// } else{
//     alert('Это другой тип данных')
// }

// Exercise number 2.

//Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

// Math.sqrt() - - возвращает квадратный корень числа;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// arr.reduce((acc, item) => { 
//     for (let i = 0; i < arr.length; i++){
//         if ((arr[i] % 2) === 0 ){
//             console.log(arr[i]);
//         }
//     }
// }, [])


// arr.filter(element => !(element % 2)); // Применяем метод .filter() указывая на то, что неоюходимо убрать элементы, которые имеют остаток при делении на 2;

// arr.reduceRight((acc, element) => acc + Math.sqrt(element), 0); // С помощью метода .reduce() аккумулируем числа от 1 до n

// console.log(arr);


// Exercise number 3.

//Выйдите из цикла, изменив только две отмеченные строки. Результат в консоли сейчас останавливается на 9 9. Должен на 5 4.

// for (let i = 0; i < 10; i++) { //! Эту строку можно изменить
//     for (let j = 0; j < 10; j++) {
//       if (i === 5 && j === 5) {
//         //! Эту строку можно изменить
//       }
   
//       console.log(i, j);
//     }
//    }

// exercise number 4.

//Напишите функцию JavaScript, которая переворачивает число.
//Math.floor()

// function reverse_number(num) {

// num = num + ""; // Преобразование числа в строку

// let arr = [];

// arr.push(num);

// return num.split('').reverse().join();


// };

// reverse_number(234);


// Самая простая задача на нахождение числа Фбоначчи;

// 1 + 1 + 2 + 3 = 5 

// Рекурсивный метод
// function fibonachhi (n) {

//     if (n <= 0){
//         return 0;

//     } else if(n <= 2) {
//         return 1;

//     } else {

//         return fibonachhi(n - 1) + fibonachhi(n - 2);
//     }
// }

// console.log(fibonachhi(9));


// РЕшение через цикл;

// function fibonachi( n ) {

//     while(n){
//         if (n <= 0){
//             return 0;

//         } else if (n <= 2) {
//             return 1;

//         } else{
//             return (n-1) + (n-2);

//         }
//     }

// }

// console.log(fibonachi(10));


//Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.

// const showNumber = (number, devisor) => number.filter(num => num % devisor == 0)

// console.log(showNumber([2, 4 , 5, 6, 7,8 ,9 ,10, 11, 12], 2));

// let arrFunction = (number, devisor) => number.filter(item => item % devisor == 0);
// console.log(arrFunction([1,2, 3, 4, 5,6, 7, 8, 9, 10], 3));

// let a = (number, devisor) => number.filter(num => num % 2 == 0);
// console.log(a([2, 5, 7, 1, ,2, 34, 5]));

//Ваша функция принимает два аргумента:

// текущий возраст отца (лет)
// текущий возраст сына (лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше;

// function showNumber (currentOldSon, currentOldFather) {
//     let oldFather = currentOldFather;
//     let oldSon = currentOldSon;

//     let sonResults;
//     sonResults = oldSon * 2;
    
//     let fatherResults = oldFather - sonResults;

//     let endResults = oldFather - fatherResults;
//     console.log(endResults);
// };

// console.log(showNumber(0, 29));

 // Math.abs(currentOldSon * 2 - currentOldFather);

//  Если задано число n, вернуть количество положительных нечетных чисел меньше n, ЛЕГКО!
// const addNumber = n => (n-1) / 2;

// console.log(addNumber(15));

function toCamelCase(str){

    // let arr = str.split('-')
    let arr = str.split('_')
   
    // arr[0] = 'The';
    // arr[1] = 'Stealth';
    // arr[2] = 'Warrior';
    arr[0] = 'The';
    arr[1] = 'Stealth';
    arr[2] = 'Warrior';

    console.log(arr.join(''));
  }
// console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase("The_Stealth_Warrior"))

//  я проебал день, но закомичу хоть что-то

