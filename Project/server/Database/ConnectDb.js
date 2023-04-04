const mongoose = require('mongoose')


const connectDb = (url)=>{
    mongoose.connect(url,
    {
        useUnifiedTopology:true,
        UseNewUrlParser:true,

    })
    .then(()=>console.log("Database connected"))
    .catch(error=>console.log(error))
}

module.exports = connectDb;
