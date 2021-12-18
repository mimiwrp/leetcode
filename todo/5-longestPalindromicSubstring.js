// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isPalindrome = function(s) {
    // console.log(s.trim(), s.trim().length);
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
//  console.log(isPalindrome("      "))

// /**
//  * @param {string} s
//  * @return {string}
//  */
var longestPalindrome = function(s) {
  //create an index
  let i = 0; 
  //declare let for holding the longest palindrome
  let long = '';
  //get length of the string
  const lengthString = s.length - 1;
  let lengthIndex = lengthString;
  //iterate through the string using for loop
  
  while(i < lengthString - 1) {
      //base case: if the slice between the index to the length is less than the longest 
    if (s.slice(i, lengthString).length < long.length) { return long; }
    const posPal = s.slice(i, lengthIndex);
    //palindrome on line 34, return 
    //get slice of the string between the index and the length
    //check if that is palindrome using function
    while (lengthIndex > i) {
        if (isPalindrome(posPal)) {
            if (posPal.length > long.length) {
                console.log("test: ",posPal, long)
                long = posPal;
            }
            //if not >> decrement the length by 1 then repeat line 36
            //if true >> log the palindrome
        }
        lengthIndex--;
    }
    //increment the index by 1
    i++; 
    lengthIndex = lengthString;
  }
  return long;
};

// console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))