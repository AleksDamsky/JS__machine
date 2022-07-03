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

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.reduce((acc, item) => { 
//     for (let i = 0; i < arr.length; i++){
//         if ((arr[i] % 2) === 0 ){
//             console.log(arr[i]);
//         }
//     }
// }, [])


arr.filter(element => !(element % 2));

arr.reduceRight((acc, element) => acc + Math.sqrt(element), 0);

console.log(arr);
