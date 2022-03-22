const mongoose = require('mongoose');

const host = 'masterklaster.tixot.mongodb.net';
const username = 'moreno';
const password = 'moreno123';
const dbname = 'movies';

let DSN = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(
    DSN, 
    // {useNewUrlParser: true, useUnifiedTopology: true},
    err => {
        if(err) {
            return console.log('Could not connect to DB:', err);
        }
        console.log('Successfully conneted to DB.');
    }
);