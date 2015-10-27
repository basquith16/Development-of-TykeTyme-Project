 var Router = Backbone.Router.extend({

   routes: {
     "": 'showHome',
     'repositories': 'showSomething'
   },

   showHome: function() {
     $.ajax('external-dragging.html').then(function(page) {
       $('.content').html(page);
     });
   },

   showSomething: function() {
     $.ajax('index.html').then(function(page) {
       $('.content').html(page)
     });
   },

   initialize: function() {
     Backbone.history.start();
   }
 });



 $(function() {
   var router = new Router();
 });
