export const lengthMethod = (elements) => {
  let length = 0;
  for (let element = 0; element < elements.length; element++) {
    length += 1;
  }

  return length;
};

export const pushMethod = (elements, ...newElement) => {
  elements = [...elements, ...newElement];
  return elements.length;
};

export const popMethod = (elements) => {
  if (elements.length === 0) {
    return undefined;
  }

  const lastElement = elements[elements.length - 1];
  elements.length -= 1;
  return lastElement;
};

export const unshiftMethod = (elements, ...newElement) => {
  elements = [...newElement, ...elements];
  return elements.length;
};

export const shiftMethod = (elements) => {
  if (elements.length === 0) {
    return undefined;
  }

  const firstElement = elements[0];
  for (let index = 0; index < elements.length; index++) {
    elements[index - 1] = elements[index];
  }

  popMethod(elements);
  return firstElement;
};

export const someMethod = (elements, element) => {
  for (let index = 0; index < elements.length; index++) {
    if (elements[index] === element) {
      return true;
    }
  }

  return false;
};

export const findMethod = (elements, element) => {
  for (let index = 0; index < elements.length; index++) {
    if (!element) {
      return undefined;
    }

    if (elements[index] === element) {
      return element;
    }
  }
};
