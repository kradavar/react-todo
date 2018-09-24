import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

export default class Form extends Component {

  render() {
    return (
      <form className="form" onSubmit={this.props.onSubmit}>
        <Input type="text" className="form__input" placeholder="What do you want to do?"
          value={this.props.value} onChange={this.props.onInputChange} />
        <Button type="submit" className="form__submit">Submit</Button>
      </form>
    );
  }
}