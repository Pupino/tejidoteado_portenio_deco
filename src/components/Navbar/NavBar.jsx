import CartWidget from '../CartWidget/CartWidget';
import{ Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <Link to='/' className="navbar-brand">Tejidoteado Porteño DECO</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">Crochet</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">2 Agujas</a></li>
                                <li><a class="dropdown-item" href="#!">Bordados</a></li>
                            </ul>
                        </li>
                    </ul>
                    <CartWidget label='Carrito' quantity='3'/>
                </div>
            </div>
        </nav>
    );
  }

  export default NavBar;
