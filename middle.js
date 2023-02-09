function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

  const assertArraysEqual = function (array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`✅  Assertion passed: ${array1} === ${array2}`);
    } else {
      console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
    }
  };

const middle = function(arr) {
  const ShortMiddle = arr.length <= 2;
  const evenArray = arr.length % 2 === 0;
  if (ShortMiddle) {
    return [];
  } else if (evenArray) {
    const firstMiddle = (arr.length / 2) - 1;
    const secondMiddle = (arr.length / 2);
    return [arr[firstMiddle], arr[secondMiddle]];
  } else {
    const middleIndex = (Math.floor(arr.length / 2));
    return [arr[middleIndex]];
  }
};

}

module.exports = middle;