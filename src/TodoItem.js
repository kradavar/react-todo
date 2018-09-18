import React from 'react';

export default (props) => {
  return (
    <div className="todo-item">
      <input type="checkbox" value={props.item.completed}
        onChange={() => props.onComplete(props.item.key)} />
      <li onClick={() => props.onDelete(props.item.key)}>
        {props.item.text}
      </li>
    </div>
  );
}