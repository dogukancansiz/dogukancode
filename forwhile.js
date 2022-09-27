// for and whilee loops
const fruits = ['apple', 'banana','berry','kiwi','pear','peach'];

//building a loop
for(types of fruits){
    console.log(types);
    console.log(`Fruits are helathy ${types}`);
    if(types === 'berry'){
        console.log('Berry is in the list!');
    }
}

const people = ['Maria', 'John', 'Peter','Lucy','Brandon'];
for(names of people){
    console.log(names);
    if(names === 'Peter'){
        console.log('Peter is in the list!');
        break;
    }
    
    //to put a condition to the loop
}

//new loop
let newLoop = 0;

while(newLoop < 100){ //as long as the statement is true the loop continiues
    console.log('This is a loop.')
    newLoop ++;
}
