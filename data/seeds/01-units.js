
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('units').insert([
        {id: 1, name: 'Teaspoon'},
        {id: 2, name: 'Dessertspoon'},
        {id: 3, name: 'Tablespoon'},
        {id: 4, name: 'Fluid ounce'},
        {id: 5, name: 'Cup'},
        {id: 6, name: 'Pint'},
        {id: 7, name: 'Quart'},
        {id: 8, name: 'Gallon'}
      ]);
};
