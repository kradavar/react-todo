import React, { Component } from 'react';

export default class RadioButton extends Component {
  render() {
    return (
      <div className="radio">
        <label>
          <input type="radio" value={this.props.value}
            checked={this.props.value === this.props.filter}
            onChange={this.props.onChange} />
          {this.props.text}
        </label>
      </div>
    )
  }
}
