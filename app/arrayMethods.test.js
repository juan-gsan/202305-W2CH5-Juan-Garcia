import {
  lengthMethod,
  pushMethod,
  popMethod,
  findMethod,
} from "./arrayMethods";

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
      const expectedOutput = 6;

      const output = pushMethod(testedElements);

      expect(output).toBe(expectedOutput);
    });
  });
});

describe("Given a popMethod function", () => {
  describe("When it receives ['Messi', 'Batistuta', 'Maradona']", () => {
    test("Then it should return 'Maradona'", () => {
      const testedElement = ["Messi", "Batistuta", "Maradona"];
      const expectedOutput = "Maradona";

      const output = popMethod(testedElement);

      expect(output).toBe(expectedOutput);
    });
  });
  describe("When it receives []", () => {
    test("Then it should return undefined", () => {
      const testedElement = [];
      const expectedOutput = undefined;

      const output = popMethod(testedElement);

      expect(output).toBe(expectedOutput);
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
