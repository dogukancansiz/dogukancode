//defining functions (set of codes doing a task)
//scope (the extent of an area which is relevant)
// variables in global scope can be used everywhere 
//variables in function scope can only be used in the function
const name = 'Dogukan'; //global scope 
const name1 = 'CANSIZ';


//saving the function to the memory
function hello() {  //{}-->function scope ()--> used to add a parameter to the function 
console.log('HELLO WORLD');
console.log('HELLO WORLD');
console.log('HELLO WORLD');
console.log('HELLO WORLD');
}

//functions needs to be run
hello();

//adding function
function adder(num1, num2)// --> parameter 
{
    console.log(num1*num2);
}
adder(3,6);

//making a text uppercase
function upperCase(text){
    const upperCased = text.toUpperCase(); //toUpperCase is an already built-in function
    console.log(upperCased);
}

upperCase(name);

// making a text lowercase

function lowerCase(text1){
    const lowerCased = text1.toLowerCase(); //toLowerCase is an already built-in function
    console.log(lowerCased)
}

lowerCase(name1);

