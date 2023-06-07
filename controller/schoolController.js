const schoolModel = require("../model/schoolmodel")

// to create a school data

const createSchool = async(req,res)=>{
    try{

    const createdSchool = await schoolModel.create(req.body)
    createdSchool.save()
    res.status(200).json({
        message: "the data was created successfully",
        data: createdSchool
    })
}catch(error){
    res.status(400).json("unable to create file")
}};


// to read all data

const readallSchool = async(req,res)=>{
    try{

    const readSchool = await schoolModel.find()
    res.status(200).json({
        message: "the data was created successfully",
        data: readSchool
    })
}catch(error){
    res.status(400).json("unable to create file")
}}


// to get one by id

const readoneSchool = async(req,res)=>{
    try{
    const id= req.params.id
    const oneSchool = await schoolModel.findById(id)
    res.status(200).json({
        message: "this is the information for the id searched",
        data: oneSchool
    })
}catch(error){
    res.status(400).json("unable to create file")
}}

// find by schools name

const findSchool = async(req,res)=>{
    try{
    const {name}= req.params
    const School = await schoolModel.findOne({name})
    console.log(School)
    res.status(200).json({
        message: "this is the names for all the registered schools",
        data: School
    })
}catch(error){
    res.status(400).json("unable to view")
}}

// deleting one file

const updateoneSchool = async(req,res)=>{
    try{
    const id= req.params.id
    const updatedinfo= {
        name: req.body.name || schoolModel.name,
        address: req.body.address || schoolModel.address,
        email: req.body.name || schoolModel.email,
        poppulation: req.body.poppulation || schoolModel.poppulation,
        director: req.body.director || schoolModel.director,
        extraactivities: req.body.extraactivities || schoolModel.extraactivities,
        courses: req.body.courses || schoolModel.courses,
        isPublic: req.body.isPublic || schoolModel.isPublic
    }
    const newinfo = await schoolModel.findByIdAndUpdate(id, updatedinfo)
    res.status(200).json({
        message: "this school information has been updated",
        data: updatedinfo
    })
}catch(error){
    res.status(400).json("unable to create file")
}}


// updating one school

const deleteoneSchool = async(req,res)=>{
    try{
    const id= req.params.id
    const deletedSchool = await schoolModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "this school information has been deleted",
        data: deletedSchool
    })
}catch(error){
    res.status(400).json("unable to create file")
}}


module.exports={createSchool,readallSchool, readoneSchool, deleteoneSchool, updateoneSchool, findSchool}