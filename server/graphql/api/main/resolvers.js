import db from "../../data/collection.js";

function findParentCategory(messages, parentId) {
  for (const category of messages) {
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
    async messages(obj, args) {
      return await db.collection("messages").find().toArray();
    },
  },
};

export default resolvers;
