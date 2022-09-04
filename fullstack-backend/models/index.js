import mongoose from "mongoose";

const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const User = mongoose.model('user', UserSchema)

// To run local mongoDB server, type:
// brew services start mongodb-community

mongoose.connect('mongodb://localhost/our-app')

mongoose.connection.once('open', () => console.log('DB connected')).on('error', (err) => console.log('DB error:', err))