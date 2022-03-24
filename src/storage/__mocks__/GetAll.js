module.exports = () => {
  return new Promise(async (resolve, reject) => {
    resolve({
      status: 200,
      products: [
        {
          _id: "623c960a2dacf89213bbc175",
          name: "Pan",
          description: "Recién hecho",
          price: 30,
          createdAt: "2022-03-24T16:02:18.816Z",
          updatedAt: "2022-03-24T16:02:18.816Z",
          __v: 0,
        },
        {
          _id: "623c9c19a8e0cea8719c1005",
          name: "Huevos",
          description: "De la granja",
          price: 50,
          createdAt: "2022-03-24T16:28:09.798Z",
          updatedAt: "2022-03-24T16:28:09.798Z",
          __v: 0,
        },
      ],
    });
  });
};
