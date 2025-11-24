
import { Navigate, Route, Routes } from 'react-router'

import About from './About';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
        {/* This is load PageNOt Found Component (our own component)
        <Route path="/*" element={<PageNotFound />} />
        */}
        
        {/* This is Navigate to login page (Navigate is inside react-router)*/}
        <Route path="/*" element={<Navigate to='/login'/>} />

      </Routes>
    </>
  )
}

export default App;
