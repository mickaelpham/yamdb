import DS from 'ember-data';

export default DS.Model.extend({
  title:         DS.attr(),
  originalTitle: DS.attr(),
  synopsis:      DS.attr()
});
