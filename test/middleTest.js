// test/assertEqualTest.js

// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
// ...

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // PASS
// assertArraysEqual(middle([1, 2, 3]), [2]); // PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // PASS
// assertArraysEqual(middle([1, 2, 3]), ["2"]); // FAIL
// assertArraysEqual(middle([1, 2, 3, 4]), [3, 2]); // FAIL



const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });

});