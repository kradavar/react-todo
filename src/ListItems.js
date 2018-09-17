import React, { Component } from 'react';

export default class ListItems extends Component {

  render() {
    const items = this.props.items.map((item) => {
      return <li key={item.toString()}>
        {item}
      </li>
    })
    return (
      <ul className="ListItems">
        {items}
      </ul>
    );
  }
}