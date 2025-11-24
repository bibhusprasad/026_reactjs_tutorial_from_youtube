import { NavLink, Outlet } from "react-router";

function College() {
  return(
    <div style={{textAlign: 'center'}} className='college'>
      <h2>College Details</h2>
      <NavLink className='link' to='student'>Student</NavLink>
      <NavLink className='link' to='department'>Departments</NavLink>
      <NavLink className='link' to='collegeDetail'>College Details</NavLink>
      <Outlet />
    </div>
  )
}

export default College;