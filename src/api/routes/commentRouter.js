import express from "express";
import {
  createComment,
  getComments,
  getComment,
  updateComment
} from "../controllers/commentController";

const commentRouter = express.Router();

commentRouter.post("/", createComment);
commentRouter.get("/", getComments);
commentRouter.get("/:commentId", getComment);
commentRouter.put("/:commentId", updateComment);
commentRouter.delete("/:commentId", () => console.log("55"));

export default commentRouter;
