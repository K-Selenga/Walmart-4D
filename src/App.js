import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import Info from './components/info'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
       <Route path='/info' component={Info}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
