import './App.css';
import Header from './pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Footer from './pages/Shared/Footer/Footer';
import CheckOut from './pages/CheckOut/CheckOut';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Services from './pages/Home/Services/Services';
import Apply from './pages/Apply/Apply';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/service' element={<Services></Services>} ></Route>
        <Route path='/apply' element={<Apply></Apply>} ></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
