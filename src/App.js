import React from 'react';
import './scss/app.scss';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Cart from './pages/Cart';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = {
  setPizzas,
};

export default App;
