// /**
//  * @param {string} s
//  * @return {boolean}
//  */
 var isPalindrome = function(s) {
   console.log(s.trim(), s.trim().length);
  //  base case
  // if(s === ' ' ){
  //   return true
  // }
  if(s.trim().length === 0 ){
    return true
  }
    // take out all white space, anything not a-z (regex)  /a-z/.match
    const forward = s.match(/[A-Za-z]/g).join('').toLowerCase()
    const reverse = s.match(/[A-Za-z]/g).reverse().join('').toLowerCase()
    // original string and compare with reverse of that string
    if(forward === reverse) return true
    return false
    //  if they are equal to eachother => true
    // else => false
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car"))
console.log(isPalindrome("      "))