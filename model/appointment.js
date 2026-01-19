const mongoose = require('mongoose')
const appointmentSchema = new mongoose.Schema({
  // Reference to business
  business_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    // required: true,
  },

  // Reference to service
  service_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    // required: true,
  },

  // Reference to employee
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    // required: true,
  },

  // Customer details
  customer_name: {
    type: String,
    required: true,
    trim: true,
  },

  customer_email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

  customer_phone: {
    type: String,
    trim: true,
  },

  // Appointment date (only date part)
  appointment_date: {
    type: Date,
    required: true,
  },

  // Appointment start time
  start_time: {
    type: String, // "HH:mm"
    required: true,
  },

  // Appointment end time
  end_time: {
    type: String, // "HH:mm"
    required: true,
  },

  // Booking source (web, admin, chatbot, etc.)
  booking_source: {
    type: String,
    enum: ["web", "admin", "chatbot", "mobile"],
    default: "web",
  },

  // Appointment status
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled", "no_show"],
    default: "pending",
  },
},{timestamps:true});
module.exports = mongoose.model("Appointment", appointmentSchema);
