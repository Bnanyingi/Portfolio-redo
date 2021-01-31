import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";
 import Navbar from './components/Navbar';
 import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Router>
       <Route exact path="/" component={Home}

     
     
    

     </Router>
    </div>
  );
}

export default App;
