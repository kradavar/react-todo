import React, { Component } from 'react';
import Form from './Form';
import ListItems from './ListItems';
import Filter from './Filter';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      items: [
        { text: "vbn", completed: false, key: 1537698803696 },
        { text: " bninjb", completed: true, key: 1537698807757 }
      ],
      itemsToShow: [
        { text: "vbn", completed: false, key: 1537698803696 },
        { text: " bninjb", completed: true, key: 1537698807757 }
      ],
      filter: "all"
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCompleteItem = this.handleCompleteItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  filterItems(filter, items) {
    switch (filter) {
      case 'todo':
        return this.filterTodoItems(items);
        break;
      case 'done':
        return this.filterDoneItems(items);
        break;
      default:
        return items;
        break;
    }
  }
  filterTodoItems(items = this.state.items) {
    return items.filter((item) => item.completed === false);
  }
  filterDoneItems(items = this.state.items) {
    return items.filter((item) => item.completed === true);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newItems = [...this.state.items,
    {
      text: this.state.value,
      completed: false,
      key: Date.now()
    }];
    this.setState({
      items: newItems,
      itemsToShow: this.filterItems(this.state.filter, newItems),
      value: ""
    });
  }

  handleDeleteItem(key) {
    const newItems = this.state.items.filter((item) => item.key !== key);
    const itemsToShow = this.state.itemsToShow.filter(item => item.key !== key);
    this.setState({ items: newItems, itemsToShow });
  }

  handleCompleteItem(key) {
    const newItems = this.state.items.map((item) => {
      if (item.key === key) {
        item.completed = !item.completed;
        return item;
      } else { return item; }
    });
    this.setState({
      items: newItems,
      itemsToShow: this.filterItems(this.state.filter, newItems)
    });
  }
  handleRadioChange(event) {
    if (event.target.value === 'todo') {
      this.setState({
        itemsToShow: this.filterTodoItems(),
        filter: 'todo'
      });
    } else if (event.target.value === 'done') {
      this.setState({
        itemsToShow: this.filterDoneItems(),
        filter: 'done'
      });
    } else {
      this.setState({
        itemsToShow: this.state.items,
        filter: 'all'
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleFormSubmit} onInputChange={this.handleInputChange}
          value={this.state.value} />
        <ListItems items={this.state.itemsToShow} onDelete={this.handleDeleteItem}
          onComplete={this.handleCompleteItem} />
        <Filter onChange={this.handleRadioChange} filter={this.state.filter} />
      </div>
    );
  }
}