import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Categories = ({ activeCategory, items, onClickItem }) => {
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>
          Все
        </li>
        {items &&
          items.map((a, key) => (
            <li
              className={activeCategory === key ? 'active' : ''}
              onClick={() => onClickItem(key)}
              key={key}>
              {a}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
