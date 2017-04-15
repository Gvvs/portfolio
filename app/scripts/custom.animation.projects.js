function autoType(elementClass, typingSpeed, delay) {
  var selector = $(elementClass);
  var text = selector.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  setTimeout(function() {
    selector.text("");
    selector.removeClass("hidden");
    for (var i = 0; i < amntOfChars; i++) {
      (function(i, char) {
        setTimeout(function() {
          newString += char;
          selector.text(newString);
        }, i * typingSpeed);
      })(i + 1, text[i]);
    }
  }, delay);
}

$(function() {
  // Wait for document ready
  console.log('%c! ! ! Document ready ! ! !', 'color: white;background-color: black;');
  console.log('%c- - - W E L C O M E - - -', 'color: white;background-color: black;');
  autoType(".typing-date", 100, 700);
  // Variables
  var images = [
    "/images/me/allan-exp-1.svg",
    "/images/me/allan-exp-2.svg",
    "/images/me/allan-exp-3.svg",
    "/images/me/allan-exp-4.svg",
    "/images/me/allan-exp-5.svg",
    "/images/me/allan-exp-2-hover.svg"
  ];
  var logo = $("#me");
  // Animation
  $("#email .wrapper").mouseover(function() {
    TweenMax.to("#me", 0.5, {
      onUpdate: function() {
        logo.attr("src", images[5]); // set the image source
      }
    })
  });
  $("#email .wrapper").mouseleave(function() {
    TweenMax.to("#me", 0.5, {
      onUpdate: function() {
        logo.attr("src", images[1]); // set the image source
      }
    })
  });
});
