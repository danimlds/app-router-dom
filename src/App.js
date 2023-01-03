import './App.css';

// config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product.js'
import Info from './pages/Info';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <h1>REACT ROUTER</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='products/:id' element={<Product />}/>
          <Route path='products/:id/info' element={<Info />}/>
          <Route path='*' element={<NotFound />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
