exports.seed = function(knex) {
  return knex('recipes').del()
  .then(() => knex('recipes').insert([
    {recipe_name: 'Scrambled eggs'},
    {recipe_name: 'Fried rice'},
    {recipe_name: 'Beef Stroganoff'},
    {recipe_name: 'Pork Chops'}
  ]))
};



