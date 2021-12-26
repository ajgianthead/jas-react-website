
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <div className="App">
          <Route path = '/' exact component={Home} />
          <Route path = '/projects' exact component={Projects} />
          <Route path = '/aboutus' exact component={AboutUs} />
          <Route path = '/contactus' exact component={ContactUs} />
        </div>
      </Switch>
      
    </Router>
    
  );
}

export default App;
