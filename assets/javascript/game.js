$(document).ready(function() {
    $(".power-crystal").on("click", function() {
        var randNumber = "";
        for (var i= 0; i < 100; i++) {
            var random = Math.floor(Math.random() * 100) +1;
            randNumber = random + randNumber;
        }
    })
})