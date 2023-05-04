export const lengthMethod = (elements) => {
  let sum = 0;
  for (let element = 0; element < elements.length; element++) {
    sum += 1;
  }

  return sum;
};

export const pushMethod = (testedElement, ...elements) => {
  for (let element = 0; element < elements.length; element++) {
    elements = elements[element] + "," + testedElement;
  }

  return elements;
};

export const findMethod = (elements, testedElement) => {
  testedElement = 5;
  for (let element = 0; element < elements.length; element++) {
    if (elements[element] === testedElement) {
      return true;
    }
  }

  return false;
};

export const mapMethod = (elements) => elements;
