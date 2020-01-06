//object with array
const crayonBox = {colors: ["white", "blue", "green", "red"]}
console.log(crayonBox.colors[2])



//object with a property of an object
const bottle = {
    cap: {material: "metal", color: "white", brand: "pepsi"}
}
console.log(bottle.cap.brand)



//array with an object
const receipt = [{computer: "apple", price: 1600}]
console.log(receipt[0].price)



//array with properties of array
const apartmentBuilding = [
    ["john", "steve", "molly", "josh", "mary"],
    [600, 601, 602, 603, 604]
];
console.log(apartmentBuilding[1][3])

////////////////////////////////////////////////////////////////////////////////////////////////////

//function to call an object
const knit = () =>{
    return {
        item: "scarf", 
        size: "6ft", 
        color: "red", 
        sex: "f"}
}
console.log(knit().color)



//function to call object with an array
const crayonSelector = () => {
    return {colors: ["white", "green", "purple", "red"]}
    }
console.log(crayonSelector().colors[2])



//function that calls a function.
const powerButton = (callOption) => {
    console.log(callOption)
    callOption();
}


//function that says select a song
const options = () => {
    console.log("select a song");
} 
console.log(powerButton(options))

///////////////////////////////////model a vending machine///////////////////////////////////////////



//object with array
const vendingMachine = {
    snacks: [{name: "chips", price: 2},
            {name: "soda", price: 1},
            {name: "sandwich", price: 5}], 
        
        vending (input) {
            console.log(vendingMachine.snacks[input]);
        }
}
console.log(vendingMachine.vending(2));





///////////////////////////////////////////callbacks//////////////////////////////////////////////////

//function w two arguments and sums them together
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(5, 6))



//function that subtracts two arguement
const subtract = (num1, num2) => {
    return num1 - num2;
}
console.log(subtract(25, 5));



//function that will multiply two arguments
const multiply = (num1, num2) => {
    return num1 * num2;
}
console.log(multiply(2, 3))



//function that will divide two arguments
const divide = (num1, num2) => {
    return num1 / num2;
}
console.log(divide(10, 5))


//function calculate
const calculate = (num1, num2, operates) => {
    return operates(num1, num2)
}
console.log(calculate(5, 2, add))
console.log(calculate(5, 2, subtract))
console.log(calculate(5, 2, multiply))
console.log(calculate(6, 2, divide))


/////////////////////////////////////cleanup///////////////////////////////////////////////////

const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

//What is meant by the error(s) this produces?
// foo();

// const foo ()=>{
//     console.log('hi');
// }


                       // foo() is outside of the scope and cannot be called.
















