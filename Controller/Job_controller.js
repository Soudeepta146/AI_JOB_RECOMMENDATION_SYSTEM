const fs=require('fs')
const pdfparse=require('pdf-parse');

const extractSkills= require('../Services/Skill_extractor')
const matchJobs= require('../Services/Job_matcher')

const Job =require('../Models/Job_models')
const Resume= require('../Models/Resume_model')

console.log("API HIT");
async function uploadSkills(req,res) {
    console.log("file: ",req.file);
    try{
        const file= req.file;
        if (!file){
            return res.send("No file uploaded");
        } 
        
        const dataBuffer=fs.readFileSync(file.path);
        const data= await pdfparse(dataBuffer);
        const text=data.text;
        console.log("Text:", text);
        
        const skills=extractSkills(text)
        console.log("Skills:", skills);

        await Resume.create({
            Name: "Soudeepta",
            Skill: skills,
            Resume_Path: file.path
        });
        
        const jobs=await Job.find();
        const result = matchJobs(skills, jobs);
        const recommendations= result.map(item => ({
            Title: item.job.Title,
            Company_name: item.job.Company_name,
            Skills: item.job.Skills,
            Location: item.job.Location,
            Salary: item.job.Salary,
            matchScore: item .score
        }))
        res.send({
            extractedSkills: skills,
            recommendedJobs: recommendations
        });
    }
    catch (error){
        console.log("Error", error);
        res.send("error processing resume")
    }
}

module.exports={uploadSkills}