"use strict";

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

class Craft extends Backbone.Model {}


class Crafts extends Backbone.Collection {
  get url() {
    return '../crafts.JSON'
  }
  get model() {
    return Craft
  }
}

class CraftView extends Backbone.View {

  render() {
    this.$el.text('hello')
    return this.$el;
  }
}

class CraftsView extends Backbone.View {
  render() {
    console.log('render function')
    const self = this;
    console.log(this)
    this.collection.each((craft) => {
      let view = new CraftView({
        model: craft
      });
      self.$el.append(view.render());
    });
    console.log(this.el)
    return this.$el;
  }
};

//Router

class Router extends Backbone.Router {

  get routes() {
    return {
      "": 'showHome',
      'crafts': 'showCrafts',
      'activities': 'showActivities',
      'whatsAround': 'showWhatsAround',
      'meals': 'showMeals'
    };
  }

  showHome() {
    //  $.ajax('index.html').then(function(page) {
    //    $('.content').html(page);
    //  });
  }

  showCrafts() {
    this.crafts = new Crafts();
    const craftsView = new CraftsView({
      collection: this.crafts
    });

    this.crafts.fetch().done(() => {
      console.log(this.crafts);
      $('.fc-events').html(craftsView.render());
    }).fail((xhr, status, error) => {
      console.log(xhr, status, error);
    })
  }

  //  showActivities: function() {
  //  },

  initialize() {
    console.log('initialized');
    this.crafts = new Crafts();
    Backbone.history.start();
  }
};

$(function() {
  console.log('router initialized')
  var router = new Router();
});


//calendar JS

$(document).ready(function() {
  /* initialize the external events
  -----------------------------------------------------------------*/
  $('#external-events .fc-event').each(function() {
    // store data so the calendar knows to render an event upon drop
    $(this).data('event', {
      title: $.trim($(this).text()), // use the element's text as the event title
      stick: true // maintain when user navigates (see docs on the renderEvent method)
    });
    // make the event draggable using jQuery UI
    $(this).draggable({
      zIndex: 999,
      revert: true, // will cause the event to go back to its
      revertDuration: 0 //  original position after the drag
    });
  });
  /* initialize the calendar
  -----------------------------------------------------------------*/
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
