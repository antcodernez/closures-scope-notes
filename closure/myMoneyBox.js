// function myMoney(ahorro)
//     {
//         let saveCoints = 0;
//         saveCoints += ahorro;
//         console.log(`Tu ahorro es de: ${saveCoints}`);
//     }

function myMoneyBox() 
    {
        let saveCoints = 0;

        function countCoints (coints)
            {
                saveCoints += coints;
                console.log(`MoneyBox: ${saveCoints}`);
            }
        
        return countCoints;
    }

const moneyBox = myMoneyBox();

moneyBox(3);
moneyBox(4);
moneyBox(3);

const moneyBoxJesus = myMoneyBox();
moneyBoxJesus(100);
moneyBoxJesus(400);
moneyBoxJesus(10);

// closure que guarda datos de mascotas

function createPetList() 
{
    const petsList = [];

     return function (pet) {
        if (!pet)
        {
            return petsList;
        }
         else 
        {
             return petsList.push(pet);
        }
    }
}

const pets = createPetList();

pets("cat");
pets("Loro");
pets();

// xd
