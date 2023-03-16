import './App.css';
import Header from './Components/Header/Header';
import Home from "./Components/Content/Home/Home"
import About from "./Components/Content/About/About";
import Contacts from "./Components/Content/Contacts/Contacts"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/Home" render={ <Home /> } />
            <Route path="/About" render={<About />} />
            <Route exact path="/Contacts" render={<Contacts/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
