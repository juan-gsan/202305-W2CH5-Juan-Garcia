export const lengthMethod = (elements) => {
  let length = 0;
  for (let element = 0; element < elements.length; element++) {
    length += 1;
  }

  return length;
};

export const pushMethod = (elements, ...newElement) => {
  const newElements = [...newElement];

  for (let index = 0; index < newElements.length; index++) {
    elements[elements.length] = newElements[index];
  }

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
  const newElements = [...newElement, ...elements];
  elements.length = 0;
  for (let index = 0; index < newElements.length; index++) {
    elements[elements.length] = newElements[index];
  }

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

export const someMethod = (elements, callbackFunction) => {
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (callbackFunction(element)) {
      return true;
    }
  }

  return false;
};

export const findMethod = (elements, callbackFunction) => {
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (callbackFunction(element)) {
      return element;
    }
  }
};

export const everyMethod = (elements, callbackFunction) => {
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (!callbackFunction(element)) {
      return false;
    }
  }

  return true;
};

export const filterMethod = (elements, callbackFunction) => {
  const newElements = [];
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (callbackFunction(element)) {
      pushMethod(newElements, element);
    }
  }

  return newElements;
};

export const mapMethod = (elements, callbackFunction) => {
  const newElements = [];
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    pushMethod(newElements, callbackFunction(element));
  }

  return newElements;
};

export const findIndexMethod = (elements, callbackFunction) => {
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const elementIndex = index;
    if (callbackFunction(element)) {
      return elementIndex;
    }
  }

  return -1;
};
