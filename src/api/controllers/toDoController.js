import Todo from "../../models/Todo";
import { isSortDesc, search, filter, validationFailed } from "../../utils";

export const createTodo = async (req, res) => {
  const {
    body: { title, description, tags }
  } = req;

  try {
    const todo = await Todo.create({
      title,
      description,
      tags
    });
    res
      .status(200)
      .json(todo)
      .end();
  } catch (error) {
    validationFailed(error, res);
  }
};

export const getTodos = async (req, res) => {
  let sortDesc;
  let searchTerm;
  const field = Object.keys(req.query)[0];

  if (req.query !== null) {
    sortDesc = isSortDesc(req);
    searchTerm = search(req);
  }

  try {
    let todos;

    if (sortDesc) {
      todos = await Todo.find({}).sort({ createdAt: -1 });
    } else if (sortDesc === false) {
      todos = await Todo.find({}).sort({ createdAt: 1 });
    } else {
      todos = await Todo.find({});
    }

    if (field === "title") {
      todos = await filter(searchTerm, "title");
    } else if (field === "description") {
      todos = await filter(searchTerm, "description");
    } else if (field === "tags") {
      todos = await filter(searchTerm, "tags");
    }

    res
      .status(200)
      .json(todos)
      .end();
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (req, res) => {
  const {
    params: { todoId }
  } = req;

  try {
    const todo = await Todo.findById({ _id: todoId });
    res
      .status(200)
      .json(todo)
      .end();
  } catch (error) {
    validationFailed(err, res);
  }
};

export const updateTodo = async (req, res) => {
  const {
    params: { todoId },
    body: { title }
  } = req;

  try {
    const updateTodo = await Todo.findOneAndUpdate(
      { _id: todoId },
      { title: title },
      {
        new: true
      }
    );
    res
      .status(200)
      .json(updateTodo)
      .end();
  } catch (error) {
    validationFailed(err, res);
  }
};

export const completeTodo = async (req, res) => {
  const {
    params: { todoId }
  } = req;

  try {
    const completeTodo = await Todo.findOneAndUpdate(
      { _id: todoId },
      { isCompleted: true },
      { new: true }
    );
    res
      .status(200)
      .json(completeTodo)
      .end();
  } catch (error) {
    validationFailed(err, res);
  }
};

export const removeTodo = async (req, res) => {
  const {
    params: { todoId }
  } = req;

  try {
    await Todo.findOneAndRemove({ _id: todoId });
    res
      .status(200)
      .json({ msg: "success" })
      .end();
  } catch (error) {
    validationFailed(err, res);
  }
};
