import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import tourRoute from './routes/tour.js'
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js '

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOption = {
    origin: true,
    Credential: true
}

app.get('/', (req, res) => {
    res.send('api is working')
})

//database connection
mongoose.set("strictQuery", false)
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect to database');
    } catch (error) {
        console.log(error, 'Faild to connect');

    }
}

//middleware 
app.use(express.json())
app.use(cors(corsOption))
app.use(cookieParser())
app.use('api/v1/tours', tourRoute)
app.use('api/v1/users', userRoute)
app.use('api/v1/auth', authRoute)
app.use('api/v1/review', reviewRoute)


app.listen(port, () => {
    connect()
    console.log(`server is runnig on port ${port} `)
})
