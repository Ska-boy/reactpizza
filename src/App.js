import React from 'react';
import './scss/app.scss';
import { connect } from 'react-redux';
import Header from './components/Header';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Cart from './pages/Cart';
import axios from 'axios';
import setPizzas from './redux/actions/pizzas';

function App(state) {
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((resp) => {
      state.setPizzas(resp.data.pizzas);
    });
  }, []);
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact>
            <Home items={state.items} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
