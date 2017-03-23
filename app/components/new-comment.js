import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment1() {
      var params = {
        comment: this.get('comment'),
        blog: this.get('blog')
      };
      this.sendAction('saveComment2', params);
    }
  }
});
