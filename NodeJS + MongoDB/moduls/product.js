const { v4: uuidv4 } = require("uuid");
const fs = require("node:fs");
const path = require("node:path");

class Product {
  constructor(title, src, price, priceSale, status) {
    this.id = uuidv4();
    this.title = title;
    this.src = src;
    this.price = price;
    this.priceSale = priceSale;
    this.status = status;
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "bd", "products.js"),
        "utf-8",
        (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(JSON.parse(data));
          }
        }
      );
    });
  }
}

module.exports = Product;
