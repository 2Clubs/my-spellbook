// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const methodOverride = require("method-override");
require("dotenv").config();
const app = express();

// Database connection
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(methodOverride("_method"));

// Routes / Controllers

const spellsController = require("./controllers/spells");
app.use("/spells", spellsController);

const sessionsController = require("./controllers/sessions");
app.use("/sessions", sessionsController);

app.get("/", (req, res) => {
  if (req.session.currentUser) {
    res.render("dashboard.ejs", {
      currentUser: req.session.currentUser,
    });
  } else {
    res.render("index.ejs", {
      currentUser: req.session.currentUser,
    });
  }
});

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
