module.exports = ({ name, description, price }) => {
  return new Promise(async (resolve, reject) => {
    if (name === "Colores") {
      resolve({
        status: 200,
        message: "Product saved satisfactory",
        id: "623c9f333891b3269776a98d",
      });
    } else {
      reject();
    }
  });
};
