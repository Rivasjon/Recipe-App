if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" });
}

const express = require("express");
const app = express();

const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const methodOverride = require('method-override')

const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const bookRouter = require("./routes/books");
// loging attempt
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login", (req, res) => {});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", (req, res) => {
  req.body.name;
});

//end attempt

//keep please dont touch
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(methodOverride('_method'))
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

//keep end

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use("/", indexRouter);
app.use("/authors", authorRouter);
("authors/new");
app.use("/books", bookRouter);

app.listen(process.env.PORT || 3000);
