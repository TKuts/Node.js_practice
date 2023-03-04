const { v4: uuidv4 } = require("uuid");
const fs = require("node:fs");
const path = require("node:path");

const status = [
  { "ТОП ПРОДАЖ": "top" },
  { "ТОЛЬКО В РОЗЕТКЕ": "rezetka" },
  { АКЦИЯ: "sale" },
  { НОВИНКА: "new" },
  { "ХИТ ПРОДАЖИ": "bests" },
];

class Product {
  constructor({ title, src, priceRetail, priceSale, status }) {
    this.id = uuidv4();
    this.title = title;
    this.src = src;
    this.price = priceRetail;
    this.priceSale = priceRetail - (priceRetail * priceSale) / 100;
    this.status = status;
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "bd", "products.json"),
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

  toJSON() {
    return {
      id: this.id,
      src: this.src,
      title: this.title,
      label: {
        status: Object.values(status.find((item) => item[this.status]))[0],
        text: this.status,
      },
      prices: {
        retail: this.price,
        sale: this.priceSale,
        currency: "грн",
      },
    };
  }

  async addProduct() {
    const products = await Product.getAll();
    products.push(this.toJSON());

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "bd", "products.json"),
        JSON.stringify(products),
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static async getById(id) {
    const products = await Product.gerAll();
    return products.find((product) => product.id === id);
  }

  static async deleteProduct(id) {
    const products = await Product.getAll();
    const filterProduct = products.filter((product) => product.id !== id);
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "bd", "products.json"),
        JSON.stringify(filterProduct),
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });
  }
}

module.exports = Product;
