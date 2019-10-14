module.exports = `
    type Author {
      id: Int!
      name: String
      posts: [Post]
    }
         
    input PostInput {
      title: String!
      text: String!
      author: String!      
    }
    
    type Mutation {
      createPost(input: PostInput!): Post
    }
`;
