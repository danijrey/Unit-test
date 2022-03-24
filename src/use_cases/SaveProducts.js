const CreateStorage = require("../storage/Create");

module.exports = ({ name, description, price }) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(name, description, price);
      //Lógica de tratamiento de datos

      //llamamos la función Create de base de datos
      const response = await CreateStorage({ name, description, price });

      //logger
      resolve(response);
    } catch (error) {
      //logger
      reject(error);
    }
  });
};
