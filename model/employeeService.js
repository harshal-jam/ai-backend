const mongoose=require('mongoose')
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
module.exports=mongoose.model('Employeeservice',employeeServiceSchema)
