const mongoose = require("mongoose");
const validator = require("validator");

const customerSchema = new mongoose.Schema({
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

const Customer = new mongoose.model('Customer', customerSchema);
module.exports = Customer;