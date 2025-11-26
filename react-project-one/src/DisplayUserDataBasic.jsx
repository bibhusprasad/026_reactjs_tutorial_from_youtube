
import './App.css'

function DisplayUserDataBasic({ details }) {
  return (
    <div>
      <table className="table-auto border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
        <caption className="caption-top">
          User Details
        </caption>
        <thead>
          <tr>
            <th className="border border-gray-300 dark:border-gray-600">Id</th>
            <th className="border border-gray-300 dark:border-gray-600">First Name</th>
            <th className="border border-gray-300 dark:border-gray-600">Last Name</th>
            <th className="border border-gray-300 dark:border-gray-600">Age</th>
          </tr>
        </thead>
        <tbody>

          {
            details && details.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 dark:border-gray-700">{user.id}</td>
                <td className="border border-gray-300 dark:border-gray-700">{user.firstName}</td>
                <td className="border border-gray-300 dark:border-gray-700">{user.lastName}</td>
                <td className="border border-gray-300 dark:border-gray-700">{user.age}</td>
              </tr>
            ))
          }

        </tbody>
      </table>

    </div>
  )
}

export default DisplayUserDataBasic;