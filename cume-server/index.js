require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const beerMessagesRoutes = require("./routes/beerMessages");
const kidMessagesRoutes = require("./routes/kidMessages");
const { logRequired, ensureCorrectUser } = require("./middleware/auth"); 
const beerRoutes = require("./routes/beer");
const kidRoutes = require("./routes/kid");
const db = require("./models");
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname +'/public'));
// app.use(express.static(__dirname + '/views'));


app.use("/api/auth", authRoutes);
app.use("/api/beer/:id1/users/:id/messages", logRequired, ensureCorrectUser,  beerMessagesRoutes);
app.use("/api/kid/:id1/users/:id/messages", logRequired, ensureCorrectUser,  kidMessagesRoutes);

app.use('/api/beer', beerRoutes);
app.use('/api/kid', kidRoutes);

app.get("/api/beer/:id1/users/:id/message", logRequired, async function(req, res, next){
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


app.get("/api/kid/:id1/users/:id/message", logRequired, async function(req, res, next){
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



