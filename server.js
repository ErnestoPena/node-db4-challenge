const express = require('express');

const server = express();
const port = 5000;
server.use(express.json());

const recipeRouter = require('./api/recipe-router');
const ingredientRouter = require('./api/ingredient-router');

server.use('/api/recipe' , recipeRouter);
server.use('/api/ingredient', ingredientRouter);


server.get('/', (req,res) => {
    res.send('This is the recipe API')
})



server.listen( port , (req,res) => {
    console.log(`Server is listening on port ${port}`)
})


module.export = server;