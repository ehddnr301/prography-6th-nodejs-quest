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

export const filter = async value => {
  try {
    return Todo.find({
      title: { $regex: value, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
};
