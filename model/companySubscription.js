import mongoose from 'mongoose';
const companySubscriptionSchema = new mongoose.Schema({
  
  business_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    // required: true,
  },

  
  plan_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubscriptionPlan",
    // required: true,
  },

  
  start_date: {
    type: Date,
    required: true,
    default: Date.now,
  },

  
  end_date: {
    type: Date,
    required: true,
  },


  status: {
    type: String,
    enum: ["active", "expired", "cancelled"],
    default: "active",
  },
});

export default mongoose.model(
  "CompanySubscription",
  companySubscriptionSchema
);
