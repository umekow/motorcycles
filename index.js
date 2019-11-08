require('dotenv').config();

const express = require('express'); 
const helmet = require('helmet'); 
const cors = require('cors');

const server = express(); 

server.use(express.json()); 
server.use(helmet(), cors()); 

const db = require('./data/db-config');

const port = process.env.PORT || 4000; 

server.get('/api/bikes', (req, res) => {
    db('bikes')
    .then(r => res.status(200).json(r))
    .catch(error => res.status(400).json(error))
})



server.listen(port, () => {
    console.log(`Server is listening on ${port}`); 
})


