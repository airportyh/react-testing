import React from 'react';

export default class Hello extends React.Component {

  handleChange() {
    let text = React.findDOMNode(this.refs.input).value.trim();
    React.findDOMNode(this.refs.result).value = text;
  }

  render() {
    return (
      <div>
          <h1>Hello world</h1>

          <input type="text" ref="input" placeholder="NAME" onChange={this.handleChange.bind(this)} />
          <div ref="result"> </div>
      </div>
    );
  }

}