import main from '../assets/fi-keto-meal-prep 1.png'
import upload from '../assets/upload.svg'
import './info.scss'
function Info (){
    return(
        <div className="info__container">
        <div className="info">
            <div className="header">
            <h2 className="header__title">Quick and Easy Spaghetti</h2>
            <p className="header__text">Sold in Singles</p>
            <p className="header__text">Sold {'&'} Shipped by <strong>Walmart</strong></p>
            <div className="rating">
                <p className="stars">⋆⋆⋆⋆⋆</p>
                <p className="rating__text">45 Reviews</p>
            </div>
            </div>

            <div className="mainImg">
                <img className="img" src="https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg" alt='some value'/>
            </div>
            <div className="price-container">
                <div className="price">
                    <h2 className="main__price">$9</h2>
                    <u className="price__text">or less</u>
                </div>
                <div className="upload">
                    <img className="upload__img" src={upload} alt='some value'/>
                </div>
            </div>
                <p className="numberMeals">per meal</p>
                <p className="quantity">Quantity</p>
                <div className="quantityBox">
                    <p>1</p>
                </div>
                <div className="blocks">
                    <div className="white">❤</div>
                    <div className="blue"></div>
                    <div className="green"></div>
                </div>
                <div className="return">
                    <div className="policy">
                        <div className="circle"></div>
                        <p>Return Policy</p>
                    </div>
                        <p className="arrow"> {'>'}</p>
                </div>
                <h2 className="description">Description and Features</h2>
                <p className="sub-description"> Meal Plan description</p>
                <div className="arrow">
                    {
                        '>'
                    }
                </div>
                <div className="moreBoxes">
                    <div className="cookingTime">
                        <p className="mainTime">20 MIN</p>
                        <p className="timeDescriptor">Total Cooking Time</p>
                    </div>
                    <div className="mainIngredients">
                        <p className="number">9</p>
                        <p className="ingredients">Ingredients</p>
                    </div>
                    <div className="cost">
                        <p className="costNumber">$5.43</p>
                        <p className="costText">Cost per Serving</p>
                    </div>
                </div>
                <div className="ingredient__header">
                    <h2 className="ingredient__title">Ingredients</h2>
                    <button className="ingredient__add">Add All</button>
                </div>
                <div className="ingredient__container">
                    <img className="ingredientImg" src="https://i5.walmartimages.ca/images/Enlarge/889/160/6000201889160.jpg" alt='some value'/>
                    <div className="actions">
                        <p className="action__title">Quantity</p>
                        <div className="quantity">1</div>
                        <div className="empty">❤</div>
                        <button className="submit">Add to Cart</button>
                    </div>
                </div>
                <div className="ingredient__container">
                    <img className="ingredientImg" src="https://i5.walmartimages.ca/images/Enlarge/094/538/6000200094538.jpg" alt='some value'/>
                    <div className="actions">
                        <p className="action__title">Quantity</p>
                        <div className="quantity">1</div>
                        <div className="empty">❤</div>
                        <button className="submit">Add to Cart</button>
                    </div>
                </div>
                <div className="ingredient__container">
                    <img className="ingredientImg" src="https://i5.walmartimages.ca/images/Large/_96/745/96745.jpg" alt='some value'/>
                    <div className="actions">
                        <p className="action__title">Quantity</p>
                        <div className="quantity">1</div>
                        <div className="empty">❤</div>
                        <button className="submit">Add to Cart</button>
                    </div>
                </div>
                <div className="ingredient__container">
                    <img className="ingredientImg"src="https://i5.walmartimages.ca/images/Enlarge/881/335/999999-605388881335.jpg" alt='some value'/>
                    <div className="actions">
                        <p className="action__title">Quantity</p>
                        <div className="quantity">1</div>
                        <div className="empty">❤</div>
                        <button className="submit">Add to Cart</button>
                    </div>
                </div>
                <h2 className="review__title">Ratings and Reviews</h2>
                <div className="review__container">
                    <div className="review__content">
                    <p className="stars">⋆⋆⋆⋆⋆</p>
                    <p className="review__text">45 Reviews</p>
                    </div>
                    <p className="review__arrow">{">"} </p>
                </div>
                <div className="image__container">
                    <img className="image__content"src="https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg" alt='some value'/>
                    <img className="image__content"src="https://valentinascorner.com/wp-content/uploads/2019/08/Taco-Bowl-Recipe-1.jpg" alt='some value'/>
                    <img className="image__content" src="https://cafedelites.com/wp-content/uploads/2018/07/Chicken-Avocado-Burrito-Bowl-IMAGE-1.jpg" alt='some value'/>
                </div>
        </div>
        </div>
    )
}
export default Info
