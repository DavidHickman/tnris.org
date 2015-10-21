require('jquery');
require('bootstrap');

require('imports?this=>window!holderjs');
require('lodash');
require('twentytwenty/js/jquery.event.move.js');
require('twentytwenty/js/jquery.twentytwenty.js');

require('bootstrap/dist/css/bootstrap.min.css');
require('twentytwenty/css/twentytwenty.css');
require('../../scss/tnris.scss');

// tmp workaround while clipboard build settings get fixed
//   see: https://github.com/zenorocha/clipboard.js/issues/27
var Clipboard = require('clipboard/dist/clipboard.js');

(function($) {
  'use strict';

  $(function() {
    // Nav scroll spy
    $('body').scrollspy({ target: '.wms-nav-container', offset: 130 });

    // Tool Tip
    $('.copy-tip').tooltip({'placement': 'top'});
    $('.wms-tip').tooltip({'placement': 'bottom'});

    // Beta/development alert message
    if (window.location.hostname !== 'tnris.org') {
      $('.beta-alert').removeClass('hide')
    }

    // from http://zenorocha.github.io/clipboard.js/assets/scripts/tooltips.js
    // not flawless, but close enough
    function fallbackMessage(action) {
      var actionMsg = '';
      var actionKey = (action === 'cut' ? 'X' : 'C');

      if(/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'Copy manually';
      }
      else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
      }
      else {
        actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
      }

      return actionMsg;
    }

    var clipboard = new Clipboard('.copy-url-btn', {
      target: function(trigger) {
        return trigger.parentElement.nextElementSibling;
      }
    });

    clipboard.on('success', function(e) {
      var $btn = $(e.trigger);
      var origInner = $btn.html();
      $btn.html('Copied!');
      setTimeout(function () {
        $btn.html(origInner)
      }, 4000);
      e.clearSelection();
    });

    clipboard.on('error', function(e) {
      var $btn = $(e.trigger);
      var origInner = $btn.html();
      $btn.html(fallbackMessage(e.action));
      setTimeout(function () {
        $btn.html(origInner)
      }, 4000);
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
