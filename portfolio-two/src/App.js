import { BrowserRouter, Route } from "react-router-dom";
<<<<<<< HEAD
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
=======
 import Navbar from './components/Navbar';
 import Home from './pages/Home';
 import Contact from './pages/Contact';
 import Projects from './pages/Projects'
>>>>>>> e7c4534d41f1e285c963498c871132cad773cff7
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
