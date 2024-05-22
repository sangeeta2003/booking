import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './pages/Layout';
import Register from './pages/Register';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        
        </Route>
      
        

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
