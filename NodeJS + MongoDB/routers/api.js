const { Router } = require("express");
const router = Router();

const Product = require("../moduls/product");
const authorization = require("../helpers/authorization");

// const { products } = require("../bd/data.json");

router.post("/api/authorization", (req, res) => {
  const isLogin = authorization(req.body);

  if (isLogin) {
    res.redirect("/product");
  }
  res.redirect("/");
});

router.get("/api/products", async (req, res) => {
  const products = await Product.getAll();

  res.status(200).json({ success: true, data: products });
});

router.post("/api/products", async (req, res) => {
  const product = new Product(req.body);

  try {
    await product.addProduct();
    res.redirect("/product");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/api/product/:productID", async (req, res) => {
  const { productID } = req.params;

  try {
    await Product.deleteProduct(productID);
    res.redirect("/product");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
