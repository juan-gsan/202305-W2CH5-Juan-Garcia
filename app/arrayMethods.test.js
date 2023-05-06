import {
  lengthMethod,
  pushMethod,
  popMethod,
  unshiftMethod,
  shiftMethod,
  someMethod,
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
  describe("When it receives ['onion', 'tomato'] and 'chicken'", () => {
    test("Then it should return 3", () => {
      const testedElements = ["onion", "potato"];
      const newElement = "chicken";
      const expectedOutput = 3;

      const output = pushMethod(testedElements, newElement);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives [1, 2, 3, 4, 5] and NaN", () => {
    test("Then it should return 6", () => {
      const testedElements = [1, 2, 3, 4, 5];
      const newElement = 5;
      const expectedOutput = 6;

      const output = pushMethod(testedElements, newElement);

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

describe("Given a unshiftMethod function", () => {
  describe("When it receives [1, 2, 3] and 0", () => {
    test("Then it should return 4", () => {
      const testedElement = [1, 2, 3];
      const newElement = 0;
      const expectedOutput = 4;

      const output = unshiftMethod(testedElement, newElement);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives [] and 'orange'", () => {
    test("Then it should return 1", () => {
      const testedElement = [];
      const newElement = "orange";
      const expectedOutput = 1;

      const output = unshiftMethod(testedElement, newElement);

      expect(output).toBe(expectedOutput);
    });
  });
});

describe("Given a shiftMethod function", () => {
  describe("When it receives [1,2,3,4]", () => {
    test("Then it should return 3", () => {
      const testedElement = [1, 2, 3, 4];
      const expectedOutput = 1;

      const output = shiftMethod(testedElement);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives []", () => {
    test("Then it should return undefined", () => {
      const testedElement = [];
      const expectedOutput = undefined;

      const output = shiftMethod(testedElement);

      expect(output).toBe(expectedOutput);
    });
  });
});

describe("Given a someMethod function", () => {
  describe("When it receives [1,2,3,4,5] and 5", () => {
    test("Then it should return true", () => {
      const testedElements = [1, 2, 3, 4, 5];
      const testedElement = 5;
      const expectedOutput = true;

      const output = someMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives ['casa', 'gato', 'perro'] and 'libro'", () => {
    test("Then it should return false", () => {
      const testedElements = ["casa", "gato", "perro"];
      const testedElement = "libro";
      const expectedOutput = false;

      const output = someMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });
});

describe("Given a findMethod function", () => {
  describe("When it receives [1,2,3,4] and 2", () => {
    test("Then it should return 2", () => {
      const testedElements = [1, 2, 3, 2];
      const testedElement = 2;
      const expectedOutput = 2;

      const output = findMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives [1,2,3,4] and 5", () => {
    test("Then it should return undefined", () => {
      const testedElements = [1, 2, 3, 4];
      const testedElement = 5;
      const expectedOutput = undefined;

      const output = findMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });
});
