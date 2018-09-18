import React from 'react';
import classNames from "classnames";

export default (props) => {
  let itemClasses = classNames({
    "completed": props.item.completed
  });
  return (
    <div className="todo-item">
      <input type="checkbox" value={props.item.completed}
        onChange={() => props.onComplete(props.item.key)} />
      <li onClick={() => props.onDelete(props.item.key)}
        className={itemClasses}>
        {props.item.text}
      </li>
    </div>
  );
}