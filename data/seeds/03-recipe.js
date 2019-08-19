
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, name: 'Coffee with Milk'},
        {id: 2, name: 'Scrambled Eggs'},
        {id: 3, name: 'French Toast'}
      ]);
};
