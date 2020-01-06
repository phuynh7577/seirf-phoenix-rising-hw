const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every= test if condition is true or false
console.log(nums.every(num => num >= 0))
console.log(panagram.every(word => word.length < 8))


//filter= only show values that meet condition
console.log(nums.filter(lessThan4 => lessThan4 < 4))
console.log(panagram.filter(even => even.length % 2 === 0))


//find= first element that passes the test
console.log(nums.find(divisible => divisible % 5 === 0))
console.log(panagram.find(longerThan5 => longerThan5.length > 4))


//findindex= returns the first index that passes the condition
console.log(nums.findIndex(divisible => divisible % 3 === 0))
console.log(panagram.findIndex(divisible => divisible.length < 4))  //nothing is less than 2 so i used 4. 


//foreach=executes once per element in the array
console.log(nums.forEach(num => console.log(num * 3)))
console.log(panagram.forEach(word => console.log(word + "!")))


//map
const largeNums = nums.map(num => num * 100)
console.log(largeNums)

const upperCasePanagram = panagram.map(word => word.toUpperCase(word))
console.log(upperCasePanagram)


//some 
console.log(nums.some(num => num % 7 === 0))
console.log(panagram.some(word => word.match("a")))


///////////////////////////////////array methods challenge problems//////////////////////////////////////////

const isPanagram = (arr) => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const allLetters = arr.join('').split('')
    allLetters.forEach(letter => {
      for (let i = 0; i < letters.length; i++) {
        if (letter === letters[i]) {
          letters.splice(i, 1)
        }
      }
    })
    if (letters.length === 0) {
      return true
    } else {
      return false
    }
  }
console.log(isPanagram(panagram))

//not sure how to solve this but will keep this as an example for the future.


