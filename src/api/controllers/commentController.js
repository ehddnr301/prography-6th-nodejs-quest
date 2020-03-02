import Todo from "../../models/Todo";
import Comment from "../../models/Comment";

export const createComment = async (req, res) => {
  const {
    baseUrl,
    body: { contents }
  } = req;
  const todoId = baseUrl.split("/")[2];

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
