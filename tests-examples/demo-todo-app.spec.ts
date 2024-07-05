

describe("puissance", () => {

  describe("exposant", () => {
    test("si l exposant est negatif", () => {
      expect(() => puissance(1, -1)).toThrow(Error);
    });
    test("si l'exposant est egale à 1", () => {
      expect(puissance(20, 1)).toBe(20);
    });
    test("si l exposant est egale à 0", () => {
      expect(puissance(10, 0)).toBe(1);
    });
  });
});
