import React from 'react';
import classNames from "classnames";
import { Input } from "reactstrap";

export default (props) => {
  let itemClasses = classNames({
    "completed": props.item.completed
  });
  return (
    <div className="todo-item">
      <Input type="checkbox" checked={props.item.completed} value={props.item.completed}
        onChange={() => props.onComplete(props.item.key)} />
      <li onClick={() => props.onDelete(props.item.key)}
        className={itemClasses}>
        {props.item.text}
      </li>
    </div>
  );
}