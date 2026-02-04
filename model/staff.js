const mongoose = require("mongoose");
// const WorkingHourSchema = new mongoose.Schema({
//   day: {
//     type: String,
//     enum: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
//   },
//   from: {
//     type: String,
//     default: null,
//   },
//   to: {
//     type: String,
//     default: null,
//   },
//   Of: {
//     type: Boolean,
//     default: false,
//   },
// });

const StaffSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  services: [
    {
      type: String,
    },
  ],
  workingHours: {
  day: {
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  from: {
    type: String,
    default: null
  },
  to: {
    type:String,
    default: null
  },
  Of: {
    type: Boolean,
    default: false
  }
}

}, { timestamps: true });

module.exports = mongoose.model("Staff", StaffSchema);