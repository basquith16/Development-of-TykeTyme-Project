"use strict";

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

class PlansView extends Backbone.View {

  get template() {
    return $('#plansTemplate').text();
  }

  initialize() {
    this.render();
    this.listenTo(this.model, 'change', this.render);
  }

  render() {
    this.$el.html(this.template);
    var list = $('#dragList', this.$el);

    _.each(this.model.get('plans'), function (plan) {
      console.log(plan);
      list.append('<li class="fc-event">' +  plan.displayName + '</li>');
    });

    $('.fc-event', this.$el).each(function() {
      // store data so the calendar knows to render an event upon drop
      $(this).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
      });
      $(this).draggable({
        zIndex: 999,
        revert: true, // will cause the event to go back to its
        revertDuration: 0 //  original position after the drag
      });
    });

    $('#external-events').html(this.$el);
  }
}

class CalendarView extends Backbone.View {

  get template() {
    return $('#calendarTemplate').text();
  }

  // initialize() {
  //   this.render();
    // this.listenTo(this.model, 'change', this.render);
  // }

  render() {
    console.log('rendering')
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
  }
}

class CraftView extends Backbone.View {
  get template() {
    return _.template($('#craftTemplate').text());
  }

  initialize(options) {
    this.schedule = options.schedule;
  }

  events() {
    return {
      'click #addItem': 'onButtonNewClick'
    }
  }

  onButtonNewClick()  {
    this.schedule.set('plans',
      this.schedule.get('plans').concat(this.model)
    );
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

  initialize(options) {
    this.schedule = options.schedule;
  }

  events() {
    return {
      'click #addItem': 'onButtonNewClick'
    }
  }

  onButtonNewClick()  {
    this.schedule.set('plans',
      this.schedule.get('plans').concat(this.model)
    );
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
  initialize(options) {
    this.schedule = options.schedule;
  }

  events() {
    return {
      'click #addItem': 'onButtonNewClick'
    }
  }

  onButtonNewClick()  {
    this.schedule.set('plans',
      this.schedule.get('plans').concat(this.model)
    );
  }

  render() {
    this.$el
      .html(this.template(this.model.attributes));
    return this.$el;
  }
}

class CraftsView extends Backbone.View {

  initialize(options) {
    this.schedule = options.schedule
  }

  render() {
    const self = this;
    this.collection
      .each((craft) => {
        let view = new CraftView({
          model: craft,
          schedule: this.schedule
        });
        self.$el
          .append(view.render());
      });
    return this.$el;
  }
};

class ActivitiesView extends Backbone.View {

  initialize(options) {
    this.schedule = options.schedule
  }

  render() {
    const self = this;
    this.collection
      .each((activity) => {
        let view = new ActivityView({
          model: activity,
          schedule: this.schedule
        });
        self.$el
          .append(view.render());
      });
    return this.$el;
  }
};

class MealsView extends Backbone.View {

  initialize(options) {
    this.schedule = options.schedule
  }

  render() {
    const self = this;
    this.collection
      .each((meal) => {
        let view = new MealView({
          model: meal,
          schedule: this.schedule
        });
        self.$el
          .append(view.render());
      });
    return this.$el;
  }
};
