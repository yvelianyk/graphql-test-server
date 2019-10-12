const repository = require('../../models/Post/repository');

module.exports = {
    Author: {
        posts: async (parent, args, context, info) => {
            return repository.findByAuthor(parent.name);
        },
    },
};
