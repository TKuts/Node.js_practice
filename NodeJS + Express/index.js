const express = require("express");
const app = express();
const path = require("node:path");

const { products, users } = require("./bd/data.json");

const authorization = ({ email, password }) => {
  return Boolean(
    users.find((item) => item.email == email && item.password == password)
  );
};

app.use(express.static("./public"));

// parsel form data
app.use(express.urlencoded({ extended: false }));

const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.get("/register", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/register.html"));
});

app.get("/product", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/product.html"));
});

app.get("/about", (req, res) => {
  res.status(200).send(
    `<h1>Вибачте!</h1>
  <p>Зовсім скоро, я напишу цю сторінку</p>
	<a href="/">Повернутись на головну сторінку</a>
	 `
  );
});

app.post("/api/authorization", (req, res) => {
  const isLogin = authorization(req.body);

  if (isLogin) {
    res.redirect("/product");
  }
  res.redirect("/");

  //   const data = await { email: req.body.email, password: req.body.password };

  //   authentication(data);

  //   res.status(200).json({ success: true });
});

app.get("/api/products", (req, res) => {
  res.status(200).json({ success: true, data: products });
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(PORT, () => console.log(`Start server on port ${PORT}...`));
