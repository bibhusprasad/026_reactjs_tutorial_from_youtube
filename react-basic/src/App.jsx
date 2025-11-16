
//default import 
import ImportExport from "./ImportExport";

//multiple named imports
import { Login, Profile, UserKey } from "./ImportExport";

function App() {

  return (
    <>
      <div>
        <ImportExport />
        <Login />
        <Profile />
        {UserKey}
      </div>
    </>
  )
}

export default App
