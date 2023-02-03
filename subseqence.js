// subseqence of an array

function isValidSubsequence(array, sequence) {
  
  let idx = 0;
for(let i = 0; i < array.length; i++) {
    if (array[i] === sequence[idx]) {
  idx++;
  }
}
return idx === sequence.length;
}

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 2]) // return false

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]) // return true