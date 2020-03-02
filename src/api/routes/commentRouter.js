import express from "express";
import { createComment } from "../controllers/commentController";

const commentRouter = express.Router();

commentRouter.post("/", createComment);
commentRouter.get("/", () => console.log("22"));
commentRouter.get("/:commentId", () => console.log("33"));
commentRouter.put("/:commentId", () => console.log("44"));
commentRouter.delete("/:commentId", () => console.log("55"));

export default commentRouter;
