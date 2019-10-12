module.exports =  `
    type Query {
      getAuthor(id: Int): Author
      getPostsByAuthor(authorName: String): [Post]
    }
`;
