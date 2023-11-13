const mongoose = require("mongoose");
const validator = require("validator");

const billSchema = new mongoose.Schema({
    date:{
        type: Date,
        required: true 
    },
    name:{
        type: String,
        require: true
    },
    address:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true 
    },
    phone:{
        type: Number,
        required: true
    },
    category:[{
        type: String,
        required: true    
    }],
      text:
       [{
         type: String,
       required: true 
    }],
    price:[{
        type: Number,
        required: true 
     }],
     quantity:[{
       type: Number,
       required: true
     }],
     delivery:{
        type: Number,
        required: true
     },
     tax:{
      type: String,
      required: true
     },
     total:{
        type: Number,
        required: true
     },
     status:{
        type: String,
        require: true
     }
  });

const Bill = new mongoose.model('bill', billSchema);
module.exports = Bill;