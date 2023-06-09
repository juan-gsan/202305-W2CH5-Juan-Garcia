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

export const includesMethod = (elements, element, fromIndex) => {
  if (fromIndex >= elements.length) {
    return false;
  }

  if (!fromIndex || fromIndex < -elements.length) {
    fromIndex = 0;
  }

  if (fromIndex < 0) {
    fromIndex = 0;
  }

  for (let index = fromIndex; index < elements.length; index++) {
    if (elements[index] === element) {
      return true;
    }
  }

  return false;
};

export const indexOfMethod = (elements, element, fromIndex) => {
  if (fromIndex >= elements.length) {
    return -1;
  }

  if (!fromIndex || fromIndex < -elements.length) {
    fromIndex = 0;
  }

  if (fromIndex < 0) {
    fromIndex = 0;
  }

  if (Number.isNaN(element)) {
    return -1;
  }

  for (let index = fromIndex; index < elements.length; index++) {
    if (elements[index] === element) {
      return index;
    }
  }

  return -1;
};

export const reduceMethod = (elements, callbackFunction, initialValue) => {
  if (!initialValue) {
    initialValue = 0;
  }

  let sum = 0;

  for (let item = initialValue; item < elements.length; item++) {
    if (typeof elements[item] === "number") {
      sum = 0;
    }

    if (typeof elements[item] !== "number") {
      sum = "";
    }
  }

  for (let index = initialValue; index < elements.length; index++) {
    const element = elements[index];
    sum = callbackFunction(sum, element);
  }

  return sum;
};

export const joinMethod = (elements, separator) => {
  let sum = "";
  if (separator) {
    let lastElement;
    for (let index = 0; index < elements.length - 1; index++) {
      const element = elements[index] + separator;
      lastElement = elements[elements.length - 1];
      sum += element;
    }

    sum += lastElement;
    return sum;
  }

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    sum += element;
  }

  return sum;
};
