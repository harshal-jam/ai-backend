import mongoose from 'mongoose';
const chatbotSchema = new mongoose.Schema({
  // Reference to business
  business_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    // required: true,
  },

  // Unique slug for chatbot
  chatbot_slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  // AI provider (OpenAI, Gemini, etc.)
  ai_provider: {
    type: String,
    enum: ["openai", "gemini", "anthropic", "custom"],
    required: true,
  },

  // Status of chatbot
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
},{timestamps:true});

export default mongoose.model("Chatbot", chatbotSchema);
