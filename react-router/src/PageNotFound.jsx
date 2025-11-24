import { Link } from "react-router";

function PageNotFound() {
  return (
    <div style={{textAlign:'center'}}>
      <h2>Page Not Found</h2>
      <div>
        <Link to='/'>Goto Home Page</Link>
      </div>
      <img style={{width:'60%'}}
          src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"></img>
    </div>
  )
}

export default PageNotFound;