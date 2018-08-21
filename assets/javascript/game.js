
$(function() {
    setRandomNumber();
    setCrystalValues();
    $('[id^="button"]').click(function() {
        handleCrystalClick($(this));
        //$('#' + button.id).data().value.hide();
    });
});
    //hide value not working ERROR^^^// check jquery activity 12!
    //$(this).hide();
var powerCrystal = 0;
var crystalScore = 0;
var wins = 0;
var losses = 0;
var button = 0;
//var value = document.getElementById("buttons");

//setting the Power crystal number
function setRandomNumber() {
    powerCrystal = Math.floor(Math.random() * 100) + 1;
    $('.hit').html(powerCrystal);
}
//setting the four crystals random value
function setCrystalValues() {
   var buttons = $('[id^="button"]');
   $.each(buttons,function(_i, button) {
       $('#' + button.id).data().value = Math.floor(Math.random() * 15) + 1;
     });
}

//trying to fix the value replacing image
function replaceButton() {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("img");
    imageCrystal.attr("images/Bismuth-Crystal-4.jpg");
    $("button").append(imageCrystal);
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



//scratch
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


