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

const deleteProducts = (req, res) => {
  products = Product.find((err, products)=>{
    if(err){
      res.send(err);
    }
  })
  products.deleteMany({})
  res.json("All products deleted!")
}

module.exports = {
  getProducts, createProduct, deleteProducts
};