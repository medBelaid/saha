import mongoose, { mongo } from 'mongoose';
import sequelize from 'sequelize';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Mohamed:0789mB!!@cluster0.qz9g8.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
});
const Users = mongoose.model('users', userSchema);

//SQL
// const sequelize = new sequelize('database', null, null, {
//     dialect: 'sqlite',
//     storage: './alien.sqlite'
// })

export { Users };

