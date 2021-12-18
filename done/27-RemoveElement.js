var removeElement = function(nums, val) {
  // get length
  const length = nums.length;
  //use filter
  let removedCount = 0
  nums.forEach((el, i) => {
      if(el === val){
          nums[i] = '_'
          removedCount++
      }
  })
  for(let i = nums.length; i > 0; i--){
    if(nums[i] === '_') {
      nums.splice(i,1)
      nums.push('_')
    }
  }
  console.log(nums);
  return removedCount
  
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));