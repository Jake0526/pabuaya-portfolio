import cookieSession from "cookie-session";
import md5 from "md5";
import CryptoJS from 'crypto-js';

import db from "../graphql/data/collection.js";

const authManager = (app) => {
  app.use(
    cookieSession({
      name: "medbank_name",
      secret: "medbank_secret",
    })
  );

  app.post('/auth-login', async (req, res) => {
    const users = await db.collection("users");

    const result = await users.findOne({
      "email" : String(req.body.email),
      "password" : String(md5(req.body.password))
    });
  
    if (result) {
      var uap = result._id.toHexString() + "|" + result.email + "|" + result.password + "|" + result.name + "|" + result.clientType;
  
      var euap = CryptoJS.AES.encrypt(uap, "medbank_secret");
                              
      req.session.token = String(euap);
    
      res.send({
        token: req.session.token,
        client: {
          type: result.clientType
        }
      });
    } else {
      res.send('failed');
    }
  });

  app.post('/get-token', (req, res) => {
    res.send(req.session.token);
  });

  app.post('/is-login', (req, res) => {
    var result = {
      isLogin: false,
      session: []
    };
  
    if(req.session.token) {
      var duap = CryptoJS.AES.decrypt(req.session.token, "medbank_secret");
      var uap = duap.toString(CryptoJS.enc.Utf8)
      var uapList = uap.split("|");
  
      result.isLogin = true;
      result.session = uapList;
    }
  
    res.send(result);
  });

  app.get('/logout', (req, res) => {
    req.session = null;

    res.redirect("/login");
  });
}

export default authManager;