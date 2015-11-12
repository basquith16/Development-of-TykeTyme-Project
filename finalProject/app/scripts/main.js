_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};


trashBin = $('#trashBin');
delete_event = $(this).attr('id');

trashBash = function () {
  $('#trashBin').droppable({
  editable: true,
  droppable: true, // this allows things to be dropped onto the calendar
  eventDrop: this.trashDrop,
  eventReceive: this.trashDrop
})

if('delete_event' === 'trashBin') {
  $('delete_event').remove()
}
};

trashBash();
