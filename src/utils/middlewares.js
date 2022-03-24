module.exports = {
  async SaveProductMiddleware(req, res, next) {
    try {
      //Crea lógica de validación

      next();
    } catch (error) {
      res.status(401).json(error);
    }
  },
};
