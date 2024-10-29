//Importa la tua funzione da names.js
const names = require('./names.js');

//Importa la tua funzione da hobbies.js
const hobbies = require('./hobbies.js');

//Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies. 
function getProperties() {
    return {
        names, 
        hobbies
    }
}

console.log(getProperties());
