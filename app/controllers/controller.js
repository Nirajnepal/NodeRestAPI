const Product = require("../model/model")


const getProducts = (req, res) => {
  console.log(`> Products GET: received request`)
  Product.find((err, products) => {
    if (err) {
      res.send(err);
    }
    console.log(`< Products GET: sending response`)
    res.json(products);
  });
};

const createProduct = (req, res) => {
  console.log(`> Products POST: received request`)
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  });

  product.save((err, product) => {
    if (err) {
      res.send(err);
    }
    console.log(`< Products POST: sending response`)
    res.json(product);
  });
}; 

const deleteProducts = (req, res) => {
  console.log(`> Products DELETE: received request`)
  products = Product.find((err, products)=>{
    if(err){
      res.send(err);
    }
  })
  products.deleteMany({})
  console.log(`> Products DELETE: sending request`)
  res.json("All products deleted!")
}

module.exports = {
  getProducts, createProduct, deleteProducts
};