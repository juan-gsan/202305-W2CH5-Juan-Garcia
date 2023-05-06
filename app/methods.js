export const lengthMethod = (elements) => {
  let length = 0;
  for (let element = 0; element < elements.length; element++) {
    length += 1;
  }

  return length;
};

export const pushMethod = (elements) => {
  let length = 0;
  for (let element = 0; element < elements.length; element++) {
    length += 1;
  }

  return length + 1;
};

console.log(pushMethod([1, 2, 3, 4, 5]));

export const findMethod = (elements, testedElement) => {
  // TestedElement = 5;
  for (let element = 0; element < elements.length; element++) {
    if (elements[element] === testedElement) {
      return true;
    }
  }

  return false;
};

console.log(findMethod([1, 2, 3], 6));

export const someMethod = (elements, parameter) => {
  const newLength = lengthMethod(elements);

  for (let i = 0; i < newLength; i++) {
    if (elements[i] === parameter) {
      return true;
    }
  }
};

console.log(someMethod([1, 2, 3], 2));

export const popMethod = (elements) => {
  if (elements.length === 0) {
    return undefined;
  }

  const lastElement = elements[elements.length - 1];
  elements = elements.length - 1;
  // Array.length -= 1;
  return lastElement;
};

console.log(popMethod([1, 2, 3]));
