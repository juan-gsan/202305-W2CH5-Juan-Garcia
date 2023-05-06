import { lengthMethod, pushMethod, findMethod, someMethod, popMethod} from "./methods";

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

describe("Given a findMethod function", () => {
  describe("When it receives [1, 2, 3, 4, 5];, and the testedElement '8'", () => {
    test("Then it should return true", () => {
      const testedElements = [1, 2, 3, 4, 5];
      const testedElement = 8;
      const expectedOutput = false;

      const output = findMethod(testedElements,testedElement);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives ['sol', 'arena', 'mar'] and 'sol'", () => {
    test("Then it should return true", () => {
      const testedElements = ['sol', 'arena', 'mar'];
      const testedElement = "sol";
      const expectedOutput = true;

      const output = findMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });
});

describe("Given a someMethod function", () => {
  describe("When it receives [1,2,3,4,5] and NaN", () => {
    test("Then it should return true", () => {
      const testedElements = [ 1, 2, 3, 4, 5];
      const testedElement = 5;
      const expectedOutput = true;

      const output = someMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives ['casa', 'gato', 'perro' ] and 'vaso'", () => {
    test("Then it should return false", () => {
      const testedElements = ['casa', 'gato','perro']
      const testedElement = 'vaso';
      const expectedOutput = false;

      const output = someMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });
});

