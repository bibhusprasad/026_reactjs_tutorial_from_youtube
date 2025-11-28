import { use } from "react";
import { Suspense } from "react";

const fetchData = () => fetch('https://dummyjson.com/users').then(res => res.json());
const userResource = fetchData();

function CallRestApi() {
  return (
    <div>
      <h2>Call Rest Api with use API</h2>
      <Suspense fallback={<p>Loading ... ...</p>}>
        <Users userResource={userResource} />
      </Suspense>
    </div>
  )
}

export default CallRestApi;

const Users = ({ userResource }) => {
  const userData = use(userResource);
  console.log(userData.users)

  return (
    <div>
      <h2>Users Name List</h2>
      {
        userData?.users?.map((user, index) => (
          <h3 key={index}>{user.firstName}</h3>
        ))
      }
    </div>
  )
}