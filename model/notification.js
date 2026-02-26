import mongoose from 'mongoose';
const notificationSchema = new mongoose.Schema({
  
  business_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    // required: true,
  },

  appointment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment",
    // required: true,
  },

  type: {
    type: String,
    enum: ["email", "sms", "whatsapp", "push"],
    required: true,
  },

  recipient: {
    type: String,
    required: true,
    trim: true,
  },

  subject: {
    type: String,
    trim: true,
  },

  status: {
    type: String,
    enum: ["pending", "sent", "failed"],
    default: "pending",
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Notification", notificationSchema);
