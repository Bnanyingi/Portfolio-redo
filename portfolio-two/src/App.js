import { BrowserRouter, Route } from "react-router-dom";
 import Navbar from './components/Navbar';
 import Home from './pages/Home';
 import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <BrowserRouter>
       <Route exact path="/" component={Home} />
       <Route path="/Contact" component={Contact} />
       

      </BrowserRouter>
    </div>
  );
}

export default App;
