import './App.css';
import Home from './Pages/home'
import Navbar from './Components/Navbar'
import About from './Pages/about'
import Contact from './Pages/contact'
import { Route, Routes} from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
