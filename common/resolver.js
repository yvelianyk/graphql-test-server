const repository = require('../models/Author/repository');
const posts = require('../models/Post/repository');

module.exports = {
    Query: {
        getAuthor: async (parent, args, context, info) => {
            const {id} = args;
            return repository.findById(id);
        },
        getPostsByAuthor: async (parent, args, context, info) => {
            const { authorName } = args;
            return posts.findAll(authorName);
        },
    },
};
