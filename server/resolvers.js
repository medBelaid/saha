import { Users } from './dbConnectors';

// resolver map
export const resolvers = {
    Query: {
        getUser: ({ id }) => {
            return new Users(id, userDatabase[id]);
        }
    },
    Mutation: {
        createUser: (root, { input }) => {
            const newUser = new Users({
                firstname: input.firstname,
                lastname: input.lastname,
                gender: input.gender,
                language: input.language,
                age: input.age,
                email : input.email,
                contacts: input.contacts
            });

            newUser.id = newUser._id;

            return new Promise((resolve, object) => {
                newUser.save((err) => {
                    if (err) reject(err)
                    else resolve(newUser)
                })
            })
        }
    }
}
