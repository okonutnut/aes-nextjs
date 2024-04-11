import mongoose, { Schema, models } from "mongoose";

const EnrolleeSchema = new Schema({
  // Learner's Information
  "student_id": String,
  "lrn": String,
  "first_name": String,
  "middle_name": String,
  "last_name": String,
  "gender": String,
  "year_level_section": String,

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

const Enrollee = models.Enrollee || mongoose.model("Enrollee", EnrolleeSchema);
export default Enrollee;