import { Link, useParams } from "react-router";

function UserDetails() {

  const paramsData = useParams();

  return(
    <div style={{marginLeft: '20px'}}>
      <h3>User Details Page</h3>
      <h4>User id is : {paramsData.id}</h4>
      <h4><Link to='/users'>Back</Link></h4>
    </div>
  )
}

export default UserDetails;