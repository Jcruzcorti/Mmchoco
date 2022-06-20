import './App.css';
import LogoImg  from './imgs/mmlogo.png';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    
    <div className="App">

      <header className="App-header">
        <img src={LogoImg} className="App-logo" alt="logo" />             
        <NavBar/>       
      </header>

      <section>
        <article>
            <div>
            {/* <ItemListContainer  greeting="MM Chocolates" fontFamily="sans-serif" fontSize="70px" color="#000000"  /> */}
           
            <ItemDetailContainer greeting="Detalle del Producto"/>
            <ItemCount stock={5} initial={1}/>
            </div>
        </article>
      </section>

    </div>


  );
}

export default App;
