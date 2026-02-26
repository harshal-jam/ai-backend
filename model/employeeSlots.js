import mongoose from 'mongoose';
const employeeSlotSchema = new mongoose.Schema({
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    // required: true,
  },

  day_of_week: {
    type: String,
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    required: true,
  },

  start_time: {
    type: String, 
    required: true,
  },

 
  end_time: {
    type: String, 
    required: true,
  },

  
  is_available: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("EmployeeSlot", employeeSlotSchema);
