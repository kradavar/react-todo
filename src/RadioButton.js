import React, { Component } from 'react';
import { Input, Label, FormGroup } from 'reactstrap';

export default class RadioButton extends Component {
  render() {
    return (
      <div className="radio">
        <Label>
          <Input type="radio" value={this.props.value}
            checked={this.props.value === this.props.filter}
            onChange={this.props.onChange} />
          {this.props.text}
        </Label>
      </div>
    )
  }
}