$(function() {
  // wait for document ready
  console.log('! ! ! Document ready ! ! !');
  console.log('- - - W E L C O M - - -');
  // Write Numbers inside first <aside> element
  writeAsideNumbers(heightCalcule());
  // Initiate MagicScroll controller
  var controller = new ScrollMagic.Controller();
  // Smooth Scroll
  controller.scrollTo(function(newpos) {
    TweenMax.to(window, 1, {
      scrollTo: {
        y: newpos
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
    "We called me MacGiver…"
  ];

  function eraseQuote() {
    return quote.text("");
  }


  // build tween
  var tweenInitScale = TweenMax.to("#logo", 2, {
    css: {
      scaleX: 0.53,
      scaleY: 0.53
    },
    ease: Linear.easeNone,
    onUpdate: function() {
      logo.attr("src", images[2]); // set the image source
      if (quote.text() != "") {
        eraseQuote();
        quote.css("display", "none");
      }
    }
  });
  var tweenFinishScale = TweenMax.to("#logo", 2, {
    css: {
      scaleX: 1,
      scaleY: 1
    },
    ease: Linear.easeNone,
    onUpdate: function() {
      logo.attr("src", images[1]); // set the image source
      if (quote.text() != "") {
        eraseQuote();
        quote.css("display", "none");
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

  // build MagicScroll scenes
  var initSceneScale = new ScrollMagic.Scene({
      triggerElement: '#triggerInitScale',
      duration: 220
    })
    .setTween(tweenInitScale)
    .addTo(controller);
  var finishSceneScale = new ScrollMagic.Scene({
      triggerElement: '#triggerFinishScale',
      duration: 190
    })
    .setTween(tweenFinishScale)
    .addTo(controller);
  var ampScene = new ScrollMagic.Scene({
      triggerElement: '#triggerAmp',
      duration: 400
    })
    .setTween(tweenAmp)
    .addTo(controller);
  var ampScene = new ScrollMagic.Scene({
      triggerElement: '#triggerAqua',
      duration: 400
    })
    .setTween(tweenAqua)
    .addTo(controller);
  var ampScene = new ScrollMagic.Scene({
      triggerElement: '#triggerPsy',
      duration: 400
    })
    .setTween(tweenPsy)
    .addTo(controller);
  var ampScene = new ScrollMagic.Scene({
      triggerElement: '#triggerFilm',
      duration: 400
    })
    .setTween(tweenFilm)
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
