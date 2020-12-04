import React, { Component } from 'react';
import ItemDetails from './itemDetails';
class CheckoutCart extends Component {
    state ={
        items:[
            
        ]
    }
    render() {
        return(
            <div>
                <ItemDetails />
                
            </div>
        );
    }
}
export default CheckoutCart;