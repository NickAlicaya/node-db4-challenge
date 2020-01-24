exports.seed = function(knex) {
  return knex('ingredients').del()
  .then(() => knex('ingredients').insert([
    {ingredient_name:'garlic'},
    {ingredient_name:'beef'},
    {ingredient_name:'chicken stock'},
    {ingredient_name:'eggs'}
  ]))
};
