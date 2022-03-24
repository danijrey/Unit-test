const { GetAllProducts, SaveProducts } = require("../use_cases");

module.exports = {
  async getAllProducts(req, res, next) {
    try {
      const result = await GetAllProducts();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async saveProducts(req, res, next) {
    try {
      const { name, description, price } = req.body;

      const result = await SaveProducts({
        name,
        description,
        price,
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
