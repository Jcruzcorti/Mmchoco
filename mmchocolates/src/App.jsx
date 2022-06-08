import './App.css';
import LogoImg  from './img/mmlogo.png';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    
    <div className="App">

      <header className="App-header">

        <img src={LogoImg} className="App-logo" alt="logo" />      
        <ItemListContainer  fontFamily="sans-serif" fontSize="70px" />
        <NavBar/>
        
      </header>

    </div>


  );
}

export default App;
