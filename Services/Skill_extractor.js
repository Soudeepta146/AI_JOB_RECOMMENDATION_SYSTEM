const skills=[
    "javascript",
    "react",
    "nodejs",
    "mongodb",
    "python",
    "java",
    "express",
    "sql"
]

function extractSkills(text){
    if(!text){
        return[]
    }
text= text.toLowerCase();
let foundskills=[]
skills.forEach(skill =>{
    if (text.includes(skill)){
        foundskills.push(skill)
    }
})
return foundskills;
}

module.exports=extractSkills