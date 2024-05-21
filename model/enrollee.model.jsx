import mongoose, { Schema, models } from "mongoose";

const EnrolleeSchema = new Schema({
  // Learner's Information
  "student_id": String,
  "student_name": String,
  "year_level": String,
  "track": String,
  "strand": String,
  "section_name": String,
  "student_type": String,
  "semester": String,
  "school_year": String,
}, { timestamps: true });

const Enrollee = models.Enrollee || mongoose.model("Enrollee", EnrolleeSchema);
export default Enrollee;