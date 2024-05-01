import mongoose, { Schema, models } from "mongoose";

const StudentSchema = new Schema({
  // Learner's Information
  "student_id": {
    type: String,
    required: true,
    unique: true,
  },
  "first_name": String,
  "middle_name": String,
  "last_name": String,
  "birthday": String,
  "lrn": String,
  "gender": String,
  "student_type": String,

  // Address & Contact Information
  "purok": String,
  "barangay": String,
  "municipality": String,
  "province": String,
  "zip_code": String,
  "father_name": String,
  "father_contact": String,
  "mother_name": String,
  "mother_contact": String,
}, { timestamps: true });

const Student = models.Student || mongoose.model("Student", StudentSchema);
export default Student;