import './App.css';
import Navbar from './Navbar'
import About from './Pages/about'
import Home from './Pages/home'
import Contact from './Pages/contact'
import { Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
