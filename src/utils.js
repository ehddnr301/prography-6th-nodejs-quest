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
