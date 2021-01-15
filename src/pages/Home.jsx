import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PizzaBlock from '../components/PizzaBlock';
import { setCategory } from '../redux/actions/filters';
import Categories from './../components/Categories';
import SortPopup from './../components/SortPopup';

const Home = () => {
  const dispatch = useDispatch(setCategory);
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectItem = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={onSelectItem}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'prise' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
