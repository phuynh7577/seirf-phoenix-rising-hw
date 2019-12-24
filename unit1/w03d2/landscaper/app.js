// window.confirm("Ready to run your own Landscaping Business?!!?");
// if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }


// const myFunction = () => {
//     if (balance === 5) {
//     alert("You can now buy scissors for $5.")
//     } if (balance === 25) {
//     alert("You can now buy scissors for $25.")
//     }if (balance === 250) {
//     alert("You can now buy scissors for $250.")
//     }if (balance === 500) {
//     alert("You can now buy scissors for $500.")
//     }if (balance === 1000) {
//     alert("You now have $1000 and own a slave. YOU WIN")
//     }
//     document.getElementById("demo").innerHTML = txt;
//   }












let currentTool= '';
let balance = [];
let sum = 0;
let totalBalance = sum;









//start button

  alert("Starting your first business can be challenging but, with persistence and hard work you will build a successful career!");


const bankAccount = () => {
  for (let i = 0; i < balance.length; i+=1) {
    sum += balance[i];
  } alert("Your Current Balance: $" + sum)
}

// console.log(yourTool[0].salary)
//clicking teeth will add 1 dollar to your balance
const cutWithTeeth = () => {
  if (sum < 5) {
    sum += 1
    alert("Good work today! You earned $1.")
  }if (sum === 5) {
    alert("You can buy a pair of siccors and earn $5 a day using them!")
  }
}

    
//clicking scissors will add $5 to your balance
const cutWithScissors = () => {
  if (sum >= 5 && sum <25) {
    sum += 5 
    alert("Good work today! You earned $5.")
  }if (sum === 25) {
    alert("You can now buy a push mower and make $50 a day using it!")
  }
}

//clicking push mower will add $25 to your balance
const cutWithPushMower = () => {
  if (sum >= 25 && sum <250) {
    sum += 50
    alert("Good work today! You earned $25.")
  }if (sum >= 250) {
    alert("You can now buy an electric mower and make $100 a day using it!")
  }
}

//clicking electric mower will add $100 to your balance
const cutWithElectricMower = () => {
  if (sum >= 250 && sum <=500) {
    sum += 100
    alert("Good work today! You earned $100.")
  }if (sum >= 500) {
    alert("Hard work pays off. Now you can hire a worker for $500 and make $250 a day!")
  }
}

//clicking the worker will add $250 to your balance
const cutWithSlave = () => {
  if (sum >= 500 && sum <=1000) {
    sum += 250
    alert("Good work today! You earned $250.")
  }if (sum >= 1000) {
    alert("You've earned $1000 and now have one employee. YOU WIN!!!!")
  }
}







 

 
