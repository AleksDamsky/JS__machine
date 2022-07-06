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


//Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.

let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arrNumber.length; i++){

    let newArrNumber = arrNumber.map((item) => {
        if (item % 2 == 0) {
            return newArrNumber;
        }
    })
}