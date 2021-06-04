const Category = {
  animals: (parent, args, { animals }) => {
    return animals.filter((x) => x.category === parent.id);
  },
};

module.exports = Category;
