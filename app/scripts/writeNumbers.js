// Constantes
const asideNumber = $('#dev');
const main = $('main');

// Variables
var heightNumber = 10 * 1.5;

// Functions
function heightCalcule() {
  return main.height();
}

function writeAsideNumbers(e) {
  asideNumber.empty();
  let numberOfSpan = Math.round(((e) / heightNumber) + 1);
  for (var i = 1; i < numberOfSpan; i++) {
    asideNumber.append('<span>' + i + '</span>');
  }
}

// EventListeners
$(window).resize(function() {
  console.log('window resized');
  writeAsideNumbers(heightCalcule());
  console.log('Aside Number rewrited');
  console.log($("#triggerAmp").height());
});
