let playerShip = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    // Add methods for battle here
    attack: enemyShip => {
      console.log("Player attacking Alien ship");
      // Check for hit success based on playerShip accuracy:
      if (Math.random() < playerShip.accuracy) {
        console.log("Attack hit!");
        enemyShip.hull -= playerShip.firepower;
      } else {
        console.log("Attack missed!");
      }
      console.log(enemyShip);
      // if (Math.random() < alien[0].accuracy) {
      // console.log('You have been hit!');
    }
  };




  // Define an AlienShip class
  class AlienShip {
    constructor() {
      // Make hull random between 3 and 6
      this.hull = Math.floor(Math.random() * 4 + 3);
      // Make random between 2 and 4
      this.firepower = Math.floor(Math.random() * 3 + 2);
      // TODO: Make random between .6 and .8
      this.accuracy = Math.floor(Math.random() * 3 + 6) * 0.1;
    }
    attack() {
      console.log("Alien Ship attacking");
      // Check for hit or miss:
      if (Math.random() < this.accuracy) {
        console.log("Alien ship hit player!");
        playerShip.hull -= this.firepower;
        console.log(`Player Ship hull remaining: ${playerShip.hull}`);
      } else {
        console.log("Alien ship missed");
      }
    }
  }






  // Define a game object
  let gameState = {
    playerIsAlive: () => {
      // return true if player is alive
      return playerShip.hull > 0;
    },
    checkWin: () => {
          return enemies.length === 0
    }
  };






  // Start the game
//   console.log("Generating enemy ships");
//   enemy = new AlienShip();
//   console.log(enemy);





  // TODO: Upgrade to an array of 6 enemy ships:
  enemies = [];
  for (let i = 0; i < 6; i++) {
    enemies.push(new AlienShip());
  }
  console.log(enemies);








  while (gameState.playerIsAlive()) {
    playerShip.attack(enemies[0]);
    
    
    if (enemies[0].hull <= 0) {
      console.log("Enemy ship destroyed!");
      enemies.shift()  
      console.log(enemies.length + ' ships remaining')
      let response = prompt("Ship Destroyed, attack or retreat?")
      
        if (response === "retreat" || enemies.length === 0) {
            alert("You eliminated all the aliens, game over!");
            break;
     
            } else if (response === "attack") {
                console.log("Continuing gameplay");
                }
                } else {
                    // Enemy ship not destroyed, their turn to attack:
                    // Enemy ship attacks:
                    enemies[0].attack();
                    }
                    }
                    
                







  // End game logic
  // Player either lost or retreated:
  if (gameState.checkWin()) {
    console.log("Game over");
  }
  


 



// next steps from here - make it detect if all enemies (one for now) have been defeated, break out of loop and show the player "Congrats, you've won!" message.

// next step beyond that, make enemies array instead of enemy variable, start with just 1 ship in there (loop from 0 to 1 instead of 0 to 6)