// Global Variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Enemies Start
var enemyNames = ["Robort", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// Enemies End

var fight = function(enemyName) {


   while(enemyHealth > 0) {
            //Ask top play or skip
        var promptFight = window.prompt("Would you like to FIGHT  or SKIP this battle? Enter 'FIGHT' ro 'SKIP' to choose.");
        console.log(promptFight);

        if( promptFight === "FIGHT" || promptFight === "fight"){
            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            // Log a resulting message to the console so we know that it worked
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );


            //check enemy's health
            if(enemyHealth <= 0) {
                window.alert(enemyName + " has died! >:)");
               
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
            }
            else {
                window.alert(playerName  + " still has " + playerHealth + " health left!");
            }
        }
        else if (promptFight === "SKIP" || promptFight === "skip"){
            // confirm player skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit? ");

            // if yes(true), leave fight
            if(confirmSkip){
                window.alert(playerName + " has chosen to skip the fight! Goodbye... coward.");
                playerMoney = playerMoney -2;
                console.log(playerMoney);
                enemyHealth = 0;
                
            }
            // if no(false), sak question by running fight(); again.
            else {
                fight();
            }
        
        
        }
        else {
            window.alert("This is not an option, try again");
        }
   }

};

for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    var pickedEnemyName = enemyNames[i];
    //call the fight function with enemy robot
    enemyHealth = 50;
    fight(pickedEnemyName);
}