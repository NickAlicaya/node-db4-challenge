const express = require('express');

const Recipes = require('./recipesModel.js')

const router = express.Router();


// `GET /api/recipes/`: all recipes (without details about ingredients or steps)
//works
router.get('/', (req,res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        console.log(err, "error in getting recipes");
        res.status(500).json({error: "Error cannot get recipes."})
    })
})

// `GET /api/recipes/:id/shoppingList`: a list of ingredients and quantites for a single recipe
//works

router.get('/:id/shoppingList', (req, res) => {
        Recipes.getShoppingList(req.params.id)
        .then(ingredients => {
            res.status(200).json(ingredients)
        })
        .catch(err => {
            console.log(err, "error getting ingredients of this specific recipe")
            res.status(500).json({error: "Error, unable to retrieve ingredients of recipe with that id."})

        })
})


//`GET /api/recipes/:id/instructions`: a correctly ordered list of how to prepare a single recipe
//works
router.get('/:id/instructions', (req, res)=>{
        Recipes.getInstructions(req.params.id)
        .then(steps => {
            res.status(200).json(steps)
        })
        .catch(err => {
            console.log( err, "Error in getting instructions by id")
            res.status(500).json({error: 'Unable to retrive instructions for the recipe with that id.'})

        })
})


router.get('/', (req,res) => {
    Recipes.find()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        console.log(err, "error in getting recipes");
        res.status(500).json({error: "Error cannot get recipes."})
    })
})


//Gets api/recipe/:id   gets recipe with specified recipe id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Recipes.findById(id)
    .then(recipe => {
    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
    })
    .catch(err => {
    res.status(500).json({ message: 'Failed to get recipe' });
});
});

//Post a new recipe

router.post('/', (req, res) => {
    const Data = req.body;
  
    Recipes.add(Data)
    .then(Data => {
      res.status(201).json(Data);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new recipe' });
    });
  });


  //Delete recipe /api/recipes/id

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Recipes.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete recipe' });
    });
  });



module.exports = router;