// Hoisting en variables

// se asigna a nameOfDog un undefined;  
console.log(nameOfDog);
var nameOfDog = "El perro del mal";
console.log(nameOfDog);

// Hoisting en funciones

nameOfDog(); // Las funciones se eleban y se pueden acceder a ellas

function nameOfDog()
    {
        console.log(`El mejor perro es: ${elmo}`);
        // La variable elmo no existe y va a dar error, se da un hoisting a la variable elmo si estuviera declarada
    }