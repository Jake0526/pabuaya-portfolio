import { gql } from 'apollo-server-express';

const typeDefs = gql`
    extend type Mutation {
      createUser(input: InputUser!): InsertQueryResponse
      updateUser(input: InputUser!): InsertQueryResponse
      deleteUser(_id: String): UpdateDeleteQueryResponse
      createCategory(input: InputCategory!): InsertQueryResponse
    }

    type InsertQueryResponse {
        message: String
        status: String
        insertedID: String
    }

    type UpdateDeleteQueryResponse {
        message: String
        status: String
    }

    input InputUser {
      _id: String
      profileCode: String
      email: String
      password: String
      name: String
      clientType: String
      createdAt: String
      createdBy: String
      updatedAt: String
      updatedBy: String
    }

    input InputCategory {
      _id: String
      name: String
      parentID: String
      isActive: Boolean
      photo: String
      video: String
      createdAt: String
      createdBy: String
      updatedAt: String
      updatedBy: String
    }
`;

export default typeDefs;
