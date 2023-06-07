const express = require("express")
const router = express.Router()
const {createSchool, readallSchool, readoneSchool, deleteoneSchool, updateoneSchool, findSchool} = require("../controller/schoolController")

router.get("/", (req,res)=>{
    res.send("WELCOME TO OUR SCHOOL API")
});

router.post("/create", createSchool);
router.get("/getall", readallSchool),
router.get("/getone/:id", readoneSchool),
router.delete("/deleteone/:id", deleteoneSchool),
router.put("/updateone/:id", updateoneSchool),
router.get("/school/:name", findSchool)



module.exports=router