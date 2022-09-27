//if-else (checking)
const age = 18;

if(age > 18){
    console.log('WELCOME!');
} else if(age === 18){ //--> triple equals detects if the values are in the same type
    console.log('YOU ARE GOOD TO GO!');
}
else{
    console.log('TRY AGAIN!');
}
// >= (bigger or equal)
// <= (smaller or equal)
// == (equal)
// === (equal)
// = (defining a task)
// < (smaller) >(bigger )

//Dice Game
const dice1 = 3;
const dice2 = 3;

if (dice1 < dice2 ){
    console.log(`Dice 1 (${dice1}) is smaller than Dice 2 (${dice2}).`);
}
else if (dice1 === dice2){
    console.log(`Dice 1 (${dice1}) is equal to Dice 2 (${dice2}).`);
}
else{
    console.log(`Dice 1 (${dice1}) is bigger than Dice 2 (${dice2}).`);
}

// && --> and operator (all the operants must be true)
// || --> or operator (only one true value is enough)