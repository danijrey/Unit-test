const GetAllProducts = require("../GetAllProducts");

jest.mock("../../storage/GetAll");

describe("Get all products", () => {
  it("Traemos todos los productos", async () => {
    const response = await GetAllProducts();
    expect(response).toEqual({
      products: [
        {
          __v: 0,
          _id: "623c960a2dacf89213bbc175",
          createdAt: "2022-03-24T16:02:18.816Z",
          description: "Recién hecho",
          name: "Pan",
          price: 30,
          updatedAt: "2022-03-24T16:02:18.816Z",
        },
        {
          __v: 0,
          _id: "623c9c19a8e0cea8719c1005",
          createdAt: "2022-03-24T16:28:09.798Z",
          description: "De la granja",
          name: "Huevos",
          price: 50,
          updatedAt: "2022-03-24T16:28:09.798Z",
        },
      ],
      status: 200,
    });
  });
});
