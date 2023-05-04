export const lengthMethodFunction = (elements) => {
  let sum = 0;
  for (element in elements) {
    sum += 1;
  }

  return sum;
};

lengthMethodFunction([1, 2, 3]);
