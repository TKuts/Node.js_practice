const express = require("express");
const app = express();

const usersRouter = require("./routers/user");
const registerRouter = require("./routers/register");
const productRouter = require("./routers/product");
const apiRouter = require("./routers/api");
const aboutRouter = require("./routers/about");

app.use(express.static("./public"));
// parsel form data
app.use(express.urlencoded({ extended: false }));

const PORT = 5000;

app.use(usersRouter);
app.use(registerRouter);
app.use(productRouter);
app.use(apiRouter);
app.use(aboutRouter);

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(PORT, () => console.log(`Start server on port ${PORT}...`));
