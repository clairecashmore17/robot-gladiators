// Global Variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 10;
var playerAttack = 10;
var playerMoney = 10;

// Enemies Start
var enemyNames = ["Robort", "Amy Android", "Robo Trumble"];
var enemyHealth = 20;
var enemyAttack = 4;
// Enemies End

var fight = function(enemyName) {

   while(enemyHealth > 0 && playerHealth > 0) {
            //Ask top play or skip
        var promptFight = window.prompt("Would you like to FIGHT  or SKIP this battle? Enter 'FIGHT' ro 'SKIP' to choose.");
        console.log(promptFight);

        if (promptFight === "SKIP" || promptFight === "skip"){
            // confirm player skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit? ");

            // if yes(true), leave fight
            if(confirmSkip){
                window.alert(playerName + " has chosen to skip the fight! Goodbye... coward.");
                playerMoney = playerMoney -2;
                console.log("playerMoney: ",playerMoney);
                break;                
            }      
        }

            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            // Log a resulting message to the console so we know that it worked
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );


            //check enemy's health
            if(enemyHealth <= 0) {
                window.alert(enemyName + " has died! >:)");
                playerMoney = playerMoney +20;
                break;
               
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }


            // Subtract the value of 'enemtAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
            playerHealth = playerHealth - enemyAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            //Check player's health
            if(playerHealth <= 0) {
                window.alert(playerName + " has died :(");
                break;
            }
            else {
                window.alert(playerName  + " still has " + playerHealth + " health left!");
            }
   }

};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i+1));
        
        //debugger; 
        var pickedEnemyName = enemyNames[i];
        //call the fight function with enemy robot
        enemyHealth = 20;
        fight(pickedEnemyName);
    }
    else{
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}