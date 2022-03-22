const express = require('express');
const shows = require('./handlers/shows');

const app = express();

app.use(express.json());

app.get('/api/shows', shows.getAll);
app.get('/api/shows/:id', shows.getOne);
app.post('/api/shows', shows.create);
app.put('/api/shows/:id', shows.update);
app.patch('/api/shows/:id', shows.updatePartialy);
app.delete('/api/shows/:id', shows.remove);

app.listen(5000, err => {
    if (err) return console.log(err);
    return console.log('Server running on port 5000.')
});