
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 125)
        .index()
        .notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 125)
  })
  .createTable('steps',tbl => {
      tbl.increments();
      tbl.string('steps', 300)
      tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
  })
  .createTable('recipe_ingredients', tbl => {
      tbl.increments()
      tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
      tbl.integer('ingredient_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('ingredients')
      tbl.float('quantity_in_mg')
    
  })
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
    )
};
