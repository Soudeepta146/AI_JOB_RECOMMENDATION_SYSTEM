const express=require('express');
const app=express();
const mongoose=require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log(err));

const jobRoutes=require("./Routes/Jobroutes");

app.use(express.json())

app.use('/api/job',jobRoutes);

app.listen(process.env.PORT,()=>{
    console.log("server running at port 3000")
});