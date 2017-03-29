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
  let numberOfSpan = Math.round(e / heightNumber);
  for (var i = 1; i < numberOfSpan; i++) {
    if (i == 3 || i == 37 || i == 71 || i == 105) {
      asideNumber.append('<span class="green">' + i + '</span>');
    }
    else {
      asideNumber.append('<span>' + i + '</span>');
    }
  }
}

// EventListeners
$(window).resize(function() {
  console.log('window resized');
  writeAsideNumbers(heightCalcule());
  console.log('Aside Number rewrited');
  console.log($("#triggerAmp").height());
  console.log($('#triggerAmp').offset().top);
  console.log($('#triggerAqua').offset().top)
});
