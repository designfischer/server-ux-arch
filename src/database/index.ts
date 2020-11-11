import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL!

function connectToDatabase() {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, () => console.log('Connected to database'))
}

export { connectToDatabase }