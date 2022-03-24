const GetAllStorage = require("../storage/GetAll");

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      //Lógica de tratamiento de datos

      //Consulta en BD
      const response = await GetAllStorage();

      // Logger
      if (response) {
        resolve(response);
      }
      resolve("There are no products created yet");
    } catch (error) {
      // logger

      reject(error);
    }
  });
};
