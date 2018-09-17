import React, { Component } from 'react';
import Form from './Form';
import ListItems from './ListItems';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      items: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCompleteItem = this.handleCompleteItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      items: [...this.state.items,
      {
        text: this.state.value,
        completed: false,
        key: Date.now()
      }]
    });
  }

  handleDeleteItem(key) {

  }
  handleCompleteItem(key) {
    const newItems = this.state.items.map((item) => {
      if (item.key === key) {
        item.completed = !item.completed;
      }
    });
    this.setState({ items: newItems });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleFormSubmit} onInputChange={this.handleInputChange}
          value={this.state.value} />
        <ListItems items={this.state.items} onDelete={this.handleDeleteItem}
          onComplete={this.handleCompleteItem} />
      </div>
    );
  }
}