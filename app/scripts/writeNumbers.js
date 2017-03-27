// Constantes
const body = document.body;
const html = document.documentElement;
const asideNumber = $('#dev');

// Variables
var heightNumber = 10 * 1.5;

// Functions
function heightCalcule() {
  // Calcul Height of the best container height
  return documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
}

function writeAsideNumbers(e) {
  asideNumber.empty();
  let numberOfSpan = Math.round(((e - 64) / heightNumber));
  for (var i = 1; i < numberOfSpan; i++) {
    asideNumber.append('<span>' + i + '</span>');
  }
}

// EventListeners
$(window).resize(function() {
  console.log('window resized');
  writeAsideNumbers(heightCalcule());
  console.log('Aside Number rewrited');
});
