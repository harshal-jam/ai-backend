    import mongoose from 'mongoose';
    const chatbotConversationSchema = new mongoose.Schema({
    // Reference to chatbot
    chatbot_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chatbot",
        // required: true,
    },

    // Session identifier (per user chat session)
    session_id: {
        type: String,
        required: true,
        trim: true,
    },

    // User message
    user_message: {
        type: String,
        required: true,
    },

    // AI response
    ai_response: {
        type: String,
        required: true,
    },
    },{timestamps:true});

    export default mongoose.model(
    "ChatbotConversation",
    chatbotConversationSchema
    );
