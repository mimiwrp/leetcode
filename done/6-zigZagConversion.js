var convert = function(s, numRows) {
  //create an array of arrays, legnth of numRows
  const rows = []
  for(let i = 0; i < numRows; i++){
    rows.push([])
  }
  //convert s to array for splice
  const arrayStr = s.split('')
  //while s has length
  let i = 0;
  let dir = 'desc'
  while(arrayStr.length){
    rows[i].push(arrayStr.shift())
    //ping between 0 and num rows (which array we add to)
    dir === 'desc' ? i++ : i--
    if(i === numRows - 1) dir = 'asc'
    if(i === 0) dir = 'desc'
    //use shift

  }
  //use reduce to concat arrays and return
  const newStrArr = rows.reduce((prev, curr) => {
    return prev.concat(curr)
  })

  const newStr = newStrArr.join('')


   return newStr
};

console.log(convert("PAYPALISHIRING", 3))

/* 
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
P   A   H   N
A P L S I I G
Y   I   R
*/