const ChatbotConversation = require('../model/chatbot_conversation');

// Create a new chatbot conversation
exports.createConversation = async (req, res) => {
  try {
    const conversation = await ChatbotConversation.create(req.body);
    res.status(201).json({ success: true, data: conversation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single conversation by ID
exports.findConversation = async (req, res) => {
  try {
    const conversation = await ChatbotConversation.findById(req.params.id);
    if (!conversation) {
      return res.status(404).json({ success: false, message: 'Conversation not found' });
    }
    res.status(200).json({ success: true, data: conversation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a conversation by ID
exports.updateConversation = async (req, res) => {
  try {
    const conversation = await ChatbotConversation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!conversation) {
      return res.status(404).json({ success: false, message: 'Conversation not found' });
    }
    res.status(200).json({ success: true, data: conversation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a conversation by ID
exports.deleteConversation = async (req, res) => {
  try {
    const conversation = await ChatbotConversation.findByIdAndDelete(req.params.id);
    if (!conversation) {
      return res.status(404).json({ success: false, message: 'Conversation not found' });
    }
    res.status(200).json({ success: true, message: 'Conversation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};