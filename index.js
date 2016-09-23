const express = require("express")
const app = express();
const {json} = require("body-parser")
const port = 4000;
app.use(json())

// const addHeaders = function(req, res, next) {
//   res.status(200).set({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//     'X-XSS-Protection': '1; mode=block',
//     'X-Frame-Options': 'SAMEORIGIN',
//     'Content-Security-Policy': "default-src 'self' devmountain.github.io"
//   });
// }

const routes = require("./controllers/routes.js");
const mainCtrl = require("./controllers/mainCtrl.js")
// app.use(addHeaders);

routes(app);


app.listen(port, function(){
  console.log("This is Dr Crane... I'm listening.")
})
