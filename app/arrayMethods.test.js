import {
  lengthMethod,
  pushMethod,
  popMethod,
  unshiftMethod,
  shiftMethod,
  someMethod,
  findMethod,
  everyMethod,
  filterMethod,
  mapMethod,
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
  describe("When it receives [4,5,6] and 1,2,3", () => {
    test("Then it should return 6", () => {
      const testedElement = [2, 3, 4];
      const newElement = 1;
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
  describe("When it receives [1,2,3,4,5] and a callback function to check if any element is odd", () => {
    test("Then it should return true", () => {
      const testedElements = [1, 2, 3, 4, 5];
      const testedElement = (item) => item % 2;
      const expectedOutput = true;

      const output = someMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives ['casa', 'gato', 'perro'] and a callback function to check if any word is longer than 5 letter", () => {
    test("Then it should return false", () => {
      const testedElements = ["casa", "gato", "perro"];
      const testedElement = (item) => item.length > 5;
      const expectedOutput = false;

      const output = someMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });
});

describe("Given a findMethod function", () => {
  describe("When it receives [1,2,3,4] and a callback function to find a number smaller than 2", () => {
    test("Then it should return 1", () => {
      const testedElements = [1, 2, 3, 2];
      const testedElement = (item) => item < 2;
      const expectedOutput = 1;

      const output = findMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives [1,2,3,4] and a callback function to look for numbers greater than 5", () => {
    test("Then it should return undefined", () => {
      const testedElements = [1, 2, 3, 4];
      const testedElement = (item) => item > 5;
      const expectedOutput = undefined;

      const output = findMethod(testedElements, testedElement);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives [1,2,3,4,5,6] and a callback function that looks for even numbers", () => {
    test("Then it should return 2", () => {
      const testedElements = [1, 2, 3, 4, 5, 6];
      const callbackFunction = (item) => !(item % 2);
      const expectedOutput = 2;

      const output = findMethod(testedElements, callbackFunction);

      expect(output).toBe(expectedOutput);
    });
  });
});

describe("Given a everyMethod function", () => {
  describe("When it receives [12,16,7] and a callback function that looks for numbers greater than 10", () => {
    test("Then it should return false", () => {
      const testedElements = [12, 6, 17];
      const callbackFunction = (item) => item > 10;
      const expectedOutput = false;

      const output = everyMethod(testedElements, callbackFunction);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("When it receives [-2,-10,-5] and a callback function that looks for numbers greater than -15", () => {
    test("Then it should return true", () => {
      const testedElements = [-2, -10, -5];
      const callbackFunction = (item) => item > -15;
      const expectedOutput = true;

      const output = everyMethod(testedElements, callbackFunction);

      expect(output).toBe(expectedOutput);
    });
  });
});

describe("Given a filterMethod function", () => {
  describe("When it receives ['Durant', 'Harden', 'Gasol'] and a callback function to filter words with more than 5 letters", () => {
    test("Then it should return ['Durant', 'Harden']", () => {
      const testedElements = ["Durant", "Harden", "Gasol"];
      const callbackFunction = (item) => item.length > 5;
      const expectedOutput = ["Durant", "Harden"];

      const output = filterMethod(testedElements, callbackFunction);

      expect(output).toStrictEqual(expectedOutput);
    });
  });

  describe("When it receives [3,12,25,33,77,100] and a callback function to filter number smalles than 50", () => {
    test("Then it should return [3,33,77]", () => {
      const testedElements = [3, 12, 25, 33, 77, 100];
      const callbackFunction = (item) => item < 50;
      const expectedOutput = [3, 12, 25, 33];

      const output = filterMethod(testedElements, callbackFunction);

      expect(output).toStrictEqual(expectedOutput);
    });
  });
});

describe("Given a mapMethod function", () => {
  describe("When it receives [1,2,3,4,5] and a callback function to multiply each number by 10", () => {
    test.only("Then it should return [1,4,9,16,25]", () => {
      const testedElements = [1, 2, 3, 4, 5];
      const callbackFunction = (item) => item * 10;
      const expectedOutput = [10, 20, 30, 40, 50];

      const output = mapMethod(testedElements, callbackFunction);

      expect(output).toStrictEqual(expectedOutput);
    });
  });

  describe("When it receives [-3,6,-12,54,-8] and a callback function to switch sign", () => {
    test.only("Then it should return [3,-6,12,-54,8]", () => {
      const testedElements = [-3, 6, -12, 54, -8];
      const callbackFunction = (item) => item - item * 2;
      const expectedOutput = [3, -6, 12, -54, 8];

      const output = mapMethod(testedElements, callbackFunction);

      expect(output).toStrictEqual(expectedOutput);
    });
  });
});
