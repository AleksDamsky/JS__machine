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

let a = {
    name : 'aleks',
    age : 21,

    f : () => {
        return this.age;
    },
};

console.log(a.f());