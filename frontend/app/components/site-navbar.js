import Component from '@ember/component';

export default Component.extend({
  isExpanded: false,

  actions: {
    toggleMenu() {
      this.toggleProperty('isExpanded');
    }
  }
});
