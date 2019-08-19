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
    return db.select('recipe.name' , 'IBR.recipe_id' , 'I.name' , 'IBR.quantities')
             .from('ingredientsbyrecipe as IBR')
             .join('ingredients as I' , 'IBR.id' , 'I.id')
             .join('recipe' , 'recipe.id' , 'IBR.recipe_id')
             .join('units as U' , 'I.unit_id' , 'U.id')
             .where('IBR.recipe_id', '=' , id);
}

function instructionsByID(id) {
    return db.select('I.steps_number' , 'I.description')
             .from('recipe as R')
             .join('instructions as I' , 'R.id' , 'I.recipe_id')
             .where('R.id' , '=' , id)
}
