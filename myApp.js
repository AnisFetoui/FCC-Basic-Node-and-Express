let express = require('express');
let app = express();
const bGround = require('fcc-express-bground');

bGround.log("Hello World");
console.log("Hello World");

var path = __dirname + "/views/index.html";
app.get("/",function(req,res){
  res.sendFile(path);
});

app.use('/public', express.static(__dirname + "/public"));




































 module.exports = app;
