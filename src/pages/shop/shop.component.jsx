import React from 'react';

import SHOP_DATA from "./shop.data";

import CollectionPreview from '../../components/collection-preview/collection-preview-component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: SHOP_DATA
        };
    }

    render() {
        const {collection} = this.state;
        return (<div className='shop-page'>
               {
                   collection.map(({ id, ...otherCollectioProps }) => (
                       <CollectionPreview key={id} {...otherCollectioProps} />
                   ))
               } 
            </div>);
    }
}

export default ShopPage;