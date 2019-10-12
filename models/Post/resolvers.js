const repository = require('../../models/Author/repository');

module.exports = {
    Post: {
        author: async (parent, args, context, info) => {
            return repository.getByPost(parent.id);
        },
    },
};
