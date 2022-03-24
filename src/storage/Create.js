const Product = require("../models/product.js");

module.exports = ({ name, description, price }) => {
  return new Promise(async (resolve, reject) => {
    try {
      //Inserción en BD
      const product = await Product.create({ name, description, price });
      console.log(product);

      //logger
      resolve({
        status: 200,
        message: "Product saved satisfactory",
        id: product.id,
      });
    } catch (error) {
      //logger
      reject(error);
    }
  });
};
