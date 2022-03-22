const mongoose = require('mongoose');

const Account = mongoose.model(
    'accounts',
    {
        email: String,
        password: String,
        full_name: String
    },
    'accounts'
);

const create = async (acc) => {
    let ac = new Account(acc);
    return await ac.save();
};

const update = async (id, acc) => {
    return await Account.updateOne({_id: id}, acc);
};


const remove = async (id) => {
    return await Account.deleteOne({ _id: id });
};

const getAll = async () => {
    return await Account.find({});
};


const getByID = async (id) => {
    return await Account.findById({ _id: id });
};

const getByEmail = async (email) => {
    return await Account.findOne({ email });
};

module.exports = {
    create,
    update,
    remove,
    getAll,
    getByID,
    getByEmail
};  


