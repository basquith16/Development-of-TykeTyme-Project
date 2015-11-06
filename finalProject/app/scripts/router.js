"use strict";

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
    const calendarView = new CalendarView({
      model: new Schedule()
    });
    calendarView.render();
  }

  showCrafts() {
    this.crafts = new Crafts();
    const craftsView = new CraftsView({
      schedule: this.schedule,
      collection: this.crafts
    });

    this.crafts.fetch().done(() => {
      $('#calendar').html(craftsView.render());
    }).fail((xhr, status, error) => {
      console.log(xhr, status, error);
    })
  }

  showActivities() {
    this.activities = new Activities();
    const activitiesView = new ActivitiesView({
      schedule: this.schedule,
      collection: this.activities
    });

    this.activities.fetch().done(() => {
      $('#calendar').html(activitiesView.render());
    }).fail((xhr, status, error) => {
      console.log(xhr, status, error);
    })
  }

  showMeals() {
    this.meals = new Meals();
    const mealsView = new MealsView({
      schedule: this.schedule,
      collection: this.meals
    });

    this.meals.fetch().done(() => {
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
    this.crafts = new Crafts();
    this.activities = new Activities();
    this.meals = new Meals();
    this.schedule = new Schedule();
    this.plansView = new PlansView({model: this.schedule});

    Backbone.history.start();
  }
};

$(function() {
  var router = new Router();
});
