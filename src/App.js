import React from 'react';
import AppActions from '../src/js/actions/app-actions';
import Catalog from '../src/js/components/app-catalog';
import Cart from './js/components/app-cart';

export default class App extends React.Component{
  render(){
    return(
      <div className="container">
        <Catalog />
        <Cart />
      </div>
    )
  }
}
