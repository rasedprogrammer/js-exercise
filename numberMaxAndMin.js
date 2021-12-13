function findMin(numbers) {
  let minimum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i]
    }
  }
  return minimum;
}

console.log(findMin([4,5,6,2,8,9,3]));
console.log(findMin([4,5,6,8,9,3]));