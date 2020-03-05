import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      default: Date.now
    },
    title: {
      type: String,
      required: "Title is required"
    },
    description: {
      type: String,
      required: "Description is required"
    },
    tags: {
      type: Array,
      required: "tags are required"
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: () => Date.now() + 3600000 * 9
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    comments: [
      {
        type: Number,
        ref: "Comment"
      }
    ]
  },
  {
    timestamps: { currentTime: () => Date.now() + 3600000 * 9 }
  }
);

TodoSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  }
});

const model = mongoose.model("Todo", TodoSchema);
export default model;
