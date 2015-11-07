"use strict";

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

// class ManualAdd extends Backbone.Model {}; May not need

class Calendar extends Backbone.Model {};

class Schedule extends Backbone.Model {
  get defaults() {
    return {
      plans: []
    }
  }
}

class Craft extends Backbone.Model {
  get displayName() {
    return this.get('title');
  }
}

class Activity extends Backbone.Model {
  get displayName() {
    return this.get('title');
  }
}
class Meal extends Backbone.Model {
  get displayName() {
    return this.get('title');
  }
}

class ManualAdds extends Backbone.Collection {
  get model() {
    return manualAdd
  }
}
// var manualAdd = new ManualAdd(); May Not Need

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
