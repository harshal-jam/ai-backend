import mongoose from 'mongoose';
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
phone: {
    type: String,
    trim: true,
  },
staff_name:{
  type:String,
  trim:true
},
  service:{
    type:String,
  },
  price:{
    type:mongoose.Schema.Types.Decimal128,

  },
  date:{
    type:String,
  },
  time:{
    type:String
  },
  payment:{
    type:String
  },
  status:{
    type:String
  },
},{timestamps:true});
export default mongoose.model("Appointment", appointmentSchema);
