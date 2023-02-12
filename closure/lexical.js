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
                acumulador = acumulador + i;
            }
        return aumentar()
    }
    
const closure = contador(2);
closure();
closure();
 // sumará dos cada vez que se ejecute (Solo corre en el navegador)

 // Sumar dos numeros

function sumWithClosure(firstNum) 
    {
        let a = firstNum; 
        return function (secondNum)
        {   
            let b = secondNum;
            if (!b)
            {
                return a;    
            }
            else 
            {
                return a + b;    
            }  
        }
  }
sumWithClosure(2)(4);
// puede haber dos parametros para una funcion interna alv :O

// otra manera de hacerlo

function sumWithClosure(firstNum) 
    {
        return function xd(secNum) 
        {
            return firstNum + (secNum ?? 0);
        }
    }
  
sumWithClosure(2)(3);
// multiplicación de dos numeros con closures

function multiplicacionClosure(num1)
    {
        return function multi(num2)
            {
                if (!num2)
                {
                    return "Ingresa el segundo valor xd";
                }
                else 
                {
                    return num1 * num2;
                }
            }
    }

function laPerra(num1)
    {
        return function(num2) 
            {
                return num1 * (!num2 ? "xd": num2);
            }
    }   

// perimetro y area con closure (es mío)

