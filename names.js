//Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
function names(firstName, lastName) {
    return {
        firstName,
        lastName
    }
};

//Esporta la funzione dal file.
module.exports = names