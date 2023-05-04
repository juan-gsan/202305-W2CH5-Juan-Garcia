import functions from "./index.js";

describe("Given a lenghtMehod function", () => {
  describe("When it receives [1, 2, 3 ,4]", () => {
    test("Then it should returns 4", () => {
      const array = [1, 2, 3, 4];
      const expectedResult = 4;

      const correctResult = functions.lengthMethodFunction(array);

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives [ ]", () => {
    test("Then it should returns 0", () => {
      const array = [];
      const expectedResult = 0;

      const correctResult = functions.lengthMethodFunction(array);

      expect(correctResult).toBe(expectedResult);
    });
  });
});
