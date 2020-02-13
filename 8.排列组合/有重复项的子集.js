const lg = console.log
/**
 * @param { 给定一个具有不同元素的集合，找到它的所有不同的子集。 }
 * @return {  }
  */

const find_subsets = function(nums) {
  let subsets = [];
  let element
  let addElems

  nums.sort()
  subsets.push([])

  for (let i = 0; i < nums.length; i++) {
    if(element === nums[i]) {
      addElems = addElems.map(item => {
        return [...item, element]
      })
    } else {
      element = nums[i];
      addElems = subsets.map(item => {
        return [...item, element]
      })
    }
    
    subsets = [...subsets, ...addElems]
  }

  return subsets;
};

// function find_subsets(nums) {
//   // sort the numbers to handle duplicates
//   nums.sort();
//   const subsets = [];
//   subsets.push([]);
//   let startIndex = 0,
//     endIndex = 0;
//   for (i = 0; i < nums.length; i++) {
//     startIndex = 0;
//     // if current and the previous elements are same, create new subsets only from the subsets
//     // added in the previous step
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       startIndex = endIndex + 1;
//     }
//     endIndex = subsets.length - 1;
//     for (j = startIndex; j < endIndex + 1; j++) {
//       // create a new subset from the existing subset and add the current element to it
//       const set = subsets[j].slice(0);
//       set.push(nums[i]);
//       subsets.push(set);
//     }
//   }
//   return subsets;
// }


console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});
