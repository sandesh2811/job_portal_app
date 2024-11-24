import mongoose, { Schema, Document, Model } from "mongoose";
import { hashedPassword } from "../../utils/bcrypt";

export interface NewUser extends Document {
  email: string;
  password: string;
  username: string;
  role: string;
}

// Schema definition

const NewUserSchema = new Schema<NewUser>(
  {
    username: {
      type: String,
      required: [true, "Username is required!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
    },
    role: {
      type: String,
      required: [true, "Role is required!"],
    },
  },
  { timestamps: true }
);

// Performing hashing of password before saving user to the database

NewUserSchema.pre("save", async function (next) {
  // If the password is not modified!
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await hashedPassword(this.password, 10);
});

// Creating a new user model with the schema defined above

const NewUserModel =
  (mongoose.models.Users as Model<NewUser>) ||
  mongoose.model("User", NewUserSchema);

export default NewUserModel;
