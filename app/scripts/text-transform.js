// ------
// BEGIN Split 'transform-heading-letter' class into span for each caracters
(function($) {
  var s,
    spanizeLetters = {
      settings: {
        letters: $('.transform-heading-letter')
      },
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function() {
        s.letters.html(function(i, el) {
          var spanizer = $.trim(el).split('');
          return '<span class="letter">' +
            spanizer.join('</span><span class="letter">') +
            '</span>';
        });
      }
    };
  spanizeLetters.init();
})(jQuery);
// END Split 'transform-heading-letter' class into span for each caracters
// ------

// ------
// BEGIN on document ready
$(document).on('ready', function() {
  console.log('document is ready');
  setTimeout(function() {
    $('.letter').addClass('loaded');
    $('.anime-heading').addClass('loaded');
    console.log('header is loaded and animation is started');
  }, 1000);
});
// END on document ready
// ------
