import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/federation';
import cors from 'cors';
import CryptoJS from 'crypto-js';

import mainTypeDefs from './api/main/typeDefs.js';
import mainResolver from './api/main/resolvers.js';

// import customTypeDefs from './api/custom/typeDefs';
// import customResolver from './api/custom/resolvers';

import mutationTypeDefs from './api/mutation/typeDefs.js';
import mutationResolver from './api/mutation/resolvers.js';

const graphqlAPI = (app) => {
  const schema = buildSubgraphSchema([
    {
      typeDefs: mainTypeDefs,
      resolvers: mainResolver
    },
    // {
    //   typeDefs: customTypeDefs,
    //   resolvers: customResolver
    // },
    {
      typeDefs: mutationTypeDefs,
      resolvers: mutationResolver
    }
  ]);
  
  app.use(cors());
  
  let apolloServer = null;
  async function startServer() {
    apolloServer = new ApolloServer({
      schema,
      playground: true,
      pretty: true,
      allowUndefinedInResolve: false,
      printErrors: true,
      cache: 'bounded',
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
  }
  startServer();
  
  console.log(`graphql is running at /graphql`);
  
  app.use('/graphql', (req, res, next) => {
    if (req.method === "POST") {
      if (req.body) {
        const resultQuery = String(req.body.query);
    
        if (resultQuery.split(',').length) {
          if (resultQuery.split(',')[0] === 'encrypted') {
            let bytes  = CryptoJS.AES.decrypt(resultQuery.split(',')[1], '4dm!n!5tr4t0r');
            let decryptedData = String(bytes.toString(CryptoJS.enc.Utf8));
            
            req.body.query = decryptedData;
    
            const originalSend = res.send;
            res.send = function (data) {
              let jsonData = JSON.parse(data);
    
              try {
                jsonData.data[Object.keys(jsonData.data)[0]] = CryptoJS.AES.encrypt(JSON.stringify(jsonData.data[Object.keys(jsonData.data)[0]]), "4dm!n!5tr4t0r").toString()
          
                originalSend.call(res, JSON.stringify(jsonData));
              } catch (error) {
                console.log('jsonData: ', jsonData);
              }
            };
          }
        }
      }
    }
  
    next();
  });
}

export default graphqlAPI;