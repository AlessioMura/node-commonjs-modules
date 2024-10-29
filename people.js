//Importa la tua funzione da names.js
const names = require('./names.js');
const name = names('John', 'Doe');

//Importa la tua funzione da hobbies.js
const hobbies = require('./hobbies.js');
const hobbie = hobbies('escursionismo', 'giardinaggio', 'fotografia');

//Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies. 
function getProperties() {
    return {
        firstName: name.firstName,
        lastName: name.lastName,
        hobbies: hobbie.hobbies
    }
}

console.log(getProperties());
