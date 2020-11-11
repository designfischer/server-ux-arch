import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
        lowercase: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true,
        lowercase: true
    },
    userInfo: {
        firstName: String,
        lastName: String
    },
    userFriends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})

export default mongoose.model('User', Schema)