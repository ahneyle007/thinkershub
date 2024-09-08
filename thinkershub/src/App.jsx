import About from './component/About';
import Services from './component/Services';
import Home from './component/Home';
import Lead from './component/Lead';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
      
      <div>
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Lead/>} >  
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/services" element={<Services/>} />
            </Route>
          </Routes>  
        </BrowserRouter>
      </div>
          
  )
}

export default App;
