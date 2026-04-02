const express=require('express');
const app=express();
const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://soudeepta2004bhattacharjee_db_user:s0DDEN6lg1odSUFS@cluster0.ecnbv0b.mongodb.net/jobrecommender")
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log(err));

const jobRoutes=require("./Routes/Jobroutes");

app.use(express.json())

app.use('/api/job',jobRoutes);

app.listen(3000,()=>{
    console.log("server running at port 3000")
});