module.exports =  `
    type Query {
      getAuthor(id: Int): Author
      getPostsByAuthor(authorName: String): [Post]
    }
    
    directive @constraint(
        # String constraints
        minLength: Int
        maxLength: Int
        startsWith: String
        endsWith: String
        notContains: String
        pattern: String
        format: String
    
        # Number constraints
        min: Int
        max: Int
        exclusiveMin: Int
        exclusiveMax: Int
        multipleOf: Int
      ) on INPUT_FIELD_DEFINITION
`;
