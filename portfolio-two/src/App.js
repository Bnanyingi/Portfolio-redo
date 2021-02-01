import { BrowserRouter, Route } from "react-router-dom";
 import Navbar from './components/Navbar';
 import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <BrowserRouter>
       <Route exact path="/" component={Home} />

      </BrowserRouter>
    </div>
  );
}

export default App;
