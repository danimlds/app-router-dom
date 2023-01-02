import './App.css';

// config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>REACT ROUTER</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
