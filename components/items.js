const mongoose = require("mongoose");
const validator = require("validator");

const itemsSchema = new mongoose.Schema({
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
  });

const Item = new mongoose.model('item', itemsSchema);
module.exports = Item;