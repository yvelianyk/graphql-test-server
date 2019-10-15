module.exports = `
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
      
      directive @auth(
        requires: Role = ADMIN,
      ) on OBJECT | FIELD_DEFINITION
        
      enum Role {
        ADMIN
        REVIEWER
        USER
        UNKNOWN
      }
`;
