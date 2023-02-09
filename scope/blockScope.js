const freshFruits = ["Pear", "Apple", "Orange", "WaterMelon"];

function fruits()
    {        
        if (true)
            {
                var fruitOne = freshFruits[1]; // function scope
                let fruitTwo = freshFruits[3]; // tienen block scope   
                const fruitTree = freshFruits[0]; // tienen block scope 
 
            }
        console.log(fruitOne);
        console.log(fruitTwo);
        console.log(fruitTree);
    }
fruits()
