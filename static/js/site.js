require('jquery');
require('bootstrap');

require('imports?this=>window!holderjs');
require('jquery-zclip/jquery.zclip.js');
require('lodash');
require('swfobject');
require('twentytwenty/js/jquery.event.move.js');
require('twentytwenty/js/jquery.twentytwenty.js');

require('bootstrap/dist/css/bootstrap.min.css');
require('twentytwenty/css/twentytwenty.css');
require('../../scss/tnris.scss');

(function($) {
  'use strict';

  $(function() {
    //check for flash
    //if flash is available, the html tag will have 'flash' as a class
    // if not, the html tag will have 'no-flash' as a class
    $('html').addClass(typeof swfobject !== 'undefined' &&
      swfobject.getFlashPlayerVersion().major !== 0 ? 'flash' : 'no-flash'
    );

    // Nav scroll spy
    $('body').scrollspy({ target: '.wms-nav-container', offset: 130 });

    // Tool Tip
    $('.copy-tip').tooltip({'placement': 'top'});
    $('.wms-tip').tooltip({'placement': 'bottom'});

    // Beta/development alert message
    if (window.location.hostname !== 'tnris.org') {
      $('.beta-alert').removeClass('hide')
    }

    //zclip + ZeroClipboard url copy buttons
    $('.copy-url-container').each(function (index, node) {
      var $node = node;
      var $btn = $('.copy-url-btn', $node);
      var origInner = $btn.html();
      var $input = $('.copy-url-input', $node);
      var val = $input.val();

      $input.focus(function () {
        $input.select();
      });

      if ($('html').hasClass('no-flash')) {
        $btn.hide();
        return;
      }
      //else
      $btn.zclip({
        path: '/bower_components/jquery-zclip/ZeroClipboard.swf',
        copy: val,
        afterCopy: function () {
          $btn.html('Copied!');
          window.setTimeout(function () {
            $btn.html(origInner);
          }, 4000);
        }
      });

    });

    $('.nav-cat').affix({
      offset: {
        top: function () {
          return $('header').outerHeight(true);
        },
        bottom: function (element) {
          return -1 * ($('footer').offset().top - $('footer').outerHeight() - element.outerHeight(true));
        }
       }
    }).on('affixed.bs.affix', function (element) {
      $(element.target).css('position', '');
    });

    $("a[href^='\#']").each(function(){
      this.href=location.href.split("#")[0]+'#'+this.href.substr(this.href.indexOf('#')+1);
    });
  });

  $(window).load(function() {
    // Image Slider
    $(".twentytwenty-container").twentytwenty({default_offset_pct: .5});
  });

  $('a.smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.carousel-inner div:first').addClass('active');

})(jQuery);
