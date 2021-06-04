const Animal = {
  category: (parent, args, { categories }) => {
    return categories.find((x) => x.id === parent.categoryId);
  },
};

module.exports = Animal;
