
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, description: 'Step # 1 for recipe 1' , steps_number: 1 , recipe_id: 1},
        {id: 2, description: 'Step # 2 for recipe 1' , steps_number: 2 , recipe_id: 1},
        {id: 3, description: 'Step # 3 for recipe 1' , steps_number: 3 , recipe_id: 1},
        {id: 4, description: 'Step # 4 for recipe 1' , steps_number: 4 , recipe_id: 1},
        {id: 5, description: 'Step # 1 for recipe 2' , steps_number: 1 , recipe_id: 2},
        {id: 6, description: 'Step # 2 for recipe 2' , steps_number: 2 , recipe_id: 2},
        {id: 7, description: 'Step # 3 for recipe 2' , steps_number: 3 , recipe_id: 2},
        {id: 8, description: 'Step # 4 for recipe 2' , steps_number: 4 , recipe_id: 2},
        {id: 9, description: 'Step # 5 for recipe 2' , steps_number: 4 , recipe_id: 2},
        {id: 10, description: 'Step # 1 for recipe 3' , steps_number: 1 , recipe_id: 3},
        {id: 11, description: 'Step # 2 for recipe 3' , steps_number: 2 , recipe_id: 3},
        {id: 12, description: 'Step # 3 for recipe 3' , steps_number: 3 , recipe_id: 3},
        {id: 13, description: 'Step # 4 for recipe 3' , steps_number: 4 , recipe_id: 3},        
      ]);
};
