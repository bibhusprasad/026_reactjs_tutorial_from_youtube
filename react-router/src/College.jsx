import { Link, NavLink, Outlet } from "react-router";

function College() {
  return (
    <div style={{ textAlign: 'center' }} className='college'>
      <h2>College Details</h2>
      <h3><Link to='/'>Goto Home Page</Link></h3>
      <NavLink className='link' to=''>Student</NavLink>
      <NavLink className='link' to='department'>Departments</NavLink>
      <NavLink className='link' to='collegeDetail'>College Details</NavLink>
      <Outlet />
    </div>
  )
}

export default College;