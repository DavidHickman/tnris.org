(function goToConferenceTimeBlock(_now) {
  var now = _now || moment();

  var dayOne = moment('2015-10-28');
  var dayTwo = moment('2015-10-29');

  var dayPrefix;
  if (now.isSame(dayOne, 'day')) {
    dayPrefix = 'DayOne_';
  } else if (now.isSame(dayTwo, 'day')) {
    dayPrefix = 'DayTwo_';
  } else {
    return; //exit if not a conference day
  }

  var bestStart;
  var nowTime = parseInt(now.format('HHmm'), 10);
  $('.time-block').each(function () {
    var blockDayStart = $(this).attr('id').split('_');
    var blockDay = blockDayStart[0];
    var blockStart = blockDayStart[1];
    if (blockDay + '_' !== dayPrefix) {
      //only look at times for current day
      return;
    }
    if (!bestStart) {
      bestStart = blockStart;
    }
    if (nowTime >= parseInt(blockStart, 10)) {
      bestStart = blockStart;
    }
  });
  window.location.hash = '#' + dayPrefix + bestStart;
})();


(function() {
  var STORAGE_KEY = 'forum.agenda_stars'
  if (!$.localStorage(STORAGE_KEY)) {
    $.localStorage(STORAGE_KEY, {});
  }

  var setStar = function (id) {
    var starred = $.localStorage(STORAGE_KEY);
    starred[id] = true;
    $.localStorage(STORAGE_KEY, starred);
  }

  var removeStar = function (id) {
    var starred = $.localStorage(STORAGE_KEY);
    delete starred[id];
    $.localStorage(STORAGE_KEY, starred);
  }

  $(function loadStars() {
    var starred = $.localStorage(STORAGE_KEY);
    if (!starred) { return; }

    $('.agenda-track-item').each(function () {
      if (starred[this.id]) {
        $(this).addClass('starred');
      }
    })

  });

  $(function attachStarBehavior() {
    $('button.star-btn').on('click', function () {
      var agendaTrackItem = $(this).parents('.agenda-track-item')[0];
      if (!agendaTrackItem) { return; }

      $(agendaTrackItem).toggleClass('starred');

      if ($(agendaTrackItem).hasClass('starred')) {
        setStar(agendaTrackItem.id);
      }
      else {
        removeStar(agendaTrackItem.id);
      }
    });
  });

})();
