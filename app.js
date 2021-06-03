require('dotenv').config()

const compress = require('compression')
const http = require('http');
const axios = require('axios');
const express = require('express');
const cookieParser = require('cookie-parser');
const FCM = require('fcm-node');

const config = require('./config');
const models = require('./models');
const services = require('./services');
const routes = require('./routes');
const db_connect = require('./db_connection');

app = express()
var router = express.Router()
var fcm = new FCM(config.firebase.serverKey);

// Start MySql Database
db_connect.connectMySql(config);

/////////////////
var message = { 
  to: config.firebase.clientTestRegistrationToken,
  //collapse_key: 'your_collapse_key',
  
  notification: {
      title: 'Title of your push notification', 
      body: 'Body of your push notification' 
  },
  
  data: {  
      
  }
};

fcm.send(message, function(err, response){
  if (err) {
      console.log("Firebase notification not sent.");
  } else {
      console.log("Successfully sent with response: ", response);
  }
});
/////////////////

function authentication(req, res, next) {
  var authheader = req.headers.authorization;
  console.log(req.headers);

  if (!authheader) {
      var err = new Error('You are not authenticated!!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err)
  }

  var auth = new Buffer.from(authheader.split(' ')[1],
  'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];
  console.log(auth);
  if (user == 'admin' && pass == 'eyJraWQiOiJ1dURLVTMxZWRvTi0wd0xMUnl1TW1vbmtBdi1OaFEwejZhWmxjdTN5NU8wIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjZoZS1fbndIcmpmSHl6bjg3bUhNLWNVUnBUNTg3RVFBT2N6Ym1QRTNkSkkiLCJpc3MiOiJodHRwczovL2Rldi04MTk2MzMub2t0YXByZXZpZXcuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTU0Njc2NDc4OCwiZXhwIjoxNTQ2NzY4Mzg4LCJjaWQiOiIwb2Fpb3g4Ym1zQktWWGt1MzBoNyIsInNjcCI6WyJjdXN0b21TY29wZSJdLCJzdWIiOiIwb2Fpb3g4Ym1zQktWWGt1MzBoNyJ9.fZCRSMASYjQqH-gnqsQ1tJa7QN8UJZ-iPT4UZE6Voq8YsWefpyjjroMlDzkSJZVRm_V47PGLrSu7sg6ranjZTTpx8f_Qk6zfDBfNTxnWpIqKXaotTE-foial9XBSMiyuArTVsbDtHBrb9EwBSqRzBmlI2uRP92bTggxGbgNMWnQukguD_pCGHiSeDN3Jy7R7EpKgSkDpRBhQXHp0Ly6cByUmjsseWEzZdCCiIVJh_m__KEoqX8vUC6xkUYdMHJ4GWH8kPb0Hcao2jkAJBSKQKose8a5vxDS-WwpWO482NyVxNDvxBgCIfn1tG-qL4Vbdxokw41o2M81MoqgdNZGHQA') {

      // If Authorized user
      next();
  } else {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
  }

}


function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

//app.use(authentication)
app.use(cookieParser())
router.use(cookieParser())

// Initialize routes.
routes.product(router)

app.use('/', router)

process.env.NODE_ENV // "development"
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated.')
  })
});

app.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});

