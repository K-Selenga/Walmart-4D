
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MealsHome from './components/MealsHome/MealsHome';
import GroceryHome from './components/GroceryHome/GroceryHome';
import './App.css';
import "./App.css";
import NavBar from "./components/navbar";
import Info from './components/info'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={GroceryHome} />
          <Route path="/meals-home" component={MealsHome} />
          <Route path='/info' component={Info}/>
        </Switch>
      </BrowserRouter>
      <NavBar />
    </div>
  );
}

export default App;
