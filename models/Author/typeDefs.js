module.exports = `
    type Author {
      id: Int!
      name: String
      posts: [Post]
    }
         
    input PostInput {
      title: String! @constraint(minLength: 5, format: "email")
      text: String! @constraint(minLength: 5, format: "email")
      author: String!      
    }
    
    type Mutation @auth(requires: ADMIN) {
      createPost(input: PostInput!): Post
    }
`;
