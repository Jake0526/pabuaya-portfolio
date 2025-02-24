import moment from 'moment';
import md5 from 'md5';

import db from "../../data/collection.js";
import { ObjectId } from "mongodb";

const resolvers = {
  Mutation: {
    async createUser(obj, args) {
      const users = await db.collection("users");

      const result = {
        message: '',
        status: '',
        insertedID: null,
      };

      const create = {
        profileCode: args.input.profileCode ? args.input.profileCode : '',
        email: args.input.email ? args.input.email : '',
        password: args.input.password ? args.input.password : '',
        name: args.input.name ? args.input.name : '',
        clientType: args.input.clientType ? args.input.clientType : '',
        createdAt: args.input.createdAt ? args.input.createdAt : '',
        createdBy: args.input.createdBy ? args.input.createdBy : '',
        updatedAt: args.input.updatedAt ? args.input.updatedAt : '',
        updatedBy: args.input.updatedBy ? args.input.updatedBy : '',
      };

      const { insertedId } = await users.insertOne({
        ...create,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      });

      result.message = 'Successfully Created';
      result.status = 'success';
      result.insertedID = insertedId;

      return result;
    },
    async updateUser(obj, args) {
      const result = {
        message: '',
        status: '',
        insertedID: null,
      };

      const update = {};
      for (const key of Object.keys(args.input)){
          if (args.input[key] !== '') {
            if (key === 'password') {
              update[key] = md5(args.input.password);
            } else {
              update[key] = args.input[key];
            }
          }
      }

      Users.update({_id: args.input._id}, {
        $set: {...update, updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')}
      });

      result.message = 'Successfully Updated';
      result.status = 'success';

      return result;
    },
    async deleteUser(obj, args) {
      const result = {
        message: '',
        status: '',
      };

      Users.remove({ _id: args._id });

      result.message = 'Successfully Deleted';
      result.status = 'success';

      return result;
    },
    async createMessage(obj, args) {
      const messages = await db.collection("messages");

      const result = {
        message: '',
        status: '',
        insertedID: null,
      };

      const create = {
        budget: args.input.budget ? args.input.budget : '',
        targetCompletion: args.input.targetCompletion ? args.input.targetCompletion : '',
        fullName: args.input.fullName ? args.input.fullName : '',
        email: args.input.email ? args.input.email : '',
        message: args.input.message ? args.input.message : '',
        createdAt: args.input.createdAt ? args.input.createdAt : '',
        createdBy: args.input.createdBy ? args.input.createdBy : '',
        updatedAt: args.input.updatedAt ? args.input.updatedAt : '',
        updatedBy: args.input.updatedBy ? args.input.updatedBy : '',
      };

      const { insertedId } = await messages.insertOne({
        ...create,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      });

      result.message = 'Successfully Created';
      result.status = 'success';
      result.insertedID = insertedId;

      return result;
    },
  },
};

export default resolvers;
