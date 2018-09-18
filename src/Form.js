import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    return (
      <form className="form" onSubmit={this.props.onSubmit}>
        <input type="text" className="form__input" placeholder="What do you want to do?"
          value={this.props.value} onChange={this.props.onInputChange} />
        <button type="submit" className="form__submit">Submit</button>
      </form>
    );
  }
}