const express = require('express');

const server = express();
const port = 5000;
server.use(express.json());


server.get('/', (req,res) => {
    res.send('This is the recipe API')
})



server.listen( port , (req,res) => {
    console.log(`Server is listening on port ${port}`)
})
