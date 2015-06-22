Raffler.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],
  initialize: function(){
    this.collection.on('reset',this.render, this);
  },
  render: function(){
      console.log(this.collection);
    this.$el.html(this.template({
        entries: this.collection,
        message: 'Hell yeah! Backbone Rails is finally working!'
    }));

    return this;
  }

});
