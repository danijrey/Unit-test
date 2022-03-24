const express = require("express");

const { SaveProductMiddleware } = require("../utils/middlewares");

const { getAllProducts, saveProducts } = require("../controllers/index");

const router = express.Router();

router.get("/allproducts", getAllProducts);

router.post("/saveproducts", saveProducts);

module.exports = router;
