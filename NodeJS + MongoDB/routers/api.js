const { Router } = require("express");
const router = Router();

const authorization = require("../helpers/authorization");

const { products } = require("../bd/data.json");

router.post("/api/authorization", (req, res) => {
  const isLogin = authorization(req.body);

  if (isLogin) {
    res.redirect("/product");
  }
  res.redirect("/");
});

router.get("/api/products", (req, res) => {
  res.status(200).json({ success: true, data: products });
});

module.exports = router;
