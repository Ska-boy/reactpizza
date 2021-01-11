import React, { useState } from 'react';

const Categories = ({ items, onClick }) => {
  const [state, setstate] = useState(null);

  return (
    <div className="categories">
      <ul>
        <li className={state === null ? 'active' : ''} onClick={() => setstate(null)}>
          Все
        </li>
        {items.map((a, key) => (
          <li className={state === key ? 'active' : ''} onClick={() => setstate(key)} key={key}>
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
