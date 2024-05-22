import mongoose, { Schema, models } from "mongoose";

const SubjectSchema = new Schema({
  // Learner's Information
  "code": {
    type: String,
    required: true,
    unique: true,
  },
  "name": String,
  "year_level": String,
  "strand": String,
  "type": String,
}, { timestamps: true });

const Subjects = models.Subjects || mongoose.model("Subjects", SubjectSchema);
export default Subjects;