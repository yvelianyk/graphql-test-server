const { SchemaDirectiveVisitor } = require("apollo-server");
const {GraphQLScalarType, GraphQLNonNull} = require('graphql');
const Joi = require('@hapi/joi');

class IsEmailValidationDirective extends SchemaDirectiveVisitor {
    visitInputFieldDefinition(field) {
        this.wrapType(field);
    }

    visitFieldDefinition(field) {
        this.wrapType(field);
    }

    wrapType(field) {
        if (field.type instanceof GraphQLNonNull &&
            field.type.ofType instanceof GraphQLScalarType) {
            field.type = new GraphQLNonNull(
                new LimitedLengthType(field.type.ofType, field.name));
        } else if (field.type instanceof GraphQLScalarType) {
            field.type = new LimitedLengthType(field.type, field.name);
        } else {
            throw new Error(`Not a scalar type: ${field.type}`);
        }
    }
}

class LimitedLengthType extends GraphQLScalarType {
    constructor(type, fieldName) {
        super({
            name: `isEmail`,

            serialize(value) {
                value = type.serialize(value);
                return value;
            },

            parseValue(value) {
                const schema = Joi.object({
                    [fieldName]: Joi.string().email(),
                });
                const result = schema.validate({[fieldName]: value});
                if (result.error) {
                    throw result.error;
                }
                return type.parseValue(value);
            },

            parseLiteral(ast) {
                return type.parseLiteral(ast);
            }

        });
    }
}

module.exports = IsEmailValidationDirective;
