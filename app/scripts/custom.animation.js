// Typing text function
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
  // wait for document ready
  console.log('%c! ! ! Document ready ! ! !', 'color: white;background-color: black;');
  console.log('%c- - - W E L C O M E - - -', 'color: white;background-color: black;');
  // Animation Hello World typing
  autoType(".typing-hello", 115, 700);
  // Write Numbers inside first <aside> element
  writeAsideNumbers(heightCalcule());
  // Initiate MagicScroll controller
  var controller = new ScrollMagic.Controller();
  // Smooth Scroll
  controller.scrollTo(function(newpos) {
    var halfScreen = ($(window).height()) / 2;
    TweenMax.to(window, 1, {
      scrollTo: {
        y: newpos - halfScreen + 100
      }
    });
  });
  $(document).on("click", "a[href^='#']", function(e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
      e.preventDefault();
      controller.scrollTo(id);
    }
  });
  // Define images for TweenMax animations
  var images = [
    "images/me/allan-exp-1.svg",
    "images/me/allan-exp-2.svg",
    "images/me/allan-exp-3.svg",
    "images/me/allan-exp-4.svg",
    "images/me/allan-exp-5.svg",
    "images/me/allan-exp-2-hover.svg"
  ];
  // Define variables
  var quote = $("#quote");
  var logo = $("#me");
  var quoteSentence = [
    "My first electronic project…",
    "Don't be afraid little fish !",
    "She has too many patients now…",
    "We called me MacGiver…",
    "Learn more about me…"
  ];

  function eraseQuote() {
    quote.text("");
    quote.css("display", "none");
  }
  // build tween
  var tweenInitScale = TweenMax.to("#logo", 2, {
    css: {
      scaleX: 0.53,
      scaleY: 0.53,
      x: "110px"
    },
    ease: Linear.easeNone,
    onUpdate: function() {
      logo.attr("src", images[2]); // set the image source
      if (quote.text() != "") {
        eraseQuote();
      }
    }
  });
  var tweenFinishScale = TweenMax.to("#logo", 2, {
    css: {
      scaleX: 1,
      scaleY: 1,
      x: "-20px"
    },
    ease: Linear.easeNone,
    onUpdate: function() {
      logo.attr("src", images[1]); // set the image source
      if (quote.text() != "") {
        eraseQuote();
      }
    }
  });
  var tweenAmp = TweenMax.to("#me", 0.5, {
    onUpdate: function() {
      logo.attr("src", images[3]); // set the image source
      if (quote.text() != quoteSentence[0]) {
        quote.text(quoteSentence[0]);
        quote.css("display", "inline-block");
      }
    }
  });
  var tweenAqua = TweenMax.to("#me", 0.5, {
    onUpdate: function() {
      logo.attr("src", images[0]); // set the image source
      if (quote.text() != quoteSentence[1]) {
        quote.text(quoteSentence[1]);
        quote.css("display", "inline-block");
      }
    }
  });
  var tweenPsy = TweenMax.to("#me", 0.5, {
    onUpdate: function() {
      logo.attr("src", images[2]); // set the image source
      if (quote.text() != quoteSentence[2]) {
        quote.text(quoteSentence[2]);
        quote.css("display", "inline-block");
      }
    }
  });
  var tweenFilm = TweenMax.to("#me", 0.5, {
    onUpdate: function() {
      logo.attr("src", images[3]); // set the image source
      if (quote.text() != quoteSentence[3]) {
        quote.text(quoteSentence[3]);
        quote.css("display", "inline-block");
      }
    }
  });
  var tweenAboutAll = TweenMax.to("#me", 0.5, {
    onUpdate: function() {
      logo.attr("src", images[2]); // set the image source
      if (quote.text() != "") {
        eraseQuote();
      }
    }
  });
  var tweenAbout = TweenMax.to("#me", 0.5, {
    onStart: function() {
      if ($(".typing-about").hasClass("hidden")) {
        autoType(".typing-about", 20, 100);
      }
    }
  });
  var tweenAboutStudies = TweenMax.to("#me", 0.5, {
    onStart: function() {
      if ($(".typing-studies").hasClass("hidden")) {
        autoType(".typing-studies", 20, 100);
        setTimeout(function() {
          $("#triggerAboutStudies").next().addClass("animate");
          studiesVisible = true
        }, 400);
      }
    }
  });
  var tweenAboutDo = TweenMax.to("#me", 0.5, {
    onStart: function() {
      if ($(".typing-do").hasClass("hidden")) {
        autoType(".typing-do", 20, 100);
        setTimeout(function() {
          $("#triggerAboutDo").next().addClass("animate");
        }, 400);
      }
    }
  });
  var tweenAboutLove = TweenMax.to("#me", 0.5, {
    onStart: function() {
      if ($(".typing-love").hasClass("hidden")) {
        autoType(".typing-love", 20, 100);
        setTimeout(function() {
          $("#triggerAboutLove").next().addClass("animate");
        }, 400);
      }
    }
  });


  // build MagicScroll scenes
  var initSceneScale = new ScrollMagic.Scene({
      triggerElement: "#triggerInitScale",
      duration: 220
    })
    .setTween(tweenInitScale)
    // .addIndicators({
    //   name: "1 (duration: 220)"
    // })
    .addTo(controller);
  var finishSceneScale = new ScrollMagic.Scene({
      triggerElement: "#triggerFinishScale",
      duration: 190
    })
    .setTween(tweenFinishScale)
    // .addIndicators({
    //   name: "2 (duration: 190)"
    // })
    .addTo(controller);
  var ampScene = new ScrollMagic.Scene({
      triggerElement: "#triggerAmp",
      duration: 610,
      offset: -50
    })
    .setTween(tweenAmp)
    // .addIndicators({
    //   name: "3 (duration: 500)"
    // })
    .addTo(controller);
  var aquaScene = new ScrollMagic.Scene({
      triggerElement: "#triggerAqua",
      duration: 610,
      offset: -50
    })
    .setTween(tweenAqua)
    // .addIndicators({
    //   name: "4 (duration: 500)"
    // })
    .addTo(controller);
  var psyScene = new ScrollMagic.Scene({
      triggerElement: "#triggerPsy",
      duration: 610,
      offset: -50
    })
    .setTween(tweenPsy)
    // .addIndicators({
    //   name: "5 (duration: 500)"
    // })
    .addTo(controller);
  var filmScene = new ScrollMagic.Scene({
      triggerElement: "#triggerFilm",
      duration: 610,
      offset: -50
    })
    .setTween(tweenFilm)
    // .addIndicators({
    //   name: "6 (duration: 500)"
    // })
    .addTo(controller);
  var aboutAllScene = new ScrollMagic.Scene({
      triggerElement: "#triggerAboutAll",
      duration: 950,
      offset: -50
    })
    .setTween(tweenAboutAll)
    // .addIndicators({
    //   name: "7 (duration: 900)"
    // })
    .addTo(controller);
  var aboutScene = new ScrollMagic.Scene({
      triggerElement: "#triggerAbout",
      duration: 0,
      offset: -70
    })
    .setTween(tweenAbout)
    // .addIndicators({
    //   name: "8-1 (duration: 0)"
    // })
    .addTo(controller);
  var aboutStudiesScene = new ScrollMagic.Scene({
      triggerElement: "#triggerAboutStudies",
      duration: 0
    })
    .setTween(tweenAboutStudies)
    // .addIndicators({
    //   name: "8-2 (duration: 0)"
    // })
    .addTo(controller);
  var aboutDoScene = new ScrollMagic.Scene({
      triggerElement: "#triggerAboutDo",
      duration: 0
    })
    .setTween(tweenAboutDo)
    // .addIndicators({
    //   name: "8-3 (duration: 0)"
    // })
    .addTo(controller);
  var aboutLoveScene = new ScrollMagic.Scene({
      triggerElement: "#triggerAboutLove",
      duration: 0
    })
    .setTween(tweenAboutLove)
    // .addIndicators({
    //   name: "8-4 (duration: 0)"
    // })
    .addTo(controller);

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
