const mongoose = require("mongoose");
const validator = require("validator");

const chatSchema = new mongoose.Schema({
    
    from:{
        type: String,
        required: true,
    }, 
    to:{
        type: String,
        required: true,
    },
    text:{
        type: String,
        required: true,
    }
  
});

const Chat = new mongoose.model('chat', chatSchema);
module.exports = Chat;