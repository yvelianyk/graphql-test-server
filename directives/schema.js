module.exports = `

      directive @isEmail on INPUT_FIELD_DEFINITION
      
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
