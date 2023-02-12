function greating(userName)
    {
        let name = userName || "Antonio";

        function displayUserName()
            {
                return `Hola ${name}`;
            }
        return displayUserName();
    }
const hello = greating("Jose");
console.log(hello());
console.log(hello);