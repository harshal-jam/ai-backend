const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['business_admin', 'employee', 'super_admin'],
    // required: true
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  // status: {
  //   type: String,
  //   enum: ['active', 'inactive', 'suspended'],
  //   default: 'active'
  // },
  last_login: {
    type: Date
  },
},{timestamps:true});

module.exports = mongoose.model('User', userSchema);