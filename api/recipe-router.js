const express = require('express');
const recipeDB = require('../data/recipe_db')
const recipeRouter = express.Router();


recipeRouter.get('/' , async (req,res) => {
    try {
        const recipies = await recipeDB.find();
        res.status(200).json(recipies)
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with your request', err})
    }
})

//GET method to get all ingredients and quantities by a given recipe
recipeRouter.get('/:id/shoppinglist' , async (req,res) => {
    try {
        const id = req.params.id
        console.log(id)
        const detailedInstructions = await recipeDB.findInstructionsByID(id);
        res.status(200).json(detailedInstructions);
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with your request'})
    }
})

//GET method to obtain preparation instructions for a given recipe
recipeRouter.get('/:id/instructions', async (req,res) => {
    try {
        const id = req.params.id;
        const instructions = await recipeDB.instructionsByID(id);
        res.status(200).json(instructions)
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with your request'})
    }
})


module.exports = recipeRouter;