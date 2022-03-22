const mongoose = require('mongoose');

const Book = mongoose.model(
    'books',
    {
            title: String,
            author: String,
            genre: String,
            publisher: String,
            date_published: Date,
            number_of_pages: Number,
            quick_summary: String
    },
    'books'
)

const addBook = async (book) => {
    let b = new Book(book);
    return await b.save();
};

const updateBook = async (id, book) => {
    return await Book.updateOne({ _id: id }, book);
};

const removeBook = async (id) => {
    return await Book.deleteOne({ _id: id });
};

const getAllBooks = async () => {
    return await Book.find({});
};

const getOneBook = async (id) => {
    return await Book.findOne({ _id: id });
};

module.exports = {
    addBook,
    updateBook,
    removeBook,
    getAllBooks,
    getOneBook
};