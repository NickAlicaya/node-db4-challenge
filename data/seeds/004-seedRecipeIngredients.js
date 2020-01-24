
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity_in_mg: 10},
        {recipe_id: 2, ingredient_id: 1, quantity_in_mg: 20},
        {recipe_id: 3, ingredient_id: 3, quantity_in_mg: 30},
      ]);
    });
};
