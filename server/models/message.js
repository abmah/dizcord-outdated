const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name cant be that long"],
  },
  message: {
    type: String,
    required: [true, "please write your message !"],
    maxlength: [300, "message must be less than 300 letters"],
  },
});

module.exports = mongoose.model("Message", MessageSchema);
