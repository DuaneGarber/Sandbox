'use strict';

const NUM_OF_ITERATIONS = 1000;

const hammingWeight = function (n) {
  let binary = (n >>> 0).toString(2);
  let sum = 0;
  let i;
  for (i = 0; i < binary.length; i++) {
    sum += parseInt(binary[i], 10);
  }
  return sum;
};

const hammingWeightReducer = function (n) {
  const reducer = (sum, bit) => sum + Number(bit);
  return (n >>> 0).toString(2).split('').reduce(reducer, 0);
};

console.time('simple');
for (let i = 0; i < NUM_OF_ITERATIONS; i++) {
  hammingWeight(i);
}
console.timeEnd('simple');

console.time('reducer');
for (let i = 0; i < NUM_OF_ITERATIONS; i++) {
  hammingWeightReducer(i);
}
console.timeEnd('reducer');
