const qutoes = ["quote1", "quote2", "quote3"];





//RANDOM
const randomThings = [1, 10, "Hello", true];

console.log(randomThings[0])

randomThings[2] = "world";

console.log(randomThings);






//We've Got Class

const ourClass = ["Outrun", "Zoom", "Github", "Slack"]

console.log(ourClass[2]);

ourClass[2] = "Octocat";    //changing the value

ourClass.push("Cloud City");  //adding new element
console.log(ourClass)








//Mix It Up

const myArray = [5 ,10 ,500, 20]

myArray.push("Egon");     //pushing/adding egon to end of array
console.log(myArray);

myArray.unshift("Bob Marley");         //removning the last string
console.log(myArray);

myArray.shift();           //removing string from the beginning of array
console.log(myArray);

myArray.reverse();      //reverse the order of the array from last to first
console.log(myArray);










//Biggie Smalls

for(let i = 1; i < myArray.length; i++) {
    if (myArray[i] < 100) {
        console.log("little numbers")
    } else {
        console.log("big numbers")
    }
}







//Monkey in the Middle

for (let i =1; i < myArray.length; i++) {
    if (myArray[i] < 5) {
        console.log("little numbers");
    } else {
        console.log("monkey")
    } if (myArray[i] > 10) {
        console.log("big numbers")
    } else {
        console.log("monkey")
    }
};   






//What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log("kristyn is rocking that " + kristynsCloset[2] + " today!");

const kyristynShoe = kristynsCloset.shift([0]); //removing left shoe and giving it a new var name
console.log(kyristynShoe);
console.log(kristynsCloset);

kristynsCloset.splice(5, 0, "raybans");   //adding raybans after yellow knit hat
console.log(kristynsCloset);

kristynsCloset[4] = "stained knit hat";  //changing the value inside the array
console.log(kristynsCloset);

/////////////////////////////////////////////////////////////////////////////////////////

console.log(thomsCloset[0]);

console.log(thomsCloset[1][2]);  //access element with multiplay arrays.

console.log(thomsCloset[2][1]);   //access element with multiplay arrays.

console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1]);

thomsCloset[1][2] = "footie pajamas";
console.log(thomsCloset[1]);

































































