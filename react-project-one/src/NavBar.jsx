
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/add">Add User</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/list">Display User</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default NavBar;