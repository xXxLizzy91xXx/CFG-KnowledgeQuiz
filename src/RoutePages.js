import { Route, Routes} from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/about'
import Contact from './Pages/contact'

export default function RoutePages(){
    return(
        <div className="container">
            <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    )
}