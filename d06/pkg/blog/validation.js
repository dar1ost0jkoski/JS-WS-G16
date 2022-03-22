const { Validator } = require('node-input-validator');

const Blogpost = {
    title: 'required|string',
    content: 'required|string'
};

const PartialBlogpost = {
    title: 'string',
    content: 'string'
};

const validate = async (data, schema) => { 
    let v = new Validator(data, schema);
    let e = await v.check();
    if(!e) {
        throw {
            code: 400,
            error: v.errors
        };
    }
};

module.exports = { 
    Blogpost,
    PartialBlogpost,
    validate
};

