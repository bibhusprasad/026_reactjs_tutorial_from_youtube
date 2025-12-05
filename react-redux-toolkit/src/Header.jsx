import AddToCart from './AddToCart';
import './css/header.css';

function Header() {
  return (
    <div>
      <header>
        <div className="logo">MyStore</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
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