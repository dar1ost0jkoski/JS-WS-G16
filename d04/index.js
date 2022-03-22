require('./pkg/db');

const express = require('express');
const movies = require('./handlers/movies');

const app = express();

app.use(express.json());

app.get('/api/movies', movies.getAll );
app.get('/api/movies/:id', movies.getOne );
app.post('/api/movies', movies.create);
app.put('/api/movies/:id', movies.update);
app.patch('/api/movies/:id', movies.partialyUpdate);
app.delete('/api/movies/:id', movies.remove);

app.listen(2121, err => {
    if (err) return console.log(err);
    return console.log('Server running.')
});