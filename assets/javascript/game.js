var redGem = 0;
var yellowGem = 0;
var greenGem = 0;
var orangeGem = 0;
var targetScore = 0;
var score = 0;
var wins = 0;
var losses = 0;

function startGame () {
    score = 0;
    $("totalScore").text(score);
    redGem = Math.floor(Math.random() * 12) + 1;
    yellowGem = Math.floor(Math.random() * 12) + 1;
    greenGem = Math.floor(Math.random() * 12) + 1;
    orangeGem = Math.floor(Math.random() * 12) + 1;
}