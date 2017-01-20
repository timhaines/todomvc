import { test } from 'qunit';
import moduleForAcceptance from 'todomvc/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user can open app');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    percySnapshot(assert);
  });
});
