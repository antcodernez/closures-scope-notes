function greeting()
    {
        let userName = "Jesus";

        console.log(userName)

        if (userName === `Jesus`)
            {
                console.log(`Hello ${userName}`);
            }
    }

greeting()

console.log(userName); // Si quiero acceder a ella no se podrá porque la variable solo "existe" o esta declarada en el scope de la función en este caso.