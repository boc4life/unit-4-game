$(document).ready(function() {

var redGem = 0;
var yellowGem = 0;
var greenGem = 0;
var orangeGem = 0;
var targetScore;
var score = 0;
var wins = 0;
var losses = 0;



function startGame () {
    $("#winsDisplay").text(wins);
    $("#lossesDisplay").text(losses);
    
    redGem = Math.floor(Math.random() * 12) + 1;
    $("#redGemClick").attr("value", redGem);

    yellowGem = Math.floor(Math.random() * 12) + 1;
    $("#yellowGemClick").attr("value", yellowGem);

    greenGem = Math.floor(Math.random() * 12) + 1;
    $("#greenGemClick").attr("value", greenGem);

    orangeGem = Math.floor(Math.random() * 12) + 1;
    $("#orangeGemClick").attr("value", orangeGem);

    targetScore = Math.floor(Math.random() * 101) + 19;
    $("#targetNum").text(targetScore);

    score = 0;
    $("#scoreDisplay").text(score);
}

$(".gem").on("click", function () {
    score = parseInt($(this).val()) + score;
    $("#scoreDisplay").text(score);

    if (score == targetScore) {
        wins++;
        startGame();
    }
    
    if (score > targetScore) {
        losses++;
        startGame();
    }
    
})


startGame();
})