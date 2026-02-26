import mongoose from 'mongoose';

const WorkingHourSchema = new mongoose.Schema(
  {
    day: { type: String, required: true },
    from: { type: String },
    to: { type: String },
    isDayOff: { type: Boolean, default: false },
  },
  { _id: false }
);

const StaffSchema = new mongoose.Schema(
  {
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
      type: [WorkingHourSchema],
      default: [],
    },
  },
  { timestamps: true } // ✅ options go here
);
export default mongoose.model("Staff", StaffSchema);