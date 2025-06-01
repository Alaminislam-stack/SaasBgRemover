import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'


// app config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// intialize middlewares
app.use(express.json())
app.use(cors())


// api routes
app.get('/', (req, res) => res.send('api is working')) 

app.listen(PORT, () => console.log(`sever in runing on ${PORT}`))