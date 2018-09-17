import React, { Component } from 'react';

export default class Form extends Component {


  render() {
    return (
      <form className="Form" onSubmit={this.props.onSubmit}>
        <input type="text" placeholder="What do you want to do?" value={this.props.value} onChange={this.props.handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}