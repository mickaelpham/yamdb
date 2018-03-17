import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | movie/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:movie/show');
    assert.ok(route);
  });
});
