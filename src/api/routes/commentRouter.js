import express from "express";
import {
  createComment,
  getComments,
  getComment
} from "../controllers/commentController";

const commentRouter = express.Router();

commentRouter.post("/", createComment);
commentRouter.get("/", getComments);
commentRouter.get("/:commentId", getComment);
commentRouter.put("/:commentId", () => console.log("44"));
commentRouter.delete("/:commentId", () => console.log("55"));

export default commentRouter;
