import {sayHello} from '../js/main.js';

QUnit.module('hello', function() {
    QUnit.test('make sure the hello function says hello', function(assert) {
        assert.equal(sayHello(), 'hello');
    });
});
