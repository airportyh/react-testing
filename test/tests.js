import Hello from '../hello.jsx';
import addons from 'react/addons';
const TestUtils = addons.addons.TestUtils;
import React from 'react';
var jsdom = require('jsdom');
import assert from 'assert';
import ror from 'react-on-rails';

describe('render correctly', function() {

  it('should render', function() {
    let comp = TestUtils.renderIntoDocument(<Hello/>);
    let h1 = TestUtils.findRenderedDOMComponentWithTag(comp, 'h1');
    assert.equal(h1.getDOMNode().textContent, 'Hello world');
  });

  it('should change input field', function(){
  	let comp = TestUtils.renderIntoDocument(<Hello/>);
  	let input = TestUtils.findRenderedDOMComponentWithTag(comp, 'input');
  	input.value = 'Wendy';
  	TestUtils.Simulate.change(input);
  	TestUtils.Simulate.keyDown(input, { key: "Enter", keyCode: 13, which: 13 });
  })

});