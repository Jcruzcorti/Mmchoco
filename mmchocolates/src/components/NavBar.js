import  "./navbar.css";

function NavBar() {
    
    return(

        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Inicio</a></li>
              <li class="nav-item"><a class="nav-link active" href="#">Productos</a></li>
              <li class="nav-item"><a class="nav-link active" href="#">Nosotros</a></li>
              <li class="nav-item"><a class="nav-link active" href="#">Contacto</a></li>
              <li class="nav-item"><a class="nav-link active" href="#">Carrito</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );


}

export default NavBar;

