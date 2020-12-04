import React, {Component} from 'react';
import cartImg from '../assets/cart.svg';
import pinImg from '../assets/pin.svg';
import arrowImg from '../assets/Vector.svg';
import walmartImg from '../assets/Walmart.png';
import search from '../assets/REc.png';
export default class NavBar extends Component {
    state={
        name:["Meals","Grocery" ],
        
    }
    render() { 

    
        return ( 
            <div className="navbar">
                <div className="first">
                    <h1>{this.state.name[0]}</h1>
                    <img className="logo" src={walmartImg} alt=""/>
                    <img className="square30" src={cartImg} alt=""  />
                    
                </div>
                {/* <div className="third"> */}
                    <img className="searchImg" src={search} alt="" />
                    <div><input className="searchInput"type="text" placeholder="What are you looking for?" /></div>
                    
            

                <div className="second">
                    <img className="squarepin" src={pinImg} alt=""  />
                    <p className="pickup">Pickup at Victoria Supercentre</p>
                    <img  className="squarearrow" src={arrowImg} alt="" ></img>
                </div>

           </div>

         );
    }
}
 
