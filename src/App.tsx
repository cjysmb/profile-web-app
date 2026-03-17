import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Home } from './views/Home';

// Lazy load route components for code splitting
const About = lazy(() => import('./views/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./views/Contact').then(module => ({ default: module.Contact })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B7D7E]"></div>
  </div>
);

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Suspense fallback={<LoadingFallback />}><About /></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={<LoadingFallback />}><Contact /></Suspense>} />
    </Routes>
  )
}

export default App
