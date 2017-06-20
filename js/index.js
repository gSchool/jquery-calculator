$(document).ready(function() {
    buttons();
});

var currentScreen = "";
var lastClick = false;

function buttons() {
    $("span").not("#equals").click(function() {
        if (currentScreen === "Error") {
            $("#screen").text(currentScreen);
        } else {
            if (lastClick === true && $(this).hasClass("operator")) {
                currentScreen = "Error";
                $("#screen").text(currentScreen);
            } else {
                currentScreen += $(this).text();
                $("#screen").text(currentScreen);
                if ($(this).hasClass("operator")) {
                    lastClick = true;
                } else {
                    lastClick = false;
                }
            }
        }
    });

    $("#clear").click(function() {
        currentScreen = "";
        $("#screen").text(currentScreen);
    });

    $("#equals").click(function() {
        if (currentScreen === "Error") {
            $("#screen").text(currentScreen);
        } else if (lastClick === true) {
            currentScreen = "Error";
            $("#screen").text(currentScreen);
        } else {
            var thing = currentScreen.replace("x", "*");
            var otherThing = thing.replace("\xF7", "/");
            var answer = eval(otherThing);
            if (currentScreen.includes("\xF70")) {
                answer = "Error";
            }
            currentScreen = answer;
            $("#screen").text(answer);
        }
    });
}
