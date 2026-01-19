const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  business_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    // required: true
  },
  service_name: {
    type: String,
    required: true
  },
  duration_minutes: {
    type: Number,
    required: true
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Service', serviceSchema);
