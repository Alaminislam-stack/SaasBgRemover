import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import userRouter from './router/userRoutes.js'
import imageRouter from './router/imageRoutes.js'


// app config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// intialize middlewares
app.use(express.json())
app.use(cors({
  origin: ["https://saas-bg-remover-awdy.vercel.app"], // তোমার client-এর URL
  credentials: true,
}))


// api routes
app.get('/', (req, res) => res.send('api is working'))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)




app.listen(PORT, () => console.log(`sever in runing on ${PORT}`))