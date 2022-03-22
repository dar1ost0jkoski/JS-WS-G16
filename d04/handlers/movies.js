const movies = require('../pkg/movies/index');

const getAll = async (req, res) => {
    try {
        let mv = await movies.getAllMovies();
        return res.status(200).send(mv);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const getOne = async (req, res) => {
    try {
        let mv = await movies.getOneMovie(req.params.id);
        return res.status(200).send(mv);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const create = async (req, res) => { 
    try {
        let m = await movies.addMovie(req.body);
        return res.status(201).send(m);        
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const update = async (req, res) => {
    try {
        await movies.updateMovie(req.params.id, req.body);
        return res.status(204).send("");
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const partialyUpdate = async (req, res) => {
    try {
        await movies.updateMovie(req.params.id, req.body);
        return res.status(204).send("");           
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const remove = async (req, res) => {
    try {
        await movies.removeMovie(req.params.id);
        return res.status(204).send("");
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    partialyUpdate,
    remove
};
