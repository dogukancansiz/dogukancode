//creating an object
//objects have different properties(name, age,...)
const user = {
    name: 'Dogukan',
    age:18,
    married:false,
    purchases:['phone','car','laptop']
};
//taking info about an obejct(selecting the properties)
console.log(user.purchases);
console.log(user.age);

//keyword "this"
//this--> a general object in js
console.log(this); //by default going to refer to window
 
const car ={
    color: 'black',
    type:'sport',
    price:1000.000,
    used:true,

    sayName: function(){
        console.log(this.used);
        console.log(this);
    }
};

car.sayName();

function saymyAge(){
    console.log(`Hello my name is ${this}`);
}
saymyAge(); //--> window object is going to show up
