
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Eggs', unit_id: 1},
        {id: 2, name: 'Milk', unit_id: 4},
        {id: 3, name: 'Coffee', unit_id: 5},
        {id: 4, name: 'Sugar', unit_id: 3},
        {id: 5, name: 'Bread', unit_id: 6},
        {id: 6, name: 'Salt', unit_id: 1},
        {id: 7, name: 'Mermelade', unit_id: 5},
        {id: 8, name: 'Tomatos', unit_id: 4}
      ]);
};
