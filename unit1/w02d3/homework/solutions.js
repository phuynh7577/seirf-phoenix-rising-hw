// What is the difference between a parameter and an argument?
    //parameters are variables inside a function, while argument is the value thats assigned to the parameter.

// Within a function, what is the difference between return and console.log?
    //return- is how to get a value within a function, while console.log will also output a value, it is mainly used by the developer see if their function is working properly behind the scene(within the console log).


const checkPalindrome = newWord => {
    const reversed = newWord.toLowerCase().split('').reverse().join('');
    if (reversed === newWord.toLowerCase()){
        return true
    }
    return false
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

//////////////////////////////////////////////////////////////////////////////

const sumArray = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
        return sum;
}
console.log(sumArray([1,2,3,4,5,6]));

///////////////////////////////////////////////////////////////////////////////

const checkPrime = isItPrime => {
    for (let i = 2; i <= Math.sqrt(isItPrime); i++) {
        if (isItPrime % i === 0) {
            return false
        }
    } return true
}

console.log(checkPrime(5));
console.log(checkPrime(25));
console.log(checkPrime(10));
console.log(checkPrime(17));

/////////////////////////////////////////////////////////////////////////////////

const printPrime = prime => {
    for(let i = 0; i <= prime; i++) {
        if(checkPrime(i)) {
            console.log(i);
        }
    }
}

printPrime(97)

/////////////////////////////////////////////////////////////////////////////////

const randomMove = () => {
    const array = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * (array.length))
    console.log(random)
    return array[random];
}
    let computersMove = randomMove();
    let usersMove = randomMove();
    
    const rockPaperScissors = (computersMove, usersMove) => {
        console.log('computer chose ', computersMove)
        console.log('user chose ', usersMove)
        if(computersMove === usersMove) {
                console.log('played the same move, tie!');
        } else if(computersMove === 'rock') {
            if (usersMove === 'paper') { 
                console.log('paper beats rock, user wins') 
        } else if (usersMove === 'scissors') { 
                console.log('rock beats scissors, computer wins')
        } else if(computersMove === 'paper') {
            if(usersMove === 'rock') { 
                console.log('paper beats rock, computer wins') 
        } else if (usersMove === 'scissors') { 
                console.log('scissors beats rock, user wins') 
        }else {
            if(usersMove === 'rock') { 
                console.log('rock beats scissors, user wins') 
        } else if (usersMove === 'paper') { 
                console.log('scissors beats paper, computer wins') }
        }
      }
    }
}
    

rockPaperScissors(computersMove, usersMove)

//this was very difficult. i plan on watching youtube to get a better understanding of this. 
//this will be a good reference for the future.








































































































































































