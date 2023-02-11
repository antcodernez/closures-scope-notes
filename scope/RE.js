// Reasignación y redeclaración

// var
var firstName; // Cuando se declara su valor es undefined
firstName = "Antonio"; // Asignando

console.log(firstName);

var lastName = "Antonio" // asignando y declarando 
lastName = "Pedro"; // Reasignando
console.log(lastName); 

var secondName = "Antonio"; // asignando y declarando
var secondName = "José"; // Reasignando y Redeclarando
console.log(secondName);

// let

let fruit = "Apple" //  asignando y declarando
fruit = "Kiwi"; // Reasignando
console.log(fruit);

// let fruit = "banana" No puedo redeclarar fruit porque me daría error


// const 

const animal = "Loro"; //  asignando y declarando
// animal = "Gato" No puedo reasignar una constante porque me dará error
// const animal = "Snake"; No puedo redeclarar una constante 
console.log(animal);

const vehicles = ["Toyota", "Tsuru", ];
vehicles.push("🤤👀");
console.log(vehicles);