import db from "../../data/collection.js";

function findParentCategory(categories, parentId) {
  for (const category of categories) {
    if (category._id.toString() === parentId.toString()) {
      return category;
    } else if (category.subCategories.length > 0) {
      const foundCategory = findParentCategory(category.subCategories, parentId);
      if (foundCategory) {
        return foundCategory;
      }
    }
  }
  return null;
}

const resolvers = {
  Query: {
    async users(obj, args) {
      const users = await db.collection("users");

      return users.find().toArray();
    },
    async categories(obj, args) {
      const categories = await db.collection("categories").find().toArray();

      const categoriesT = [];
      categories.forEach(category => {
        categoriesT.push({
          ...category,
          subCategories: []
        });
      });

      const structuredCategories = [];
      categoriesT.forEach(category => {
        if (!category.parentID) {
          // Top-level category
          structuredCategories.push(category);
        } else {
          // Find the parent category recursively
          const parentCategory = findParentCategory(structuredCategories, category.parentID);
          if (parentCategory) {
            parentCategory.subCategories.push(category);
          }
        }
      });

      return structuredCategories;
    },
  },
};

export default resolvers;
