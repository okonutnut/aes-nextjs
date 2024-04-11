import mongoose, {Schema, models} from "mongoose";

const yearSectionSchema = new Schema(
  {
    year_level: String,
    section_name: String,
    adviser: String,
    room: String
  }, 
  { timestamps: true }
);

const yearSection = models.yearSection || mongoose.model('yearSection', yearSectionSchema);
export default yearSection;