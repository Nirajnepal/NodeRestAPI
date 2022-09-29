const router = require("express").Router();

const { getProducts, createProduct, deleteProducts } = require("../controllers/controller")

/* 
 All the routes for gettting, creating and deleting products
*/
router.get("/products", getProducts);
router.post("/products", createProduct);
router.delete("/products", deleteProducts);

module.exports = router