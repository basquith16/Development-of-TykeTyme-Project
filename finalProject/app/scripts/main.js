_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};


var Craft = Backbone.Model.extend({
    url: "/crafts.JSON"
});

var Crafts = Backbone.Collection.extend({
  model: Craft,
  url: '/crafts.JSON'

})

var CraftView = Backbone.View.extend({
  template: _.template($('#craftTemplate').text()),

  render: function () {
    console.log('render function')
    var self = this;
    this.collection.each(function(craft) {
      var view = new CraftView({
        model: craft
      });
      self.$el.append(view.render());
    })
    return this.$el;
  }
});



//Router

var Router = Backbone.Router.extend({

  routes: {
     "": 'showHome',
     'crafts': 'showCrafts',
     'activities': 'showActivities',
     'whatsAround': 'showWhatsAround',
     'meals': 'showMeals'
 },

   showHome: function() {
     $.ajax('external-dragging.html').then(function(page) {
       $('.content').html(page);
     });
   },

   showCrafts: function() {
     var craft = new Craft({
     });

     console.log(craft);

     craft.fetch().then(function () {
       console.log('fetched');
       var view = new CraftView({
         model: craft
       });
       $('.fc-events').html(view.render());
     })
   },

  //  showActivities: function() {
  //  },

   initialize: function() {
     console.log('initialized');
     var craft = new Craft();
     collection: this.crafts
     Backbone.history.start();
   }
  });



$(function() {
  console.log('router initialized')
 var router = new Router();
});
