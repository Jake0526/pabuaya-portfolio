import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    users: [User]
    categories: [Category]
  }

  type User {
    _id: String
    profileCode: String
    email: String
    password: String
    name: String
    createdAt: String
    createdBy: String
    updatedAt: String
    updatedBy: String
  }

  type Category {
    _id: String
    name: String
    parentID: String
    isActive: Boolean
    photo: String
    video: String
    subCategories: [Category]
    createdAt: String
    createdBy: String
    updatedAt: String
    updatedBy: String
  }
`;

export default typeDefs;
