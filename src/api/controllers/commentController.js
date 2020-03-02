import Todo from "../../models/Todo";
import Comment from "../../models/Comment";

const getTodoId = base => base.split("/")[2];

export const createComment = async (req, res) => {
  const {
    baseUrl,
    body: { contents }
  } = req;
  const todoId = getTodoId(baseUrl);

  try {
    const todo = await Todo.findById(todoId);
    const newComment = await Comment.create({
      contents
    });
    todo.comments.push(newComment.id);
    todo.save();
    res
      .status(200)
      .json(newComment)
      .end();
  } catch (error) {
    console.log(error);
  }
};

export const getComments = async (req, res) => {
  const { baseUrl } = req;
  const todoId = getTodoId(baseUrl);
  try {
    const todo = await Todo.findById(todoId).populate("comments");
    const comments = todo.comments;
    res
      .status(200)
      .json(comments)
      .end();
  } catch (error) {
    console.log(error);
  }
};
