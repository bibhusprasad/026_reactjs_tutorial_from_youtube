import AddToCart from './AddToCart';
import '../css/header.css';
import { Link } from 'react-router';

function Header() {
  return (
    <div>
      <header>
        <div className="logo">MyStore</div>
        <nav>
          <ul className="nav-links">
            {/* <li><a href="#">Products</a></li> */}
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <AddToCart />
      </header>
    </div>
  )
}

export default Header;