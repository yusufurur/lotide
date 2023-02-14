const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: [actual] === [expected]");
  } else {
    console.log("❌❌❌Assertion Failed: [actual] !== [expected]");
  }
};

const tail = function(array) {
  return array.slice(1);
};

const randomArray = ["hello", "Lighthouse", "Labs"];
assertEqual(randomArray.length, 3);
assertEqual(tail(randomArray).length, 2);

console.log(tail([1, 2, 3, 4, 5]));