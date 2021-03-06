import React from 'react';
import AppStore from '../../stores/app-stores';
import CatalogItem from './app-catalogitem';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

function getCatalog(){
  return {items: AppStore.getCatalog()}
}

const Catalog = (props) => {
  // constructor(){
  //   super();
  //   this.state = getCatalog()
  // }

  // render(){
    let items = props.items.map(item => {
      return <CatalogItem key={item.id} item={item} />
    })
    return(
      <div className="row">
        {items}
      </div>
    )
  // }
}

export default StoreWatchMixin(Catalog, getCatalog);