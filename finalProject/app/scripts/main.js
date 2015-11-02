"use strict";

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

//Models

class Craft extends Backbone.Model {}
class Activity extends Backbone.Model {}
class Meal extends Backbone.Model {}

class Crafts extends Backbone.Collection {
  get url() {
    return '../crafts.jsonl'
  }
  get model() {
    return Craft
  }
}

class Activities extends Backbone.Collection {
  get url() {
    return '../PhysActivities.JSON'
  }
  get model() {
    return Activity
  }
}

class Meals extends Backbone.Collection {
  get url() {
    return '../meals.JSON'
  }
  get model() {
    return Meal
  }
}


//Views
class CraftView extends Backbone.View {
  get template() {
    return _.template($('#craftTemplate').text());
 }
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
}

class ActivityView extends Backbone.View {
  get template() {
    return _.template($('#activityTemplate').text());
 }
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
}

class MealView extends Backbone.View {
  get template() {
    return _.template($('#mealTemplate').text());
 }
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
}


class CraftsView extends Backbone.View {
  render() {
    const self = this;
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

class ActivitiesView extends Backbone.View {
  render() {
    const self = this;
    this.collection.each((activity) => {
      let view = new ActivityView({
        model: activity
      });
      self.$el.append(view.render());
    });
    console.log(this.el)
    return this.$el;
  }
};

class MealsView extends Backbone.View {
  render() {
    const self = this;
    this.collection.each((meal) => {
      let view = new MealView({
        model: meal
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
      "": 'index',
      'crafts': 'showCrafts',
      'activities': 'showActivities',
      'whatsAround': 'showMap',
      'meals': 'showMeals'
    };
  }

  index() {
     $.ajax('index.html').then(function(page) {
       $('').html(page);
     });
  }

  showCrafts() {
    this.crafts = new Crafts();
    const craftsView = new CraftsView({
      collection: this.crafts
    });

    this.crafts.fetch().done(() => {
      console.log(this.crafts);
      $('#calendar').html(craftsView.render());
    }).fail((xhr, status, error) => {
      console.log(xhr, status, error);
    })
  }

  showActivities() {
    this.activities = new Activities();
    const activitiesView = new ActivitiesView({
      collection: this.activities
    });

    this.activities.fetch().done(() => {
      console.log(this.activities);
      $('#calendar').html(activitiesView.render());
    }).fail((xhr, status, error) => {
      console.log(xhr, status, error);
    })
  }

  showMeals() {
    this.meals = new Meals();
    const mealsView = new MealsView({
      collection: this.meals
    });

    this.meals.fetch().done(() => {
      console.log(this.meals);
      $('#calendar').html(mealsView.render());
    }).fail((xhr, status, error) => {
      console.log(xhr, status, error);
    })
  }

  showMap() {
    $.ajax('map.html').then(function(page) {
      $('#calendar').html(page);
    })
 }

  initialize() {
    console.log('initialized');
    this.crafts = new Crafts();
    this.activities = new Activities();
    this.meals = new Meals();
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
