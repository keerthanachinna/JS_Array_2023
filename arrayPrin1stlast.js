const names=["Sally","Kyle","Jhon"];
console.log(names[0]); //normal way to print 1st array value
console.log(names[names.length-1]); //normal way to print last array value

// alternate using at()

const namesat=["Sally","Kyle","Jhon"];
console.log(namesat.at(0)); // 1st array value
console.log(namesat.at(-1)); // negavitive value given last -1,last from second-2
