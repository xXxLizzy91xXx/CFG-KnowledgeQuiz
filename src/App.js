import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import RoutePages from './RoutePages';

function App() {
  
  return (
    <div className="App">
      
      <Navbar />
      <RoutePages />
      <Footer />
    </div>
  );
}

export default App;
