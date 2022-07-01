//declear variables for append info about ship

let location1 = 3;
let location2 = 4;
let location3 = 5;

//append variables for attempt

let quess; 

//append variables for number hits

let hits = 0;

//append variables fon number attempt

let qusses = 0;

//this variable which containe info about ship

let isSunk = false;

while(isSunk == false){
    quess = prompt('Введите число от 0 до 6');

    if (quess < 0 || quess > 0){
        alert('Ты вводишь не верные числа');
    }else{
        qusses+=1;
    }
}