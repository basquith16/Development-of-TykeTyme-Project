"use strict";

Parse.initialize("jtKp70qF95AUOliYuurtfCASVEZr35aOs1pdNhHS", "orSL5zhN13Qqiamy3qbNbh9HlJMhxvR7f2DJRRv7");

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

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
