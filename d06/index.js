const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const jwt = require('express-jwt');
const auth = require('./handlers/auth');
const blogposts = require('./handlers/blogposts');

const api = express();

api.use(express.json());
api.use(jwt({
    secret: config.get('service').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        '/api/v1/auth/login',
        '/api/v1/auth/register'
    ]
}));

api.post('/api/v1/auth/login', auth.login);
api.post('/api/v1/auth/register', auth.register);
api.get('/api/v1/auth/refresh-token', auth.refreshToken);

api.get('/api/v1/auth/blogpost', blogposts.getAll);
api.get('/api/v1/auth/blogpost', blogposts.getSingle);
api.post('/api/v1/auth/blogpost', blogposts.create);
api.put('/api/v1/auth/blogpost', blogposts.update);
api.patch('/api/v1/auth/blogpost', blogposts.updatePartial);
api.delete('/api/v1/auth/blogpost', blogposts.remove);

api.use(function (err, req, res, next) {
    if(err.name === 'UnauthorizedError') {
        res.status(401).send('invalid token...')
    }
});

api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    console.log(`Server running on port: ${config.get('service').port}`);
});