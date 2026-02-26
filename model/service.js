import mongoose from 'mongoose';
const serviceSchema = new mongoose.Schema({
  business_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    // required: true
  },
  title: {
    type: String,
    required: true
  },
   category: {
    type: String,
    required:true
  },
  duration: {
    type: String,
    required: true
  },
   price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    // default: 'active'
  }
}, {
  timestamps: true 
});

export default mongoose.model('Service', serviceSchema);
