const mongoose = require("mongoose");
const validator = require("validator");

const cartSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true    
    },  
    image:
       { 
        type: String,
        required: true 
    },
      text:
       {
         type: String,
       required: true 
    },
    price:{
        type: Number,
        required: true 
     },
     quantity:{
       type: Number,
       required: true
     },
  });

const Cart = new mongoose.model('cart', cartSchema);
module.exports = Cart;