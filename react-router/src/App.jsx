
import { Navigate, Route, Routes } from 'react-router'

import About from './About';
import College from './College';
import CollegeDetail from './CollegeDetail';
import Department from './Department';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';
import Student from './Student';
import Users from './Users';
import UserDetails from './UserDetails';

function App() {

  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path='in'>
            <Route path='/in/user'>
              <Route path="/in/user/about" element={<About />} />
              <Route path="/in/user/login" element={<Login />} />
            </Route>
          </Route>

          <Route path="/users" element={<Users />} />
          {/* Dynamic routing */}
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>

        <Route path="/college" element={<College />} >
          <Route index element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='collegeDetail' element={<CollegeDetail />} />
        </Route>

        {/* This is load PageNOt Found Component (our own component) */}
        <Route path="/*" element={<PageNotFound />} />

        {/* This is Navigate to login page (Navigate is inside react-router)*/}
        {/* <Route path="/*" element={<Navigate to='/login' />} /> */}

      </Routes>
    </>
  )
}

export default App;
