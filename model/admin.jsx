import mongoose, {Schema, models} from "mongoose";

const adminSchema = new Schema(
  {
    admin_id: String,
    name: String,
    email: String,
    password: String,
  }
);

const Admins = models.Admins || mongoose.model("Admins", adminSchema)
export default Admins;