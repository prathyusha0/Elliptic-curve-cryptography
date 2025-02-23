import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Switch,Route } from 'react-router-dom';
import history from './history123';
import './index.css';
import App from './components/App';

import ConductTransaction from './components/ConductTransaction';
import TransactionPool from './components/TransactionPool';
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={App}/>
      <Route path='/conduct-transaction' component={ConductTransaction} />
      <Route path='/transaction-pool' component={TransactionPool} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
