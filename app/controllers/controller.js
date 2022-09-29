const Product = require("../model/model")


const getProducts = (req, res) => {
  Product.find((err, products) => {
    if (err) {
      res.send(err);
    }
    res.json(products);
  });
};

const createProduct = (req, res) => {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  });

  product.save((err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
}; 

module.exports = {
  getProducts, createProduct
};