export const lengthMethod = (elements) => {
  let sum = 0;
  for (let element = 0; element < elements.length; element++) {
    sum += 1;
  }

  return sum;
};

export const pushMethod = (...elements) => elements;