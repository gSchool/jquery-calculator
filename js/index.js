var currentScreen = "";

// saves clicked item to currentScreen string
// updates the screen to display full currentScreen string
$('span').click(function(){
  var entry = $(this).text()
  if (entry != "=") {
    currentScreen += entry
  }
  $('#screen').text(currentScreen)
})

$('#clear').click(function(){
  currentScreen = ""
  $('#screen').text(currentScreen)
});

$('#equals').click(function(){
  currentScreen = currentScreen.replace('x','*')
  currentScreen = currentScreen.replace('\xF7','/')
  var answer = eval(currentScreen)
    $('#screen').text(answer)
    if ($('#screen').text() === "Infinity"){
    $('#screen').text("Error")
  }
})
