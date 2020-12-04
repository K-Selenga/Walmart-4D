// import 'MealsHome.scss';
import '../GroceryHome/GroceryHome.scss';
import fruit from '../../assets/fruit.png';
import dairy from '../../assets/dairy.png';
import meat from '../../assets/meat.png';
import iconright from '../../assets/iconright.png';
import bread from '../../assets/bread.png';
import cake from '../../assets/cake.png';
import drink from '../../assets/drink.png';
import { Link } from 'react-router-dom';

function GroceryHome() {
  return(
    <section className="home">
      <div className="home__order-btn">
        <p className="home__order-text">Order fresh groceries online</p>
        <p className="home__book">Book a slot</p>
        <img className="home__icon-right" src={iconright}/>
      </div>
      <div className="home__hero2">
        <Link to="/meals-home"> <p className="home__hero-title">Shop Meals</p></Link> 
      </div>
      <div className="home__meals-cont">
        <h1 className="home__title">Shop Grocery Aisle</h1>
        <div className="home__popular">          
          <div className="home__item">
            <img className="home__img" src={fruit} />
            <p className="home__name">Fruits &<br></br>vegetables</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={dairy} />
            <p className="home__name">Dairy & eggs</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={meat} />
            <p className="home__name">Meat &<br></br>seafood</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={bread} />
            <p className="home__name">Bakery</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={cake} />
            <p className="home__name">Desserts</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={drink} />
            <p className="home__name">Beverages</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroceryHome;