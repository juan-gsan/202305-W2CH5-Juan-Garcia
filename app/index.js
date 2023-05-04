const lengthMethodFunction = (elements) => {
  let element = 0;
  for (element in elements) {
    element++;
  }
  return element;
};

// console.log(lengthMethodFunction([1,2,3]))

export default lengthMethodFunction;
