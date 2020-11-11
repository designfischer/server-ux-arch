import express from 'express'
import { connectToDatabase } from '../database'
import cors from 'cors'
import routes from '../routes'

const app = express()

connectToDatabase()

app.use(cors())
app.use(express.json())
app.use(routes)

export default app