import express from "express";
import commentRouter from "./commentRouter";
import {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  completeTodo,
  removeTodo
} from "../controllers/toDoController";

const toDoRouter = express.Router();

toDoRouter.post("/", createTodo);
toDoRouter.get("/", getTodos);
toDoRouter.get("/:todoId", getTodo);
toDoRouter.put("/:todoId", updateTodo);
toDoRouter.put("/:todoId/complete", completeTodo);
toDoRouter.delete("/:todoId", removeTodo);

export default toDoRouter;
