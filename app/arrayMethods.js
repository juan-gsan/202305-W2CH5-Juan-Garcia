export const lengthMethod = (elements) => {
  let length = 0;
  for (let element = 0; element < elements.length; element++) {
    length += 1;
  }

  return length;
};

export const pushMethod = (elements, newElement) => {
  const newElements = [...elements, newElement];
  return newElements.length;
};

export const popMethod = (elements) => {
  if (elements.length === 0) {
    return undefined;
  }

  const lastElement = elements[elements.length - 1];
  elements.length -= 1;
  return lastElement;
};

export const unshiftMethod = (elements, newElement) => {
  const newElements = [newElement, ...elements];
  return newElements.length;
};

export const shiftMethod = (elements) => {
  const firstElement = elements[0];
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
