const router = require("express").Router();

const { getProducts, createProduct, deleteProducts } = require("../controllers/controller")

router.get("/products", getProducts);
router.post("/products", createProduct);
router.delete("/products", deleteProducts);

module.exports = router