const mongoose = require("mongoose")
const schoolSchema = new mongoose.Schema({
     name:{
        type: String,
        required:[true,"name is required"]
     },
     address:{
        type: String,
        required:[true, "address is required"]
     },
     email:{
        type: String,
        required:[true, "email is required"],
        unique: true
     },
     poppulation:{
        type: Number
        },
     director:{
        type: String,
     },
     extraactivities:{
        type: Object,
        required:[true, "extraactivities is required"]
     },
     courses:{
        type: Array,
        required:[true, "courses is required"]
     },
     isPublic:{
        type: Boolean,
        required:[true, "isPuplic is required"]
     }
}
)

const schoolModel = mongoose.model("school Api", schoolSchema)

module.exports= schoolModel