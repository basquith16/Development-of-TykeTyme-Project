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
      let view = new CraftView({ model: craft });
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
     $.ajax('external-dragging.html').then(function(page) {
       $('.content').html(page);
     });
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
