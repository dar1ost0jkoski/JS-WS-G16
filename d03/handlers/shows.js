const shows = require('../pkg/shows');

const getAll = async (req, res) => {
    try {
        let sh = await shows.getAllShows();
        return res.status(200).send(sh);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error.');
    }
};

const getOne = async (req, res) => {
    try {
        let sh = await shows.getShowById(Number(req.params.id));
        return res.status(200).send(sh);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error.');
    }
};

const create = async (req, res) => {
    try {
        await shows.addNewShow(req.body);
        return res.status(201).send(req.body);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error.');
    }
};

const update = async (req, res) => {
    try {
        await shows.updateShow(Number(req.params.id), req.body);
        return res.status(204).send("");
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error.');
    }
};

const updatePartialy = async (req, res) => {
    try {
        await shows.partialyUpdateShow(Number(req.params.id), req.body);
        return res.status(204).send("");
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error.');
    }
};

const remove = async (req, res) => {
    try {
        await shows.removeShow(Number(req.params.id));
        return res.status(204).send("")
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error.');
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartialy,
    remove
};