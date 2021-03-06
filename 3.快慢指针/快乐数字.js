/**
 * @param { 任何数字都可以被称为快乐数字，如果在重复使用一个等于其所有数字的平方和的数字后，我们得到了数字“1”。 
 * 所有其他(不快乐的)数字将永远不会达到“1”。 相反，他们将被困在一个不包括1的数字循环中。 }
 * @return { 不一定有链表才能完成双指针的效果，只要拿到下一个值就行 }
 * @return { break可以直接跳出while循环 }
  */
function find_happy_number(num) {
  let slow = num,
    fast = num;
  while (true) {
    slow = find_square_sum(slow); // move one step
    fast = find_square_sum(find_square_sum(fast)); // move two steps
    if (slow === fast) { // found the cycle
      break;
    }
  }
  return slow === 1; // see if the cycle is stuck on the number '1'
}

function find_square_sum(num) {
  let sum = 0;
  while ((num > 0)) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}
const date = new Date()
console.log(find_happy_number(23));
console.log(find_happy_number(12));

console.log(new Date() - date)
