// Use Shorthand Syntax When Initializing a Property from a Variable with the Same Name

function getMinMax(nums) {
  let min = Infinity;
  let max = -Infinity;
  // In a later chapter you'll learn about the `for-of` loop, which would probably be the preferred choice here
  // for (let n = 0; n < nums.length; ++n) {
  for (const num of nums) {
    // const num = nums[n];
    if (min > num) { min = num; }
    if (max < num) { max = num; }
  }
  // Insteas of this use shorthand properties like in PureScript:
  // return { min: min, max: max };
  return { min, max };
}

console.log(getMinMax([8, 14, 3, 27, 12])); // {min: 3, max: 27}
