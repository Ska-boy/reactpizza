import React from 'react';
import './scss/app.scss';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
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

export default App;
