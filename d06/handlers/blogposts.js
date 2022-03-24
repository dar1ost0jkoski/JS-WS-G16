const blogposts = require('../pkg/blog');
const {
    Blogpost,
    PartialBlogpost,
    validate
} = require('../pkg/blog/validation');

const getAll = async (req, res) => {
    try {
        let bp = await blogposts.getAll(req.user.id);
        return res.send(bp);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!')
    }
};

const getSingle = async (req, res) => {
    try {
        let bp = await blogposts.getSingle(req.user.id, req.params.id);
        if(!bp) {
            return {
                code:404,
                error: 'Post not found.'
            }
        }
        return res.send(bp);
    } catch (err) {
      console.log(err);
      return res.status(err.code).send(err.error);
    }
};

const create = async (req, res) => {
    try {
        await validate(req.body, Blogpost);
        let data = {
            ...req.body,
            user_id: req.user.id
        };
        let bp = await blogposts.create(data);
        return res.status(201).send(bp);
    } catch (err) {
        console.log(err);
        return res.status(err.code).send(err.error);
    }
};

const update = async (req, res) => {
    try {
        await validate(req.body, Blogpost);
        let data = {
            ...req.body,
            user_id: req.user.id
        }
        await blogposts.update(req.params.id, data);
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        return res.status(err.code).send(err.error);
    }
};

const updatePartial = async (req, res) => {
    try {
        await validate(req.body, PartialBlogpost);
        let data = {
            ...req.body,
            user_id: req.user.id
        }
        await blogposts.update(req.params.id, data);
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        return res.status(err.code).send(err.error);
    }
};

const remove = async (req, res) => {
    try {
        await blogposts.remove(req.params.id);
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        return res.status(err.code).send(err.error);
    }
};

module.exports = {
    getAll,
    getSingle,
    create,
    update,
    updatePartial,
    remove
};