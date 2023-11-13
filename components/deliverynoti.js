const mongoose = require("mongoose");
const validator = require("validator");


const deliverynotiSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:3
    },
    email:{
        type: String,
        required:true,
    },
    address:{
        type:String,
        required:true, 
    },
    billid:{
    type:String,
    required: true,
    },
    pushtoken:{
        type: String,
        require:true
    },
    status:{
        type: String,
        required: true,
    }
});

const Deliverynoti = new mongoose.model('Deliverynoti', deliverynotiSchema);
module.exports = Deliverynoti;