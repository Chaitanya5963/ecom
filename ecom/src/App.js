import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Demo from "./components/Demo";
import ProductView from "./components/ProductView";
import Login from "./components/Login";
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;