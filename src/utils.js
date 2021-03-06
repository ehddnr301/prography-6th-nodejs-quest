import Todo from "./models/Todo";

export const isSortDesc = req => {
  if (req.query.order) {
    const {
      query: {
        order: { createdAt }
      }
    } = req;

    if (createdAt === "desc") {
      return true;
    } else if (createdAt === "asc") {
      return false;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export const search = req => {
  if (req.query) {
    const {
      query: { title }
    } = req;
    const {
      query: { description }
    } = req;
    const {
      query: { tags }
    } = req;
    if (title) {
      return title;
    } else if (description) {
      return description;
    } else if (tags) {
      return tags;
    }
  }
};

export const filter = async (value, type) => {
  try {
    if (type === "title") {
      return Todo.find({
        title: { $regex: value, $options: "i" }
      });
    } else if (type === "description") {
      return Todo.find({
        description: { $regex: value, $options: "i" }
      });
    } else {
      return Todo.find({
        tags: { $in: [...value] }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const validationFailed = (err, res) => {
  const { name, _message: message } = err;
  if (name === "ValidationError") {
    res
      .status(400)
      .json(message)
      .end();
  } else if (name === "CastError") {
    res
      .status(404)
      .json("Page Not Found")
      .end();
  }
};
