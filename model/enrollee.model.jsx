import mongoose, { Schema, models } from "mongoose";

const EnrolleeSchema = new Schema({
  // Learner's Information
  "admin_id": String,
  "student_id": String,
  "year_level_section": String,
  "student_type": String,
  "semester": String,
  "school_year": String,
}, { timestamps: true });

const Enrollee = models.Enrollee || mongoose.model("Enrollee", EnrolleeSchema);
export default Enrollee;