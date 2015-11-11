_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

trashBin = $('#trashBin');
delete_event = $(this).attr('id');

trashBash = function () {
if('delete_event' === 'trashBin') {
  $('delete_event').remove()
}
};

trashBash();
