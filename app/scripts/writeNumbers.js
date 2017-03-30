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
    if (i === 3 || i === 44 || i === 85 || i === 126) {
      asideNumber.append('<span class="green">' + i + '</span>');
    }
    else {
      asideNumber.append('<span>' + i + '</span>');
    }
  }
}

// Window OnResize EventListeners
$(window).resize(function() {
  writeAsideNumbers(heightCalcule());
});
