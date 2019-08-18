
exports.seed = function(knex) {
  
      // Inserts seed entries
      return knex('ingredientsbyrecipe').insert([
        {id: 1, recipe_id: 1, ingredient_id: 2, quantities: 8 },
        {id: 2, recipe_id: 1, ingredient_id: 3, quantities: 4 },
        {id: 3, recipe_id: 2, ingredient_id: 1, quantities: 4 },
        {id: 4, recipe_id: 2, ingredient_id: 6, quantities: 0.3 },
        {id: 5, recipe_id: 2, ingredient_id: 8, quantities: 1 },
        {id: 6, recipe_id: 3, ingredient_id: 5, quantities: 4 },
        {id: 7, recipe_id: 3, ingredient_id: 7, quantities: 1 }
      ]);
};
