const db = require('../data/db-config');

module.exports = {
    find,
    findInstructionsByID,
    instructionsByID
}

function find() {
    return db('recipe');
}

function findInstructionsByID(id) {
    return db.select('IBR.recipe_id' , 'I.name' , 'IBR.quantities')
             .from('ingredientsbyrecipe as IBR')
             .join('ingredients as I' , 'IBR.id' , 'I.id')
             .join('units as U' , 'I.unit_id' , 'U.id').where('IBR.recipe_id', '=' , id);
}

function instructionsByID(id) {
    return 
}
