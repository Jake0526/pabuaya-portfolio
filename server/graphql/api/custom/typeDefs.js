import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    welcome: [Welcome]
  }
`;

export default typeDefs;
