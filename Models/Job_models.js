const mongoose=require('mongoose');
const jobSchema= new mongoose. Schema({
    Title:{
        type: String,
        required: true
    },

    Company_name:{
        type: String,
        required :true
    },

    Skills: {
        type :[String]
    },

    Location:{
        type: String
    },

    contact:{
        type: Number
    },

    Salary:{
        type: String
    },

    CreatedAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Job", jobSchema);
