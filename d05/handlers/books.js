const books = require('../pkg/books');
const validator = require('../pkg/books/validate');

const getAll = async (req, res) => {
    try {
        let bk = await books.getAllBooks();
        return res.status(200).send(bk);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error.');
    }
};
const getOne = async (req, res) => {
    try {
        let bk = await books.getOneBook(req.params.id);
        return res.status(200).send(bk);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error.');
    }
};

const create = async (req, res) => {
    try {
        await validator.validate(req.body, validator.Book);
        let bk = await books.addBook(req.body);
        return res.status(201).send(bk);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error.');
    }
};

const update = async (req, res) => {
    try {
        await validator.validate(req.body, validator.Book);
        await books.updateBook(req.params.id, req.body);
        return res.status(204).send('');
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error.');
    }
};

const updatePartial = async (req, res) => {
    try {
        await validator.validate(req.body, validator.BookPartial);
        await books.updateBook(req.params.id, req.body);
        return res.status(204).send('');
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error.');
    }
};

const remove = async (req, res) => {
    try {
        await books.removeBook(req.params.id);
        return res.status(204).send('');
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error.');
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove
};