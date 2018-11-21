$(document).ready(function() {

    //Declare variables
var redGem = 0;
var yellowGem = 0;
var greenGem = 0;
var orangeGem = 0;
var targetScore;
var score = 0;
var wins = 0;
var losses = 0;


    // Function to set game state for start
function startGame () {
        // Set display of number of wins and losses
    $("#winsDisplay").text(wins);
    $("#lossesDisplay").text(losses);
    
        // Obtain random number between 1-12 for each gem, give each gem an attribute with a value of that number
    redGem = Math.floor(Math.random() * 12) + 1;
    $("#redGemClick").attr("value", redGem);

    yellowGem = Math.floor(Math.random() * 12) + 1;
    $("#yellowGemClick").attr("value", yellowGem);

    greenGem = Math.floor(Math.random() * 12) + 1;
    $("#greenGemClick").attr("value", greenGem);

    orangeGem = Math.floor(Math.random() * 12) + 1;
    $("#orangeGemClick").attr("value", orangeGem);

        // Obtain random number between 19 and 120 for target
    targetScore = Math.floor(Math.random() * 101) + 19;
    $("#targetNum").text(targetScore);

        // Set running score number to 0 and update it on the display
    score = 0;
    $("#scoreDisplay").text(score);
}

        // Function for when gems are clicked
    $(".gem").on("click", function () {
    score = parseInt($(this).val()) + score;
    $("#scoreDisplay").text(score);

        // Set conditionals for when the target score is matched or exceeded
    if (score == targetScore) {
        wins++;
        startGame();
    }
    
    if (score > targetScore) {
        losses++;
        startGame();
    }
    
})

        // Run startGame function on page load
startGame();
})