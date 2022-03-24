const config = require('./pkg/config')
const express = require('express');
const weather = require('./handler/weather');

const api = express();

api.get('/api/v1/weather/:city', weather.getForCity)

api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    return console.log(`Server runnig on port: ${config.get('service').port}`);
});