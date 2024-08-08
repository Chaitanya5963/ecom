import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Demo from './components/Demo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
