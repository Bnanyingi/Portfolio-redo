import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <BrowserRouter>
       <Route exact path="/" component={Home} />
       <Route path="/Contact" component={Contact} />
       <Route path="/Projects" component={Projects} />

       

      </BrowserRouter>
    </div>
  );
}

export default App;
