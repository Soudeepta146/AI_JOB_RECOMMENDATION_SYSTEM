const mongoose = require("mongoose");
const Job = require("./Models/Job_models");

mongoose.connect("mongodb+srv://soudeepta2004bhattacharjee_db_user:s0DDEN6lg1odSUFS@cluster0.ecnbv0b.mongodb.net/jobrecommender")
  .then(async () => {
    console.log("DB connected");

    await Job.create([
        {
        Title: "Backend Developer",
        Company_name: "Google",
        Skills: ["node", "express", "mongodb"],
        Location: "Bangalore",
        contact: 9876543210,
        Salary: "12 LPA"
      },
      {
        Title: "Java Developer",
        Company_name: "Infosys",
        Skills: ["java", "spring", "sql"],
        Location: "Hyderabad",
        contact: 9123456780,
        Salary: "10 LPA"
      },
      {
        Title: "Full Stack Developer",
        Company_name: "Amazon",
        Skills: ["react", "node", "express"],
        Location: "Delhi",
        contact: 9988776655,
        Salary: "15 LPA"
      }
    ]);

    console.log("Jobs inserted ✅");
    process.exit();
  })
  .catch(err => console.log(err));