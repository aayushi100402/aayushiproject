import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import PrimarySearchAppBar from './Components/Search';
import Mycart from './Pages/Mycart';
import Links from './Components/Footerlinks';
import Wedoffer from './Pages/Wedoffer';






function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <PrimarySearchAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Wedoffer'}  > <Wedoffer/> </Route>
            <Route path={process.env.PUBLIC_URL + '/mycart'}  > <Mycart/> </Route>
                        
          </Switch>

      <footer className="App-footer">
        <Links/>
       </footer>
    </div>
  );
  }

export default App;
