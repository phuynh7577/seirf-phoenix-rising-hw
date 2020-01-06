// DRY
//                  try not to repeat any type of code if necessary

// KISS
//                  write simple code so others and yourself can read it. write for the next person that takes your job can read. they can be a junior programmer like i am.   

// Avoid creating a YAGNI
//                  dont add anything until you need it.

// Do the simplest thing that could possibly work
//                  keep code simple will help you and others read it

// Don't make me think
//                  write simple code so others and yourself can read

// Write code for the maintainer
//                  if you dont write simple code then the person reading it might come to your house to kill you.       

// Single responsibility principle
//                  when writing a class or function should perform task.

// Avoid premature optimization
//                  try not to optimize your code until its running properly.

// Separation of concerns
//                  seperating each function by different sections that addresses different functionality. 




//created function for with a parameter 
  const f2 = (limit) => {
//stored value to three variables 
    let evenSum = 0;
    let previous = 0;
    let current = 1;
//loop the variable if less than or equal to parameter
    while (current <= limit) {
//stored value current and previous to a new variable
      let next = current + previous;
//stored a new value to previous
      previous = current;
//stored a new value to current
      current = next;
//if current divided by 2 equates to zero then run the following function
      if (current % 2 === 0) {
//add zero to the value current holds.
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))

//fibonacciEvenSum
//i would start with f2
//yes












