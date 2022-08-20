const Message = require("../models/message");

const getAllMessages = async (req, res) => {
  const message = await Message.find({});
  res.status(200).json({ message });
};

const addNewMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ message });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllMessages,
  addNewMessage,
};
