import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class ListItems extends Component {

  render() {
    const items = this.props.items.map((item) => {
      return <TodoItem onComplete={this.props.onComplete} onDelete={this.props.onDelete} item={item} />;
    })
    return (
      <ul className="ListItems" >
        {items}
      </ul>
    );
  }
}