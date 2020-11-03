import React from 'react';
import AppStore from '../../stores/app-stores';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/app-cart-button';
import {Link} from 'react-router-dom';

function getCatalogItem(props){
  let item = AppStore.getCatalog().find(({id}) => id === props.match.params.item);
  return item;
}

const CatalogDetail = (props) => {
  console.log('catalogDetail item', props.title);
  return(
    <div>
      <h4>{props.title}</h4>
      <img src="http://placehold.it/250x250"/>
      <p>{props.description}</p>
      <p>${props.cost}
        <span className="text-success">{props.qty && `(${props.qty} in cart)`}</span>
      </p>
      <div className="btn-group">
      <Link to="/" className="btn btn-default btn-sm">Continue Shopping</Link>
      <CartButton 
        handler={
          AppActions.addItem.bind(null, props)
        }
        txt="Add To Cart"
      />
      </div>
    </div>
  )
}

export default StoreWatchMixin(CatalogDetail, getCatalogItem)