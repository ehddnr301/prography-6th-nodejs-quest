import express from "express";
import {
  createComment,
  getComments,
  getComment,
  updateComment,
  removeComment
} from "../controllers/commentController";

const commentRouter = express.Router();

commentRouter.post("/", createComment);
commentRouter.get("/", getComments);
commentRouter.get("/:commentId", getComment);
commentRouter.put("/:commentId", updateComment);
commentRouter.delete("/:commentId", removeComment);

export default commentRouter;
