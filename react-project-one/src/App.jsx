
import { Route, Routes } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css';

import UserData from './UserData'
import AddUser from './AddUser'
import NavBar from './NavBar'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<h2>Make Routes and Pages for Add User and Display User UI</h2>} />
          <Route path="/list"  element={<UserData />}/>
          <Route path="/add"  element={<AddUser />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
