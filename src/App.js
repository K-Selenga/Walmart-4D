import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MealsHome from './components/MealsHome/MealsHome';
import GroceryHome from './components/GroceryHome/GroceryHome';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={GroceryHome} />
          <Route path="/meals-home" component={MealsHome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
