let express = require('express');
let app = express();
const bGround = require('fcc-express-bground');
require('dotenv').config();

bGround.log("Hello World");
console.log("Hello World");

var path = __dirname + "/views/index.html";
app.get("/",(req,res) => {
  res.sendFile(path);
});

app.use('/public', express.static(__dirname + "/public"));

// app.get("/json",(req,res) => {
//     res.json(
//         {"message" : "Hello json"}
//     );
// });

app.get("/json",(req,res) => {
  if(process.env.MESSAGE_STYLE === "uppercase")
  {res.json(
      {"message" : "HELLO JSON"}
  );
}else{
    res.json(
      {"message" : "Hello json"}
  );
  }
});






































 module.exports = app;
