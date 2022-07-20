import './App.css';
import LogoImg  from '../src/imgsrc/mmlogo.png';
import LogoImgWhatsapp from '../src/imgsrc/whatsapp.svg';
import LogoImgInstagram from '../src/imgsrc/instagram.svg';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Cart from './pages/cart/Cart';
import CartProvider from './context/CartContext';



function App() {

  return (
    
    <div className="App" id="grilla">
      
      <CartProvider>
          <BrowserRouter>
            <header className="App-header">
      
              <NavLink to="/">  <img src={LogoImg} className="App-logo" alt="logo" />   </NavLink>             
              <NavBar/>   
              
            </header>

            <section className="App-section">
            <Routes>

              <Route  path='/' element={<ItemListContainer  greeting="MM Chocolates" fontFamily="sans-serif"  color="#000000"  />}/>
              <Route  path='/category/:categoryId' element={<ItemListContainer  greeting="Categorías del Producto" fontFamily="sans-serif"  color="#000000"  />}/>
              <Route  path='/Producto/:itemId' element={<ItemDetailContainer greeting="Detalle del Producto" fontFamily="sans-serif" color="#000000" />}/>
              <Route  path='/:Cart' element={<Cart/>}/>
              
            </Routes>    
            </section>

            
            <footer className="App-footer">     
              <div className="divfooter0">
                <img src={LogoImg} alt="logo-chocolates-derechos-reservados" className="footer__img"/>
                <p className="footer__p">      
                    @Copyright-mm chocholates.2020/Todos los derechos reservados.            
                </p> 
              </div> 

              <div className="divfooter">  
                    <img  src={LogoImgWhatsapp} className="divfooter__img2" alt="mmchocolates-whatsapp" />
                  <a href="https://www.instagram.com/mm.chocolates/?hl=es-la">
                    <img src={LogoImgInstagram} className="divfooter__img2"  alt="mmchocolates-instagram"/>
                  </a>   
              </div> 
            </footer>
          </BrowserRouter> 
        </CartProvider>
    </div>


  );
}

export default App;
