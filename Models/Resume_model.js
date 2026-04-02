const mongoose= require('mongoose')
const ResumeSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },

    Skill:[{
        type:[String]
    }],

    Resume_Path:{
        type: String
    },

    uploadedAt:{
        type:Date,
        default: Date.now
    }
})

module.exports= mongoose.model("Resume", ResumeSchema)