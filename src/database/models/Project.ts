import mongoose from 'mongoose'

const Schema = new mongoose.Schema({    
    projectDescription: String,    
    projectThumbnail: String, 
    projectOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    projectDesigns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Design'
    }],
    projectAuthors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    projectClients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})

export default mongoose.model('Project', Schema)