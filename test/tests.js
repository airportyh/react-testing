import Hello from '../hello.jsx';
import addons from 'react/addons';
const TestUtils = addons.addons.TestUtils;
import React from 'react';
var jsdom = require('jsdom');
import assert from 'assert';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;

describe('blah', function() {

  it('should work', function() {
    let comp = TestUtils.renderIntoDocument(<Hello/>);
    let h1 = TestUtils.findRenderedDOMComponentWithTag(comp, 'h1');
    assert.equal(h1.getDOMNode().textContent, 'Hello world');
  });

});