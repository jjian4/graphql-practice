const Category = {
  animals: (parent, args, { animals }) => {
    return animals.filter((x) => x.categoryId === parent.id);
  },
};

module.exports = Category;
