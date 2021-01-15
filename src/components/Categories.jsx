import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Categories = ({ items, onClick }) => {
  const [state, setState] = useState(null);

  const setActiveItem = (index) => {
    setState(index);
    onClick(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={state === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
          Все
        </li>
        {items &&
          items.map((a, key) => (
            <li
              className={state === key ? 'active' : ''}
              onClick={() => setActiveItem(key)}
              key={key}>
              {a}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
