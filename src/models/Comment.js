import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema({
  contents: {
    type: String,
    required: "Contents is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

CommentSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
