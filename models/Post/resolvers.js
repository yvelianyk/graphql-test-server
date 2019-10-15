const repository = require('./repository');
const authorRepository = require('../Author/repository');

module.exports = {
    Post: {
        author: async (parent, args, context, info) => {
            return context.dataLoaders.getAuthorByPostLoader.load(parent.id);
        },
    },
    Mutation: {
        createPost: async (parent, args, context, info) => {
            const post = await repository.createPost(args.input);
            await authorRepository.updateAuthorPosts(post);
            return post;
        }
    }
};
