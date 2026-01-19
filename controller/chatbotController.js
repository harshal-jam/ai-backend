const Chatbot = require('../model/chatbots');

// Create a new chatbot
exports.createChatbot = async (req, res) => {
  try {
    const chatbot = await Chatbot.create(req.body);
    res.status(201).json({ success: true, data: chatbot });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single chatbot by ID
exports.findChatbot = async (req, res) => {
  try {
    const chatbot = await Chatbot.findById(req.params.id);
    if (!chatbot) {
      return res.status(404).json({ success: false, message: 'Chatbot not found' });
    }
    res.status(200).json({ success: true, data: chatbot });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a chatbot by ID
exports.updateChatbot = async (req, res) => {
  try {
    const chatbot = await Chatbot.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!chatbot) {
      return res.status(404).json({ success: false, message: 'Chatbot not found' });
    }
    res.status(200).json({ success: true, data: chatbot });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a chatbot by ID
exports.deleteChatbot = async (req, res) => {
  try {
    const chatbot = await Chatbot.findByIdAndDelete(req.params.id);
    if (!chatbot) {
      return res.status(404).json({ success: false, message: 'Chatbot not found' });
    }
    res.status(200).json({ success: true, message: 'Chatbot deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};