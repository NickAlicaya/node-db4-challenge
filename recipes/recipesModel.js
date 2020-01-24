const db = require('../data/dbConfig.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    find,
    findById,
    add,
    remove
}

function getRecipes() {
    return db('recipes')
}

//sql code select works woot!
function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
    .select('ingredients.ingredient_name', 'recipe_ingredients.recipe_id', 'recipe_ingredients.quantity_in_mg')
    .join('ingredients', 'ingredients.id','recipe_ingredients.ingredient_id')
    .where({recipe_id})
}

// select ingredients.ingredient_name, recipe_ingredients.recipe_id as recipe_id, recipe_ingredients.quantity
// from recipe_ingredients
// join ingredients on ingredients.id = recipe_ingredients.ingredient_id
// where recipe_ingredients.recipe_id=1





// working code grabs recipe instructions based on id
function getInstructions(recipe_id) {
    return db('recipes')
    .select('recipes.recipe_name','recipes.id','steps.steps')
    .join('steps', 'recipes.id','steps.recipe_id')
    .where({recipe_id})
}

//data references from sql
// select recipes.recipe_name, recipes.id,steps.steps
// from recipes
// join steps on recipes.id = steps.recipe_id
// where recipes.id=1

function find() {
    return db('recipes')
}

function findById(id) {
    return db('recipes')
      .where('id', id)
      .first()
      .then(recipe => {
        if (recipe) {
          return recipe;
        } else {
          return null;
        }
      });
  }

  function add(recipe) {
    return db('recipes')
      .insert(recipe)
      .then(ids => {
        return findById(ids[0]);
      });
  }

  function remove(id) {
    return db('recipes')
      .where('id', id)
      .del();
  }
