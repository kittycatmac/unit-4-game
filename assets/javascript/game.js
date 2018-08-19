$(function() {
    setRandomNumber();
    setCrystalValues();

    $('[id^="button"]').click(function() {
        handleCrystalClick($(this));
    });
});
var powerCrystal = 0;
var crystalScore = 0;
var wins = 0;
var losses = 0;
var i = 0;
var button = document.getElementById("buttons");

//setting the Power crystal number
function setRandomNumber() {
    powerCrystal = Math.floor(Math.random() * 101) + 19;
    $('.hit').html(powerCrystal);
}
//setting the four crystals random value
function setCrystalValues() {
   var buttons = $('[id^="button"]');
   $.each(buttons,function(i, button) {
       $('#' + button.id).data().value = Math.floor(Math.random() * 15) + 1;
    
   });
}
//adding and then compareing the value to power crystal
function handleCrystalClick($this) {
    var value = $this.data().value;
    crystalScore += value;
    $('.crystalScore').html(crystalScore);
    evaluate();
}
//check win or loose
function evaluate() {
    if(crystalScore === powerCrystal) {
        $('.wins').html(++wins);
        resetCurrentGuess();
    }   else if (crystalScore > powerCrystal) {
        $('.losses').html(++losses);
        resetCurrentGuess();
    }
}
//new game 
function resetCurrentGuess() {
    crystalScore = 0;
    $('.hit').html('');
    setRandomNumber();
    setCrystalValues();
}




/*powerCrystal = document.getElementById('power-crystal');
$(document).ready(function() {
    $(".power-crystal").on("click", function() {
        var powerCrystal = "";
        for (var i= 0; i < 100; i++) {
            var random = Math.floor((Math.random() * 100) +1);
            powerCrystal = random + powerCrystal;
            $(".hit").text(powerCrystal);
        }
    })
})*/


