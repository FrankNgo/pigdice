function ThrowDice(){
  return Math.floor((Math.random() * 6) + 1);
}

function Player(){
  this.roll = 0;
  this.totalScore = 0;
  this.tempScore = 0;
}

Player.prototype.rollDice = function() {
  if(this.roll === 1){
    this.tempScore = 0;
    return alert("turn over. gg.");
  } else {
    this.tempScore = this.roll + this.tempScore;
  }
}

Player.prototype.hold = function() {
  this.totalScore = this.tempScore + this.totalScore;
  this.tempScore = 0;
  return alert("Your turn is over pass the mouse over to the other player!");
}

Player.prototype.winCondition = function() {
  if(this.totalScore >= 100){
    return alert("GG YOU WIN!!!")

  }
  if(this.totalScore + this.tempScore >= 100){
    return alert("GG YOU WIN!!!")
  }
}

Player.prototype.playerTurn1 = function() {
   if(this.roll === 1){
     $("#player1roll").hide();
     $("#player1hold").hide();
     $("#player2roll").show();
     $("#player2hold").show();
   }
 }

Player.prototype.playerTurn2 = function() {
  if(this.roll === 1){
    $("#player2roll").hide();
    $("#player2hold").hide();
    $("#player1roll").show();
    $("#player1hold").show();
  }
}
Player.prototype.player1Hold = function() {
  $("#player1roll").hide();
  $("#player1hold").hide();
  $("#player2roll").show();
  $("#player2hold").show();
}

Player.prototype.player2Hold = function() {
  $("#player2roll").hide();
  $("#player2hold").hide();
  $("#player1roll").show();
  $("#player1hold").show();
}

$(document).ready(function() {
  var player1 = new Player();
  var player2 = new Player();
  $("button#player1roll").click(function(event) {
    event.preventDefault();
    player1.roll = ThrowDice();
    $("#currentRoll1").text(player1.roll);
    player1.rollDice();
    $("#currentScore1").text(player1.tempScore);
    player1.winCondition();
    player1.playerTurn1();
  });
  $("button#player1hold").click(function(event) {
    event.preventDefault();
    player1.hold();
    $("#totalScore1").text(player1.totalScore);
    player1.winCondition();
    player1.player1Hold();

  });

  $("button#player2roll").click(function(event) {
    event.preventDefault();
    player2.roll = ThrowDice();
    $("#currentRoll2").text(player2.roll);
    player2.rollDice();
    $("#currentScore2").text(player2.tempScore);
    player2.winCondition();
    player2.playerTurn2();
  });

  $("button#player2hold").click(function(event) {
    event.preventDefault();
    player2.hold();
    $("#totalScore2").text(player2.totalScore);
    player2.winCondition();
    player2.player2Hold();

  });
});
