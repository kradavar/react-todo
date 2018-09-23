import React, { Component } from 'react';
import RadioButton from './RadioButton';

export default class Filter extends Component {
  render() {
    return (
      <form className="Filter">
        <RadioButton onChange={this.props.onChange} text={"All tasks"} value="all" filter={this.props.filter} />
        <RadioButton onChange={this.props.onChange} text={"Done tasks"} value="done" filter={this.props.filter} />
        <RadioButton onChange={this.props.onChange} text={"Tasks to do"} value="todo" filter={this.props.filter} />
      </form>
    );
  }
}