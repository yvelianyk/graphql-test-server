const repository = require('../../models/Post/repository');

module.exports = {
    Author: {
        posts: async (parent, args, context, info) => {
            return context.getPostsByAuthorLoader.load(parent.name);
        },
    },
};
