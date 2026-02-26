import mongoose from 'mongoose';
const subscriptionPlanSchema = new mongoose.Schema({

  plan_name: {
    type: String,
    required: true,
    trim: true,
  },

  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    min: 0,
  },

  duration_days: {
    type: Number,
    required: true,
    min: 1,
  },

  chatbot_enabled: {
    type: Boolean,
    default: false,
  },

  booking_limit: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model(
  "SubscriptionPlan",
  subscriptionPlanSchema
);

