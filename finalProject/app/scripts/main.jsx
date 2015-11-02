"use strict";

Parse.initialize("jtKp70qF95AUOliYuurtfCASVEZr35aOs1pdNhHS", "orSL5zhN13Qqiamy3qbNbh9HlJMhxvR7f2DJRRv7");

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

//calendar JS
$(document).ready(function() {
  $('#external-events .fc-event').each(function() {
    // store data so the calendar knows to render an event upon drop
    $(this).data('event', {
      title: $.trim($(this).text()), // use the element's text as the event title
      stick: true // maintain when user navigates (see docs on the renderEvent method)
    });
    $(this).draggable({
      zIndex: 999,
      revert: true, // will cause the event to go back to its
      revertDuration: 0 //  original position after the drag
    });
  });
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function() {
      // is the "remove after drop" checkbox checked?
      if ($('#drop-remove').is(':checked')) {
        // if so, remove the element from the "Draggable Events" list
        $(this).remove();
      }
    }
  });
});
