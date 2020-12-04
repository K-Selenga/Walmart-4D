import './MealsHome.scss';
import spag from '../../assets/spa.png';
import hero from '../../assets/hero.png';
import lasagne from '../../assets/lasagne.png';
import tacos from '../../assets/tacos.png';
import pizza from '../../assets/pizza.png';
import pasta from '../../assets/pasta.png';
import soup from '../../assets/soup.png';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <section className="home">
      <div className="home__cont"> 
        <img className="home__hero" src={hero} />
        <h1 className="home__make-title">Make Your Own <br></br>Meals</h1>
        <p className="home__save">Save Money. Eat Better.</p>
      </div>
      <div className="home__meals-cont">
        <h1 className="home__title">Popular</h1>
        <div className="home__popular">          
          <div className="home__item">
          <Link to="/info"><img className="home__img" src={spag} /></Link>
            <p className="home__name">Spaghetti</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={lasagne} />
            <p className="home__name">Lasagne</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={tacos} />
            <p className="home__name">Tacos</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={pizza} />
            <p className="home__name">Pizza</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={pasta} />
            <p className="home__name">Pasta</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={soup} />
            <p className="home__name">Tortellini Soup</p>
          </div>
        </div>
        <h1 className="home__title">Quick Italian Meals</h1>
        <div className="home__popular">
          <div className="home__item">
            <img className="home__img" src={spag} />
            <p className="home__name">Spaghetti</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={lasagne} />
            <p className="home__name">Lasange</p>
          </div>
          <div className="home__item">
            <img className="home__img" src={pizza} />
            <p className="home__name">Pizza</p>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Home;