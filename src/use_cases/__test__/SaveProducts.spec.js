const SaveProducts = require("../SaveProducts");

jest.mock("../../storage/Create");

describe("Save Product", () => {
  const data = {
    name: "Colores",
    description: "20 unidades",
    price: "70",
  };

  it("Producto creado exitosamente", async () => {
    const { name, description, price } = data;
    const response = await SaveProducts({ name, description, price });
    console.log(response);
    expect(response).toEqual({
      status: 200,
      message: "Product saved satisfactory",
      id: "623c9f333891b3269776a98d",
    });
  });
});
