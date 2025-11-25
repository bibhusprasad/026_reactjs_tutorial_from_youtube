
import { NavLink, Outlet } from 'react-router';
import './navbar.css';

function NavBar() {
  return (
    <div>
      <div className='header'>
        <div>
          <NavLink className='link' to='/'>Logo</NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink className='link' to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/in/user/login'>Login</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/in/user/about'>About</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/college'>College</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/users'>Users</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/users/list'>List</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default NavBar;