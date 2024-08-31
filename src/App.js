
import './App.css';
import HomePageFirst from './Components/views/HomePageFirst';
import HomePageSecond from './Components/views/HomePageSecond';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePageFirst/>} />
    <Route path='/home-page-second' element={<HomePageSecond/>} />
  </Routes>
 </BrowserRouter>
  );
}

export default App;
