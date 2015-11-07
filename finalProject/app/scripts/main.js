"use strict";

Parse.initialize("jtKp70qF95AUOliYuurtfCASVEZr35aOs1pdNhHS", "orSL5zhN13Qqiamy3qbNbh9HlJMhxvR7f2DJRRv7");

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

//Manual Event Text Input
$('form').submit(function() {
  if ($('input').val() !== '') {
  var value = $('input').val();
  $('#dragList').append($('<li class="fc-event"></li>'));
}
});
