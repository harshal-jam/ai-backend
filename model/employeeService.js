import mongoose from 'mongoose';
const employeeServiceSchema = new mongoose.Schema({
  employee_id: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    // required: true,
  },

  service_id: {
    type: Schema.Types.ObjectId,
    ref: "Service",
    // required: true,
  },
});
export default mongoose.model('Employeeservice',employeeServiceSchema)
