require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const messagesRoutes = require("./routes/messages");
const { logRequired, ensureCorrectUser } = require("./middleware/auth"); 
var beerRoutes = require("./routes/beer");
var kidRoutes = require("./routes/kid");
const db = require("./models");
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.send("hello");
});

app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", logRequired, ensureCorrectUser, messagesRoutes);
app.use('/api/Beer', beerRoutes);
app.use('/api/Kid', kidRoutes);

app.get("/api/messages", logRequired, async function(req, res, next){
  try {
    let messages = await db.Message.find().sort({ createdAt: "desc"}).populate("user", {
      username: true,
      profileImageUrl:true
    });
    return res.status(200).json(messages);
  } catch(err) {
    return next(err);
  }
});

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});



