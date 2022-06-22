import './App.css';
import LogoImg  from './imgs/mmlogo.png';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {NavLink} from 'react-router-dom'



function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavLink to="/">  <img src={LogoImg} className="App-logo" alt="logo" />   </NavLink>             
          <NavBar/>       
        </header>

        <Routes>
            {/* <section>
              <article>
                  <div> */}

                    <Route  path='/' element={<ItemListContainer  greeting="MM Chocolates" fontFamily="sans-serif" fontSize="70px" color="#000000"  />}/>
                    <Route  path='/category/:categoryId' element={<ItemListContainer  greeting="Categorías del Producto" fontFamily="sans-serif" fontSize="70px" color="#000000"  />}/>
                    <Route  path='/Producto/:itemId' element={<ItemDetailContainer greeting="Detalle del Producto"/>}/>
   
                    {/* <ItemCount stock={5} initial={1}/> */}
                  {/* </div>
              </article>
            </section> */}
        </Routes>    
      </BrowserRouter> 

    </div>


  );
}

export default App;
