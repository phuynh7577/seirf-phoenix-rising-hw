let balance = [];
let sum = 0;
let totalBalance = sum;
let inventory = [];
let tools = ["Scissors", "Push Mower", "Eletric Mower", "Worker"];

//start 
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
    alert("You can buy a pair of scissors and earn $5 a day using them!")
  }
}

    
//clicking scissors will add $5 to your balance
const cutWithScissors = () => {
  if (sum >= 0 && sum < 25 && inventory[0] === "Scissors" ) {
    sum += 5 
    alert("Good work today! You earned $5.")
  }if (sum === 25) {
    alert("You can now buy a push mower and make $50 a day using it!")
  }
}

//clicking push mower will add $25 to your balance
const cutWithPushMower = () => {
  if (sum >= 0 && sum < 250 && inventory[1] === "Push Mower") {
    sum += 50
    alert("Good work today! You earned $50.")
  }if (sum === 250) {
    alert("You can now buy an electric mower and make $100 a day using it!")
  }
}

//clicking electric mower will add $100 to your balance
const cutWithElectricMower = () => {
  if (sum >= 0 && sum < 500 && inventory[2] === "Eletric Mower") {
    sum += 100
    alert("Good work today! You earned $100.")
  }if (sum === 500) {
    alert("Hard work pays off. Now you can hire a worker for $500 and make $250 a day!")
  }
}

//clicking the worker will add $250 to your balance
const cutWithSlave = () => {
  if (sum >= 0 && sum < 1000 && inventory[3] === "Worker") {
    sum += 250
    alert("Good work today! You earned $250.")
  }if (sum >= 1000) {
    alert("You've earned $1000 and now have one employee. YOU WIN!!!!")
  }
}

const addScissors = () => {
  if (sum === 5) {
   inventory.push(tools[0]);
   alert("You added SCISSORS to your inventory!")
   sum -= 5;
  }
}

const addPushMower = () => {
  if (sum === 25) {
   inventory.push(tools[1]);
   alert("You added a PUSH MOWER to your inventory!")
   sum -= 25;
  }
}

const addEletricMower = () => {
  if (sum === 250) {
   inventory.push(tools[2]);
   alert("You added an ELETRIC MOWER to your inventory!")
   sum -= 250;
  }
}

const addWorker = () => {
  if (sum === 500) {
   inventory.push(tools[3]);
   alert("You hired a WORKER!")
   sum -= 500;
  }
}
