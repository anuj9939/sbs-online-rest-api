const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.ObjectId,
      required: [true, "Please enter product name"],
    },
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    email: {
      type: Number,
      required: true,
      default: 0,
    },

    phone: {
      type: Number,
      required: true,
      default: 0,
    },

    gender: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;