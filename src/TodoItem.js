import React from 'react';

export default (props) => {
  return (
    <div>
      <input type="checkbox" value={props.item.completed}
        onChange={() => props.onComplete(props.item.key)} />
      <li key={props.item.key}>
        {props.item.text}
      </li>
      <input type="button" value="delete" onClick={() => props.onDelete(props.item.key)} />
    </div>
  );
}