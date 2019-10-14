module.exports = {
    Post: {
        author: async (parent, args, context, info) => {
            return context.getAuthorByPostLoader.load(parent.id);
        },
    },
};
