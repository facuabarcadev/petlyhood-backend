import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    firebaseUID: string;
    name: string;
    email: string;
    profileImage?: string;
}

const UserSchema: Schema = new Schema(
    {
        firebaseUID: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        profileImage: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);