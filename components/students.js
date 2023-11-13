const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:3
    },
    email:{
        type: String,
        required:true,
        unique:[true, "email already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:String,
        required:true,
        min:10,
        unique:true
    },
    address:{
        type:String,
        required:true,
       
    },
    password:{
        type: String,
        require:true
    },
    pushtoken:{
        type: String,
        require:true
    },
});

const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;