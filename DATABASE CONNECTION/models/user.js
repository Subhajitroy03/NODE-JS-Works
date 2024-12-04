const mongoose=require("mongoose")
const userschema=new mongoose.Schema(
    {
        Roll:{
            type: Number,
            required: true,
            unique: true,
        },
        Name:{
            type: String,
            required: true,
        },
        Department:{
            type: String,
            required: true,
        },
        Semester:{
            type: Number,
            required: true,
        },
        Gender:{
            type: String,
        },
        Mail:{
            type: String,
            required: true,
        },
    }
)
const Users=mongoose.model('Students',userschema);
module.exports=Users;