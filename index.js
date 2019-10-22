const { ApolloServer, gql } = require('apollo-server');
const { mergeTypes } = require('merge-graphql-schemas');
const { makeExecutableSchema } = require('graphql-tools');
const ConstraintDirective = require('graphql-constraint-directive');
const { merge } = require('lodash');

const Author = require('./models/Author');
const Post = require('./models/Post');
const Common = require('./common');
const dataLoaders = require('./models/dataLoaders');
const directiveTypes = require('./directives/schema');
const AuthDirective = require('./directives/authDirective/AuthDirective');
const types = mergeTypes(
    [Author.typeDefs, Post.typeDefs, Common.schema, directiveTypes],
    { all: true },
);
const resolversArr = [Common.resolver, Author.resolvers, Post.resolvers];
const resolvers = merge.apply({}, resolversArr);
const schema = makeExecutableSchema({
    typeDefs: gql`${types}`,
    resolvers,
    schemaDirectives: {
        constraint: ConstraintDirective,
        auth: AuthDirective
    }
});
const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
        let context = {};
        context.dataLoaders = {};
        for (let func in dataLoaders) {
            if (dataLoaders.hasOwnProperty(func)) {
                context.dataLoaders[func] = dataLoaders[func]();
            }
        }

        context.user = {
          id: 'someUserId',
          roles: ['ADMIN']
        };

        return context;
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
