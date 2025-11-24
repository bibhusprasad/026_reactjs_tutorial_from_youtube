
import { Link } from 'react-router';
import './navbar.css';

function NavBar() {
  return (
    <div className='header'>
      <div>
        <Link className='link' to='/'>Logo</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link className='link' to='/'>Home</Link>
          </li>
          <li>
            <Link className='link' to='/login'>Login</Link>
          </li>
          <li>
            <Link className='link' to='/about'>About</Link>
          </li>
          <li>
            <Link className='link' to='/college'>College</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;