import React, { Component } from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      items: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.value]
    });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleFormSubmit} onInputChange={this.handleInputChange} value={this.state.value} />
        <TodoList items={this.state.items} />
      </div>
    );
  }
}