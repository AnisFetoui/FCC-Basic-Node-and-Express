let express = require("express");
let app = express();
const bGround = require("fcc-express-bground");
require("dotenv").config();
const bodyParser = require("body-parser");

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// app.get((req,res,next)=>{
//   bodyParser.urlencoded({extended: false})
//   next();
// })
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var chainmware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

var uno = (req, res, next) => {
  req.time = new Date().toString();
  next();
};
var dos = (req, res) => {
  res.send({
    time: req.time,
  });
};
app.get("/now", chainmware, dos);

var send2 = (req, res) => {
  res.json({
    echo: req.params.word,
  });
};

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});
app.get("/name", (req, res) => {
  res.json({ name: req.query.first + " " + req.query.last });
});
app.post("/name", (req, res) => {
  res.json({ name: req.body.first + " " + req.body.last });
});

bGround.log("Hello World");
console.log("Hello World");

var path = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  res.sendFile(path);
});

app.use("/public", express.static(__dirname + "/public"));

// app.get("/json",(req,res) => {
//   if(process.env.MESSAGE_STYLE === "uppercase")
//   {res.json(
//       {"message" : "HELLO JSON"}
//   );
// }else{
//     res.json(
//       {"message" : "Hello json"}
//   );
//   }
// });

app.get("/json", (req, res) => {
  var jsonResponse = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase();
  }
  res.json(jsonResponse);
});

module.exports = app;
