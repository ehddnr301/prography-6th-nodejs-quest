import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      default: Date.now
    },
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
  },
  {
    timestamps: { currentTime: () => Date.now() + 3600000 * 9 }
  }
);

CommentSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
