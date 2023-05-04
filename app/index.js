const lengthMethodFunction = (elements) => {
  let element = 0;
  for (element in elements) {
    element++;
  }
  return element;
};



const push = (array, pushedElement) => {
  const newArray = [];
  for (let i = 0; i < length(array); i++) {
    newArray[i] = array[i];
  }

  newArray[length(array)] = pushedElement;

  return length(newArray);
};

export default { lengthMethodFunction, push };
