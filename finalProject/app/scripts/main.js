Parse.initialize("jtKp70qF95AUOliYuurtfCASVEZr35aOs1pdNhHS", "orSL5zhN13Qqiamy3qbNbh9HlJMhxvR7f2DJRRv7");

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

// var Events = Backbone.Collection.extend({});
//
// var EventsView = Backbone.View.extend({
//   el: document.getElementById("wrap"),
//   render: function() {
//     var self = this;
//     var events = JSON.parse(localStorage.getItem('events'));
//     var events = new Events(events);
//     var jsevents = events.toJSON();
//
//     self.$el.fullCalendar({
//       agenda: 'h:mm{ - h:mm}',
//       '': 'h(:mm)t',
//       aspectRatio: 1.5,
//       droppable: true,
//       weekend: true,
//       editable: true,
//       eventStartEditable: true,
//       eventDurationEditable: true,
//       dragScroll: true,
//       eventDrop: function(event) {
//         console.log(event);
//       },
//       defaultView: 'month',
//       firstDay: 1,
//       handleWindowResize: true,
//       allDayDefault: false,
//       firstHour: 7,
//       columnFormat: {
//         month: 'dddd',
//         week: 'ddd, dS',
//         day: 'dddd, MMM dS'
//       },
//       header: {
//         right: 'prev,next',
//         center: 'title',
//         left: 'month,agendaWeek,agendaDay'
//       },
//       selectable: true,
//       selectHelper: true,
//       select: function(start, end) {
//         var title = prompt('Event Title:');
//         var eventData;
//         if (title) {
//           eventData = {
//             title: title,
//             start: start,
//             end: end
//           };
//           self.$el.fullCalendar('renderEvent', eventData, true);
//           events.push(eventData);
//           localStorage.setItem('events', JSON.stringify(events));
//         }
//         self.$el.fullCalendar('unselect');
//       },
//       events: function(start, end, timezone, callback) {
//         callback(jsevents);
//       }
//     });
//   }
// });
//
// var view = new EventsView({
//   el: '#calendar'
// });
// view.render();
