// arrays (values which can store multiple values inside)
// better to give plural names for array values
// [] --> array operator
const table = ['Maths','Physics','History'];
const numbers = [1,2,3,4]

//accessing to the array (adding values)
//index --> number of the represented values
//index 0 == Maths (counting starts from 0)

console.log(table);
console.log(table[0]); //--> Maths will show up

//push --> adds another element to the end of the array
table.push('Dogukan is added');
console.log(table); 

//pop --> deletes a value from the array
table.pop();
console.log(table);
table.pop();
console.log(table);

//shift -->deletes the first value of the array(used rarely)
//unshift-->adds a value to the beginning of the array(used rarely)
table.shift();
console.log(table);

table.unshift('this is added to the beginning');
console.log(table);

//accessing a value by index
console.log(table.indexOf('Physics')); // --> 1 shows up

//accessing a value via variables
const example = table.indexOf('this is added to the beginning');
console.log(example); //--> 0 shows up
console.log(table[example]);