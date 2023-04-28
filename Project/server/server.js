const express = require('express')
const app  = express();
const mongoose = require('mongoose')
const job = require('./Routes/JobRouter')
const cors = require('cors')
const connectDb = require('./Database/ConnectDb')
const PORT = process.env.PORT || 4000
const schema = require('./Models/SignUpModel')
require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use('/', job)  


const start =async()=>{
    try {
        await connectDb(process.env.MONGO_URL)
        app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))
    } catch (error) {
        console.log(error); 
    }
}

start()
