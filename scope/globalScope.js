// variables

var a; // declarando la variable a
var b = "b"; // asignamos y declaramos una variable

b = "Xd" // reasignamos un valor
var a = "abuelita soy tu nieto"; // redeclaración

// global scope

var fruit = "Pear"; // global

function readAFruit()
    {
        console.log(fruit);
    }
readAFruit() ;

function country()
    {
        pais = "Los Mexicos"; // Si no uso palabras reservadas se creara una variable global
        console.log(pais)
    }

country();
console.log(pais);