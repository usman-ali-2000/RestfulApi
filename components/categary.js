const mongoose = require("mongoose");
const validator = require("validator");

const categarySchema = new mongoose.Schema({
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
  });

const uploadImage = new mongoose.model('uploadImage', categarySchema);
module.exports = uploadImage;