import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function NavBar() {
    const { getTotalItems } = useContext(CartContext);
    //console.log('getTotalItems: ' + getTotalItems);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid px-4 px-lg-5">
                <Link to='/' className="navbar-brand">Tejidoteado Porteño DECO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</span>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/category/Crochet' className="dropdown-item">Crochet</Link>
                                <li><hr className="dropdown-divider" /></li>
                                <Link to='/category/Agujas' className="dropdown-item">Agujas</Link>
                                <Link to='/category/Bordado' className="dropdown-item">Bordados</Link>
                            </ul>
                        </li>
                        <li className="nav-item"><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
                    </ul>
                    {getTotalItems !== 0 &&
                        <Link to='/cart' className="nav-link"><CartWidget label='Carrito' quantity={getTotalItems}/></Link>
                    }
                </div>
            </div>
        </nav>
    );
  }

  export default NavBar;
