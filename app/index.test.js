import { lengthMethod, pushMethod, findMethod, mapMethod } from "./index";

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
    test("Then it should return 3", () => {
      const testedElements = ["perro", "gato"];
      const expectedOutput = 3;

      const output = pushMethod(testedElements);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives 5", () => {
    test("Then it should return 6", () => {
      const testedElements = [1, 2, 3, 4, 5];
      const expectedOutput = 5;

      const output = pushMethod(testedElements);

      expect(output).toContain(expectedOutput);
    });
  });
});

describe("Given a findMethod function", () => {
  describe("When it receives [1,2,3,4,5]", () => {
    test("Then it should return true", () => {
      const testedElements = [1, 2, 3, 4, 5];
      const expectedOutput = true;

      const output = findMethod(testedElements);

      expect(output).toStrictEqual(expectedOutput);
    });
  });

  describe("When it receives ['casa', 'gato', 'perro']", () => {
    test("Then it should return true", () => {
      const testedElements = ["casa", "gato", "perro"];
      const testedElement = "libro";
      const expectedOutput = false;

      const output = findMethod(testedElements, testedElement);

      expect(output).toStrictEqual(expectedOutput);
    });
  });
});

describe("Given a mapMethod function", () => {
  describe("When it receives ['casa', 'patata', 'gato']", () => {
    test("Then it should return ['casa', 'patata', 'gato']", () => {
      const testedElements = ["casa", "patata", "gato"];
      const expectedOutput = ["casa", "patata", "gato"];

      const output = mapMethod(testedElements);

      expect(output).toStrictEqual(expectedOutput);
    });
  });

  describe("When it receives [1,2,3,4,5]", () => {
    test("Then it should return [1,2,3,4,5]", () => {
      const testedElements = [1, 2, 3, 4, 5];
      const expectedOutput = [1, 2, 3, 4, 5];

      const output = mapMethod(testedElements);

      expect(output).toStrictEqual(expectedOutput);
    });
  });
});
