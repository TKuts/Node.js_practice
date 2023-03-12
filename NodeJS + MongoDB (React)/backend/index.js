const express = require("express");
const mongoose = require("mongoose");
const app = express();

const session = require("express-session");

const cors = require("cors");
const bodyParser = require("body-parser");

const apiRouter = require("./routers/products.api");
const usersApiRouter = require("./routers/users.api");
const authApiRouter = require("./routers/auth.api");

app.use(cors());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(
  session({
    secret: "some secret value",
    resave: false,
    saveUninitialized: false,
  })
);

const PORT = process.env.PORT || 5000;

app.use(apiRouter);
// app.use("/api", urlencodedParser, usersApiRouter);
// app.use("/auth", urlencodedParser, authApiRouter);

app.all("*", (request, response) => {
  response.status(404).send("resource not found");
});

const start = async () => {
  try {
    const url = `mongodb+srv://kuts:admin123@cluster0.lqmc5b1.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(url, {
      useNewUrlParser: true,
    });

    app.listen(PORT, () => {
      console.log(`Server is running on :${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
