import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    users: [User]
    messages: [Message]
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

  type Message {
    _id: String
    budget: String
    targetCompletion: String
    fullName: String
    email: String
    message: String
    createdAt: String
    createdBy: String
    updatedAt: String
    updatedBy: String
  }
`;

export default typeDefs;
