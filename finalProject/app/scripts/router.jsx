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
