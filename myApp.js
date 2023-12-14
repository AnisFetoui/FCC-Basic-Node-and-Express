let express = require('express');
let app = express();
const bGround = require('fcc-express-bground');
require('dotenv').config();


app.use((req,res,next)=>{
  console.log(req.method +" " +req.path+ " - " + req.ip);
  next();
})

function anis(){
  return new Date().toString();
}
  
var delayInMilliseconds = 10000; //1 second

app.get('/now', (req, res, next) => {
     req.time = anis();
     next()
}, (req, res) => {
setTimeout(function() {
    res.json({
      time: req.time
    })
}, [delayInMilliseconds]);
});


bGround.log("Hello World");
console.log("Hello World");

var path = __dirname + "/views/index.html";
app.get("/",(req,res) => {
  res.sendFile(path);
});

app.use('/public', express.static(__dirname + "/public"));



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

app.get("/json",(req,res) => {
  var jsonResponse ={ "message":"Hello json" };
  if(process.env.MESSAGE_STYLE === "uppercase")
  {
    jsonResponse.message = jsonResponse.message.toUpperCase();
  }
  res.json(jsonResponse);
  });






































 module.exports = app;
