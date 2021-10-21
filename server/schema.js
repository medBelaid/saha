import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type User {
        id: ID
        firstname: String
        lastname: String
        gender: Gender
        language: String
        age: Int
        email: String
        contacts: [Contact]
    }

    type Alien {
        id: ID
        firstname: String
        lastname: String
        planet: String
    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Email {
        email: User
    }

    type Query {
        getUser(id: ID): User
    }

    input UserInput {
        id: ID
        firstname: String
        lastname: String
        gender: Gender
        language: String
        age: Int
        email: String
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default { schema };
