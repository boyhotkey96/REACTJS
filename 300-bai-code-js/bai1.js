let nums = [2,7,11,15]
let target = 9

let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] + nums[i + 1] === target) {
       return console.log([i, i + 1])
      }
  }
};

twoSum(nums, target)