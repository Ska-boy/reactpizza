import React from 'react';
import classNames from 'classnames';

function Button(props) {
  return (
    <button
      className={classNames('button button--cart', {
        'button--outline': props.outline,
      })}>
      <span>{props.text}</span>
      <div className="button__delimiter"></div>
      {props.img}
      <span>{props.count}</span>
    </button>
  );
}

export default Button;
