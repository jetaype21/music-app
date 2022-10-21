import Header from "../components/header/Header";

describe("Funciones del card.", () => {
  test("Debe retornar un header", () => {
    const result = Header()
    expect(typeof result).toBe('string')
  });
});
