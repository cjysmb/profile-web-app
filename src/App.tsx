import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  )
}

export default App
