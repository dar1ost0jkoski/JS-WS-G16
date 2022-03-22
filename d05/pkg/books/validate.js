const { Validator } = require('node-input-validator');

const Book = {
    title: 'required|string',
    author: 'required|string',
    genre: 'required|string',
    publisher: 'required|string',
    date_published: 'required|date',
    number_of_pages: 'required|integer',
    quick_summary: 'required|string'
};

const BookPartial = {
    title: 'string',
    author: 'string',
    publisher: 'string',
    date_published: 'date',
    number_of_pages: 'integer',
    quick_summary: 'string'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if(!e) {
        throw v.errors;
    }
};

module.exports = {
    Book,
    BookPartial,
    validate
};