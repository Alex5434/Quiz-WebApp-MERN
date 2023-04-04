const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    testname:{
        type:String
    },
    score:{
        type:Number,
    },
    completed:{
        type:Boolean,
        default:false
    }
    
})

const signup = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    tests:{
        type:[courseSchema]
    }
})

module.exports = mongoose.model("UserDetail", signup)