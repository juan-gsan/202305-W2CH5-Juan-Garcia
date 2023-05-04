import { lengthMethod, pushMethod } from "./index";

describe("Given a lenghtMehod function", () => {
  describe("When it receives [1, 2, 3 ,4]", () => {
    test("Then it should return 4", () => {
      const testedElements = [1, 2, 3, 4];
      const expectedOutput = 4;

      const length = lengthMethod(testedElements);

      expect(length).toBe(expectedOutput);
    });
  });

  describe("When it receives []", () => {
    test("Then it should return 0", () => {
      const testedElements = [];
      const expectedOutput = 0;

      const length = lengthMethod(testedElements);

      expect(length).toBe(expectedOutput);
    });
  });
});

describe("Given a pushMethod function", () => {
  describe("When it receives 'casa'", () => {
    test("Then it should return ['casa']", () => {
      const testedElements = "casa";
      const expectedOutput = ["casa"];

      const output = pushMethod(testedElements);

      expect(output).toReturn(expectedOutput);
    });
  });

  describe("Given a pushMethod function", () => {
    describe("When it receives 5", () => {
      test("Then it should return [ 1, 2, 3, 4, 5]", () => {
        const testedElements = 5;
        const expectedOutput = [5];

        const output = pushMethod(testedElements);

        expect(output).toReturn(expectedOutput);
      });
    });
  });
});
