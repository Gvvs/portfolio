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
