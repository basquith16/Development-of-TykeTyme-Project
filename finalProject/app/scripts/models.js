"use strict";

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

class Calendar extends Backbone.Model {};
class Contact extends Backbone.Model {};

class Schedule extends Backbone.Model {
  get defaults() {
    return {
      localStorage: true,
      plans: []
    }
  }

  push(arg, val) {
    var arr = _.clone(this.get(arg));
    arr.push(val);
    this.set(arg, arr);
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

// class Contacts extends Backbone.Collection{};

class Crafts extends Backbone.Collection {
  get defaults() {
    return {
      localStorage: new Store("craft"),
    }
  };
  get url() {
    return '../crafts.jsonl'
  }
  get model() {
    return Craft
  }
}

class Activities extends Backbone.Collection {
  get defaults() {
    return {
      localStorage: new Store("activity")
    }
  };
  get url() {
    return '../PhysActivities.JSON'
  }
  get model() {
    return Activity
  }
}

class Meals extends Backbone.Collection {
  get defaults() {
    return {
      localStorage: true
    }
  };
  get url() {
    return '../meals.JSON'
  }
  get model() {
    return Meal
  }
}
