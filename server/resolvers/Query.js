const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) => {
    return animals.find((x) => x.slug === args.slug);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    return categories.find((x) => x.slug === args.slug);
  },
};

module.exports = Query;
