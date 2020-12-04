import React, { Component } from 'react';

export default class ItemDetails extends Component {
    state ={
        name:"macbook air",
        quantity: 0,
        description:'',
        imgUrl: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ', 
        stock: 0,
        price:500,
        subtotal: 0,
    };

    renderName(){
        if(this.state.name.lenght === 0) return 'Cart is empty';
        return this.state.name
        // return <ul>{this.state.name.map(name => <li key={name}>{name}</li>)}</ul>;
    }
    handleIncrement = () =>{
        this.setState({quantity: this.state.quantity +1})
        console.log('Increment Clicked', this);
    }
    handlePayment = () =>{
        alert("Thank you for shopping at Walmart!")
    }
    render() { 
        
        
        return ( 
        <React.Fragment>
            <h1 className="item__name">{this.renderName()}</h1>
            {/* <img src={this.state.imgUrl[0]} alt="" /> */}
            <p className="item__stock">{this.formatCount()}</p>
            
            <button>delete</button>
            <div className="item__quantity">
                <p>{this.state.quantity}</p>
                <button onClick={this.handleIncrement}>+</button>
            </div>
            <p className="item__price">{this.state.price}</p>
            <button onClick={this.handlePayment}>Proceed to Checkout</button>

        </React.Fragment>
        );
    }

 formatCount(){
     return this.state.stock === 0 ? 'Out of Stock' : "" ;

 }
}
