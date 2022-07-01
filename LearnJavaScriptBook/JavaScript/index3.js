//declear variables for append info about ship

let location1 = 3;
let location2 = 4;
let location3 = 5;

//append variables for attempt

let quess; 

//append variables for number hits

let hits = 0;

//append variables fon number attempt

let quesses = 0;

//this variable which containe info about ship

let isSunk = false;

while(isSunk == false){
    quess = prompt('Введите число от 0 до 6');

    if (quess < 0 || quess > 6){
        alert('Ты вводишь не верные числа');
    }else{
        quesses += 1;

        if (quess == location1 || quess == location2 || quess == location3){
            hits += 1;
            alert(`ты попал в корабль!`)

            if (hits == 3){

                isSunk = true;

                alert('Корабль потоплен');
            }
        }else{
            alert(`ты не попал!
            Пробуй еще раз!`)
        }
    }

    alert(`Корабль потоплен за: 
    ${quesses} ходов`);

    if (isSunk == true){
        break;
    }
}