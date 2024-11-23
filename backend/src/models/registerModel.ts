import mongoose, { Schema, Document, Model } from "mongoose";
import { hashedPassword } from "../utils/bcrypt";

interface NewUser extends Document {
  email: string;
  password: string;
  username: string;
  isAdmin: boolean;
}

const NewUserSchema = new Schema<NewUser>({
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Username is required!"],
  },
  email: {
    type: String,
    required: [true, "Username is required!"],
  },
});

NewUserSchema.pre("save", async function (next) {
  // If the password is not modified!
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await hashedPassword(this.password, 10);
});

const NewUserModel =
  (mongoose.models.Users as Model<NewUser>) ||
  mongoose.model("User", NewUserSchema);

export default NewUserModel;
