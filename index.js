const { ApolloServer, gql } = require('apollo-server');
const { mergeTypes } = require('merge-graphql-schemas');
const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const Author = require('./models/Author');
const Post = require('./models/Post');
const Logic = require('./logic');

const types = mergeTypes(
    [Author.typeDefs, Post.typeDefs, Logic.schema],
    { all: true },
);
const resolversArr = [Logic.resolver, Author.resolvers, Post.resolvers];
const resolvers = merge.apply({}, resolversArr);
const schema = makeExecutableSchema({
    typeDefs: gql`${types}`,
    resolvers
});
const server = new ApolloServer({schema});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
