import './App.css';
import Header from './pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
