import mongoose, {Schema, models} from "mongoose";

const adminSchema = new Schema(
  {
    admin_id: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    email: String,
    password: String,
    role: String,
  }, {
    timestamps: true,
  }
);

const Admins = models.Admins || mongoose.model("Admins", adminSchema)
export default Admins;