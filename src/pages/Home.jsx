import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PizzaBlock from '../components/PizzaBlock/index';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';
import { setCategory, setSortBy } from '../redux/actions/filters';
import Categories from './../components/Categories';
import SortPopup from './../components/SortPopup';
import { setCart, setSum } from './../redux/actions/cart';
import { fetchPizzas } from './../redux/actions/pizzas';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const cart = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectItem = (index) => {
    dispatch(setCategory(index));
  };
  const onSelectType = (index) => {
    dispatch(setSortBy(index));
  };
  const onAddCart = (item) => {
    dispatch(setCart(item));
  };

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  let LoadingPizzas = Array(10)
    .fill(0)
    .map((item, index) => <LoadingBlock key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectItem}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          activeSortType={sortBy}
          onClickSort={onSelectType}
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'name' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoaded
          ? LoadingPizzas
          : items.map((obj) => (
              <PizzaBlock key={obj.id} item={obj} cart={cart} onAddCart={onAddCart} {...obj} />
            ))}
      </div>
    </div>
  );
};

export default Home;
