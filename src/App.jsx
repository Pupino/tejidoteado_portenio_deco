import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';
import Nosotros from './components/Nosotros/Nosotros';
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart/Cart';
//import { testDataBase } from './services/FirebaseConfig';

function App() {
  //testDataBase();
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/item/:id' element={<ItemDetailContainer/> }/>
            <Route path='/nosotros' element={<Nosotros/> }/>
            <Route path="/category/:categoryid" element={<ItemListContainer/>} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer webSite={'Tejidoteado Porteño DECO'} year={2022}/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;