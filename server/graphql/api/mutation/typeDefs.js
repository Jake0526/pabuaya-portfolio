import { gql } from 'apollo-server-express';

const typeDefs = gql`
    extend type Mutation {
      createUser(input: InputUser!): InsertQueryResponse
      updateUser(input: InputUser!): InsertQueryResponse
      deleteUser(_id: String): UpdateDeleteQueryResponse
      createMessage(input: InputMessage!): InsertQueryResponse
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

    input InputMessage {
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
