"use strict";

Parse.initialize("jtKp70qF95AUOliYuurtfCASVEZr35aOs1pdNhHS", "orSL5zhN13Qqiamy3qbNbh9HlJMhxvR7f2DJRRv7");

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

class CraftView extends Backbone.View {
  get template() {
    return _.template($('#craftTemplate').text());
 }
  events() {
    return {
      'click #addItem': 'onButtonNewClick'
  };
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
