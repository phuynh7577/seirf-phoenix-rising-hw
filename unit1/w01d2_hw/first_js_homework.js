//What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
    //Don't repeat yourself. It helps you and other people read your code. It also reduces the time spent writing or editing the nesassary code.

//What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
    //const cannot be re-assigned with a new variable. 
    //let is the preferred way to declare a variable now. acts like the var.
    //var is outdated and replaced by let. can be used in or outside of a block. you can also re-assign a variable to it. 


//SECTION 2
    const a = 4;
    const b = 53;
    const c = 57;
    const d = 16;
    const e = 'Kelvin';
    const f = false;

    console.log(a < b);

    console.log(c > d);
    
    console.log('kelvin' === 'kelvin');
    
    console.log(a < b < c);
    
    console.log(a + a <= d);
    
    console.log(e === 'Kelvin');
    
    console.log(48 !== '48');
    
    console.log(f != e);
    
    let g = 0;
    
    console.log(g);
    
    g = b + c;
    
    console.log(g);

//Did you use const, let or var? Why did you choose the one you chose?
                                                     //I used let because I needed to be able to change the value of g on the next example.
//What happens if you don't use const , let or var? Do you get an error? If so what does it say?
                                                     //no, i still get the same answer
//what happens if you write 10 = g?
                                                     //I get a syntax error. 


//SECTION 3

//while (true) {
	//console.log('Do not run this loop');
//} 
                                                    //yes, because there isnt a function to stop the code from running infinitly. 




            //const runProgram = true;

//while (runProgram) {
//console.log('Do not run this loop');
//runProgram = false;
//}          
                                                    //infinite, I expect it to display "do not run this loop" forever.



let letters = "A";
let i = 0;
//loop will run as long as i is less than 20.
while (i < 20) {
//as long as while loop is true an A will populate. 
    letters += "A";
//i will increase by 1 everytime this loop runs and is less than 20.
    i++;
//closing the loop.
}
//prints the letter A in the console 20 times.
console.log(letters);

//When running this code, I learned that AAAAAAAAAAAAAAAAAAAA populated. All of my assumtions were right besides the letters += "A". I learned that A will get added to the same line 20 times on the same line instead of 20 different lines. 


//SECTION 4

//A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
                //A for loop is written differently than a while loop. the for loop is used when you know how many times you want to run something, while the "while" loop can be used the same way, it can also be used to run an uncertain amount of times.

//What are the three components of the control panel? Each component is separated by a semicolon ;.

                
//The first part of the control panel is: how the loop starts
//The second part of the control panel is: condition being tested
//The third part of the control panel is: tells the loop when to stop



//Write a for loop that will console.log the numbers 0 to 999.
for (i = 0; i <=999; i++) {
    console.log(i)
};

//Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.
for (i =999; i >= 0; i--) {
    console.log(i);
};

//Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.
//The loop should run from 1 to 10.

for (i = 1; i <= 10; i++) {
    console.log("the value of i is: " + i)
};




const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"] 
    for (let i = 0; i <= starWars.length; i++) {
    console.log(starWars[i])
    console.log(starWars[i]+ " " + i)
};

//SECTION 5

