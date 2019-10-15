module.exports =  `
    type Post {
      id: Int
      title: String
      text: String @auth(requires: ADMIN)
      author: Author
    }
`;
