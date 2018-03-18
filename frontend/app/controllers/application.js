import Controller from '@ember/controller';

export default Controller.extend({
  navbarExpanded: false,

  actions: {
    toggleNavbar() {
      this.toggleProperty('navbarExpanded');
    }
  }
});
