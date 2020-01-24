exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, steps:'Crack egg, fry add salt and pepper to taste.'},
        {recipe_id: 2, steps:'Mix rice and spices then fry for 10mins.'},
        {recipe_id: 3, steps:'Cut beef into strips, cook with spices and add pasta.'}
      ]);
    });
};