function matchJobs(userskills,jobs){
    if(!jobs ||jobs.length===0){
        return []
    }

const normalizedUserSkills = userskills.map(s=> s .toLowerCase());

    let matched=[];

    jobs.forEach(job => {
        let score=0;

        if(!job.Skills) 
            return;
        job.Skills.forEach(skill=>{
            if(typeof skill==="string" && normalizedUserSkills.includes(skill.toLowerCase())){
                score++;
            }
        });
        if (score>0){
            matched.push({job , score});
        }
        
    });

    return matched.sort((a,b)=>b.score-a.score)
}

module.exports = matchJobs;