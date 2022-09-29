const Product = require("../model/model")
let GET_Counter = 0
let POST_Counter = 0

/* 
 Gets all the products in json format 
*/
const getProducts = (req, res) => {
  console.log(`> Products GET: received request`)
  GET_Counter += 1 
  Product.find((err, products) => {
    if (err) {
      res.send(err);
    }
    console.log(`< Products GET: sending response`)
    console.log(`Processed Request Count--> GET: ${GET_Counter}, POST: ${POST_Counter}`)
    res.json(products);
  });
};

/* 
 Creates a new product from json payload
*/
const createProduct = (req, res) => {
  console.log(`> Products POST: received request`)
  POST_Counter += 1 
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
    console.log(`Processed Request Count--> GET: ${GET_Counter}, POST: ${POST_Counter}`)
    res.json(product);
  });
}; 

/* 
 Delete all the products
*/
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