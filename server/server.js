require("rootpath")();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expressValidator = require("express-validator");
app.use(expressValidator());
const cors = require("cors");

// const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieparser());
app.use(cors({ origin: process.env.CLIENT_URL }));

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
  session({
    key: "user_sid",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
);

// use JWT auth to secure the api
// app.use(jwt());

// api routes
app.use("/users", require("./routes/user_routes.js"));

app.use(errorHandler);

module.exports = app;