const Product = require("../models/product.js");

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      //Consulta en BD
      const products = await Product.find({});

      // Logger
      if (products.length > 0) {
        resolve({
          status: 200,
          products,
        });
      }
      resolve({
        status: 200,
        message: "There are no products created yet",
      });
    } catch (error) {
      // logger

      reject(error);
    }
  });
};
