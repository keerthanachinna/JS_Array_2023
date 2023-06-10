
// immutability Explanation
// with method
// toSorted method
// toReveresed method
// toSpliced method
// Browser support - couple of mothn using this firefox not used 10-06-2023,chorme supported

// too old 
 const people= ["Sally","Kyle","Jhon"]
 people[2]="new"
 console.log("old",people);

// old
 const people= ["Sally","Kyle","Jhon"]
 const peoplecopy=[...people]
 peoplecopy[2]="new"
 console.log("original",people);
 console.log("copy",peoplecopy);
//  with
 const people= ["Sally","Kyle","Jhon"]
 const newpeople=people.with(2,"new")

 console.log("original",people);
 console.log("new",newpeople);


//  toSorted()
 const people= ["Sally","Kyle","Jhon"]
//  const sortedpeople=[...people].sort()
 const sortedpeople=[...people].toSorted()

 console.log("original",people);
 console.log("sorted",sortedpeople);


//  toReversed()

 const people= ["Sally","Kyle","Jhon"]
 //  const reversedpeople=[...people].revers()
  const reversedpeople=[...people].toReversed()
 
  console.log("original",people);
  console.log("reversed",reversedpeople);

// toSpliced()
  const people= ["Sally","Kyle","Jhon"]
//    const copy=people.splice(0,2,"new")
   const copy=people.toSpliced(0,2,"new")

  
   console.log("original",people);
   console.log("copy",copy);



// more example
// with() ,toSorted(),toReversed(),toSpliced()

