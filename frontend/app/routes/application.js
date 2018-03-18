import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition() {
      this.controller.set('navbarExpanded', false);
      return true;
    }
  }
});
