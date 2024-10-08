import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import NewCollections from './Components/NewCollections/NewCollections';
import Alert from './Components/Alert/Alert';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Alert message="Kindly Sign Up for accessing the products" />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Men' element={<ShopCategory banner = {men_banner} category="men"/>}/>
        <Route path='/Women' element={<ShopCategory banner = {women_banner} category="women"/>}/>
        <Route path='/Kids' element={<ShopCategory banner = {kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/new-collections' element={<NewCollections />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
