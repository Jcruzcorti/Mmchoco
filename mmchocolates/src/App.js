import './App.css';
import  logoimg  from './img/mmlogo.png';
import NavBar from './components/NavBar';



function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logoimg} className="App-logo" alt="logo" />
        <h1 className="App-header__h1">
          MM Chocolates
        </h1>

        <NavBar/>

      </header>
    </div>
 
  );
}

export default App;
