const mongoose = require('mongoose');

const Blogpost = mongoose.model(
    'blogpos',
    {
        user_id: String,
        title: String,
        content: String
    },
    'blogposts'
);

const getAll = async (user_id) => {
    return await Blogpost.find({ user_id })
};

const getSingle = async (user_id, id) => {
    return await Blogpost.findOne({ user_id, _id: id });
};

const create = async (data) => {
    let bp = new Blogpost(data);
    return await bp.save();
};

const update = async (id, data) => {
    return await Blogpost.updateOne({ _id: id }, data);
};

const remove = async (id) => {
    return await Blogpost.deleteOne({ _id: id });
};

module.exports = {
    getAll,
    getSingle,
    create,
    update,
    remove
};
