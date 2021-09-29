import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Rastruant from './components/Rastruant/Rastruant';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import NaBar from './components/NavBar/NaBar';
import MealDetail from './components/MealDetails/MealDetail';
function App() {
  return (
    <div>
      <BrowserRouter>
                     <NaBar/>
                   <Switch>
                             <Route exact path="/">
                                       <Home></Home>
                             </Route>
                             <Route exact path="/home">
                                       <Home></Home>
                             </Route>
                             <Route exact path="/about">
                                       <About></About>
                             </Route>
                             <Route exact path="/rastruant">
                                       <Rastruant></Rastruant>
                             </Route>
                             <Route exact path="/rastruant/:idmeal">
                                       <MealDetail></MealDetail>
                             </Route>
                             <Route exact path="/contact">
                                       <Contact></Contact>
                             </Route>
                             <Route  path="*">
                                       <NotFound></NotFound>
                             </Route>
                   </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
