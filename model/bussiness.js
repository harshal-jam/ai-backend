const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    // required: true
  },
  business_name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  about: {
    type: String
  },
  working_days: {
  type: String,
  enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
},
  opening_time: {
    type: String // or Date if using full datetime
  },
  closing_time: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Business', businessSchema);