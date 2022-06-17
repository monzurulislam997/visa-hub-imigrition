import './App.css';
import Header from './pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Footer from './pages/Shared/Footer/Footer';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
