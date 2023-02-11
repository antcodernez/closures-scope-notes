const myGlobal = 0;

const myFunction = function() 
    {
        const myNumber = 1;
        console.log(myGlobal);

        function parent() // función interna (Ya es un closure)
            {
                const inner = 2;
                console.log(myNumber, myGlobal);

                function child()
                    {
                        console.log(inner, myNumber, myGlobal);
                    }
                return child()
            }
        return parent();
    }
myFunction();


// Ejemplo de un closure

function contador (i)
    {
        let acumulador = i;

        function aumentar ()
            {
                console.log(acumulador);
                acumulador = acumulador + 1;
            }
        return aumentar()
    }

for (i = 0; i < 4; i++)
    {
        contador(i);
    }
const closure = contador(2);